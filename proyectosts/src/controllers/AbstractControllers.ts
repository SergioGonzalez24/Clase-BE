import { Router } from "express";
// Middleware
// Services

export abstract class AbstractController {

    // Se utiliza "_" para indicar que es un miembro privado
    private _router: Router = Router();
    private _prefix: string;
    
    public get prefix(): string { return this._prefix; } // Getter
    public get router(): Router { return this._router; } // Getter

    protected constructor(prefix: string) {
        this._prefix = prefix;
    }

    // Initialize the routes
    protected abstract initRoutes(): void;
    // Body request validation
    protected abstract validateBodyRequest(type: any): any;
}