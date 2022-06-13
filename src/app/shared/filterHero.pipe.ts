import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterHeroes'
})

export class FilterHeroesPipe implements PipeTransform {
    transform(heroes : any, heroName: string): any[] {
        if (heroes) {
            return heroes.filter((hero: any) => hero.name.includes(heroName));
        }
    }
}