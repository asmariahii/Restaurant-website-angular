import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path : "navbar", component: NavbarComponent},
  {path : "home", component: HomeComponent},
  {path : "footer", component:FooterComponent},
  {path : "sign-in", component:SignInComponent},
  {path : "menu", component:MenuComponent},
  {path : "login", component:LoginComponent},
  {path : "register",component:RegisterComponent}
]

;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
