'use strict';
var Status = require('../service/StatusService');

module.exports.getLiveStatus = function getLiveStatus (req, res, next) {
	  var serviceRes = Status.getLiveStatus()
	  console.log("Ankur...live",serviceRes);
	  return serviceRes;
    
};
