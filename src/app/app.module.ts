import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponentComponent } from './timer-component/timer-component.component';
import { FormulaireReactifComponent } from './formulaire-reactif/formulaire-reactif.component';
import { FormulaireHtmlComponent } from './formulaire-html/formulaire-html.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponentComponent,
    FormulaireReactifComponent,
    FormulaireHtmlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
