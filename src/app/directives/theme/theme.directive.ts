import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Directive({
  selector: '[theme]',
})
export class ThemeDirective {
  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2,
    hostElement: ElementRef
  ) {
    this.themeService.theme.subscribe((data) => {
      this.renderer.addClass(hostElement.nativeElement, data);
    });
  }
}
