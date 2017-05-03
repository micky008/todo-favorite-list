import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule , Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/observable/of';

import { AppComponent }  from './app.component';

import { AppNavbar } from './pages/my-navbar/my-navbar';
import { AppHome } from './pages/my-home/my-home';
import { AppToDoList } from './pages/my-todolist/my-todolist';
import { AppFavorite } from './pages/my-favorite/my-favorite';
import { AppTemplateMovie } from './pages/my-templateMovie/my-templateMovie';
import { AppFavoriteList } from './pages/my-favoritelist/my-favoritelist';
import { TypeaheadModule } from 'ngx-bootstrap';



const appRoutes: Routes = [
  { path: 'my-home', component: AppHome },
  { path: '', redirectTo: '/my-home', pathMatch: 'full' },
  { path: 'my-favorite', component: AppFavorite },
];

@NgModule({
  imports:      [ BrowserModule,
                  RouterModule.forRoot(appRoutes),
                  FormsModule,
                  HttpModule,
                  TypeaheadModule.forRoot(),
                ],
  declarations: [ AppComponent,
                  AppNavbar,
                  AppHome,
                  AppToDoList,
                  AppFavorite,
                  AppFavoriteList,
                  AppTemplateMovie
                  ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
