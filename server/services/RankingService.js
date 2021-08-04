/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Query ranking
* Gives access to the current contest ranking.
*
* limit Long Number of elements to return in a collection request. (optional)
* offset Long Number of elements to skip in a collection request. (optional)
* ifNoneMatch List The If-None-Match HTTP request header makes the request conditional. For GET and HEAD methods, the server will send back the requested resource, with a 200 status, only if it doesn't have an ETag matching the given ones. For other methods, the request will be processed only if the eventually existing resource's ETag doesn't match any of the values listed. (optional)
* returns RankingCollectionResponse
* */
const listRanking = ({ limit, offset, ifNoneMatch }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
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

module.exports = {
  listRanking,
};
