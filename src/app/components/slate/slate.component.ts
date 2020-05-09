import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'slate',
  templateUrl: './slate.component.html',
  styleUrls: ['./slate.component.scss'],
})
export class SlateComponent implements OnInit {
  public isValid = false;
  guessFormGroup: FormGroup;

  @Input() data: {};

  constructor() {}

  ngOnInit(): void {
    this.guessFormGroup = new FormGroup({
      guess: new FormControl(''),
    });
    this.guessFormGroup.controls['guess'].valueChanges.subscribe((guess) => {
      if (this.data['name'].toLowerCase() === guess) {
        this.isValid = true;
      }
    });
  }
}
