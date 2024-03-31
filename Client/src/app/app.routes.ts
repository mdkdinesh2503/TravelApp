import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FrontPageComponent } from './frontPage/frontPage.component';
import { PageErrorComponent } from './pageError/pageError.component';
import { AboutComponent } from './about/about.component';
import { PackagesComponent } from './packages/packages.component';
import { ContactComponent } from './contact/contact.component';
import { BookComponent } from './book/book.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './userDashboard/userDashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/frontpage', pathMatch: 'full'},
  { path: 'frontpage', component: FrontPageComponent, title: 'T R A V S'},
  { path: 'home', component: HomeComponent, title: 'T R A V S - H O M E'},
  { path: 'about', component: AboutComponent, title: 'T R A V S - A B O U T'},
  { path: 'packages', component: PackagesComponent, title: 'T R A V S - P A C K A G E S'},
  { path: 'book', component: BookComponent, title: 'T R A V S - B O O K I N G'},
  { path: 'contact', component: ContactComponent, title: 'T R A V S - C O N T A C T'},
  { path: 'login', component: LoginComponent, title: 'T R A V S - L O G I N'},
  { path: 'register', component: RegisterComponent, title: 'T R A V S - R E G I S T E R'},
  { path: '**', component: PageErrorComponent, title: "P A G E - N O T - F O U N D"},
  { path: 'pageError', component: PageErrorComponent, title: "P A G E - N O T - F O U N D"},


  { path: 'dashboard', component: UserDashboardComponent, title: 'T R A V S - D A S H B O A R D'},

];

