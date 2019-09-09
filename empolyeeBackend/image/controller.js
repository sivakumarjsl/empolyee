const imgModel = require("./model");


const getImage = async (request, response) => {
    try {
        const employee = await imgModel.getImage();
        try {
            response.status(200).send(JSON.stringify(employee));
        } catch (err) {
            // show error?
        }
    } catch (err) {
        response.status(200).send(
            JSON.stringify({
                error: true,
                message: err.toString()
            })
        );
    }
};


// app.post('/cool-profile', cpUpload, function (req, res, next) {
//     // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
//     //
//     // e.g.
//     //  req.files['avatar'][0] -> File
//     //  req.files['gallery'] -> Array
//     //
//     // req.body will contain the text fields, if there were any
//   })



const addImage = async (request, response) => {
    console.log('files', req.files)
    try {
        const result = await imgModel.addImage(
            req.files['image-name'][0],
            req.files['gallery']
        );

        try {
            response.status(200).send(JSON.stringify(result));
        } catch (err) {
            // show error?
        }
    } catch (err) {
        response.status(200).send(
            JSON.stringify({
                error: true,
                message: err.toString()
            })
        );
    }
};

const deleteImage = async (request, response) => {
    try {
        const result = await imgModel.deleteImage(request.params.id);
        try {
            response.status(200).send(JSON.stringify(result));
        } catch (err) {
            // show error?
        }
    } catch (err) {
        response.status(200).send(
            JSON.stringify({
                error: true,
                message: err.toString()
            })
        );
    }
};

 
 



module.exports = {
    getImage,
    addImage,
    deleteImage,
};
