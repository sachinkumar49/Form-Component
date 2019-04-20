import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormModule } from './form/form.module';

@NgModule({
  imports: [ BrowserModule, FormModule],
  declarations: [ AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}
