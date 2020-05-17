import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss'],
})
export class SetComponent implements OnInit {

  public name: string;
  public content: any;
  public length: number;
  public rcontent: any;

  constructor(private route: ActivatedRoute, public contentService: ContentService) {
    this.route.params.subscribe((param) => {
      this.name = param.set;
      console.log(param);
      this.content = this.contentService.getContent(param.set);
      // this.emoji = this.content.
    });
    // console.log(this.content);
    this.rcontent = Object.values(this.content);
    console.log(this.rcontent);
    
    this.length = Object.keys(this.content).length;
  }

  ngOnInit(): void {}

  mySortingFunction = (a, b) => {
    return a.key > b.key ? 1 : -1;
  }
}
