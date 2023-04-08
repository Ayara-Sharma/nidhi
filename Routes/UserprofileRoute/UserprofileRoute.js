const express = require('express');

const profileRouter = express.Router();

const {postProfile,getProfile,updateProfile,deleteProfile} = require('../../Controller/Admin_user_profile/Admin_user_profile')



/**
 *  @swagger
 *  components:
 *        schemas:
 *              Profile:
 *                  type: object
 *                  properties:
 *                      User_id:
 *                              type: string
 *                      User_name:
 *                              type: string
 *                      Email:
 *                              type: string
 *                      Mobile:
 *                              type: string
 *                      Gender:
 *                              type: string
 *                      Address_line1:
 *                              type: string
 *                      Address_landmark:
 *                              type: string
 *                      State:
 *                              type: string
 *                      City:
 *                              type: string
 *                      Pincode:
 *                              type: string
 *                      Adhar:
 *                              type: string
 *                      Profile_photo:
 *                              type: string
 *                      Adhar_photo:
 *                              type: string
 *                      DOB:
 *                              type: date
 *                      DOJ:
 *                              type: date
 *                
 *
 */

/**
 * @swagger
 * /viewprofile:
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
 * /addprofile:
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
 * /updateprofile/{User_id}:
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
 * /deleteprofile/{User_id}:
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





profileRouter.post('/addprofile',postProfile)
profileRouter.get('/viewprofile',getProfile)
profileRouter.patch('/updateprofile/:User_id',updateProfile)
profileRouter.delete('/deleteprofile/:User_id',deleteProfile)

module.exports = profileRouter;

