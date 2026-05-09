import { Routes } from '@angular/router';
import { Login } from './login/login';
import { authGuard } from './authguard/authguard';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadComponent: () => import("./home/home").then(m => m.Home)
  },
  {
    path: "trains",
    loadComponent: () => import("./trains/trains").then(m => m.Trains)
  },
  {
    path: "tickets",
    loadComponent: () => import("./tickets/tickets").then(m => m.Tickets),
    canActivate: [authGuard]  
  },
  {
    path: "login",
    component: Login
  },
  {
    path: "register",
    loadComponent: () => import("./register/register").then(m => m.Register)
  },
  {
    path: "checkticket",
    loadComponent: () => import("./checkticket/checkticket").then(m => m.Checkticket)
  },
  {
    path: "**",
    loadComponent: () => import("./error/error").then(m => m.Error)
  },
];