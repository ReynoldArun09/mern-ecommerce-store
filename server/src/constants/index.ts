export enum GlobalSuccessMessages {
  DEV_SERVER_STARTED = "Development server started successfully",
  SERVER_STARTED = "Server started successfully",
  MONGO_CONNECTION_SUCCESS = "MongoDB connected successfully",
}
export enum GlobalErrorMessages {
  DEV_SERVER_FAILED_TO_START = "Failed to start development server",
  SERVER_FAILED_TO_START = "Failed to start server",
  ENV_PARSE_ERROR = "Error parsing environment variables:",
  ROUTE_NOT_FOUND = "Route not found",
  MONGO_ENV_NOT_DEFINED = "MONGO_DB_URI environment variable not defined",
  MONGO_CONNECTION_ERROR = "MongoDB connection error: ",
  INVALID_ID = "The ID you entered is invalid.",
  INTERNAL_SERVER_ERROR = "Oops! Something went wrong. Please try again later.",
  UNAUTHORIZED = "You are not authorized to perform this action.",
}

export enum ValidationMessages {
  MONGO_DB_URI_REQUIRED = "MongoDB URI is required",
  ACCESS_TOKEN_SECRET_LENGTH = "Access token secret must be at least 10 characters",
  REFRESH_TOKEN_SECRET_LENGTH = "Refresh token secret must be at least 10 characters",
  CORS_ORIGIN_REQUIRED = "CORS Origin must be provided",
  CLOUDINARY_CLOUD_NAME_REQUIRED = "Cloudinary Cloud Name is required",
  CLOUDINARY_API_KEY_REQUIRED = "Cloudinary API Key is required",
  CLOUDINARY_API_SECRET_REQUIRED = "Cloudinary API Secret is required",
  STRIPE_SECRET_KEY_REQUIRED = "Stripe Secret Key is required",
}

export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER = 500,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
}

export enum ApiSuccessMessages {
  SIGNOUT_SUCCESS = "You have been successfully signed out.",
  SIGNIN_SUCCESS = "Welcome back! You have signed in successfully.",
  SIGNUP_SUCCESS = "Registration successful! Welcome aboard!",
  REFRESH_TOKEN_SUCCESS = "Refresh token successfully",
  PRODUCT_DELETED_SUCCESS = "Product deleted successfully",
  CART_SYNC_SUCCESS = "Cart synchronized successfully",
  PURCHASE_SUCCESS = "payment successful",
}

export enum ApiErrorMessages {
  USER_NOT_FOUND = "We couldn't find a user with that information. Please check and try again.",
  USER_ALREADY_EXISTS = "An account with this email already exists. Please try using a different one.",
  INVALID_PASSWORD = "The password you entered is incorrect. Please try again.",
  INVALID_TOKEN = "The token you entered is invalid. Please try again.",
  NO_FEATURED_PRODUCTS_FOUND = "No featured products found.",
  PRODUCT_NOT_FOUND = "Product not found.",
  ITEM_NOT_FOUND_IN_CART = "Item not found in cart",
  COUPON_EXPIRED = "Coupon Expired",
  COUPON_NOT_FOUND = "Coupon not found",
  INVALID_EMPTY_PRODUCTS = "Invalid or empty products array",
}
