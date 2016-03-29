var db = new Map()

var counter = 0

export function setMovie( title, description) {
  var movie = {id :counter, title, description}
  db.set(counter, movie)
  counter++
  return movie
}

export function getMovie(id) {
  return db.get(id)
}

export function getMovies() {
  return db.values()
}
