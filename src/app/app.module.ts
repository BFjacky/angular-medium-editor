import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MediumEditorModule } from 'angular6-medium-editor';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MediumEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
