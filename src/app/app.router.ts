import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';

export const router: Routes = [
  { path: 'inicio', component: HomeComponent, pathMatch: 'full' },
  { path: 'nosotros', component: AboutComponent },
  { path: 'productos', component: ProductsComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', redirectTo: 'inicio' },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, { useHash: true });