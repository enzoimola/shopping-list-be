export const errors = {
  INVALID_CREDENTIALS: {
    httpCode: 400,
    errorCode: 400_000,
    description: 'Credenciales no válidas',
  },
  INVALID_TOKEN: {
    httpCode: 400,
    errorCode: 400_003,
    description: 'Token no válido',
  },
  INVALID_FORMAT_FILE: {
    httpCode: 400,
    errorCode: 400_004,
    description: 'Formato invalido',
  },
  INVALID_FORMAT_DATA: {
    httpCode: 400,
    errorCode: 400_004,
    description: 'Los datos tienen un formato invalido',
  },
  UNAUTHENTICATED: {
    httpCode: 401,
    errorCode: 401_000,
    description: 'Usuario no autorizado',
  },
  EXPIRED_TOKEN: {
    httpCode: 401,
    errorCode: 401_001,
    description: 'Token caducado',
  },
  NOT_FOUND: {
    httpCode: 404,
    errorCode: 404_000,
    description: 'Not found',
  },
  NOT_FOUND_ITEM: {
    httpCode: 404,
    errorCode: 404_001,
    description: 'Item not found',
  },
  ITEM_ALREADY_EXISTS: {
    httpCode: 409,
    errorCode: 409_000,
    description: 'Item already exists',
  },
  VALIDATION_ERROR: {
    httpCode: 422,
    errorCode: 422_000,
    description: 'Validation error',
  },
  INTERNAL_SERVER_ERROR: {
    httpCode: 500,
    errorCode: 500_000,
    description: 'Internal server error',
  },
};
