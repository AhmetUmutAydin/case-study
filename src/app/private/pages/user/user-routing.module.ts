import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@shared/guards/auth.guard';

import * as userComponents from './compenents';
import * as resolver from './resolvers';
import { UserLayoutComponent } from './user-layout.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: userComponents.UserListComponent,
        resolve: [resolver.UserListResolver],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [resolver.UserListResolver],
})
export class UserRoutingModule {}
