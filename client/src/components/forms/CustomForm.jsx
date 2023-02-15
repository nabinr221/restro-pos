// import React, { useState } from 'react'
// import { TextField, Button } from '@mui/material';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import './customForm.css'


// const CustomForm = (props) => {
// //    const [initialData, setInitialData] = useState(props.initialData)

//     // const validationSchema = Yup.object({
//     //     initialData.
//     // });
//     const formik = useFormik({
//         initialValues: {
          
//         },
//         // validationSchema: validationSchema,
//         onSubmit: (values) => {
//             console.log(values)
//         },
//     });

//     return (
//         <div>
//             <form onSubmit={formik.handleSubmit}>

//                 {props.initialData.map((item) => {
//                     return (
//                         <div className='inputBox'>
//                             <TextField
//                                 fullWidth
//                                 type={item}
//                                 name={item}
//                                 label={item}
//                                 value={formik.values.item}
//                                 onChange={formik.handleChange}
//                                 error={formik.touched.item && Boolean(formik.errors.item)}
//                                 helperText={formik.touched.item && formik.errors.item}
//                                 variant="standard"
//                             />
//                         </div>
//                     )
//                 })}



//                 <div>

//                     <Button color="primary" variant="contained" fullWidth type="submit">
//                         Submit
//                     </Button>
//                 </div>

//             </form>
//         </div>
//     );
// };

// export default CustomForm
