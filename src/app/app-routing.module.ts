import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ColumnsComponent } from "./components/columns/columns.component";
import { SelectTeeComponent } from "./components/select-tee/select-tee.component";

const routes: Routes = [
  {path: 'columns', component: ColumnsComponent},
  {path: 'select-tee', component: SelectTeeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
