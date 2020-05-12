import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.scss'],
})
export class BottombarComponent implements OnInit {
  public theme: string;

  constructor(private themeService: ThemeService) {
    this.themeService.theme.subscribe((data) => {
      this.theme = data;
    });
  }

  ngOnInit(): void {}
}
