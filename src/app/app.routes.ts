import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { CompanyComponent } from './pages/company/company.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'about', component: AboutComponent },

  { path: 'products', component: ProductsComponent },

  { path: 'company', component: CompanyComponent },

  { path: 'contact', component: ContactComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];