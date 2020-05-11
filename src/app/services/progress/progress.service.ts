import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgressService {
  public numCompleted: BehaviorSubject<number>;
  public numRequired: BehaviorSubject<number>;

  constructor() {
    this.numCompleted = new BehaviorSubject(0);
    this.numRequired = new BehaviorSubject(0);
  }
}
