import { BaseError } from './BaseError';
import { HttpStatusCode } from '../static/HttpCode/HttpStatusCode';


export class APIError extends BaseError {
    constructor(name, httpCode = HttpStatusCode.INTERNAL_SERVER, isOperational = true, description = 'this is an API error') {
        super(name, httpCode, description, isOperational)
    }

}