import { Component, OnInit } from '@angular/core';
import { ProgressService } from 'src/app/services/progress/progress.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit {
  public numCompleted: number;
  public numRequired: number;

  constructor(private progressService: ProgressService) {
    this.progressService.numCompleted.subscribe((data) => {
      this.numCompleted = data;
    });

    this.progressService.numRequired.subscribe((data) => {
      this.numRequired = data;
    });
  }

  ngOnInit(): void {}
}
