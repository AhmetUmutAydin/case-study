import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as layoutComponents from './compenents';

const components = [layoutComponents.HeaderComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class LayoutModule {}
