# errors

# Errors

Currently exports a single HTTP errors module.

`yarn install @vidglo/errors`

The following are equivalent.

```js
const errors = require('@vidglo/errors/http');
const errors = require('@vidglo/errors').http;
import errors from '@vidglo/errors/http';
```

Each exported error takes a single string argument, and returns an instance of `Error` with an additional `statusCode` property.

```js
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
  UnsupportedMediaType,
} = require('@vidglo/errors/http');


  const badGatewayError = BadGateway();
  
  badGatewayError.toString() === 'BadGatewayError: Bad Gateway';
  badGatewayError.name === 'BadGatewayError';
  badGatewayError.statusCode === 502;
  badGatewayError.message === 'Bad Gateway';

  const customBadGatewayError = BadGateway('A custom error message');

  customBadGatewayError.toString() === 'BadGatewayError: A custom error message';
  customBadGatewayError.name === 'BadGatewayError';
  customBadGatewayError.statusCode === 502;
  customBadGatewayError.message === 'A custom error message';
  

  const badRequestError = BadRequest();
  
  badRequestError.toString() === 'BadRequestError: Bad Request';
  badRequestError.name === 'BadRequestError';
  badRequestError.statusCode === 400;
  badRequestError.message === 'Bad Request';

  const customBadRequestError = BadRequest('A custom error message');

  customBadRequestError.toString() === 'BadRequestError: A custom error message';
  customBadRequestError.name === 'BadRequestError';
  customBadRequestError.statusCode === 400;
  customBadRequestError.message === 'A custom error message';
  

  const conflictError = Conflict();
  
  conflictError.toString() === 'ConflictError: Conflict';
  conflictError.name === 'ConflictError';
  conflictError.statusCode === 409;
  conflictError.message === 'Conflict';

  const customConflictError = Conflict('A custom error message');

  customConflictError.toString() === 'ConflictError: A custom error message';
  customConflictError.name === 'ConflictError';
  customConflictError.statusCode === 409;
  customConflictError.message === 'A custom error message';
  

  const expectationFailedError = ExpectationFailed();
  
  expectationFailedError.toString() === 'ExpectationFailedError: Expectation Failed';
  expectationFailedError.name === 'ExpectationFailedError';
  expectationFailedError.statusCode === 417;
  expectationFailedError.message === 'Expectation Failed';

  const customExpectationFailedError = ExpectationFailed('A custom error message');

  customExpectationFailedError.toString() === 'ExpectationFailedError: A custom error message';
  customExpectationFailedError.name === 'ExpectationFailedError';
  customExpectationFailedError.statusCode === 417;
  customExpectationFailedError.message === 'A custom error message';
  

  const failedDependencyError = FailedDependency();
  
  failedDependencyError.toString() === 'FailedDependencyError: Failed Dependency';
  failedDependencyError.name === 'FailedDependencyError';
  failedDependencyError.statusCode === 424;
  failedDependencyError.message === 'Failed Dependency';

  const customFailedDependencyError = FailedDependency('A custom error message');

  customFailedDependencyError.toString() === 'FailedDependencyError: A custom error message';
  customFailedDependencyError.name === 'FailedDependencyError';
  customFailedDependencyError.statusCode === 424;
  customFailedDependencyError.message === 'A custom error message';
  

  const forbiddenError = Forbidden();
  
  forbiddenError.toString() === 'ForbiddenError: Forbidden';
  forbiddenError.name === 'ForbiddenError';
  forbiddenError.statusCode === 403;
  forbiddenError.message === 'Forbidden';

  const customForbiddenError = Forbidden('A custom error message');

  customForbiddenError.toString() === 'ForbiddenError: A custom error message';
  customForbiddenError.name === 'ForbiddenError';
  customForbiddenError.statusCode === 403;
  customForbiddenError.message === 'A custom error message';
  

  const gatewayTimeoutError = GatewayTimeout();
  
  gatewayTimeoutError.toString() === 'GatewayTimeoutError: Gateway Timeout';
  gatewayTimeoutError.name === 'GatewayTimeoutError';
  gatewayTimeoutError.statusCode === 504;
  gatewayTimeoutError.message === 'Gateway Timeout';

  const customGatewayTimeoutError = GatewayTimeout('A custom error message');

  customGatewayTimeoutError.toString() === 'GatewayTimeoutError: A custom error message';
  customGatewayTimeoutError.name === 'GatewayTimeoutError';
  customGatewayTimeoutError.statusCode === 504;
  customGatewayTimeoutError.message === 'A custom error message';
  

  const goneError = Gone();
  
  goneError.toString() === 'GoneError: Gone';
  goneError.name === 'GoneError';
  goneError.statusCode === 410;
  goneError.message === 'Gone';

  const customGoneError = Gone('A custom error message');

  customGoneError.toString() === 'GoneError: A custom error message';
  customGoneError.name === 'GoneError';
  customGoneError.statusCode === 410;
  customGoneError.message === 'A custom error message';
  

  const hTTPVersionNotSupportedError = HTTPVersionNotSupported();
  
  hTTPVersionNotSupportedError.toString() === 'HTTPVersionNotSupportedError: HTTP Version Not Supported';
  hTTPVersionNotSupportedError.name === 'HTTPVersionNotSupportedError';
  hTTPVersionNotSupportedError.statusCode === 505;
  hTTPVersionNotSupportedError.message === 'HTTP Version Not Supported';

  const customHTTPVersionNotSupportedError = HTTPVersionNotSupported('A custom error message');

  customHTTPVersionNotSupportedError.toString() === 'HTTPVersionNotSupportedError: A custom error message';
  customHTTPVersionNotSupportedError.name === 'HTTPVersionNotSupportedError';
  customHTTPVersionNotSupportedError.statusCode === 505;
  customHTTPVersionNotSupportedError.message === 'A custom error message';
  

  const imATeapotError = ImATeapot();
  
  imATeapotError.toString() === 'ImATeapotError: I'm a teapot';
  imATeapotError.name === 'ImATeapotError';
  imATeapotError.statusCode === 418;
  imATeapotError.message === 'I'm a teapot';

  const customImATeapotError = ImATeapot('A custom error message');

  customImATeapotError.toString() === 'ImATeapotError: A custom error message';
  customImATeapotError.name === 'ImATeapotError';
  customImATeapotError.statusCode === 418;
  customImATeapotError.message === 'A custom error message';
  

  const insufficientSpaceOnResourceError = InsufficientSpaceOnResource();
  
  insufficientSpaceOnResourceError.toString() === 'InsufficientSpaceOnResourceError: Insufficient Space on Resource';
  insufficientSpaceOnResourceError.name === 'InsufficientSpaceOnResourceError';
  insufficientSpaceOnResourceError.statusCode === 419;
  insufficientSpaceOnResourceError.message === 'Insufficient Space on Resource';

  const customInsufficientSpaceOnResourceError = InsufficientSpaceOnResource('A custom error message');

  customInsufficientSpaceOnResourceError.toString() === 'InsufficientSpaceOnResourceError: A custom error message';
  customInsufficientSpaceOnResourceError.name === 'InsufficientSpaceOnResourceError';
  customInsufficientSpaceOnResourceError.statusCode === 419;
  customInsufficientSpaceOnResourceError.message === 'A custom error message';
  

  const insufficientStorageError = InsufficientStorage();
  
  insufficientStorageError.toString() === 'InsufficientStorageError: Insufficient Storage';
  insufficientStorageError.name === 'InsufficientStorageError';
  insufficientStorageError.statusCode === 507;
  insufficientStorageError.message === 'Insufficient Storage';

  const customInsufficientStorageError = InsufficientStorage('A custom error message');

  customInsufficientStorageError.toString() === 'InsufficientStorageError: A custom error message';
  customInsufficientStorageError.name === 'InsufficientStorageError';
  customInsufficientStorageError.statusCode === 507;
  customInsufficientStorageError.message === 'A custom error message';
  

  const internalServerError = InternalServerError();
  
  internalServerError.toString() === 'InternalServerError: Server Error';
  internalServerError.name === 'InternalServerError';
  internalServerError.statusCode === 500;
  internalServerError.message === 'Server Error';

  const customInternalServerError = InternalServerError('A custom error message');

  customInternalServerError.toString() === 'InternalServerError: A custom error message';
  customInternalServerError.name === 'InternalServerError';
  customInternalServerError.statusCode === 500;
  customInternalServerError.message === 'A custom error message';
  

  const lengthRequiredError = LengthRequired();
  
  lengthRequiredError.toString() === 'LengthRequiredError: Length Required';
  lengthRequiredError.name === 'LengthRequiredError';
  lengthRequiredError.statusCode === 411;
  lengthRequiredError.message === 'Length Required';

  const customLengthRequiredError = LengthRequired('A custom error message');

  customLengthRequiredError.toString() === 'LengthRequiredError: A custom error message';
  customLengthRequiredError.name === 'LengthRequiredError';
  customLengthRequiredError.statusCode === 411;
  customLengthRequiredError.message === 'A custom error message';
  

  const lockedError = Locked();
  
  lockedError.toString() === 'LockedError: Locked';
  lockedError.name === 'LockedError';
  lockedError.statusCode === 423;
  lockedError.message === 'Locked';

  const customLockedError = Locked('A custom error message');

  customLockedError.toString() === 'LockedError: A custom error message';
  customLockedError.name === 'LockedError';
  customLockedError.statusCode === 423;
  customLockedError.message === 'A custom error message';
  

  const methodFailureError = MethodFailure();
  
  methodFailureError.toString() === 'MethodFailureError: Method Failure';
  methodFailureError.name === 'MethodFailureError';
  methodFailureError.statusCode === 420;
  methodFailureError.message === 'Method Failure';

  const customMethodFailureError = MethodFailure('A custom error message');

  customMethodFailureError.toString() === 'MethodFailureError: A custom error message';
  customMethodFailureError.name === 'MethodFailureError';
  customMethodFailureError.statusCode === 420;
  customMethodFailureError.message === 'A custom error message';
  

  const methodNotAllowedError = MethodNotAllowed();
  
  methodNotAllowedError.toString() === 'MethodNotAllowedError: Method Not Allowed';
  methodNotAllowedError.name === 'MethodNotAllowedError';
  methodNotAllowedError.statusCode === 405;
  methodNotAllowedError.message === 'Method Not Allowed';

  const customMethodNotAllowedError = MethodNotAllowed('A custom error message');

  customMethodNotAllowedError.toString() === 'MethodNotAllowedError: A custom error message';
  customMethodNotAllowedError.name === 'MethodNotAllowedError';
  customMethodNotAllowedError.statusCode === 405;
  customMethodNotAllowedError.message === 'A custom error message';
  

  const networkAuthenticationRequiredError = NetworkAuthenticationRequired();
  
  networkAuthenticationRequiredError.toString() === 'NetworkAuthenticationRequiredError: Network Authentication Required';
  networkAuthenticationRequiredError.name === 'NetworkAuthenticationRequiredError';
  networkAuthenticationRequiredError.statusCode === 511;
  networkAuthenticationRequiredError.message === 'Network Authentication Required';

  const customNetworkAuthenticationRequiredError = NetworkAuthenticationRequired('A custom error message');

  customNetworkAuthenticationRequiredError.toString() === 'NetworkAuthenticationRequiredError: A custom error message';
  customNetworkAuthenticationRequiredError.name === 'NetworkAuthenticationRequiredError';
  customNetworkAuthenticationRequiredError.statusCode === 511;
  customNetworkAuthenticationRequiredError.message === 'A custom error message';
  

  const notAcceptableError = NotAcceptable();
  
  notAcceptableError.toString() === 'NotAcceptableError: Not Acceptable';
  notAcceptableError.name === 'NotAcceptableError';
  notAcceptableError.statusCode === 406;
  notAcceptableError.message === 'Not Acceptable';

  const customNotAcceptableError = NotAcceptable('A custom error message');

  customNotAcceptableError.toString() === 'NotAcceptableError: A custom error message';
  customNotAcceptableError.name === 'NotAcceptableError';
  customNotAcceptableError.statusCode === 406;
  customNotAcceptableError.message === 'A custom error message';
  

  const notFoundError = NotFound();
  
  notFoundError.toString() === 'NotFoundError: Not Found';
  notFoundError.name === 'NotFoundError';
  notFoundError.statusCode === 404;
  notFoundError.message === 'Not Found';

  const customNotFoundError = NotFound('A custom error message');

  customNotFoundError.toString() === 'NotFoundError: A custom error message';
  customNotFoundError.name === 'NotFoundError';
  customNotFoundError.statusCode === 404;
  customNotFoundError.message === 'A custom error message';
  

  const notImplementedError = NotImplemented();
  
  notImplementedError.toString() === 'NotImplementedError: Not Implemented';
  notImplementedError.name === 'NotImplementedError';
  notImplementedError.statusCode === 501;
  notImplementedError.message === 'Not Implemented';

  const customNotImplementedError = NotImplemented('A custom error message');

  customNotImplementedError.toString() === 'NotImplementedError: A custom error message';
  customNotImplementedError.name === 'NotImplementedError';
  customNotImplementedError.statusCode === 501;
  customNotImplementedError.message === 'A custom error message';
  

  const paymentRequiredError = PaymentRequired();
  
  paymentRequiredError.toString() === 'PaymentRequiredError: Payment Required';
  paymentRequiredError.name === 'PaymentRequiredError';
  paymentRequiredError.statusCode === 402;
  paymentRequiredError.message === 'Payment Required';

  const customPaymentRequiredError = PaymentRequired('A custom error message');

  customPaymentRequiredError.toString() === 'PaymentRequiredError: A custom error message';
  customPaymentRequiredError.name === 'PaymentRequiredError';
  customPaymentRequiredError.statusCode === 402;
  customPaymentRequiredError.message === 'A custom error message';
  

  const preconditionFailedError = PreconditionFailed();
  
  preconditionFailedError.toString() === 'PreconditionFailedError: Precondition Failed';
  preconditionFailedError.name === 'PreconditionFailedError';
  preconditionFailedError.statusCode === 412;
  preconditionFailedError.message === 'Precondition Failed';

  const customPreconditionFailedError = PreconditionFailed('A custom error message');

  customPreconditionFailedError.toString() === 'PreconditionFailedError: A custom error message';
  customPreconditionFailedError.name === 'PreconditionFailedError';
  customPreconditionFailedError.statusCode === 412;
  customPreconditionFailedError.message === 'A custom error message';
  

  const preconditionRequiredError = PreconditionRequired();
  
  preconditionRequiredError.toString() === 'PreconditionRequiredError: Precondition Required';
  preconditionRequiredError.name === 'PreconditionRequiredError';
  preconditionRequiredError.statusCode === 428;
  preconditionRequiredError.message === 'Precondition Required';

  const customPreconditionRequiredError = PreconditionRequired('A custom error message');

  customPreconditionRequiredError.toString() === 'PreconditionRequiredError: A custom error message';
  customPreconditionRequiredError.name === 'PreconditionRequiredError';
  customPreconditionRequiredError.statusCode === 428;
  customPreconditionRequiredError.message === 'A custom error message';
  

  const proxyAuthenticationRequiredError = ProxyAuthenticationRequired();
  
  proxyAuthenticationRequiredError.toString() === 'ProxyAuthenticationRequiredError: Proxy Authentication Required';
  proxyAuthenticationRequiredError.name === 'ProxyAuthenticationRequiredError';
  proxyAuthenticationRequiredError.statusCode === 407;
  proxyAuthenticationRequiredError.message === 'Proxy Authentication Required';

  const customProxyAuthenticationRequiredError = ProxyAuthenticationRequired('A custom error message');

  customProxyAuthenticationRequiredError.toString() === 'ProxyAuthenticationRequiredError: A custom error message';
  customProxyAuthenticationRequiredError.name === 'ProxyAuthenticationRequiredError';
  customProxyAuthenticationRequiredError.statusCode === 407;
  customProxyAuthenticationRequiredError.message === 'A custom error message';
  

  const requestHeaderFieldsTooLargeError = RequestHeaderFieldsTooLarge();
  
  requestHeaderFieldsTooLargeError.toString() === 'RequestHeaderFieldsTooLargeError: Request Header Fields Too Large';
  requestHeaderFieldsTooLargeError.name === 'RequestHeaderFieldsTooLargeError';
  requestHeaderFieldsTooLargeError.statusCode === 431;
  requestHeaderFieldsTooLargeError.message === 'Request Header Fields Too Large';

  const customRequestHeaderFieldsTooLargeError = RequestHeaderFieldsTooLarge('A custom error message');

  customRequestHeaderFieldsTooLargeError.toString() === 'RequestHeaderFieldsTooLargeError: A custom error message';
  customRequestHeaderFieldsTooLargeError.name === 'RequestHeaderFieldsTooLargeError';
  customRequestHeaderFieldsTooLargeError.statusCode === 431;
  customRequestHeaderFieldsTooLargeError.message === 'A custom error message';
  

  const requestTimeoutError = RequestTimeout();
  
  requestTimeoutError.toString() === 'RequestTimeoutError: Request Timeout';
  requestTimeoutError.name === 'RequestTimeoutError';
  requestTimeoutError.statusCode === 408;
  requestTimeoutError.message === 'Request Timeout';

  const customRequestTimeoutError = RequestTimeout('A custom error message');

  customRequestTimeoutError.toString() === 'RequestTimeoutError: A custom error message';
  customRequestTimeoutError.name === 'RequestTimeoutError';
  customRequestTimeoutError.statusCode === 408;
  customRequestTimeoutError.message === 'A custom error message';
  

  const requestTooLongError = RequestTooLong();
  
  requestTooLongError.toString() === 'RequestTooLongError: Request Entity Too Large';
  requestTooLongError.name === 'RequestTooLongError';
  requestTooLongError.statusCode === 413;
  requestTooLongError.message === 'Request Entity Too Large';

  const customRequestTooLongError = RequestTooLong('A custom error message');

  customRequestTooLongError.toString() === 'RequestTooLongError: A custom error message';
  customRequestTooLongError.name === 'RequestTooLongError';
  customRequestTooLongError.statusCode === 413;
  customRequestTooLongError.message === 'A custom error message';
  

  const requestURITooLongError = RequestURITooLong();
  
  requestURITooLongError.toString() === 'RequestURITooLongError: Request-URI Too Long';
  requestURITooLongError.name === 'RequestURITooLongError';
  requestURITooLongError.statusCode === 414;
  requestURITooLongError.message === 'Request-URI Too Long';

  const customRequestURITooLongError = RequestURITooLong('A custom error message');

  customRequestURITooLongError.toString() === 'RequestURITooLongError: A custom error message';
  customRequestURITooLongError.name === 'RequestURITooLongError';
  customRequestURITooLongError.statusCode === 414;
  customRequestURITooLongError.message === 'A custom error message';
  

  const requestedRangeNotSatisfiableError = RequestedRangeNotSatisfiable();
  
  requestedRangeNotSatisfiableError.toString() === 'RequestedRangeNotSatisfiableError: Requested Range Not Satisfiable';
  requestedRangeNotSatisfiableError.name === 'RequestedRangeNotSatisfiableError';
  requestedRangeNotSatisfiableError.statusCode === 416;
  requestedRangeNotSatisfiableError.message === 'Requested Range Not Satisfiable';

  const customRequestedRangeNotSatisfiableError = RequestedRangeNotSatisfiable('A custom error message');

  customRequestedRangeNotSatisfiableError.toString() === 'RequestedRangeNotSatisfiableError: A custom error message';
  customRequestedRangeNotSatisfiableError.name === 'RequestedRangeNotSatisfiableError';
  customRequestedRangeNotSatisfiableError.statusCode === 416;
  customRequestedRangeNotSatisfiableError.message === 'A custom error message';
  

  const serviceUnavailableError = ServiceUnavailable();
  
  serviceUnavailableError.toString() === 'ServiceUnavailableError: Service Unavailable';
  serviceUnavailableError.name === 'ServiceUnavailableError';
  serviceUnavailableError.statusCode === 503;
  serviceUnavailableError.message === 'Service Unavailable';

  const customServiceUnavailableError = ServiceUnavailable('A custom error message');

  customServiceUnavailableError.toString() === 'ServiceUnavailableError: A custom error message';
  customServiceUnavailableError.name === 'ServiceUnavailableError';
  customServiceUnavailableError.statusCode === 503;
  customServiceUnavailableError.message === 'A custom error message';
  

  const tooManyRequestsError = TooManyRequests();
  
  tooManyRequestsError.toString() === 'TooManyRequestsError: Too Many Requests';
  tooManyRequestsError.name === 'TooManyRequestsError';
  tooManyRequestsError.statusCode === 429;
  tooManyRequestsError.message === 'Too Many Requests';

  const customTooManyRequestsError = TooManyRequests('A custom error message');

  customTooManyRequestsError.toString() === 'TooManyRequestsError: A custom error message';
  customTooManyRequestsError.name === 'TooManyRequestsError';
  customTooManyRequestsError.statusCode === 429;
  customTooManyRequestsError.message === 'A custom error message';
  

  const unauthorizedError = Unauthorized();
  
  unauthorizedError.toString() === 'UnauthorizedError: Unauthorized';
  unauthorizedError.name === 'UnauthorizedError';
  unauthorizedError.statusCode === 401;
  unauthorizedError.message === 'Unauthorized';

  const customUnauthorizedError = Unauthorized('A custom error message');

  customUnauthorizedError.toString() === 'UnauthorizedError: A custom error message';
  customUnauthorizedError.name === 'UnauthorizedError';
  customUnauthorizedError.statusCode === 401;
  customUnauthorizedError.message === 'A custom error message';
  

  const unprocessableEntityError = UnprocessableEntity();
  
  unprocessableEntityError.toString() === 'UnprocessableEntityError: Unprocessable Entity';
  unprocessableEntityError.name === 'UnprocessableEntityError';
  unprocessableEntityError.statusCode === 422;
  unprocessableEntityError.message === 'Unprocessable Entity';

  const customUnprocessableEntityError = UnprocessableEntity('A custom error message');

  customUnprocessableEntityError.toString() === 'UnprocessableEntityError: A custom error message';
  customUnprocessableEntityError.name === 'UnprocessableEntityError';
  customUnprocessableEntityError.statusCode === 422;
  customUnprocessableEntityError.message === 'A custom error message';
  

  const unsupportedMediaTypeError = UnsupportedMediaType();
  
  unsupportedMediaTypeError.toString() === 'UnsupportedMediaTypeError: Unsupported Media Type';
  unsupportedMediaTypeError.name === 'UnsupportedMediaTypeError';
  unsupportedMediaTypeError.statusCode === 415;
  unsupportedMediaTypeError.message === 'Unsupported Media Type';

  const customUnsupportedMediaTypeError = UnsupportedMediaType('A custom error message');

  customUnsupportedMediaTypeError.toString() === 'UnsupportedMediaTypeError: A custom error message';
  customUnsupportedMediaTypeError.name === 'UnsupportedMediaTypeError';
  customUnsupportedMediaTypeError.statusCode === 415;
  customUnsupportedMediaTypeError.message === 'A custom error message';
```
