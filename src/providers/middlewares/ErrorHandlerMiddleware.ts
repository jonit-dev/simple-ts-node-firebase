export const errorHandlerMiddleware = function (err, req, res, next): any {
  console.log(err.stack);
  console.log("ERROR MIDDLEWARE WAS TRIGGERED");

  if (err.statusCode) {
    return res.status(err.statusCode).send(err);
  }

  next();
};
