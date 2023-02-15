import React, { useState } from 'react'
import './tableCard.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Tooltip, IconButton } from '@mui/material';
import { GiWoodenChair } from 'react-icons/gi'
import { AiOutlineDelete, AiOutlineEdit, AiOutlineClose } from 'react-icons/ai'
import { toast } from 'react-toastify';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const TableCard = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const triggerDelete = async (id) => {

      try {

        const requestOptions = {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ _id: id }),
        };
        const res = await fetch(`${process.env.REACT_APP_API_URL}/${props.endpoint}`, requestOptions);
        if (res.status === 204) {
          props.fetchTableList()
          handleClose()
        }
        else {
          toast.error("Something Went Wrong")
          console.log("worng", id, props.endpoint)
        }
    

      } catch (err) {
        console.log(err)
      }
    }


  return (
    <>
      <div className="table-card">
        <Card className='card-box'>
          <CardContent>
            <div className='card-head' >
              <Typography sx={{ fontSize: 13, fontWeight: 600 }} color="text.secondary" >
                Table Name
              </Typography>
              <Typography sx={{ fontSize: 13, fontWeight: 600 }} color="text.secondary" gutterBottom>
                Capacity:  {props.item.guestCapacity}
              </Typography></div>
            <div className="card-content">
              <div className="left">
                <Typography sx={{ fontSize: '2.2rem', textTransform: 'capitalize', textAlign: 'center', display: 'flex', gap: 1, justifyContent: 'center', alignItems: 'center' }} variant="h5" component="div">
                  <GiWoodenChair size={35} />
                  {props.item.tableName}
                </Typography>
              </div>
              <div className="right">
                <Tooltip title="Edit">
                  <IconButton>
                    < AiOutlineEdit size={25} className="icon" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton>
                    <AiOutlineDelete size={25} className="icon" onClick={handleOpen} />
                  </IconButton>
                </Tooltip>

              </div>
            </div>

          </CardContent>
        </Card>
        {/* delete modal section */}

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
            <div className="content">
              <h1> Are you Sure You Want To Delete Table: <span> {props.item.tableName}</span></h1>
            </div>
            <div className="modal-footer">
              <button className='btnCancel' onClick={handleClose}>Cancel</button>
              <button className='btnSubmit' onClick={() => triggerDelete(props.item._id)} >Submit</button>
            </div>
          </Box>
        </Modal>



      </div>
    </>
  )
}

export default TableCard;