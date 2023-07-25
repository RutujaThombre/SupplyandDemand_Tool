import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SupplyDataComponent } from './supply-data/supply-data.component';

const routes: Routes = [
  {

    path:'app-supply-data',

    component:SupplyDataComponent,

  },
  {

    path:'app-nav',

    component:NavComponent,

  },
  {

    path:'app-navbar',

    component:NavbarComponent,

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
