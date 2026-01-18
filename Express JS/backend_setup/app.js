import express from 'express';

const app = express()

// Build In Middleware 
app.use(express.json())



export default app;