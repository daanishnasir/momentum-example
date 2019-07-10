import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMomentumModule } from './app-momentum/app-momentum.module';
import { HomeComponent } from './pages/home/home.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
// import { ModalComponent } from './components/modal/modal.component';
// import { ModalHeaderComponent } from './components/modal/modal-header.component';
// import { ModalFooterComponent } from './components/modal/modal-footer.component';
// import { ModalBodyComponent } from './components/modal/modal-body.component';
import { ModalExample } from './pages/home/modal-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersPageComponent,
    ModalExample
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMomentumModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
