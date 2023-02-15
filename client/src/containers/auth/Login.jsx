import React from 'react'
import './login.css'
import img from '../../media/image/login.png'
import { TextField} from '@mui/material';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addUserDetails } from "../../redux/reducers/usersSlice";
import * as Yup from 'yup';


const Login = () => {
const navigate= useNavigate()
    const dispatch = useDispatch();
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Please Enter Menu Item Name'),
        password: Yup.string()
            .min(2, 'Too Short! ')
            .max(50, 'Too Long!')
            .required('Please Enter a password'),

    });
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',

        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            };
            const res = await fetch(`${process.env.REACT_APP_API_URL}/login`, requestOptions);
            const data = await res.json();
            if (data.isLogin) {
                dispatch(addUserDetails(data.userData));
                navigate('/')
                toast.success(data.msg)
            } else {
                toast.error(data.error)
            }
            resetForm({ values: "" });



        },
    });
    return (
        <>

            <div className="login-box">
                <div className="img">
                    <img src={img} alt="Img" width={450} />
                </div>
                <div className="content">
                    <h3>Login to Restro POS</h3>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='inputBox'>
                            <TextField
                                fullWidth
                                type='text'
                                name='username'
                                label="Usrename"
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
                                type='password'
                                name='password'
                                label="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                                variant="standard"
                            />
                        </div>
                     
                        <div style={{ marginTop: '2rem', width:'100%' }}>
                            <button className='btnSubmit' type="submit" style={{ width: '100%' }}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Login