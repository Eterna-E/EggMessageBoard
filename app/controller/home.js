'use strict';

const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    const sqlQuery = {
      order: [[ 'id', 'desc' ]],
    };
    const comments = await ctx.model.Comments.findAll(sqlQuery);
    
    await this.ctx.render('home.njk', { comments: comments });
  }

  async createPost() {
    const { ctx } = this;
    const { name, message } = ctx.request.body;

    const result = await ctx.model.Comments.create({ name, message });

    ctx.redirect('/');
  }

  async updatePage() {
    const { ctx } = this;
    const { query } = ctx;

    const comment = await ctx.model.Comments.findByPk(query.id);
    if (!comment) {
      ctx.status = 404;

      return;
    }

    await this.ctx.render('update.njk', comment.dataValues);
  }

  async updatePost() {
    const { ctx } = this;
    const { request: { body } } = ctx;

    const id = toInt(body.id);
    const name = body.name;
    const message = body.message;
    const comment = await ctx.model.Comments.findByPk(id);
    if (!comment) {
      ctx.status = 404;
      
      return;
    }
    await comment.update({ name, message });

    ctx.redirect('/');
  }

  async deletePost() {
    const { ctx } = this;
    const { query } = ctx;

    const comment = await ctx.model.Comments.findByPk(query.id);
    if (!comment) {
      ctx.status = 404;
      
      return;
    }
    await comment.destroy();
    
    ctx.redirect('/');
  }
}

module.exports = HomeController;
