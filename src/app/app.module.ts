import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvslandingpageComponent } from './tvslandingpage/tvslandingpage.component';
import { LandingpagecontentComponent } from './landingpagecontent/landingpagecontent.component';
import { TvsFooterComponent } from './tvs-footer/tvs-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TvslandingpageComponent,
    LandingpagecontentComponent,
    TvsFooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
