import { Component, OnInit } from '@angular/core';
import { SuperheroService } from '../services/superhero.service';
import { Superhero } from '../interfaces/superhero.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit{

  public heroes:Superhero[] = [];  

  constructor(
    private superheroService: SuperheroService,
    private http: HttpClient
    ) {}

  ngOnInit(): void {
    this.superheroService.getHeroes().subscribe(
      (data: Superhero[]) => {
        this.heroes = data;
        console.log(this.heroes);
      },
      error => {
        console.error(error);
      }
    );  
    }
}
