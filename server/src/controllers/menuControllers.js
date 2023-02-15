const Menus = require("../models/Menus")
const postMenu = async (req, res) => {
    try {
        Menus.findOne({ menuName: req.body.menuName }).then((menu) => {
            if (!menu) {
                const menusData = Menus.create(req.body);
                if (menusData) {
                    res.status(200).json({ msg: "menus item is successfully added" });
                } else {
                    res.status(500).json({ msg: "Something went worng" });
                }
            } else {
                res.status(409).json({ msg: "Menus item already exists" });
            }
        });
    } catch (err) {
        console.log(err)
    }
}


const getMenu = async (req, res) => {
    try {
        const menusData = await Menus.find()
        if (menusData) {
            res.status(200).json({
                menusData
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
const deleteMenu = async (req, res) => {
    try {
        const data = await Menus.findByIdAndDelete(req.body._id)
        if (data) {
            res.status(204).json({ msg: 'deleted successfully' })
        } else {
            res.status(409).json({ msg: "something went wrong !!!" })
        }
    } catch (err) {
        console.log(err);
    }
}
const menuDetails = async (req, res) => {
    try {

        const menuDetails = await Menus.findById(req.params.id)
        if (menuDetails) {
            res.status(200).json({
                menuDetails
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
const editMenu = async (req, res) => {
    try {
        const menusData = await Menus.findByIdAndUpdate(req.params.id, req.body)
        if (menusData) {
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


exports.postMenu = postMenu
exports.getMenu = getMenu
exports.editMenu = editMenu
exports.menuDetails = menuDetails
exports.deleteMenu = deleteMenu