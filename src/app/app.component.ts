import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';



@Component({
  selector: 'app-root',
  providers: [HeroService],
  templateUrl: './app.component.html',
  // template: `<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];
  constructor (private heroService: HeroService)  {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
