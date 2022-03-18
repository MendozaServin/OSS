import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'list-sala',
    loadChildren: () => import('./pages/list-sala/list-sala.module').then( m => m.ListSalaPageModule)
  },
  {
    path: 'list-cocina',
    loadChildren: () => import('./pages/list-cocina/list-cocina.module').then( m => m.ListCocinaPageModule)
  },
  {
    path: 'list-garaje',
    loadChildren: () => import('./pages/list-garaje/list-garaje.module').then( m => m.ListGarajePageModule)
  },
  {
    path: 'list-exterior',
    loadChildren: () => import('./pages/list-exterior/list-exterior.module').then( m => m.ListExteriorPageModule)
  },
  {
    path: 'list-principal',
    loadChildren: () => import('./pages/list-principal/list-principal.module').then( m => m.ListPrincipalPageModule)
  },
  {
    path: 'list-secundario',
    loadChildren: () => import('./pages/list-secundario/list-secundario.module').then( m => m.ListSecundarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
