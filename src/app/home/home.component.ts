import { Component, OnInit } from '@angular/core';
import { HomeServices } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  movies;
  shows;
  moviesLoaded: Promise<boolean>
  showsLoaded: Promise<boolean>
  constructor(private homeServie: HomeServices) { 
    this.homeServie.getMovies().subscribe(ObservedMovies => {
      this.movies = ObservedMovies
      this.moviesLoaded = Promise.resolve(true)
      console.log(this.movies)
    })
    this.homeServie.getShows().subscribe(ObservedShows =>{
      this.shows = ObservedShows
      this.showsLoaded = Promise.resolve(true)
    })
  }

}
