import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { MaterializeModule } from 'ng2-materialize';

import { AppComponent } from './app.component';
import { LanePipe } from './lane.pipe';
import { MingleService } from './mingle.service';
import { MqlEncoderService } from './mql-encoder.service';

@NgModule({
  declarations: [
    AppComponent,
    LanePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    JsonpModule,
    MaterializeModule.forRoot()
  ],
  providers: [
    MingleService,
    MqlEncoderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
