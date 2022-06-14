import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  searchInput:string = '';
  searchedValue:string = '';
  heroes:any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://akabab.github.io/superhero-api/api/all.json')
    .subscribe(Response => {
      this.heroes=Response;
    })
  }

  handleSearch(value) {
    this.searchedValue = value;
    this.searchInput = '';
  }

}
