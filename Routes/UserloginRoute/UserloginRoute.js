const express = require('express');

const userRouter = express.Router();

const {postUser,getUser,updateUser,deleteUser} = require('../../Controller/Admin_user_login/Admin_user_login')




/**
 *  @swagger
 *  components:
 *        schemas:
 *              Login:
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
 *                
 *
 */

/**
 * @swagger
 * /viewuser:
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
 * /adduser:
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
 * /updateuser/{User_id}:
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
 * /deleteuser/{User_id}:
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




userRouter.post('/adduser',postUser)
userRouter.get('/viewuser',getUser)
userRouter.patch('/updateuser/:User_id',updateUser)
userRouter.delete('/deleteuser/:User_id',deleteUser)

module.exports = userRouter;

