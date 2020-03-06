const AWS = require('aws-sdk')

AWS.config.update({ region: 'ap-southeast-2' });

const rekognition = new AWS.Rekognition();
const params = {
    // SimilarityThreshold: 90,
    // SourceImage: {
    Image: {
        S3Object: {
            Bucket: "punj-bucket",
            Name: "photos/babies.jpg"
        }
    },
    Attributes: [
        'ALL'
        /* more items */
    ]
    // ,
    // TargetImage: {
    //     S3Object: {
    //         Bucket: "punj-bucket",
    //         Name: "photos/varinda.jpg"
    //         // Name: "photos/saanvi2.jpg"
    //     }
    // }
};

// rekognition.compareFaces(params, function (err, data) {
rekognition.detectFaces(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(JSON.stringify(data));           // successful response
});