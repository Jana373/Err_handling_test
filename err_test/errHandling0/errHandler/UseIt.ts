import { ErrorHandler } from './ErrorHandler';

const errorHandler = new ErrorHandler();

app.use(errorHandler.errorLogger);
app.use(async (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (!errorHandler.isCustomError(err)) {
        next(err);
    }
    await errorHandler.errorResponder(err, req, res, next);
});
app.use(errorHandler.failSafeHandler);