const express = require('express');
const app = express();
app.use(express.json());
const swaggerui = require('swagger-ui-express');
const swaggerjsdoc = require('swagger-jsdoc');
const cors  = require('cors');
app.use(cors());

const option = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "node js api documentation for mysql",
            version: "1.0.0"
        },
        servers: [
            {
                url: 'http://localhost:5500'
            }
        ]
    },
    apis: ['./Routes/RoleRoute/roleRoute.js','./Routes/UserloginRoute/UserloginRoute.js','./Routes/UserprofileRoute/UserprofileRoute.js','./Routes/roleassignRoute/roleassignRoute.js']
}




const roleRouter = require('./Routes/RoleRoute/roleRoute');
const userRouter = require('./Routes/UserloginRoute/UserloginRoute');
const profileRouter = require('./Routes/UserprofileRoute/UserprofileRoute');
const assignRouter = require('./Routes/roleassignRoute/roleassignRoute');
const signuprouter = require('./Routes/UserloginRoute/SignuploginRoute');



app.use('/testing',swaggerui.serve,swaggerui.setup(swaggerjsdoc(option)))
app.use('/admin', roleRouter);
app.use('/',userRouter);
app.use('/',profileRouter);
app.use('/',assignRouter);
app.use('/',signuprouter);


const port=5500;
app.listen(port,()=>{
    console.log(`server is running on ${port} port`)
});

