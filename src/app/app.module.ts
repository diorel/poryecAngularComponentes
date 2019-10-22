import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogosComponent } from './Components/catalogos/catalogos.component';
import { UserComponent } from './Components/user/user.component';
import { UserlistComponent } from './Components/userlist/userlist.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogosComponent,
    UserComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
