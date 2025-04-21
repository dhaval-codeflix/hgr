export interface ILoginPayload {
    email_phone: string;
    password: string;
}
export interface IResetPassword {
    email: string
    password: string
    password_confirmation: string
}
