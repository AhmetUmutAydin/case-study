import { Component, Input, OnInit } from '@angular/core';
import { User } from '@shared/models';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input()
  user: User;
}
