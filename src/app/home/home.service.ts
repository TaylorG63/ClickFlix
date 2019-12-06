import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})

export class HomeServices{
    showsUrl: string = "https://api.themoviedb.org/3/tv/popular?api_key=6fc4a0dcbbd1fd4d9ace1194d1f6c028&language=en-US&page=1"
    moviesUrl: string = "https://api.themoviedb.org/3/movie/now_playing?api_key=6fc4a0dcbbd1fd4d9ace1194d1f6c028&language=en-US&page=1";
    constructor(private http: HttpClient){}
    getShows(){
        return this.http.get(this.showsUrl)
    }
    getMovies(){
        return this.http.get(this.moviesUrl)
    }
}