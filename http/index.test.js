const { getStatusText } = require('http-status-codes');

const {
  BadGateway,
  BadRequest,
  Conflict,
  ExpectationFailed,
  FailedDependency,
  Forbidden,
  GatewayTimeout,
  Gone,
  HTTPVersionNotSupported,
  ImATeapot,
  InsufficientSpaceOnResource,
  InsufficientStorage,
  InternalServerError,
  LengthRequired,
  Locked,
  MethodFailure,
  MethodNotAllowed,
  NetworkAuthenticationRequired,
  NotAcceptable,
  NotFound,
  NotImplemented,
  PaymentRequired,
  PreconditionFailed,
  PreconditionRequired,
  ProxyAuthenticationRequired,
  RequestHeaderFieldsTooLarge,
  RequestTimeout,
  RequestTooLong,
  RequestURITooLong,
  RequestedRangeNotSatisfiable,
  ServiceUnavailable,
  TooManyRequests,
  Unauthorized,
  UnprocessableEntity,
  UnsupportedMediaType
} = require('./index');

const _isFactoryFunction = error => () => expect(error).toBeInstanceOf(Function);
const _isInstanceOfError = error => () => expect(error()).toBeInstanceOf(Error);
const _hasExpectedHTTPStatusCode = (error, expectedCode) => () => expect(error().statusCode).toBe(expectedCode);

const _hasFallbackMessage = error => () => {
  const { message, statusCode } = error();

  expect(message).toBe(getStatusText(statusCode));
};

const _acceptsCustomErrorMessage = error => () => {
  const randomMessage = String(Math.random());

  expect(error(randomMessage).message).toBe(randomMessage);
};

const _hasCorrectErrorName = (error, name) => () => expect(error().name).toBe(name);

describe('BadGatewayError', () => {
  test('is factory function', _isFactoryFunction(BadGateway));
  test('returns an Error instance', _isInstanceOfError(BadGateway));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(BadGateway, 502));
  test('has fallback message if none provided', _hasFallbackMessage(BadGateway));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(BadGateway));
  test('has expected error name', _hasCorrectErrorName(BadGateway, `BadGatewayError`));
});

describe('BadRequestError', () => {
  test('is factory function', _isFactoryFunction(BadRequest));
  test('returns an Error instance', _isInstanceOfError(BadRequest));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(BadRequest, 400));
  test('has fallback message if none provided', _hasFallbackMessage(BadRequest));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(BadRequest));
  test('has expected error name', _hasCorrectErrorName(BadRequest, `BadRequestError`));
});

describe('ConflictError', () => {
  test('is factory function', _isFactoryFunction(Conflict));
  test('returns an Error instance', _isInstanceOfError(Conflict));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(Conflict, 409));
  test('has fallback message if none provided', _hasFallbackMessage(Conflict));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(Conflict));
  test('has expected error name', _hasCorrectErrorName(Conflict, `ConflictError`));
});

  describe('ExpectationFailedError', () => {
  test('is factory function', _isFactoryFunction(ExpectationFailed));
  test('returns an Error instance', _isInstanceOfError(ExpectationFailed));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(ExpectationFailed, 417));
  test('has fallback message if none provided', _hasFallbackMessage(ExpectationFailed));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(ExpectationFailed));
  test('has expected error name', _hasCorrectErrorName(ExpectationFailed, `ExpectationFailedError`));
});

describe('FailedDependencyError', () => {
  test('is factory function', _isFactoryFunction(FailedDependency));
  test('returns an Error instance', _isInstanceOfError(FailedDependency));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(FailedDependency, 424));
  test('has fallback message if none provided', _hasFallbackMessage(FailedDependency));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(FailedDependency));
  test('has expected error name', _hasCorrectErrorName(FailedDependency, `FailedDependencyError`));
});

describe('ForbiddenError', () => {
  test('is factory function', _isFactoryFunction(Forbidden));
  test('returns an Error instance', _isInstanceOfError(Forbidden));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(Forbidden, 403));
  test('has fallback message if none provided', _hasFallbackMessage(Forbidden));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(Forbidden));
  test('has expected error name', _hasCorrectErrorName(Forbidden, `ForbiddenError`));
});

describe('GatewayTimeoutError', () => {
  test('is factory function', _isFactoryFunction(GatewayTimeout));
  test('returns an Error instance', _isInstanceOfError(GatewayTimeout));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(GatewayTimeout, 504));
  test('has fallback message if none provided', _hasFallbackMessage(GatewayTimeout));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(GatewayTimeout));
  test('has expected error name', _hasCorrectErrorName(GatewayTimeout, `GatewayTimeoutError`));
});

describe('GoneError', () => {
  test('is factory function', _isFactoryFunction(Gone));
  test('returns an Error instance', _isInstanceOfError(Gone));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(Gone, 410));
  test('has fallback message if none provided', _hasFallbackMessage(Gone));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(Gone));
  test('has expected error name', _hasCorrectErrorName(Gone, `GoneError`));
});

describe('HTTPVersionNotSupportedError', () => {
  test('is factory function', _isFactoryFunction(HTTPVersionNotSupported));
  test('returns an Error instance', _isInstanceOfError(HTTPVersionNotSupported));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(HTTPVersionNotSupported, 505));
  test('has fallback message if none provided', _hasFallbackMessage(HTTPVersionNotSupported));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(HTTPVersionNotSupported));
  test('has expected error name', _hasCorrectErrorName(HTTPVersionNotSupported, `HTTPVersionNotSupportedError`));
});

describe('ImATeapotError', () => {
  test('is factory function', _isFactoryFunction(ImATeapot));
  test('returns an Error instance', _isInstanceOfError(ImATeapot));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(ImATeapot, 418));
  test('has fallback message if none provided', _hasFallbackMessage(ImATeapot));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(ImATeapot));
  test('has expected error name', _hasCorrectErrorName(ImATeapot, `ImATeapotError`));
});

describe('InsufficientSpaceOnResourceError', () => {
  test('is factory function', _isFactoryFunction(InsufficientSpaceOnResource));
  test('returns an Error instance', _isInstanceOfError(InsufficientSpaceOnResource));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(InsufficientSpaceOnResource, 419));
  test('has fallback message if none provided', _hasFallbackMessage(InsufficientSpaceOnResource));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(InsufficientSpaceOnResource));
  test('has expected error name', _hasCorrectErrorName(InsufficientSpaceOnResource, `InsufficientSpaceOnResourceError`));
});

describe('InsufficientStorageError', () => {
  test('is factory function', _isFactoryFunction(InsufficientStorage));
  test('returns an Error instance', _isInstanceOfError(InsufficientStorage));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(InsufficientStorage, 507));
  test('has fallback message if none provided', _hasFallbackMessage(InsufficientStorage));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(InsufficientStorage));
  test('has expected error name', _hasCorrectErrorName(InsufficientStorage, `InsufficientStorageError`));
});

describe('InternalServerError', () => {
  test('is factory function', _isFactoryFunction(InternalServerError));
  test('returns an Error instance', _isInstanceOfError(InternalServerError));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(InternalServerError, 500));
  test('has fallback message if none provided', _hasFallbackMessage(InternalServerError));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(InternalServerError));
  test('has expected error name', _hasCorrectErrorName(InternalServerError, `InternalServerError`));
});

describe('LengthRequiredError', () => {
  test('is factory function', _isFactoryFunction(LengthRequired));
  test('returns an Error instance', _isInstanceOfError(LengthRequired));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(LengthRequired, 411));
  test('has fallback message if none provided', _hasFallbackMessage(LengthRequired));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(LengthRequired));
  test('has expected error name', _hasCorrectErrorName(LengthRequired, `LengthRequiredError`));
});

describe('LockedError', () => {
  test('is factory function', _isFactoryFunction(Locked));
  test('returns an Error instance', _isInstanceOfError(Locked));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(Locked, 423));
  test('has fallback message if none provided', _hasFallbackMessage(Locked));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(Locked));
  test('has expected error name', _hasCorrectErrorName(Locked, `LockedError`));
});

describe('MethodFailureError', () => {
  test('is factory function', _isFactoryFunction(MethodFailure));
  test('returns an Error instance', _isInstanceOfError(MethodFailure));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(MethodFailure, 420));
  test('has fallback message if none provided', _hasFallbackMessage(MethodFailure));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(MethodFailure));
  test('has expected error name', _hasCorrectErrorName(MethodFailure, `MethodFailureError`));
});

describe('MethodNotAllowedError', () => {
  test('is factory function', _isFactoryFunction(MethodNotAllowed));
  test('returns an Error instance', _isInstanceOfError(MethodNotAllowed));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(MethodNotAllowed, 405));
  test('has fallback message if none provided', _hasFallbackMessage(MethodNotAllowed));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(MethodNotAllowed));
  test('has expected error name', _hasCorrectErrorName(MethodNotAllowed, `MethodNotAllowedError`));
});

describe('NetworkAuthenticationRequiredError', () => {
  test('is factory function', _isFactoryFunction(NetworkAuthenticationRequired));
  test('returns an Error instance', _isInstanceOfError(NetworkAuthenticationRequired));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(NetworkAuthenticationRequired, 511));
  test('has fallback message if none provided', _hasFallbackMessage(NetworkAuthenticationRequired));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(NetworkAuthenticationRequired));
  test('has expected error name', _hasCorrectErrorName(NetworkAuthenticationRequired, `NetworkAuthenticationRequiredError`));
});

describe('NotAcceptableError', () => {
  test('is factory function', _isFactoryFunction(NotAcceptable));
  test('returns an Error instance', _isInstanceOfError(NotAcceptable));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(NotAcceptable, 406));
  test('has fallback message if none provided', _hasFallbackMessage(NotAcceptable));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(NotAcceptable));
  test('has expected error name', _hasCorrectErrorName(NotAcceptable, `NotAcceptableError`));
});

describe('NotFoundError', () => {
  test('is factory function', _isFactoryFunction(NotFound));
  test('returns an Error instance', _isInstanceOfError(NotFound));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(NotFound, 404));
  test('has fallback message if none provided', _hasFallbackMessage(NotFound));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(NotFound));
  test('has expected error name', _hasCorrectErrorName(NotFound, `NotFoundError`));
});

describe('NotImplementedError', () => {
  test('is factory function', _isFactoryFunction(NotImplemented));
  test('returns an Error instance', _isInstanceOfError(NotImplemented));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(NotImplemented, 501));
  test('has fallback message if none provided', _hasFallbackMessage(NotImplemented));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(NotImplemented));
  test('has expected error name', _hasCorrectErrorName(NotImplemented, `NotImplementedError`));
});

describe('PaymentRequiredError', () => {
  test('is factory function', _isFactoryFunction(PaymentRequired));
  test('returns an Error instance', _isInstanceOfError(PaymentRequired));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(PaymentRequired, 402));
  test('has fallback message if none provided', _hasFallbackMessage(PaymentRequired));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(PaymentRequired));
  test('has expected error name', _hasCorrectErrorName(PaymentRequired, `PaymentRequiredError`));
});

describe('PreconditionFailedError', () => {
  test('is factory function', _isFactoryFunction(PreconditionFailed));
  test('returns an Error instance', _isInstanceOfError(PreconditionFailed));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(PreconditionFailed, 412));
  test('has fallback message if none provided', _hasFallbackMessage(PreconditionFailed));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(PreconditionFailed));
  test('has expected error name', _hasCorrectErrorName(PreconditionFailed, `PreconditionFailedError`));
});

describe('PreconditionRequiredError', () => {
  test('is factory function', _isFactoryFunction(PreconditionRequired));
  test('returns an Error instance', _isInstanceOfError(PreconditionRequired));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(PreconditionRequired, 428));
  test('has fallback message if none provided', _hasFallbackMessage(PreconditionRequired));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(PreconditionRequired));
  test('has expected error name', _hasCorrectErrorName(PreconditionRequired, `PreconditionRequiredError`));
});

describe('ProxyAuthenticationRequiredError', () => {
  test('is factory function', _isFactoryFunction(ProxyAuthenticationRequired));
  test('returns an Error instance', _isInstanceOfError(ProxyAuthenticationRequired));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(ProxyAuthenticationRequired, 407));
  test('has fallback message if none provided', _hasFallbackMessage(ProxyAuthenticationRequired));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(ProxyAuthenticationRequired));
  test('has expected error name', _hasCorrectErrorName(ProxyAuthenticationRequired, `ProxyAuthenticationRequiredError`));
});

describe('RequestHeaderFieldsTooLargeError', () => {
  test('is factory function', _isFactoryFunction(RequestHeaderFieldsTooLarge));
  test('returns an Error instance', _isInstanceOfError(RequestHeaderFieldsTooLarge));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(RequestHeaderFieldsTooLarge, 431));
  test('has fallback message if none provided', _hasFallbackMessage(RequestHeaderFieldsTooLarge));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(RequestHeaderFieldsTooLarge));
  test('has expected error name', _hasCorrectErrorName(RequestHeaderFieldsTooLarge, `RequestHeaderFieldsTooLargeError`));
});

describe('RequestTimeoutError', () => {
  test('is factory function', _isFactoryFunction(RequestTimeout));
  test('returns an Error instance', _isInstanceOfError(RequestTimeout));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(RequestTimeout, 408));
  test('has fallback message if none provided', _hasFallbackMessage(RequestTimeout));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(RequestTimeout));
  test('has expected error name', _hasCorrectErrorName(RequestTimeout, `RequestTimeoutError`));
});

describe('RequestTooLongError', () => {
  test('is factory function', _isFactoryFunction(RequestTooLong));
  test('returns an Error instance', _isInstanceOfError(RequestTooLong));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(RequestTooLong, 413));
  test('has fallback message if none provided', _hasFallbackMessage(RequestTooLong));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(RequestTooLong));
  test('has expected error name', _hasCorrectErrorName(RequestTooLong, `RequestTooLongError`));
});

describe('RequestURITooLongError', () => {
  test('is factory function', _isFactoryFunction(RequestURITooLong));
  test('returns an Error instance', _isInstanceOfError(RequestURITooLong));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(RequestURITooLong, 414));
  test('has fallback message if none provided', _hasFallbackMessage(RequestURITooLong));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(RequestURITooLong));
  test('has expected error name', _hasCorrectErrorName(RequestURITooLong, `RequestURITooLongError`));
});

describe('RequestedRangeNotSatisfiableError', () => {
  test('is factory function', _isFactoryFunction(RequestedRangeNotSatisfiable));
  test('returns an Error instance', _isInstanceOfError(RequestedRangeNotSatisfiable));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(RequestedRangeNotSatisfiable, 416));
  test('has fallback message if none provided', _hasFallbackMessage(RequestedRangeNotSatisfiable));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(RequestedRangeNotSatisfiable));
  test('has expected error name', _hasCorrectErrorName(RequestedRangeNotSatisfiable, `RequestedRangeNotSatisfiableError`));
});

describe('ServiceUnavailableError', () => {
  test('is factory function', _isFactoryFunction(ServiceUnavailable));
  test('returns an Error instance', _isInstanceOfError(ServiceUnavailable));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(ServiceUnavailable, 503));
  test('has fallback message if none provided', _hasFallbackMessage(ServiceUnavailable));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(ServiceUnavailable));
  test('has expected error name', _hasCorrectErrorName(ServiceUnavailable, `ServiceUnavailableError`));
});

describe('TooManyRequestsError', () => {
  test('is factory function', _isFactoryFunction(TooManyRequests));
  test('returns an Error instance', _isInstanceOfError(TooManyRequests));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(TooManyRequests, 429));
  test('has fallback message if none provided', _hasFallbackMessage(TooManyRequests));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(TooManyRequests));
  test('has expected error name', _hasCorrectErrorName(TooManyRequests, `TooManyRequestsError`));
});

describe('UnauthorizedError', () => {
  test('is factory function', _isFactoryFunction(Unauthorized));
  test('returns an Error instance', _isInstanceOfError(Unauthorized));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(Unauthorized, 401));
  test('has fallback message if none provided', _hasFallbackMessage(Unauthorized));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(Unauthorized));
  test('has expected error name', _hasCorrectErrorName(Unauthorized, `UnauthorizedError`));
});

describe('UnprocessableEntityError', () => {
  test('is factory function', _isFactoryFunction(UnprocessableEntity));
  test('returns an Error instance', _isInstanceOfError(UnprocessableEntity));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(UnprocessableEntity, 422));
  test('has fallback message if none provided', _hasFallbackMessage(UnprocessableEntity));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(UnprocessableEntity));
  test('has expected error name', _hasCorrectErrorName(UnprocessableEntity, `UnprocessableEntityError`));
});

describe('UnsupportedMediaTypeError', () => {
  test('is factory function', _isFactoryFunction(UnsupportedMediaType));
  test('returns an Error instance', _isInstanceOfError(UnsupportedMediaType));
  test('has expected HTTP status code', _hasExpectedHTTPStatusCode(UnsupportedMediaType, 415));
  test('has fallback message if none provided', _hasFallbackMessage(UnsupportedMediaType));
  test('returns custom error message if provided', _acceptsCustomErrorMessage(UnsupportedMediaType));
  test('has expected error name', _hasCorrectErrorName(UnsupportedMediaType, `UnsupportedMediaTypeError`));
});
