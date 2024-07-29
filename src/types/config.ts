export interface Config {
  env: string
  logLevel: string
  port: number
  baseUrl: string
  accessTokenSecret: string
  refreshTokenSecret: string
}

export interface ErrorInterface {
  httpCode: number
  errorCode: number
  description: string
}
