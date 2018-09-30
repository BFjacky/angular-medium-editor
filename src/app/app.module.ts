import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MediumEditorModule} from '../../package/src/index.module';
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
