import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowComponent} from "./posts/show/show.component";

const routes: Routes = [
  {path:"posts", component: ShowComponent},
  // {path:"posts", component: ShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
