import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SampleComponent } from './sample/sample.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BgCloudComponent } from './bg-cloud/bg-cloud.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { MemberComponent } from './member/member.component';
import { LibraryComponent } from './library/library.component';
import { PagecontainerComponent } from './pagecontainer/pagecontainer.component';


@NgModule({
  declarations: [AppComponent, SampleComponent, BgCloudComponent, SigninComponent, HomeComponent, AdminComponent, MemberComponent, LibraryComponent, PagecontainerComponent],
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
