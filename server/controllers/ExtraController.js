/**
 * The ExtraController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ExtraService');
const deleteExtraId = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteExtraId);
};

const getExtraId = async (request, response) => {
  await Controller.handleRequest(request, response, service.getExtraId);
};

const listExtras = async (request, response) => {
  await Controller.handleRequest(request, response, service.listExtras);
};

const postExtra = async (request, response) => {
  await Controller.handleRequest(request, response, service.postExtra);
};


module.exports = {
  deleteExtraId,
  getExtraId,
  listExtras,
  postExtra,
};
