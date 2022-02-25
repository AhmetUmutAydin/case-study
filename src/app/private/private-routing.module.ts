import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateLayoutComponent } from './private-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateLayoutComponent,
    children: [
      {
        path: 'user',
        loadChildren: () =>
          import('./pages/user/user.module').then((m) => m.UserModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
