import React from 'react'
import './addMenuItem.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios'



const AddMenuItem = () => {
    const navigate = useNavigate()

    const validationSchema = Yup.object().shape({
        menuName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Please Enter Menu Item Name'),
        category: Yup.string()
            .min(2, 'Too Short! ')
            .max(50, 'Too Long!')
            .required('Please Enter a category'),
        price: Yup.number()
            .min(1, 'Too Short! ')
            .positive()
            .required('Please Enter price of menu item'),

    });
    const formik = useFormik({
        initialValues: {
            menuName: '',
            category: '',
            price: ''

        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            const menuData = await axios.post('http://localhost:3005/menu', values)

            if (menuData.status === 200) {
                toast.success(menuData.data.msg)
                resetForm({ values: '' })
                navigate('/menus')
            }
            else {
                toast.error("Table Already Exist")
                resetForm({ values: '' })
            }
            console.log(values)


        },
    });
    return (
        <>
          
            <div className="dashboard">
                <Sidebar />
                <div className="main-content">
                    <Navbar />
                    <div className="content-wrapper">
                        <h3>Add Menu Item</h3>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='inputBox'>
                                <TextField
                                    fullWidth
                                    type='text'
                                    name='menuName'
                                    label="Menu Item Name"
                                    value={formik.values.menuName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.menuName && Boolean(formik.errors.menuName)}
                                    helperText={formik.touched.menuName && formik.errors.menuName}
                                    variant="standard"
                                />
                            </div>
                            <div className='inputBox'>
                                <TextField
                                    fullWidth
                                    type='text'
                                    name='category'
                                    label="Category"
                                    value={formik.values.category}
                                    onChange={formik.handleChange}
                                    error={formik.touched.category && Boolean(formik.errors.category)}
                                    helperText={formik.touched.category && formik.errors.category}
                                    variant="standard"
                                />
                            </div>
                            <div className='inputBox'>
                                <TextField
                                    fullWidth
                                    type='number'
                                    name='price'
                                    label="Price"
                                    value={formik.values.price}
                                    onChange={formik.handleChange}
                                    error={formik.touched.price && Boolean(formik.errors.price)}
                                    helperText={formik.touched.price && formik.errors.price}
                                    variant="standard"
                                />
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
        </>

    )
}

export default AddMenuItem