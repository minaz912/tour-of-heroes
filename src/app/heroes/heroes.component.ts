import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  title: string = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {

  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(result => this.heroes = result);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
