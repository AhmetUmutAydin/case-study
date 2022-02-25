import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicLayoutComponent } from './public-layout.component';
import * as pagesComponents from './pages';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '@shared/shared.module';

const components = [
  pagesComponents.LoginComponent,
  pagesComponents.ForgetPasswordComponent,
  pagesComponents.AuthHeaderComponent,
  pagesComponents.AuthCardComponent,
];

@NgModule({
  declarations: [...components, PublicLayoutComponent],
  imports: [CommonModule, PublicRoutingModule, SharedModule],
})
export class PublicModule {}
