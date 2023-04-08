const express = require('express');

const roleRouter = express.Router();

const {postRole,getRole,updateRole,deleteRole} = require('../../Controller/Admin_Role/Admin_Role')



/**
 *  @swagger
 *  components:
 *        schemas:
 *              Role:
 *                  type: object
 *                  properties:
 *                      Role_id:
 *                              type: string
 *                      Role_name:
 *                              type: string
 *                
 *
 */

/**
 * @swagger
 * /admin/viewrole:
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
 * /admin/addrole:
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

/**
 * @swagger
 * /admin/updaterole/{Role_id}:
 *                patch:
 *                    summary: node js api
 *                    description: node js api
 *                    parameters:
 *                      - in: path
 *                        name: user_id
 *                        required: true
 *                        description: string role_id required
 *                        schema:
 *                              type: string
 *                    requestBody:
 *                        required: true
 *                        content:
 *                          application/json:
 *                            schema:
 *                               $ref : '#components/schemas/display'
 *                    responses:
 *                       200:
 *                         description: added successfully
 *                         content:
 *                            application/json:
 *                                  schema:
 *                                      type: array
 *                                      items:
 *                                          $ref : '#components/schemas/display'
 */


/**
 * @swagger
 * /admin/deleterole/{Role_id}:
 *             delete:
 *                  summary: this api is used to check if delete method is working or not
 *                  description: this api is used to check if delete method is working or not
 *                  parameters:
 *                     - in: path
 *                       name: user_id
 *                       required: true
 *                       description: string Role_id required
 *                       schema:
 *                         type: string
 *                  responses:
 *                       200:
 *                            description: to test delete method
 */






roleRouter.post('/addrole',postRole)
roleRouter.get('/viewrole',getRole)
roleRouter.patch('/updaterole/:Role_id',updateRole)
roleRouter.delete('/deleterole/:Role_id',deleteRole)

module.exports = roleRouter;

