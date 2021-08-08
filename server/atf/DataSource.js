/*
    DataSource.js: Database connection singleton
    Copyright (C) 2021 Gonzalo José Carracedo Carballal

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

const mariadb = require("mariadb");

const DATA_SOURCE_USER     = "AppTF";
const DATA_SOURCE_PASSWORD = "AppTF";
const DATA_SOURCE_HOST     = "actinid.org";
const DATA_SOURCE_PORT     = 4997;
const DATA_SOURCE_DATABASE = "AppTF";

class DataSourceImpl {
    constructor(host, port, user, password) 
    {
        this.pool = mariadb.createPool({
            user: user,
            password: password,
            host: host,
            port: port,
            connectionLimit: 5});

        this.queryPromise = this.pool.getConnection().then(
            c => this.connection = c).then(
            c => this.connection.query("USE `" + DATA_SOURCE_DATABASE + "`;"));
    }

    query(...queryArgs) {
        return this.queryPromise.then(x => this.connection.query(...queryArgs));
    }

    static buildLimitedQuery(queryString, offset, limit) {
        return queryString + " LIMIT " + offset + "," + limit + ";";
    }
}

class DataSource {
    constructor() {

    }

    static getInstance() {
        if (!DataSource.instance)
            this.instance = new DataSourceImpl(
                DATA_SOURCE_HOST, 
                DATA_SOURCE_PORT, 
                DATA_SOURCE_USER, 
                DATA_SOURCE_PASSWORD);

        return this.instance;
    }

    static buildLimitedQuery(queryString, offset, limit) {
        return DataSourceImpl.buildLimitedQuery(queryString, offset, limit);
    }
}

module.exports = DataSource;
