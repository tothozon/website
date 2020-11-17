import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from "./app.component";
import { HerosectionComponent } from './herosection/herosection.component';
import { HaromPanelComponent } from './harom-panel/harom-panel.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, HerosectionComponent, HaromPanelComponent, FooterComponent],
  imports: [BrowserModule, FlexLayoutModule, MatButtonModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
