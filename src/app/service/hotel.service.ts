import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

@Injectable()

export class HotelService {

  constructor(public http: HttpClient) { }

  url = environment.URL_SERVICE;
  queryParams;
  nameChange: Subject<any> = new Subject<any>();
  totalHotels: number;

  getHotel(lastItem, numItems) {

    if (!this.queryParams) {
      return this.http.get(this.url + '/hotels/' + lastItem + '/' + numItems)
                  .pipe( map( (resp: any) => {
                     this.totalHotels = resp.Total;
                     return resp.Hotels;
                   }));
    }

    let params = new HttpParams();
    params = params.append('name', this.queryParams.name);
    params = params.append('stars', this.queryParams.stars);

    return this.http.get(this.url + '/hotels/search/' + lastItem + '/' + numItems, { params } )
                .pipe( map( (resp: any) => {
                  this.totalHotels = resp.Total;
                  return resp.Hotels;
                } ));
  }

  addHotel(hotel: any) {
    return this.http.post( this.url + '/hotels',  hotel  )
               .pipe( map( (resp: any) => resp.hotel ) );
  }

  setQueryParams(queryParams) {
    this.queryParams = queryParams;
    this.nameChange.next(this.queryParams);
  }

}
