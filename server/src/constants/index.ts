export const SuccessMessages = {
  MONGO_CONNECTION_SUCCESS: "MongoDB connected successfully",
  SIGNOUT_SUCCESS: "You have been successfully signed out.",
  SIGNIN_SUCCESS: "Welcome back! You have signed in successfully.",
  SIGNUP_SUCCESS: "Registration successful! Welcome aboard!",
  REFRESH_TOKEN_SUCCESS: "Refresh token successfully",
  PRODUCT_DELETED_SUCCESS: "Product deleted successfully",
};
export const ErrorMessages = {
  MONGO_ENV_NOT_DEFINED: "MONGO_DB_URI environment variable not defined",
  MONGO_CONNECTION_ERROR: "MongoDB connection error: ",
  INVALID_ID: "The ID you entered is invalid.",
  USER_NOT_FOUND:
    "We couldn't find a user with that information. Please check and try again.",
  USER_ALREADY_EXISTS:
    "An account with this email already exists. Please try using a different one.",
  INVALID_PASSWORD: "The password you entered is incorrect. Please try again.",
  INVALID_TOKEN: "The token you entered is invalid. Please try again.",
  UNAUTHORIZED: "You are not authorized to perform this action.",
  NO_FEATURED_PRODUCTS_FOUND: "No featured products found.",
  PRODUCT_NOT_FOUND: "Product not found.",
  INTERNAL_SERVER_ERROR: "Oops! Something went wrong. Please try again later.",
  ITEM_NOT_FOUND_IN_CART: "Item not found in cart",
};

export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER = 500,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
}
