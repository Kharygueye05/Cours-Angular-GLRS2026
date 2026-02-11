export interface UserModel {
    id: number;
    nomComplet: string;
    email: string;
    password: string;
    role: UserRole;
}
type UserRole= 'patient' | 'medecin' | 'admin' | 'secretaire';

export interface UserLoginRequestModel{
    email: string;
    password: string;
}
export interface UserLoginResponseModel{
    token: string;
    user: UserModel;
}