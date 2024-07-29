export type ReturnAuth = { accessToken: string; refreshToken: string };

export type LoginParams = { email: string; password: string };

export type RefreshTokenParams = { refreshToken: string };

export interface Context {
  user: {
    id: string
    token: string
    role: string
  }
}
