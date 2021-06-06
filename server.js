const express = require('express');
const app = express();

let router = require('./app/routers/upload.router.js');
app.use('/', router);

// Create a Server
const server = app.listen(8080, function () {

  let host = server.address().address
  let port = server.address().port

  console.log("App listening at http://%s:%s", host, port);
})

// const aws = require('aws-sdk');
// const config = require('./config.json');

// (async () => {
//     try {
//         aws.config.setPromisesDependency();
//         aws.config.update({
//             accessKeyId: config.ACCESS_KEY_ID,
//             secretAccessKey: config.SECRET_ACCESS_KEY,
//             region: 'us-west-1'
//         })

//         const s3 = new aws.S3();
//         const response = await s3.listObjectsV2({
//             Bucket: 'twraps',
//         }).promise();
//         console.log(response)
//     } catch (error) {
//         console.log("aws", error)
//     }
// })();