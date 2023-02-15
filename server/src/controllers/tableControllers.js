const Tables = require("../models/Tables")

const postTable = async (req, res) => {
    try {
        const table = await Tables.findOne({ tableName: req.body.tableName })
        if (!table) {
            const tableData = Tables.create(req.body);
            if (tableData) {
                res.status(200).json({ msg: "Table is successfully added", isSave: true });
               
            } else {
                res.status(500).json({ msg: "Something went worng" });
            }
        } 
        else {
            res.status(409).json({ msg: "Table already exists" });
        }

    } catch (err) {
        console.log(err)
    }
}

const getTable = async (req, res) => {
    try {

        const tablesData = await Tables.find()
        if (tablesData) {
            res.status(200).json({
                tablesData
            })
        } else {
            res.status(500).json({
                msg: "Something went wrong"
            })
        }
    } catch (err) {
        console.log(err);
    }
}

const editTable = async (req, res) => {
    try {
        const tableData = await Tables.findByIdAndUpdate(req.params.id,req.body)
        if (tableData) {
            res.status(200).json({
                 msg: "updated successfully!" 
                })
        }
        else {
            res.status(500).json({
                 msg: "something went Wrong!!!" 
                })
        }
    } catch (err) {
        console.log(err);
    }
}
const tableDetails = async (req, res) => {
    try {

        const tableDetails = await Tables.findById(req.params.id)
        if (tableDetails) {
            res.status(200).json({
                tableDetails
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

const deleteTable = async (req, res) => {
    try {
        const tablesData = await Tables.findByIdAndDelete(req.body._id)
        if (tablesData) {
            res.status(204).json({ msg: 'deleted successfully' })
        } else {
            res.status(409).json({ msg: "something went wrong !!!" })
        }
    } catch (err) {
        console.log(err);
    }
}

exports.postTable = postTable
exports.getTable = getTable
exports.editTable = editTable
exports.tableDetails = tableDetails
exports.deleteTable = deleteTable