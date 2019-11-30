'use strict';
var Docusign = require('../service/docusignService');

module.exports.sendEnvelope = function sendEnvelope (req, res, next) {
	  var serviceRes = Docusign.sendEnvelopeController('ankur2001@gmail.com')
	  return serviceRes;
    
};
