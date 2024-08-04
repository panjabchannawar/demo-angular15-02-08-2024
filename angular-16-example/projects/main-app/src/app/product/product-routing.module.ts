import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';


const routes: Routes = [
    {

        path: '',
        component: ProductComponent

    },
    {
        path: ':id',
        loadChildren: () => import('./../productdetails/productdetails.module').then(m => m.ProductdetailsModule)
      }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
