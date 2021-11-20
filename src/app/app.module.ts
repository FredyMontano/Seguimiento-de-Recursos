import { environment } from 'src/environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignUppageComponent } from './sign-uppage/sign-uppage.component';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { EmailComponentComponent } from './email-component/email-component.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { ListaCosasComponent } from './Components/lista-cosas/lista-cosas.component';
import { NuevaCosaComponent } from './Components/nueva-cosa/nueva-cosa.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AuthService } from './auth.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditorModule } from '@tinymce/tinymce-angular';
import { LecturaRecursoComponent } from './Components/lectura-recurso/lectura-recurso.component';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzaoeKsFgdgfiO9-WH-xKH-OeCSqVZIgY",
  authDomain: "my-app-29dab.firebaseapp.com",
  projectId: "my-app-29dab",
  storageBucket: "my-app-29dab.appspot.com",
  messagingSenderId: "350191763497",
  appId: "1:350191763497:web:f51705920b7da47ebadc38"
};

// Initialize Firebase

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginpageComponent,
    SignUppageComponent,
    EmailComponentComponent,
    ProfileComponentComponent,
    ListaCosasComponent,
    NuevaCosaComponent,
    NavbarComponent,
    LecturaRecursoComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    EditorModule

  ],
  //coloque el Authservice como en la imagen en providers
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
