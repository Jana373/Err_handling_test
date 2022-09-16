import { HttpStatusCode } from '../static/httpCode/HttpStatusCode';

// all our custom error classes will extend the BaseError class

export class BaseError extends Error {
     readonly name: string;
     readonly httpCode: HttpStatusCode;
     // no need 
     readonly isOperational: boolean; // operational error or programer error
     


     constructor(name: string, httpCode: HttpStatusCode, description: string, isOperational: boolean) {
          super(description); // for Error class 
          this.name = name;
          this.httpCode = httpCode;
          this.isOperational = isOperational;
          // omit stack trace 
          Error.captureStackTrace(this, BaseError)
     }
    


}