import React, { useState } from 'react'
import './editDelete.css'
import { Tooltip, IconButton } from '@mui/material'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
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

const EditDelete = ({ item, endpoint, fetchList }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const triggerDelete = async (id) => {
        console.log(id)
        try {

            const requestOptions = {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ _id: id }),
            };
            const res = await fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, requestOptions);
            if (res.status === 204) {
                handleClose()
                toast.success("Deleted Successfully ")
                fetchList()
                         
            }
            else {
                toast.error("Something Went Wrong")
             
            }


        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
           
            <div className="btn-wrapper">
                <div className="edit">
                    <Tooltip title="Edit">
                        <IconButton>
                            < AiOutlineEdit size={25} className="icon" />
                        </IconButton>
                    </Tooltip>
                </div>
                <div className="delete">
                    <Tooltip title="Delete">
                        <IconButton>
                            <AiOutlineDelete size={25} className="icon" onClick={handleOpen} />
                        </IconButton>
                    </Tooltip>

                </div>

                <Modal
                    open={open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className='modal-title'>
                            <h3>Delete</h3>
                            <AiOutlineClose size={25} onClick={handleClose} style={{ cursor: 'pointer' }} />
                        </div>
                        <div className="content">
                            <h1> Are you Sure You Want To Delete Menu: <span>{item.name}</span></h1>
                        </div>
                        <div className="modal-footer">
                            <button className='btnCancel' onClick={handleClose}>Cancel</button>
                            <button className='btnSubmit' onClick={() => triggerDelete(item._id)} >Submit</button>
                        </div>
                    </Box>
                </Modal>
            </div></>
    )
}

export default EditDelete