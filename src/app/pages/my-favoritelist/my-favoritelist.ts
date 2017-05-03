import {Component} from '@angular/core';
import {MoviesHelper} from '../../utilities/MoviesHelper'
import {Movie} from '../../entity/Movie'
import {Session} from '../../utilities/Session'

@Component({
  selector: 'my-favoritelist',
  templateUrl: './my-favoritelist.html',
  styleUrls: ['./my-favoritelist.css']
})
export class AppFavoriteList {

  private moviesFavorite: Movie[]

  constructor() {
    this.moviesFavorite = new Array<Movie>();
    let movies: Movie[] = MoviesHelper.getMovies();
    let mobj: Movie = null;
    for (let movie of movies) {
      mobj = Session.get('' + movie.getId());
      if (mobj != null) {
        this.moviesFavorite.push(mobj)
      }
    }
  }
}
