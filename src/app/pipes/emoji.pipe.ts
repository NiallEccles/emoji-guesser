import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'emoji' })
export class EmojiPipe implements PipeTransform {
  transform(value: string | []): any {
    let emoji: string = String.fromCodePoint(Number(...value));
    return emoji;
  }
}
