import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoremIpsumComponent } from './lorem-ipsum/lorem-ipsum.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, LoremIpsumComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
