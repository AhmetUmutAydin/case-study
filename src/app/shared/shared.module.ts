import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';

import * as sharedCompenets from './compenents';
import * as sharedStates from './states';

const states = [sharedStates.AuthState];

@NgModule({
  declarations: [
    sharedCompenets.InputTextComponent,
    sharedCompenets.LoadingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([...states]),
  ],
  exports: [
    sharedCompenets.InputTextComponent,
    sharedCompenets.LoadingComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
