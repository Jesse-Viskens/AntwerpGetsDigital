import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoopZoneComponent } from './loop-zone/loop-zone.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { LoopzoneMapComponent } from './loopzone-map/loopzone-map.component';
import { HomeComponent } from './home/home.component';
import { RoutingComponent } from './routing/routing.component';

@NgModule({
  declarations: [
    AppComponent,
    LoopZoneComponent,
    LoopzoneMapComponent,
    HomeComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCuF0jO6w-aCgx7P28epp7zKGbNJwjlw6g'}) 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
