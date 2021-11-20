import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { SignUppageComponent } from './sign-uppage/sign-uppage.component';
import { EmailComponentComponent } from './email-component/email-component.component';
import { ListaCosasComponent } from './Components/lista-cosas/lista-cosas.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NuevaCosaComponent } from './Components/nueva-cosa/nueva-cosa.component';
import { LecturaRecursoComponent } from './Components/lectura-recurso/lectura-recurso.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent },
  { path: 'email-login', component: EmailComponentComponent },
  { path: 'signup', component: SignUppageComponent },
  { path: 'profile', component: ProfileComponentComponent },
  { path: 'lista-cosas', component: ListaCosasComponent},
  { path: 'nav-bar', component: NavbarComponent},
  { path: 'nueva-cosa', component: NuevaCosaComponent},
{ path: 'edita-cosa/:id', component: NuevaCosaComponent}, // Se reutiliza el mismo componente de NuevaCosa
{ path: 'lectura-recurso/:id', component: LecturaRecursoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

