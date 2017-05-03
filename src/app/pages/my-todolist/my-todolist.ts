import {Component} from '@angular/core';
import {Movie} from '../../entity/Movie'
import {MoviesHelper} from '../../utilities/MoviesHelper'
import {Session} from '../../utilities/Session'

@Component({
  selector: 'my-todolist',
  templateUrl: './my-todolist.html',
  styleUrls: ['./my-todolist.css']
})
export class AppToDoList {
  CURRENT_LIST: string = "currentlist";
  newTodo: string;
  todos: any[];
  movies: Movie[];

  error : boolean = false;

  constructor() {
    this.newTodo = '';
    this.todos = []
    let res = Session.get(this.CURRENT_LIST)
    if (res != undefined) {
      this.todos = res
    }
    this.movies = MoviesHelper.getMovies()
  }


  deleteTodo(idMovie : number){
    let i : number = 0;
    for (let mov of this.todos){
      if (mov == null){
        i++;
        continue;
      }
      if (mov.getId() == idMovie){
        break;
      }
      i++;
    }
    this.todos[i] = null;
  }

  addTodo(event: any) {
    let res: Movie = null;
    for (let movie of this.movies) {
      if (movie.getTitle() == this.newTodo) {
        res = movie;
        break;
      }
    }
    this.error = (res == null)
    if (res != null) {
      this.todos.push(res);
      Session.put(this.CURRENT_LIST, this.todos);
      this.newTodo = null;
      event.preventDefault();
    }
  }

  deleteList() {
    Session.reset(this.CURRENT_LIST);
    let max = this.todos.length;
    let i = 0
    while (i < max) {
      this.todos[i] = null;
      i++;
    }
  }
}
