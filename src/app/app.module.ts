import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LanePipe } from './lane.pipe';
import { MingleService } from './mingle.service';

@NgModule({
  declarations: [
    AppComponent,
    LanePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MingleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
