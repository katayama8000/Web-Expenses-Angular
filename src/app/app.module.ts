import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SampleComponent } from './sample/sample.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BgCloudComponent } from './bg-cloud/bg-cloud.component';


@NgModule({
  declarations: [AppComponent, SampleComponent, BgCloudComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
