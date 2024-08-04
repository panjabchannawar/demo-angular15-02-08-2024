import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { ListComponent } from './list/list.component';
import { CanActivateValidateUser } from './list-activate-auth-guard';

const remoteUrlMf1 = 'http://localhost:5000/remoteEntry.js';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: "full" },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'hostlist/:id',
    component: ListComponent,
    resolve: {
      resolveMessage: () => 'test message'
    },
    canActivate: [CanActivateValidateUser]

    // Getting input data from route and resolver
    //Can activate auth gurad added.
  },
  {
    path: 'list',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: remoteUrlMf1,
        remoteName: 'appMf1',
        exposedModule: "./ListModule"
      }).then(m => m.ListModule).catch(error => console.log('Error'));
    }
    //Lazy loading module with module federations- micro fronted.
  },
  {
    path: 'products',
    loadChildren: () => import('./product/product.module').then(module => module.ProductModule)

      //Lazy loading module
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
