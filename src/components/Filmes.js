import React from "react";
import axios from "axios";

const filmesApi = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=b49cbfd910b10dd787f5cfdb3b44d1b0&language=en-US"
});
export default class App extends React.Component {
  state = {
    movies: []
  };
  addFilmes = async () => {
    const resposta = await filmesApi.get();
    const api = resposta.data.results.map((item) => {
      return {
        title: item.title,
        overview: item.overview,
        image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
      };
    });
    this.setState({
      movies: api
    });
  };
  componentDidMount() {
    this.addFilmes();
  }
  render() {
    return (
      <div>
        <h1 style={{ color: "blue" }}>Filmes em alta:</h1>
        <ol>
          {this.state.movies.map((item) => (
            <>
              <li>{item.title}</li>
              <p>{item.overview}</p>
              <img src={item.image} alt={`Poster do filme ${item.title}`} />
            </>
          ))}
        </ol>
      </div>
    );
  }
}
