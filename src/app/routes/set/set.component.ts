import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss'],
})
export class SetComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((param) => {
      // console.log(param);
    });
  }

  ngOnInit(): void {}
}
