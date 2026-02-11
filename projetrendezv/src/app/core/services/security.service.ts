import { Injectable } from '@angular/core';
import { USERS_MOCK } from '@mocks';
import { UserLoginRequestModel, UserLoginResponseModel} from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  private readonly TOKEN_KEY='token';
  private readonly USER_KEY='current-user';
  constructor() { }
  login(userloginrequest: UserLoginRequestModel):UserLoginResponseModel | null{
    const users= [...USERS_MOCK];
    const user=users.find(u=>u.email===userloginrequest.email && u.password===userloginrequest.password);
    if(user!==undefined){
      let userLoginResponse:UserLoginResponseModel={
        token: 'fake-token',
        user: user
      }
      this.savelocalStorage(userLoginResponse)
      return userLoginResponse;

    }
    return null;
  }

  private savelocalStorage(userLoginResponse: UserLoginResponseModel): void{
    localStorage.setItem(this.TOKEN_KEY, userLoginResponse.token!);
    localStorage.setItem(this.USER_KEY, JSON.stringify(userLoginResponse.user));
  }
  getCurrentUser(): UserLoginResponseModel | null{
    const userJson=localStorage.getItem(this.USER_KEY);
    if(userJson){
      const user:UserLoginResponseModel={
        user: JSON.parse(userJson),
        token: ''
      };
      return user
    }
    return null;
  }
  isAuthenticated(): boolean{
    return localStorage.getItem(this.TOKEN_KEY) !== null
  }
  logout(): void{
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }
}
