const express = require('express');
const { route } = require('../auth');
const {addArticle,getArticles,getArticle,getAllCompanies,getCompanyArticles} = require('./controller');

const router = express.Router();
router.route('/').post(addArticle).get(getArticles);
router.route('/getAllCompanies').get(getAllCompanies)
router.route('/:companyName').get(getCompanyArticles)
router.route('/:articleId').get(getArticle)


module.exports = router;