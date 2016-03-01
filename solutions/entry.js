import {getMovie, getMovies, setMovie} from './movieDB.js'


export default function api(){}

var add = document.querySelector('button[name="save"]')
var titleE = document.querySelector('input[name="title"]')
var descE = document.querySelector('input[name="description"]')
var tbody = document.querySelector('tbody')

add.addEventListener('click', ()=> {
  setMovie(titleE.value, descE.value)
  render()
  titleE.value = ''
  descE.value = ''
})

function render(){
  var html = ''
  for(var movie of getMovies()){
    html += `
      <tr>
        <td>${movie.id}</td>
        <td>${movie.title}</td>
        <td>${movie.description}</td>
        <td></td>
      </tr>
    `
  }
  tbody.innerHTML = html
}

render()

export
