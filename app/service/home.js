const Service = require('egg').Service;

class HomeService extends Service {
  async readAll() {
    const results = await this.app.mysql.select('Comments', {
      orders:[['id', 'desc']],
    });
    return results;
  }

  async readById(id) {
    const results = await this.app.mysql.get('Comments', { id: id });
    return results;
  }

  async create(name, message) {
    const result = await this.app.mysql.insert('Comments', {
      name: name,
      message: message,
    });
    return result;
  }

  async update(id, name, message) {
    // 修改数据，将会根据主键 ID 查找，并更新
    const row = {
      id: id,
      name: name,
      message: message,    // any other fields u want to update
      post_time: this.app.mysql.literals.now, // `now()` on db server
    };
    const result = await this.app.mysql.update('Comments', row); // 更新 Comments 表中的记录
    return result;
  }

  async delete(id) {
    const result = await this.app.mysql.delete('Comments', {
      id: id,
    });
    return result;
  }
}
module.exports = HomeService;
