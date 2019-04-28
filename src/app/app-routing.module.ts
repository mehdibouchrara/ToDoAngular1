import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { UpdateListComponent } from './update-list/update-list.component';
import { ListToDoComponent } from './list-to-do/list-to-do.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'inscription',
    component: InscriptionComponent
  },
  {
    path:'add-to-do',
    component: AddToDoComponent
  },
  {
    path:'update-list',
    component: UpdateListComponent
  },
  {
    path:'list-to-do',
    component: ListToDoComponent
  }
  ,
  {
    path:'connexion',
    component: ConnexionComponent
  }
  ,
  {
    path:'test',
    component: TestComponent
  }

  ,
  {
    path:'**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
