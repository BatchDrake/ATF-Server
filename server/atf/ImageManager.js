/*
    ImageManager.js: Make promises for high-level user management
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

class ImageManager {
    constructor() {

    }

    static imagePath(category, name) {
        return "/images/" + category + "/" + name + ".jpg";
    }

    static avatarPath(name) {
        return ImageManager.imagePath("avatars", name);
    }
}

module.exports = ImageManager;
