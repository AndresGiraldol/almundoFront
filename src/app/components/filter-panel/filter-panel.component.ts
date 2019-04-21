import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HotelService } from '../../service/hotel.service';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {


  constructor(
     private hotelService: HotelService,
     private activatedRoute: ActivatedRoute,
     private router: Router) {

  }
  starsFilterArray = [
    { value: 5, checked: false },
    { value: 4, checked: false },
    { value: 3, checked: false },
    { value: 2, checked: false },
    { value: 1, checked: false }
  ];
  Arr = Array;
  allStars = true;
  hotelName: string = '';

  ngOnInit() {
  }

  activeFilter() {

    let num = this.starsFilterArray.filter(opt => opt.checked)
                                     .map(opt => opt.value)
                                     .join(',');
    if (num.length === 0) {
      this.allStars = true;
      num = '1,2,3,4,5';
    } else {
      this.allStars = false;
    }

    const queryParams = { name: this.hotelName, stars: num };
    this.hotelService.setQueryParams(queryParams);
  }

}
