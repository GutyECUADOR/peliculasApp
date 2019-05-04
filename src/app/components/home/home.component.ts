import { Component, OnInit } from '@angular/core';
import { PeliculasServiceService } from '../../services/peliculas-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public peliculasService: PeliculasServiceService) {
    this.peliculasService.getPeliculasPopulares().subscribe( respuesta => {
      console.log(respuesta);
    });
  }

  ngOnInit() {
  }

}
