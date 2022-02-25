import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateLayoutComponent } from './private-layout.component';
import { LayoutModule } from './layout/layout.module';
import { PrivateRoutingModule } from './private-routing.module';

@NgModule({
  declarations: [PrivateLayoutComponent],
  imports: [PrivateRoutingModule, CommonModule, LayoutModule],
})
export class PrivateModule {}
