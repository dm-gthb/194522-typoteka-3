'use strict';

const {StatusCode} = require(`../../constants`);

module.exports = (service) => (req, res, next) => {
  const {articleId} = req.params;
  const article = service.findOne(articleId);
  if (!article) {
    return res.status(StatusCode.NOT_FOUND).send(`Not found`);
  }
  res.locals.article = article;
  return next();
};
