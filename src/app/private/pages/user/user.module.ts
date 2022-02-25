import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from './user-layout.component';
import { UserRoutingModule } from './user-routing.module';
import { LayoutModule } from '../../layout/layout.module';
import { NgxsModule } from '@ngxs/store';
import * as userStates from './states';
import * as userComponents from './compenents';
import { UserService } from '@shared/services/user.service';

const components = [
  userComponents.UserListComponent,
  userComponents.UserCardComponent,
];
const states = [userStates.UserState];

@NgModule({
  declarations: [...components, UserLayoutComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    LayoutModule,
    NgxsModule.forFeature([...states]),
  ],
  providers: [UserService],
})
export class UserModule {}
