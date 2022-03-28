import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/pages/not-found/not-found.component';

const routes: Routes = [
  //Lazy loading home module which is included home component and its required modules , services and other components
  {
    path: '',
    loadChildren: () =>
      import('./modules/pages/home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
