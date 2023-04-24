import express, {Request, Response} from 'express';
import AbstractController from '../controllers/AbstractController';
import db from '../models';

class Server{
    private app:express.Application;
    private port:number;
    private env:string;

    constructor(appInit:{port:number;env:string;middlewares:any[];controllers:any[]}){
        this.app = express();
        this.port = appInit.port;
        this.env= appInit.env;
        this.loadControllers(appInit.controllers);
        this.loadMiddlewares(appInit.middlewares);
    }

    private loadControllers(controllers: AbstractController[]){
        controllers.forEach((controller:AbstractController)=>{
            this.app.use(`/${controller.prefix}`,controller.router);
        })
    }
    private loadMiddlewares(middlewares: any[]){
        middlewares.forEach((middleware:any)=>{
            this.app.use(middleware);
        })
    }

    private async connectDB(){
        await db.sequelize.sync({force:false})
    }

    public async init(){
        await this.connectDB();
        this.app.listen(this.port, () => {
            console.log(`Server::Running 🚀 @'http://localhost:${this.port}'`);
        })
    }

}
export default Server;