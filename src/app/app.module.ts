import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroComponent } from './hero/hero.component';
import { FilterHeroesPipe } from './shared/filterHero.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroComponent,
    FilterHeroesPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
