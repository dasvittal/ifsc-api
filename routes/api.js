/*jslint node: true */

var express = require('express');
var apiController =  require('./../controller/apiController');

var apiRouter = express.Router();

/* GET users listing. */
apiRouter.get('/', function (req, res) {
    res.status(404);
    res.send("<h1>API Docs</h1>");
});

apiRouter.get('/banks', apiController.getBanks);
apiRouter.get('/state', apiController.getState);
apiRouter.get('/:state', apiController.getDistrict);
apiRouter.get('/:state/:district', apiController.getBranch);

module.exports = apiRouter;
