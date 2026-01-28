import express from 'express';
import routerAuth from './routers/auth.js';
import routerAdmin from './routers/admin.js';
import routerLandload from './routers/landload.js';

const app = express()

// Build In midleware
app.use(express.json());

//Router in API
app.use('/admin', routerAdmin)      // http://127.0.0.1:9000/admin
app.use('/landload', routerLandload )       // http://127.0.0.1:9000/landload
app.use('/auth', routerAuth)        // http://127.0.0.1:9000/auth


export default app;