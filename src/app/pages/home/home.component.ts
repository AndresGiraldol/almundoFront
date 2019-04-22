import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../service/hotel.service';
import { Hotel } from '../../models/hotel.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hotels: Array<Hotel>;
  textLoader;
  active = false;
  numElePag = 4;
  since = 0;
  query;

  constructor(public hotelService: HotelService) {

  }

  ngOnInit() {

    this.getAllHotels(this.since , this.numElePag);
    this.hotelService.nameChange.subscribe(data => {
      this.numElePag = 4;
      this.since = 0;
      this.getAllHotels(this.since , this.numElePag);
    });
    // this.hotels.forEach( data => {
    //   this.hotelService.addHotel(data).subscribe( resp => {
    //     console.log('Data: ', resp);
    //   });
    // });
  }

  // Obtiene todos los hoteles y le agrega las rutas para las imagenes,
  // y los iconos de las comodidades.

  getAllHotels(since = 0, numElePag) {
    this.active = true;
    this.hotelService.getHotel(since, numElePag).subscribe( data => {
      this.hotels = data.map( (hotel: Hotel) => {
        hotel.image = '/assets/images/hotels/' + hotel.image;
        hotel.amenities = hotel.amenities.map( (amenitie) => {
          amenitie = 'icon-' + amenitie;
          return amenitie;
        });
        return hotel;
       });
      this.active = false;
     });

  }

  // Activa el paginador avanza o retrocede de pagina
  cambiarDesde(newSince: number) {
    this.since = newSince;
    this.getAllHotels(this.since, this.numElePag);
  }

}
