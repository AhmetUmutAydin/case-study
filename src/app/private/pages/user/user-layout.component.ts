import { Component } from '@angular/core';

@Component({
  selector: 'user-layout',
  template: `
    <private-header></private-header>
    <router-outlet></router-outlet>
  `,
})
export class UserLayoutComponent {}
