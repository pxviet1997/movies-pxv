import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjllMDc3MzE5YjM1NTk2ODk3ODMxMDM5ZWE0NGJmZCIsInN1YiI6IjVmZDgxN2VjNjgxODg4MDAzZjk5OGUxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JjcUBzFZlXwqmxy90OwtkwwB6qYSqiXn1Vn6yCvzTYY'
  }
});