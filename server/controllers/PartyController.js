/**
 * The PartyController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/PartyService');
const deleteConfirmationId = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteConfirmationId);
};

const listParties = async (request, response) => {
  await Controller.handleRequest(request, response, service.listParties);
};

const postParty = async (request, response) => {
  await Controller.handleRequest(request, response, service.postParty);
};

const postPartyConfirmation = async (request, response) => {
  await Controller.handleRequest(request, response, service.postPartyConfirmation);
};


module.exports = {
  deleteConfirmationId,
  listParties,
  postParty,
  postPartyConfirmation,
};
