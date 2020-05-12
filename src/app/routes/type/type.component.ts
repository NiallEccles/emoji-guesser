import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/services/content/content.service';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { ProgressService } from 'src/app/services/progress/progress.service';
import { ThemeService } from 'src/app/services/theme/theme.service';

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
    private progressService: ProgressService,
    private themeService: ThemeService
  ) {
    this.route.params.subscribe((param) => {
      this.setName = param.set;
      this.typeId = param.item;
    });
    this.getContent();
    this.themeService.theme.next(this.content.theme);
  }

  ngOnInit(): void {
    // console.log(content);
  }

  public getContent(): void {
    this.content = this.contentService.getContent(this.setName, this.typeId);
    console.log(this.content);
    this.progressService.numRequired.next(this.content.content.length);
  }
  public addMessage(): void {

  }
  public getClass(theme) {
    return theme;
  }
}
