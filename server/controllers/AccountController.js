/**
 * The AccountController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/AccountService');
const accountChangePassword = async (request, response) => {
  await Controller.handleRequest(request, response, service.accountChangePassword);
};

const accountLogout = async (request, response) => {
  await Controller.handleRequest(request, response, service.accountLogout);
};

const accountReset = async (request, response) => {
  await Controller.handleRequest(request, response, service.accountReset);
};

const requestAccountReset = async (request, response) => {
  await Controller.handleRequest(request, response, service.requestAccountReset);
};


module.exports = {
  accountChangePassword,
  accountLogout,
  accountReset,
  requestAccountReset,
};
