import {BaseError} from '../errClasses/BaseError';
const mongodb = require('mongodb')
const joi = require('joi');
//const MongoError = require('MongoError');
// this class will contain midlleware functions 


export class ErrorHandler {

    public async errorLogger(error, req, res, next) { // for logging errors only
        await console.error("center : "+error);
        next(error); // forward to next middleware
    }
    public async errorResponder(error, req, res, next) {
        // mongodb error check
        if (error instanceof mongodb.MongoError) {
            console.log("mongo db error")
        }
        // check if it is a joi validation error 
        // Checks whether or not the provided argument is a validation error.
        if(joi.isError(error)){
            console.log("validation error")
        }

            
        // respond depending on the error type ..
    }
    public failSafeHandler(error, req, res, next) { // generic handler
        res.status(500).send(error)
    }
    // check if this is a custom error
    public isCustomError(error: Error) {
        if (error instanceof BaseError) {
          return true;
        }
        return false;
      }

}