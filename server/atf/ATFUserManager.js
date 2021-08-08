/*
    ATFUserManager.js: Make promises for high-level user management
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

const DataSource = require("./DataSource");
const crypto = require('crypto');
const ImageManager = require("./ImageManager");

const USER_AUTH_NONE        = 0;
const USER_AUTH_PARTICIPANT = 1;
const USER_AUTH_ADMIN       = 2;

class ATFAuthorizationException {
    constructor(msg) {
        this.message = msg;
    }

    toString() {
        return this.message;
    }
}

class ATFUserExistsException {
    constructor(msg) {
        this.message = msg;
    }

    toString() {
        return this.message;
    }
}

class ATFUserConflictException {
    constructor(msg) {
        this.message = msg;
    }

    toString() {
        return this.message;
    }
}

class ATFUser {
    constructor(sqlRow) {
        this.id        = sqlRow.externalid;
        this.name      = sqlRow.nombre;
        this.score     = sqlRow.puntis;
        this.victories = sqlRow.awards;
        this.avatar    = ImageManager.avatarPath(sqlRow.avatar);
        this.invites   = sqlRow.invites;
    }

    static fromMultipleRows(rows) {
        var converted = new Array(rows.length);

        for (var i = 0; i < rows.length; ++i)
            converted[i] = new ATFUser(rows[i]);

        return converted;
    }

    serialize() {
        return JSON.stringify(this);
    }
}

class ATFUserManager {
    constructor(user, token) {
        this.authLevel = this.getAuthLevel(user, token);

    }

    getAuthLevel(user, token) {
        // TODO: Parse token, extract salt and hashed password, rehash
        // Return USER_AUTH_ accordingly

        const fields = token.split("$");
        
        try {
            if (fields.length != 2)
                throw "Malformed authentication token";
            
            const salt = Buffer.from(fields[0], 'base64');
            const hash = fields[1];
        } catch {
            return USER_AUTH_NONE;
        }

        return DataSource.getInstance().query(
            "SELECT `password`,`isadmin` FROM `UserCreds` WHERE `user` = ?;", [user])
            .then(rows => {
                try {
                    const pwdHash = Buffer.from(rows[0].password, 'hex');
                } catch {
                    return USER_AUTH_NONE;
                }

                const calculatedHash = 
                        crypto.createHash('sha256')
                        .update(salt)
                        .update(pwdHash)
                        .digest('base64');

                if (calculatedHash !== hash)
                    return USER_AUTH_NONE;

                return resut[0].isadmin
                    ? USER_AUTH_ADMIN
                    : USER_AUTH_PARTICIPANT;
            });
    }
    
    assertAuthLevel(minLevel) {
        return this.authLevel.then(
            userLevel => {
                if (userLevel < minLevel) 
                    throw ATFUserExistsException; 
                return userLevel});
    }

    getUserList(offset, limit) {
        return DataSource.getInstance().query(
                DataSource.buildLimitedQuery(
                    "SELECT * FROM `User`", offset, limit))
                .then(rows => ATFUser.fromMultipleRows(rows));
    }
    
    getUser(id) {
        return DataSource.getInstance().query(
            "SELECT * FROM `User` WHERE `externalid` = ?;", [id])
            .then(rows => new ATFUser(rows[0]));
    }

    userExists(email) {
        return this.assertAuthLevel(USER_AUTH_PARTICIPANT)
            .then("SELECT EXISTS(SELECT * FROM `UserCreds` WHERE `user` = ? LIMIT 1) AS `exists`", [email])
            .then(rows => rows[0].exists > 0);
    }

    registerUser(userObject) {
        // Implement me
        return Promise.resolve({});
    }
}

module.exports = ATFUserManager;
