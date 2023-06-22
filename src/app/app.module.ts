import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GraficasNormalesComponent } from './graficas-normales/graficas-normales.component';
import { GraficasResponsivasComponent } from './graficas-normales/components/graficas-responsivas/graficas-responsivas.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficasNormalesComponent,
    GraficasResponsivasComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
