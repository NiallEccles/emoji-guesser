import { Component } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'emoji-guesser';
  class = 'default';

  constructor(private themeService: ThemeService){
    this.themeService.theme.subscribe(data=>{
      this.class = data;
    });
  }
}