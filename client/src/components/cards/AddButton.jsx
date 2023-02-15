import React from 'react'

import Card from '@mui/material/Card';
import { AiOutlinePlus } from 'react-icons/ai'
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
const AddButton = ({handleOpen}) => {
    return (
        <>
            <div className="add-button-card">
                <Card sx={{ minWidth: 275 }} onClick={handleOpen}>
                 <CardContent>

                        <Typography sx={{ padding: '1rem', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }} variant="h5" component="div">
                            <AiOutlinePlus size={30} />
                            Add
                        </Typography>

                    </CardContent>
                  
                </Card>
            </div>
        </>
    )
}

export default AddButton