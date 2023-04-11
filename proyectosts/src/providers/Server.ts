import express, { Request, Response } from 'express';

class Server {
    private app: express.Application;
    private port: number;
    private env: string;

    constructor(appInit: { port: number; env: string; 
        middleware: any[]; controllers: any[]; }) {
        this.app = express();
        this.port = appInit.port;
        this.env = appInit.env;
        this.loadControllers(appInit.controllers);
        this.loadMiddleware(appInit.middleware);
    }

    // Methods
    private loadControllers(controllers: any[]) {
        controllers.forEach((controller) => {
            this.app.use(`/${ controller.prefix }`, controller.router);
        });
    }

    private loadMiddleware(middleware: any[]) {
        middleware.forEach((middleware) => {
            this.app.use(middleware);
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the @'http://localhost:${ this.port }'`); //Con el arroba se convierte en un link en la consola
        });
    }




}