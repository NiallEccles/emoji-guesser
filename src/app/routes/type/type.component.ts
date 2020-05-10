import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/services/content/content.service';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()]
})
export class TypeComponent implements OnInit {
  private setName;
  private typeId;
  public content;

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService,
  ) {
    this.route.params.subscribe((param) => {
      this.setName = param.set;
      this.typeId = param.item;
    });
    this.getContent();
  }

  ngOnInit(): void {
    // console.log(content);
  }

  public getContent(): void {
    this.content = this.contentService.getContent(this.setName, this.typeId);
    console.log(this.content);
  }
  public addMessage(): void {

  }
  public getClass(theme) {
    return theme;
  }
}
