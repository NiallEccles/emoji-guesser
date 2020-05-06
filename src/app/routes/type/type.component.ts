import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((param) => {
      console.log(param);
    });
  }

  ngOnInit(): void {
  }

}
