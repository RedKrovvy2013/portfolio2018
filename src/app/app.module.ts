import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UiComponent } from './ui-module/ui.component';
import { DetailsComponent } from './details/details.component';
import { DetailsInnerComponent } from './details/details-inner/details-inner.component';

const appRoutes: Routes = [
    { path: 'details/:name', component: DetailsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UiComponent,
    DetailsComponent,
    DetailsInnerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
