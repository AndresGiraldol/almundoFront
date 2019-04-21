import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../../models/hotel.model';

@Component({
  selector: 'app-hotel-panel',
  templateUrl: './hotel-panel.component.html',
  styleUrls: ['./hotel-panel.component.scss']
})
export class HotelPanelComponent implements OnInit {
  Arr = Array;
  @Input() hotel: Hotel;
  constructor() { }

  ngOnInit() {
  }

}
