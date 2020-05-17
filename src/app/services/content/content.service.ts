import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { content } from 'src/assets/content';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  public content: Observable<{}>;
  private _content = content;

  constructor() {
    this.content = new BehaviorSubject({});
  }

  getContent(setName: string, typeId?: number) {
    if (this._content[setName]) {
      if (this._content[setName][typeId]) {
        return this._content[setName][typeId];
      } else {
        return this._content[setName];
        // return { error: 'Content not found' };
      }
    } else {
      return { error: 'Content not found' };
    }
  }

  getAll() {
    return this._content;
  }
}
