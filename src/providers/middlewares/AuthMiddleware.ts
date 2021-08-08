import { HttpStatus } from "../../types/ServerTypes";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { firebaseHelper } from "../helpers/Firebase.helper";

const admin = firebaseHelper.admin;

const getAuthToken = (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    req.authToken = req.headers.authorization.split(" ")[1];
  } else {
    req.authToken = null;
  }
  next();
};

export const isAuthenticated = (req, res, next) => {
  getAuthToken(req, res, async () => {
    try {
      const { authToken } = req;
      const userInfo = await admin.auth().verifyIdToken(authToken);
      req.authId = userInfo.uid;
      return next();
    } catch (e) {
      return res
        .status(HttpStatus.Unauthorized)
        .send(
          new UnauthorizedError(
            "You're not allowed to access this resource! Please login."
          )
        );
    }
  });
};
