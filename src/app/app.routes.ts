import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

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
        }

];
