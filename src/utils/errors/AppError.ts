interface IAppErrorConstructorParams {
  message?: string
  title: string
}

export class AppError {
  title: string
  message: string

  constructor({ title, message }: IAppErrorConstructorParams) {
    this.title = title
    this.message = message || title
  }
}
