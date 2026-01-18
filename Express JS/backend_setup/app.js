import express from 'express';
import adminRouter from './router/admin.js'
import userRouter from './router/user.js';


const app = express()

// Build In Middleware 
app.use(express.json())

// Router Setup
app.use('/admin', adminRouter);
app.use('/user', userRouter);

export default app;