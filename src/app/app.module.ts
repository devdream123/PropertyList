import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PropertyListingComponent } from './components/property-listing/property-listing.component';
import { PropertyService } from './services/property.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    PropertyListingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
    ],
  providers: [PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
