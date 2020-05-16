import { Component, OnInit } from '@angular/core';
import { ProgressService } from 'src/app/services/progress/progress.service';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit {
  public numCompleted: number;
  public numRequired: number;

  constructor(private progressService: ProgressService, private messageService: MessageService) {
    this.progressService.numCompleted.subscribe((data) => {
      this.numCompleted = data;
      if(this.numCompleted === this.numRequired){
        this.messageService.show.next(true);
      }
    });

    this.progressService.numRequired.subscribe((data) => {
      this.numRequired = data;
    });
  }

  ngOnInit(): void {}
}
