import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './auth/admin/admin.component';

export const routes: Routes = [

        {
            path: "",
            component: WelcomeComponent,
            pathMatch: "full"
        },
        {
            path:"home",
            component: HomeComponent,
            pathMatch: "full"
        },
        {
            path:"login",
            component: LoginComponent,
            pathMatch: "full"
        },
        {
            path:"admin",
            component: AdminComponent,
            pathMatch: "full"
        },

];
