import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

const AddUser = () => {

  // const [usersRole, setUsersRole] = useState('')
  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Please Enter Menu Item Name'),
    username: Yup.string()
      .min(2, 'Too Short! ')
      .max(50, 'Too Long!')
      .required('Please Enter a username'),
    password: Yup.string()
      .min(2, 'Too Short! ')
      .max(50, 'Too Long!')
      .required('Please Enter a category'),
    address: Yup.string()
      .min(2, 'Too Short! ')
      .max(50, 'Too Long!')
      .required('Please Enter a category'),
    usersRole: Yup.string()
      .min(2, 'Too Short! ')
      .max(50, 'Too Long!')
      .required('Please Enter a category'),
    phone: Yup.number()
      .min(1, 'Too Short! ')
      .positive()
      .required('Please Enter phone of menu item'),

  });
  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      password: '',
      address: '',
      phone: '',
      usersRole: '',

    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {

      const userData = await axios.post(`${process.env.REACT_APP_API_URL}/register`, values)

      if (userData.status === 200) {
        toast.success(userData.data.msg)
        resetForm({ values: '' })

        navigate('/users')
      }
      else {
        toast.error("username Already Exist")
        resetForm({ values: '' })
      }
      console.log(values, "ssdsdfgsdf")
    },
  });

  // const handleUsersRole = (event) => {
  //   setUsersRole(event.target.value);
  //   console.log(event.target.value)
  // };
  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="contents">
            <div className="content-wrapper">
              <h3>Create a user</h3>
              <form onSubmit={formik.handleSubmit}>
                <div className='inputBox'>
                  <TextField
                    fullWidth
                    type='text'
                    name='name'
                    label="Full Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    variant="standard"
                  />
                </div>
                <div className='inputBox'>
                  <TextField
                    fullWidth
                    type='text'
                    name='username'
                    label="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.username && formik.errors.username}
                    variant="standard"
                  />
                </div>
                <div className='inputBox'>
                  <TextField
                    fullWidth
                    type='text'
                    name='password'
                    label="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    variant="standard"
                  />
                </div>
                <div className='inputBox'>
                  <TextField
                    fullWidth
                    type='text'
                    name='address'
                    label="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={formik.touched.address && Boolean(formik.errors.address)}
                    helperText={formik.touched.address && formik.errors.address}
                    variant="standard"
                  />
                </div>
                <div className="inputGroup">
                  <div className='inputBox'>
                    <TextField
                      fullWidth
                      type='number'
                      name='phone'
                      label="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      error={formik.touched.phone && Boolean(formik.errors.phone)}
                      helperText={formik.touched.phone && formik.errors.phone}
                      variant="standard"
                    />
                  </div>
                  {/* <div className="inputBox">
                    <FormControl variant="standard" >
                      <InputLabel id="usersRole">User Role</InputLabel>

                      <Select
                        fullWidth
                        type='text'
                        name='usersRole'
                        label="usersRole"
                        labelId="usersRole"
                        id="usersRole"

                        value={usersRole}
                        onChange={handleUsersRole}

                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}

                      >
                        <MenuItem value="">
                          <em>User Role</em>
                        </MenuItem>
                        <MenuItem value={"admin"}>Admin</MenuItem>
                        <MenuItem value={"counter"}>Counter</MenuItem>
                        <MenuItem value={"waiter"}>Waiter</MenuItem>
                      </Select>
                    </FormControl>
                  </div> */}
                  <div className='inputBox'>
                    <TextField
                      fullWidth
                      type='text'
                      name='usersRole'
                      label="usersRole"
                      value={formik.values.usersRole}
                      onChange={formik.handleChange}
                      error={formik.touched.usersRole && Boolean(formik.errors.usersRole)}
                      helperText={formik.touched.usersRole && formik.errors.usersRole}
                      variant="standard"
                    />
                  </div>

                </div>
                <div style={{ marginTop: '2rem' }}>
                  <button className='btnSubmit' type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddUser