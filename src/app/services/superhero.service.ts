import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SuperheroService {
  private apiUrl = 'https://superhero-search.p.rapidapi.com/api/heroes';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '86a43efc03mshee288a0cc9a952dp18bbfejsnf24bde6845e5',
    'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
  });

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<any> {
    return this.http.get(this.apiUrl, { headers: this.headers });
  }
}
