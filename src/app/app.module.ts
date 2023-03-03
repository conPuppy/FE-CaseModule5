import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ShowComponent} from "./posts/show/show.component";
import {HttpClientModule} from "@angular/common/http";
import { CreateComponent } from './posts/create/create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EditComponent } from './posts/edit/edit.component';

@NgModule({
    declarations: [
        AppComponent,
        ShowComponent,
        CreateComponent,
        EditComponent,

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
