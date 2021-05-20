import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddListsComponent} from './add-lists/add-lists.component';

const routes: Routes = [
  {
    component:AddListsComponent,
    path:'',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
