import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {
  constructor(private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]> {
    //TODO: send the message _after_ fetching the Heroes

    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }


}