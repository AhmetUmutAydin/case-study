import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.scss'],
})
export class AuthHeaderComponent {
  @Input()
  text: string;

  @Input()
  subText: string;

  @Input()
  containerClass = 'margin-bottom-30';
}
