import {Movie} from '../../entity/Movie'
import {Input, Component, Output, EventEmitter} from '@angular/core'
import {Session} from '../../utilities/Session'


@Component({
  selector: 'my-templateMovie',
  templateUrl: './my-templateMovie.html',
  styleUrls: ['./my-templateMovie.css']
})
export class AppTemplateMovie {

  @Output() idFilmEvent:EventEmitter<number> = new EventEmitter<number>();

  @Input()
  private movie: Movie;

  @Input()
  isInTodoList: boolean

  private visible: boolean = true

  deleteTodo() {
    if(!this.isInTodoList) {
      this.visible = false;
    }
    this.idFilmEvent.emit(this.movie.getId())
  }

  invisible(visible : boolean){
    if(!this.isInTodoList){
      this.visible = visible;
    }
  }

  addFavorite() {
    if (this.movie.getFavorite()) {
      this.movie.invertFavorite()
      if(!this.isInTodoList){
        this.visible = false;
      }
      Session.reset('' + this.movie.getId())
    } else {
      this.movie.invertFavorite()
      Session.put('' + this.movie.getId(), this.movie);
    }

  }
}
