/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Delete extra bonus type by ID
* Removes an extra bonus type given its ID.
*
* id String 
* ifMatch List The If-Match HTTP request header makes the request conditional. For GET and HEAD methods, the server will send back the requested resource only if it matches one of the listed ETags. For PUT and other non-safe methods, it will only upload the resource in this case. (optional)
* no response value expected for this operation
* */
const deleteOfficialPartyId = ({ id, ifMatch }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
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
* Get extra bonus type by ID
* Gets an extra bonus type given its ID.
*
* id String 
* ifNoneMatch List The If-None-Match HTTP request header makes the request conditional. For GET and HEAD methods, the server will send back the requested resource, with a 200 status, only if it doesn't have an ETag matching the given ones. For other methods, the request will be processed only if the eventually existing resource's ETag doesn't match any of the values listed. (optional)
* returns OfficialParty
* */
const getOfficialPartyId = ({ id, ifNoneMatch }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        ifNoneMatch,
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
* List official parties
* List all known official parties.
*
* ifNoneMatch List The If-None-Match HTTP request header makes the request conditional. For GET and HEAD methods, the server will send back the requested resource, with a 200 status, only if it doesn't have an ETag matching the given ones. For other methods, the request will be processed only if the eventually existing resource's ETag doesn't match any of the values listed. (optional)
* limit Long Number of elements to return in a collection request. (optional)
* offset Long Number of elements to skip in a collection request. (optional)
* returns OfficialPartyCollectionReponse
* */
const listOfficialParties = ({ ifNoneMatch, limit, offset }) => new Promise(
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
* Create extra bonus type
* Allows addition of new bonus types.
*
* officialParty OfficialParty  (optional)
* returns OfficialParty
* */
const postOfficialParty = ({ officialParty }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        officialParty,
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
  deleteOfficialPartyId,
  getOfficialPartyId,
  listOfficialParties,
  postOfficialParty,
};
