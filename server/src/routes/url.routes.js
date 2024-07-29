const { createUrl, getUrls, getUrl } = require('../controllers/url.controller');

const urlRouter = require('express').Router();

urlRouter.get('/', getUrls );
urlRouter.post('/shortUrl', createUrl);
urlRouter.get('/:shortId', getUrl)

module.exports = urlRouter;