import express from 'express';
import UserRoutes from './routes/user-route.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use("/",UserRoutes);

app.use((req, res, next)=>{
    res.json({message: "Invalid URL"});
});

const server = app.listen(2828, (err)=>{
    if (err) {
        console.log("server error: ",err)
    }else {
        console.log("server listening on ", server.address().port)
    }
});