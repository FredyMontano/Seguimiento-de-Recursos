import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-uppage.component.html',
  styleUrls: ['./sign-uppage.component.css']
})
export class SignUppageComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {}
  public email: any;
  public password: any;
  onSubmit(formData: { valid: any; value: { email: string; password: string; }; }) {
    if (formData.valid) {
      console.log(formData.value);
      this.authService.emailSignup(
        formData.value.email,
        formData.value.password
      );
    }
  }
}
