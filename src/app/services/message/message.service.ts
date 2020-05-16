import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public show: BehaviorSubject<boolean>;

  constructor() { 
    this.show = new BehaviorSubject(false);
   }
}
