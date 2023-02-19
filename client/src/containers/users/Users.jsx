import React, { useEffect, useState } from 'react'
import './users.css'
import userIcon from '../../media/image/usericon.png'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { NavLink } from 'react-router-dom'
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Tooltip, IconButton } from '@mui/material'
import { AiOutlineDelete, AiOutlineEdit, AiOutlineClos, AiOutlineMail, AiOutlineMobile } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'
import { BsGenderAmbiguous } from 'react-icons/bs'
import { SiOpenaccess } from 'react-icons/si'
import { MdAlternateEmail } from 'react-icons/md'
import axios from 'axios'
import EditDelete from '../../components/editDelete/EditDelete'


const Users = () => {
  const [usersList, setUsersList] = useState([])

  const fetchUsersList = async () => {
    const users = await axios.get(`${process.env.REACT_APP_API_URL}/users`)
    if (users) {
      setUsersList(users.data.usersData)
    }
  }
  console.log(usersList)
  useEffect(() => {
    fetchUsersList()
  }, [])


  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="contents" >
            <NavLink className=" navlink" to='/add-user'><button className='btnSubmit'>Create User</button></NavLink>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="users-card-box">

              {usersList?.map((item, id) => {
                return (
                  <Grid item xs={4}>
                    <div className="users-card">
                      <div className="card-header">
                        <img src={userIcon} width={100} height={100}  alt="img"/>
                        {/* <div className="btn-wrapper">
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
                                <AiOutlineDelete size={25} className="icon" onClick={} />
                              </IconButton>
                            </Tooltip>

                          </div>

                        </div> */}
                        <EditDelete item={item} endpoint="user"  fetchList={fetchUsersList} />

                      </div>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '1.3rem', textTransform: 'capitalize' }} >
                          {item.name}
                        </Typography>
                        <div className="card-content">
                          <div>
                            {item.email ? <div className='card-title'>   <AiOutlineMail /> {item.email}</div> : null}
                            {item.username ? <div className='card-title'>  <MdAlternateEmail />{item.username}</div> : null}
                            {item.usersRole ? <div className='card-title'>   <SiOpenaccess />{item.usersRole}</div> : null}
                          </div>
                          <div>

                            {item.phone ? <div className='card-title'><AiOutlineMobile />{item.phone}</div> : null}
                            {item.address ? <div className='card-title'>< CiLocationOn />{item.address}</div> : null}
                            {item.gender ? <div className='card-title'> <BsGenderAmbiguous /> {item.gender}  </div> : null}
                          </div>
                        </div>
                      </CardContent>

                    </div>
                  </Grid>

                )
              })}


            </Grid>


          </div>

        </div>
      </div>
    </>
  )
}

export default Users