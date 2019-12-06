import { Component } from "@angular/core";
import { IShow } from './IShow';
import { TvServices } from './tvshows.service';

@Component({
    selector: 'app-tvShow',
    templateUrl: './tvshows.component.html',
    styleUrls:['./tvshows.component.css']
})

export class TvShowComponent{
    shows:IShow;
    showsLoaded: Promise<boolean>
    constructor(private tvService: TvServices)
    {
        this.callShow()
        
    }
    callShow(){
        this.tvService.getShows().subscribe(Observed => {            
            this.shows = Observed
            this.showsLoaded = Promise.resolve(true)
        })
    }
    nextPage(){
        this.tvService.nextPageHandler()
        this.callShow()
    }
    prevPage(){
        this.tvService.prevPageHandler()
        this.callShow()
    }
}