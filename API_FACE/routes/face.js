var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/gen', function (req, res, next) {
    var request = require("request");

    var options = {
        method: 'POST',
        url: 'https://faceplusplus-faceplusplus.p.rapidapi.com/facepp/v3/detect',
        qs: {
            image_url: 'https://www.moviestruckers.com/wp-content/uploads/2017/09/spike-lee.jpg',

            return_attributes: 'gender,age,glass,beauty,ethnicity,emotion',
        },
        headers: {
            'x-rapidapi-host': 'faceplusplus-faceplusplus.p.rapidapi.com',
            'x-rapidapi-key': '4e8aa3ac44mshf457ad7bc533f67p112053jsn06600d85bc6c',
            'content-type': 'application/x-www-form-urlencoded'
        },
        form: {}
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        body = JSON.parse(body);
        console.log(body.faces);
        res.render('face', {body, url : options.qs.image_url});
        //res.send(JSON.stringify(body));
    });

});

module.exports = router;