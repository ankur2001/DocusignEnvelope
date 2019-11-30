'use strict';
var Status = require('../service/StatusService');

module.exports.getLiveStatus = function getLiveStatus (req, res, next) {
	  var serviceRes = Status.getLiveStatus()
	  return serviceRes;
    
};
