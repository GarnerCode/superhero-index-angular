import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-hero-list',
  template: `
    <div class="container">
      <input [(ngModel)]="searchInput" type="text" placeholder="Name">
      <button (click)="handleSearch(searchInput)">Search</button>
      <ng-container *ngIf="searchedValue === ''">
        <app-hero *ngFor="let hero of heroes" [hero]="hero" [heroes]="heroes"></app-hero>
      </ng-container>
      <ng-container *ngIf="searchedValue !== ''">
        <app-hero *ngFor="let hero of heroes | filterHeroes:searchedValue" [hero]="hero" [heroes]="heroes"></app-hero>
      </ng-container>
    </div>
  `,
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
