import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListToDoComponent } from './list-to-do/list-to-do.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { UpdateListComponent } from './update-list/update-list.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
//imprt reactive forms
import { ReactiveFormsModule, FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    InscriptionComponent,
    ListToDoComponent,
    AddToDoComponent,
    UpdateListComponent,
    ConnexionComponent,
    NotFoundComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
