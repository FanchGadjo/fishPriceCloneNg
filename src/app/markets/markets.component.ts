import { Component, OnInit } from '@angular/core';
import { MARKETS } from '../mock-markets';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.css']
})
export class MarketsComponent implements OnInit {
  constructor() {}

  markets = MARKETS;

  selectedMarket;
  onSelect(market: any): void {
    this.selectedMarket = market;
    console.log(market.name);
  }

  ngOnInit() {}
}
