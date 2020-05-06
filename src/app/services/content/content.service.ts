import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  public content: Observable<{}>;

  constructor() { 
    this.content =  new BehaviorSubject({});
   }

   getContent(setName: string, typeId: number): Observable<{}> {
     console.log(setName);
     console.log(typeId);
     
     
     return this.content;
   }
}
