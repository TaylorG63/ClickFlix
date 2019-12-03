import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TvShows } from './tvshows/tvshows.component';
import { Movies } from './movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    TvShows,
    Movies
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
