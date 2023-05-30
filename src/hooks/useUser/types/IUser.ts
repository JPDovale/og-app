export interface INotification {
  id: string
  title: string
  content: string
  created_at: Date
}

export type IPaymentStatus =
  | 'active'
  | 'canceled'
  | 'incomplete'
  | 'incomplete_expired'
  | 'past_due'
  | 'paused'
  | 'trialing'
  | 'unpaid'

export interface IUser {
  infos: {
    username: string
    email: string
    age: string
    sex: string
    name: string
    avatar: {
      alt: string
      url: string | undefined
    }
    createdAt: Date
  }
  account: {
    id: string
    isSocialLogin: boolean
    notification: {
      numberNew: number
      notifications: INotification[]
    }
    subscription: {
      id: string
      status: IPaymentStatus
      expiresAt: Date | null
      mode: 'payment' | 'subscription'
    } | null
  }
}
