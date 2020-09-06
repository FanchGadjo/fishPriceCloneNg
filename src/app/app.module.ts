import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoremIpsumComponent } from './lorem-ipsum/lorem-ipsum.component';
import { MarketComponent } from './market/market.component';
import { MarketsComponent } from './markets/markets.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, LoremIpsumComponent, MarketComponent, MarketsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
