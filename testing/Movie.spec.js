"use strict";
var Movie_1 = require("../src/app/entity/Movie");
describe('Test unitaire entity Movie', function () {
    beforeEach(function () {
    });
    var movie = new Movie_1.Movie(null);
    var fav = movie.getFavorite();
    it('favorite is false', function () { return expect(true).toBe(!fav); });
    movie.invertFavorite();
    it('invert favorite get true', function () { return expect(true).toBe(movie.getFavorite()); });
});
