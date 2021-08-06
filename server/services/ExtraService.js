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
const deleteExtraId = ({ id, ifMatch }) => new Promise(
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
* returns Extra
* */
const getExtraId = ({ id, ifNoneMatch }) => new Promise(
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
* List extra bonus types
* List existing extra points.
*
* ifNoneMatch List The If-None-Match HTTP request header makes the request conditional. For GET and HEAD methods, the server will send back the requested resource, with a 200 status, only if it doesn't have an ETag matching the given ones. For other methods, the request will be processed only if the eventually existing resource's ETag doesn't match any of the values listed. (optional)
* limit Long Number of elements to return in a collection request. (optional)
* offset Long Number of elements to skip in a collection request. (optional)
* returns ExtraCollectionResponse
* */
const listExtras = ({ ifNoneMatch, limit, offset }) => new Promise(
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
* extra Extra  (optional)
* returns Extra
* */
const postExtra = ({ extra }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        extra,
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
  deleteExtraId,
  getExtraId,
  listExtras,
  postExtra,
};
