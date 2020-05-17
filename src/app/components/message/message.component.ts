import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  public emojiIcon = '0x1F973';
  public title = 'Congratulations!';
  public show: boolean;

  constructor(private messageService: MessageService) { 
    this.messageService.show.subscribe(data=>{
      this.show = data;
    })
   }

  ngOnInit(): void {
  }

}
