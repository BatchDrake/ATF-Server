/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Remove a confirmation
* Removes a confirmation.
*
* party Long Identifier for a party, passed as a path parameter.
* id Long Identifier for an entity in the system, passed as a path parameter.
* ifMatch List The If-Match HTTP request header makes the request conditional. For GET and HEAD methods, the server will send back the requested resource only if it matches one of the listed ETags. For PUT and other non-safe methods, it will only upload the resource in this case. (optional)
* no response value expected for this operation
* */
const deleteConfirmationId = ({ party, id, ifMatch }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        party,
        id,
        ifMatch,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* List parties
* Lists existing parties.
*
* ifNoneMatch List The If-None-Match HTTP request header makes the request conditional. For GET and HEAD methods, the server will send back the requested resource, with a 200 status, only if it doesn't have an ETag matching the given ones. For other methods, the request will be processed only if the eventually existing resource's ETag doesn't match any of the values listed. (optional)
* limit Long Number of elements to return in a collection request. (optional)
* offset Long Number of elements to skip in a collection request. (optional)
* returns PartyCollectionResponse
* */
const listParties = ({ ifNoneMatch, limit, offset }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        ifNoneMatch,
        limit,
        offset,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* This endpoint is used to create a party resource. Note it is assymetrical, since parties, once created, include much denormalized information, useful on presenting them on screen.  This endpoint will receive a PartyCreation object and return a full Party object.
*
* partyCreation PartyCreation  (optional)
* returns Party
* */
const postParty = ({ partyCreation }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        partyCreation,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Confirm assistance
* Confirms the assistance to a party of one or more participants by creating a confirmation object.
*
* party Long Identifier for a party, passed as a path parameter.
* id Long Unique identifier of an entity.
* photo File The attendance confirmation photo.
* returns Confirmation
* */
const postPartyConfirmation = ({ party, id, photo }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        party,
        id,
        photo,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  deleteConfirmationId,
  listParties,
  postParty,
  postPartyConfirmation,
};
