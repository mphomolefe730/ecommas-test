import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DesktopNavComponent } from './core/desktop-nav/desktop-nav.component';
import { SellerDesktopNavComponent } from './core/seller-desktop-nav/seller-desktop-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopNavComponent,
    SellerDesktopNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
