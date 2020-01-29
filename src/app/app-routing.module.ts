import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';
import { AuthRouteGuard } from './Services/auth-route-guard.service'
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
      path: 'login', component:LoginComponent
  },
  {
      path: 'home',  loadChildren: './home/home.module#HomeModule'
  },
  {
      path: '**',  redirectTo: 'login', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
