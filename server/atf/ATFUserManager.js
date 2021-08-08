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

require("./DataSource");

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

class ATFUserManager {
    getAuthLevel(user, token) {
        // TODO: Parse token, extract salt and hashed password, rehash
        // Return USER_AUTH_ accordingly

        return Promise.resolve(USER_AUTH_ADMIN);
    }
    
    assertAuthLevel(user, token, minLevel) {
        this.getAuthLevel(user, token).then(
            userLevel => {
                if (userLevel < minLevel) 
                    throw ATFUserExistsException; 
                return userLevel});
    }

    getUserList(pagingData) {
        // Implement me
        return Promise.resolve([]);
    }
    
    getUser(id) {
        // Implement me
        return Promise.resolve({});
    }

    userExists(email) {
        // Implement me
        return Promise.resolve(false);
    }

    registerUser(userObject) {
        // Implement me
        return Promise.resolve({});
    }
}
