import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'slate',
  templateUrl: './slate.component.html',
  styleUrls: ['./slate.component.scss'],
  animations: [
  ]
})
export class SlateComponent implements OnInit {

  @Input() data: {};

  public isValid = false;
  public guessFormGroup: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.guessFormGroup = new FormGroup({
      guess: new FormControl(''),
    });
    const s = this.guessFormGroup.controls['guess'].valueChanges.subscribe(
      (guess) => {
        if (this.data['name'].toLowerCase() === guess.toLowerCase()) {
          this.isValid = true;
          s.unsubscribe();
          this.guessFormGroup.controls['guess'].setValue(this.data['name']);
        }
      }
    );
  }
}
