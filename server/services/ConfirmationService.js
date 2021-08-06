/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Delete user from attendance confirmation
* Removes an user from an attendance confirmation photo. Upon removal, the confirmation object is returned.
*
* party Long Identifier for a party, passed as a path parameter.
* confirmation Long Identifier for an attendance confirmation, passed as a path parameter.
* id Long Identifier for an entity in the system, passed as a path parameter.
* ifMatch List The If-Match HTTP request header makes the request conditional. For GET and HEAD methods, the server will send back the requested resource only if it matches one of the listed ETags. For PUT and other non-safe methods, it will only upload the resource in this case. (optional)
* returns Confirmation
* */
const deleteUserConfirmation = ({ party, confirmation, id, ifMatch }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        party,
        confirmation,
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
* Get details about a confirmation
* Gets a confirmation given its ID.
*
* party Long Identifier for a party, passed as a path parameter.
* id Long Identifier for an entity in the system, passed as a path parameter.
* ifNoneMatch List The If-None-Match HTTP request header makes the request conditional. For GET and HEAD methods, the server will send back the requested resource, with a 200 status, only if it doesn't have an ETag matching the given ones. For other methods, the request will be processed only if the eventually existing resource's ETag doesn't match any of the values listed. (optional)
* returns Confirmation
* */
const getConfirmationId = ({ party, id, ifNoneMatch }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        party,
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
* List confirmations for a party
* List all attendance confirmations submitted for a certain party.
*
* party Long Identifier for a party, passed as a path parameter.
* ifNoneMatch List The If-None-Match HTTP request header makes the request conditional. For GET and HEAD methods, the server will send back the requested resource, with a 200 status, only if it doesn't have an ETag matching the given ones. For other methods, the request will be processed only if the eventually existing resource's ETag doesn't match any of the values listed. (optional)
* limit Long Number of elements to return in a collection request. (optional)
* offset Long Number of elements to skip in a collection request. (optional)
* returns ConfirmationCollectionResponse
* */
const listPartyConfirmations = ({ party, ifNoneMatch, limit, offset }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        party,
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
* List user confirmations
* Gives a historic record of the user's attendance confirmations to parties, and subsequent scoring, sorted in descending chronological order.
*
* id Long Identifier for an entity in the system, passed as a path parameter.
* limit Long Number of elements to return in a collection request. (optional)
* offset Long Number of elements to skip in a collection request. (optional)
* ifNoneMatch List The If-None-Match HTTP request header makes the request conditional. For GET and HEAD methods, the server will send back the requested resource, with a 200 status, only if it doesn't have an ETag matching the given ones. For other methods, the request will be processed only if the eventually existing resource's ETag doesn't match any of the values listed. (optional)
* returns ConfirmationCollectionResponse
* */
const listUserConfirmations = ({ id, limit, offset, ifNoneMatch }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        limit,
        offset,
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
* Add user to an attendance confirmation photo
* Allows to add an user to a confirmation photo. Upon addition, the confirmation object is returned.
*
* party Long Identifier for a party, passed as a path parameter.
* confirmation Long Identifier for an attendance confirmation, passed as a path parameter.
* ifMatch List The If-Match HTTP request header makes the request conditional. For GET and HEAD methods, the server will send back the requested resource only if it matches one of the listed ETags. For PUT and other non-safe methods, it will only upload the resource in this case. (optional)
* attendanceCreation AttendanceCreation  (optional)
* returns Confirmation
* */
const postUserConfirmation = ({ party, confirmation, ifMatch, attendanceCreation }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        party,
        confirmation,
        ifMatch,
        attendanceCreation,
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
  deleteUserConfirmation,
  getConfirmationId,
  listPartyConfirmations,
  listUserConfirmations,
  postUserConfirmation,
};
