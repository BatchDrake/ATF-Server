/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Removes an announcement.
*
* id String 
* ifMatch List The If-Match HTTP request header makes the request conditional. For GET and HEAD methods, the server will send back the requested resource only if it matches one of the listed ETags. For PUT and other non-safe methods, it will only upload the resource in this case. (optional)
* no response value expected for this operation
* */
const deleteAnnouncementId = ({ id, ifMatch }) => new Promise(
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
* Get announcement details
* Gets data about an announcement given its ID.
*
* id String 
* ifNoneMatch List The If-None-Match HTTP request header makes the request conditional. For GET and HEAD methods, the server will send back the requested resource, with a 200 status, only if it doesn't have an ETag matching the given ones. For other methods, the request will be processed only if the eventually existing resource's ETag doesn't match any of the values listed. (optional)
* returns Announcement
* */
const getAnnouncementId = ({ id, ifNoneMatch }) => new Promise(
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
* Query announcement list
* Lists all announcements currently visible. That is, announcements active at the present time for anonymous and normal users and all existing announcements for admin users.
*
* ifNoneMatch List The If-None-Match HTTP request header makes the request conditional. For GET and HEAD methods, the server will send back the requested resource, with a 200 status, only if it doesn't have an ETag matching the given ones. For other methods, the request will be processed only if the eventually existing resource's ETag doesn't match any of the values listed. (optional)
* returns AnnouncementCollectionResponse
* */
const listAnnouncement = ({ ifNoneMatch }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
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
* Create announcement
* Creates a new announcement. This endpoint is only available to authenticated users.
*
* announcementCreation AnnouncementCreation  (optional)
* returns Announcement
* */
const postAnnouncement = ({ announcementCreation }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        announcementCreation,
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
  deleteAnnouncementId,
  getAnnouncementId,
  listAnnouncement,
  postAnnouncement,
};
