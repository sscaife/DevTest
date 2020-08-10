import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { HomeComponent } from './home/home.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { CustomerModule } from './customer/customer.module';
import { ContentTypeInterceptor } from './interceptors/ContentTypeInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    HomeComponent,
    JobDetailComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CustomerModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ContentTypeInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
