import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Router, RouterLink } from '@angular/router';
import { UserLoginRequestModel } from '../../../core/models/user.model';
import { SecurityService } from '../../../core/services/security.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userLogin:UserLoginRequestModel={
    email: '',
    password: ''
  };
  constructor(private securityService: SecurityService, private router: Router
  ){ }
  onLogin(): void {
    const Loginresponse=this.securityService.login(this.userLogin);
    if(Loginresponse!=null){
      console.log('Login réussi', Loginresponse.user);
      this.router.navigate(['/private/dash']);
    }else{
      console.log('Login échoué');
    }
  }

}
 