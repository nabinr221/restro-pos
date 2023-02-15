const Users = require('../models/Users')

const getUsers = async (req, res) => {
    try {
        const usersData = await Users.find()
        if (usersData) {
            res.status(200).json({
                usersData
            })
        } else {
            res.status(500).json({
                msg: 'Something Went Wrong'
            })
        }
    } catch (err) {
        console.log(err)
    }
}

const getUserDetails =async (req, res)=>{
    try {

        const userDetails = await Users.findById(req.params.id)
        if (userDetails) {
            res.status(200).json({
                userDetails
            })
        } else {
            res.status(500).json({
                msg: "Something went wrong"
            })
        }

    } catch (err) {
        console.log(err)
    }
  
}

exports.getUsers = getUsers
exports.getUserDetails = getUserDetails