import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { ColumnsComponent } from './components/columns/columns.component';
import { SelectTeeComponent } from './components/select-tee/select-tee.component';
import { MatButtonModule, MatRadioModule } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    ColumnsComponent,
    SelectTeeComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
