var express = require('express');
var router = express.Router();
const validate = require('validate.js');

// validate forms
const fieldForm = require('../forms/field');

module.exports = (app, db) => {
  const config = app.get('config');
  const filters = app.get('filters');

  router.get('/sections', async (req, res, next) => {
    try {
      const min = 3;
      const max = 8;
      const randSectionLimitNumber = Math.floor(Math.random() * (max - min)) + min;
      const sections = await db.Section.find().limit(randSectionLimitNumber);
      for (let i=0; i<sections.length; i++) {
        sections[i].fields = sections[i].fields || [];
        sections[i].index = i;
        let randFieldCount = Math.floor(Math.random() * (max - min)) + min;
  
        for (let j=0; j<randFieldCount; j++) {
          let randTypeIndex = Math.floor(Math.random() * 4);
          sections[i].fields.push({
            type: config.Types[randTypeIndex],
            value: ''
          });
        }
      }

      res.status(200).json({
        success: true,
        msg: 'ok',
        data: sections
      });
    } catch (e) {
      console.log(e);
      res.status(200).json({
        success: false,
        msg: 'Что то пошло не так'
      });
    }
  });

  router.post('/checkFields', async (req, res, next) => {
    try {
      console.log(req.body);
      if (!validate.isArray(req.body)) {
        return res.status(200).json({
          success: false,
          msg: 'not valid data'
        });
      }

      let messages = '';
      const fields = req.body;
      for(let i=0; i<fields.length; i++) {
        if (!validate[fields[i].type]) continue;
        if (fields[i].type === 'isBoolean') {
          fields[i].value = fields[i].value || false;
        }
        if (fields[i].type === 'isDate' && fields[i].value) {
          fields[i].value = new Date(fields[i].value);
        }
        if (!validate[fields[i].type](fields[i].value)) {
          messages += 'not valid field\n';
        }
      }

      if (messages.length > 0) {
        return res.status(200).json({
          success: false,
          msg: messages
        });
      }

      res.status(200).json({
        success: true,
        msg: 'ok',
        data: req.body
      });
    } catch (e) {
      console.log(e);
      res.status(200).json({
        success: false,
        msg: 'Что то пошло не так'
      });
    }
  });

  router.get('/', function(req, res, next) {
    res.status(200).json({
      success: true,
      msg: 'ok'
    });
  });

  app.use('/', router);
}
