import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'app-sets',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {

  public content;

  constructor(private contentService: ContentService) {
    this.content = this.contentService.getAll();
  }

  ngOnInit(): void {

  }

  getKeys(content){
    return Object.keys(content);
  }

  getValues(content){
    return Object.values(content);
  }

  getLink(setName: string){
    return [`/game/${setName}/`];
  }
}
