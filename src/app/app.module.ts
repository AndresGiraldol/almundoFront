import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { HotelPanelComponent } from './components/hotel-panel/hotel-panel.component';

// modulos
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Servicios
import { HotelService } from './service/hotel.service';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FilterPanelComponent,
    HotelPanelComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule,
    FormsModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
