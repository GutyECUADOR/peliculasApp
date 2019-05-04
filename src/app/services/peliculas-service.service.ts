import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasServiceService {

  private baseURL = 'https://api.themoviedb.org/3';
  private APIKey = '41e81ec3604de453917eeb191e48bc83';

  constructor(private http: HttpClient) {}

  getPeliculasPopulares() {

    const URL = `${this.baseURL}/discover/movie?api_key=${this.APIKey}&language=es-ES&sort_by=popularity.desc`;

    return this.http.get(URL).pipe(map(respuesta => {
      console.log(respuesta);
      return respuesta;
    }));

  }
}
