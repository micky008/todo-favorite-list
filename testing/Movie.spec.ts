import {Movie} from '../src/app/entity/Movie'

describe('Test unitaire entity Movie', () => {
  beforeEach(() => {
  });
  let movie: Movie = new Movie(null);
  let fav = movie.getFavorite();
  it('favorite is false', () => expect(true).toBe(!fav));
  movie.invertFavorite();
  it('invert favorite get true', () => expect(true).toBe(movie.getFavorite()));
});
