const BaseSQLModel = require('./base');

class UserModel extends BaseSQLModel {
    constructor() {
        super('user');
    }

    async findAll() {
        const users = await super.findAll();
        return users;
    }

    async findOne(username) {
        const user = await super.findOne('username', username);
        return user;
    }

    async create(user) {
        const createdUserId = await super.create(user);
        return createdUserId;
    }

    async update(id, user) {
        const affectedRows = await super.update(id, user);
        return affectedRows;
    }

    async delete(id) {
        const affectedRows = await super.delete(id);
        return affectedRows;
    }
}

module.exports = UserModel;