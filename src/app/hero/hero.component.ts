import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() heroes: any;
  @Input() hero: any;

  constructor() { }

  ngOnInit(): void {
  }

}
