import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FlexLayoutModule, MatButtonModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
