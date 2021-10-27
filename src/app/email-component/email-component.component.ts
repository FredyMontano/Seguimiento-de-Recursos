import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-email-component',
  templateUrl: './email-component.component.html',
  styleUrls: ['./email-component.component.css']
})
export class EmailComponentComponent implements OnInit {

  constructor(
    private authService: AuthService) { }

  ngOnInit() {}
  public email: any;
  public password: any;
  onSubmit(formData: { valid: any; value: { email: string; password: string; }; }) {
    
    if (formData.valid) {
      console.log(formData.value);
      this.authService.login(
        formData.value.email,
        formData.value.password
      );
    }
  }
}