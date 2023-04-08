const express = require('express');

const assignRouter = express.Router();

const {postAssign,getAssign} = require('../../Controller/Role_assign/Role_assign')


/**
 *  @swagger
 *  components:
 *        schemas:
 *              Assign:
 *                  type: object
 *                  properties:
 *                      User_id:
 *                              type: string
 *                      Password:
 *                              type: string
 *                      Registeron:
 *                              type: string
 *                      Status:
 *                              type: string
 *                      Role_id:
 *                              type: string
 *                
 *
 */

/**
 * @swagger
 * /viewassign:
 *        get:
 *             summary: node js api
 *             discription: node js api
 *             responses:
 *                 200:
 *                    description: to test Get method
 *                    content:
 *                         application/json:
 *                                  schema:
 *                                      type: array
 *                                      items:
 *                                          $ref : '#components/schemas/display'
 */

/**
 * @swagger
 * /addassign:
 *      post:
 *          summary: node js api
 *          description: nodejs api
 *          requestBody:
 *                  required: true
 *                  content:
 *                     application/json:
 *                         schema:
 *                              $ref : '#component/schemas/display'
 *          responses:
 *               200:
 *                    description: added successfully
 */


assignRouter.post('/addassign',postAssign)
assignRouter.get('/viewassign',getAssign)

module.exports = assignRouter;

