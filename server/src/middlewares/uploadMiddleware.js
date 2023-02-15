const multer = require('multer')

const menuStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../Client/src/uploads");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    },
});

const menuImgUpload = multer({ storage: menuStorage })

exports.menuImgUpload = menuImgUpload