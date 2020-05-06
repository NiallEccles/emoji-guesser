import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/services/content/content.service';
import { content } from '../../../assets/content';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

  private setName;
  private typeId;

  constructor(private route: ActivatedRoute, private content: ContentService) {
    this.route.params.subscribe((param) => {
      console.log(param);
      this.setName = param.set;
      this.typeId = param.item;
    });
  }

  ngOnInit(): void {
    console.log(content);
  }

  public getContent(): void {
    this.content.getContent(this.setName, this.typeId);
  }

}
