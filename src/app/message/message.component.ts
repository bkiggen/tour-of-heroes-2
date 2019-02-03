import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-message',
  providers: [HeroService],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}
