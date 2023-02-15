import React, { useEffect, useState } from 'react'

import './table.css'
import '../dashboard/dashboard.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import TableCard from '../../components/cards/TableCard'
import AddButton from '../../components/cards/AddButton'
import { Box, Modal } from '@mui/material';
import { AiOutlineClose } from 'react-icons/ai'
import { TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import axios from 'axios'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 1,
  px: 4,
};

const Tables = () => {
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [tableList, setTableList] = useState([])

  const fetchTableList = async () => {
    const tableData = await axios.get('http://localhost:3005/tables')
    setTableList(tableData.data.tablesData)
  }

  useEffect(() => {
    fetchTableList()
  }, [])
  const validationSchema = Yup.object().shape({
    tableName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Please Enter Table Name'),
    guestCapacity: Yup.number()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Please Enter a Guest capacity of Table'),

  });
  const formik = useFormik({
    initialValues: {
      tableName: '',
      guestCapacity: ''

    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const tableData = await axios.post(`${process.env.REACT_APP_API_URL}/table`, values)
   
      if (tableData.status === 200) {
        fetchTableList()
        toast.success(tableData.data.msg)
        handleClose()
        resetForm({ values: '' })
      }
      else {
        toast.error("Table Already Exist")
        resetForm({ values: '' })
      }


    },
  });

  return (
    <>
      <div className="dashboard">
        <ToastContainer />
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="content">
            {tableList.map((item, id) => {
              return <TableCard item={item} key={id} fetchTableList={fetchTableList} endpoint = "table"/>
            })}

            <AddButton handleOpen={handleOpen} />
          </div>
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className='modal-title'>
                <h3>Add Table </h3>
                <AiOutlineClose size={25} onClick={handleClose} style={{ cursor: 'pointer' }} />
              </div>

              <div className="form-box">
                <div>
                  <form onSubmit={formik.handleSubmit}>

                    <div className='inputBox'>
                      <TextField
                        fullWidth
                        type='text'
                        name='tableName'
                        label="Table Name"
                        value={formik.values.tableName}
                        onChange={formik.handleChange}
                        error={formik.touched.tabelName && Boolean(formik.errors.tableName)}
                        helperText={formik.touched.tableName && formik.errors.tableName}
                        variant="standard"
                      />
                    </div>
                    <div className='inputBox'>
                      <TextField
                        fullWidth
                        type='number'
                        name='guestCapacity'
                        label="Guest Capacity"
                        value={formik.values.guestCapacity}
                        onChange={formik.handleChange}
                        error={formik.touched.guestCapacity && Boolean(formik.errors.guestCapacity)}
                        helperText={formik.touched.guestCapacity && formik.errors.guestCapacity}
                        variant="standard"
                      />
                    </div>
                    <div style={{ marginTop: '2rem' }}>
                      <Button color="primary" variant="contained" fullWidth type="submit">
                        Submit
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </Box>
          </Modal>

        </div>
      </div>
    </>
  )
}

export default Tables