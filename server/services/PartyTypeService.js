/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Delete party type
* Removes a party type given its ID.
*
* id Long Identifier for an entity in the system, passed as a path parameter.
* ifMatch List The If-Match HTTP request header makes the request conditional. For GET and HEAD methods, the server will send back the requested resource only if it matches one of the listed ETags. For PUT and other non-safe methods, it will only upload the resource in this case. (optional)
* no response value expected for this operation
* */
const deletePartyTypeId = ({ id, ifMatch }) => new Promise(
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
* Get party type by ID
* Gets an party type given its ID.
*
* id Long Identifier for an entity in the system, passed as a path parameter.
* ifNoneMatch List The If-None-Match HTTP request header makes the request conditional. For GET and HEAD methods, the server will send back the requested resource, with a 200 status, only if it doesn't have an ETag matching the given ones. For other methods, the request will be processed only if the eventually existing resource's ETag doesn't match any of the values listed. (optional)
* returns PartyType
* */
const getPartyTypeId = ({ id, ifNoneMatch }) => new Promise(
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
* List party types
* List existing party types.
*
* ifNoneMatch List The If-None-Match HTTP request header makes the request conditional. For GET and HEAD methods, the server will send back the requested resource, with a 200 status, only if it doesn't have an ETag matching the given ones. For other methods, the request will be processed only if the eventually existing resource's ETag doesn't match any of the values listed. (optional)
* limit Long Number of elements to return in a collection request. (optional)
* offset Long Number of elements to skip in a collection request. (optional)
* returns PartyTypeCollectionResponse
* */
const listPartyTypes = ({ ifNoneMatch, limit, offset }) => new Promise(
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
* Create party type
* Allows addition of new party types.
*
* partyType PartyType  (optional)
* returns PartyType
* */
const postPartyType = ({ partyType }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        partyType,
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
  deletePartyTypeId,
  getPartyTypeId,
  listPartyTypes,
  postPartyType,
};
