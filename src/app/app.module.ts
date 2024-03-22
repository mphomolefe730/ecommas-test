import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DesktopNavComponent } from './core/desktop-nav/desktop-nav.component';
import { NgToastModule } from 'ng-angular-popup';
import { environment } from 'src/environment/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage'

@NgModule({
  declarations: [
    AppComponent,
    DesktopNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgToastModule,
    AngularFireModule.initializeApp(
      environment.firebaseConfig
    ),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
