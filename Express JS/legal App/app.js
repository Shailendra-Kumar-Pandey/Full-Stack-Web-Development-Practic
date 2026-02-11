import express from 'express';
import authRouter from './src/routers/auth.js'
import clientRouter from './src/routers/client.js'
import adminRouter from './src/routers/admin.js'
import lawyerRouter from './src/routers/lawyer.js'


const app = express();

// Build in middleware 
app.use(express.json())

// connect to router
app.use('/auth', authRouter )
app.use('/client', clientRouter )
app.use('/lawyer', lawyerRouter)
app.use('/admin', adminRouter )

// base URL :- http://127.0.0.1:5050

export default app;