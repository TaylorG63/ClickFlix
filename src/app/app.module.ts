import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TvShowComponent } from './tvshows/tvshows.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TvShowComponent,
    MoviesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'movies', component: MoviesComponent},
      {path: 'tv', component:TvShowComponent},
      {path: 'home', component:HomeComponent},
      {path: '', redirectTo: 'home', pathMatch:'full'},
      {path: '**', redirectTo: 'home', pathMatch:'full'}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
