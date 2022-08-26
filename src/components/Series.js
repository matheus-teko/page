import React from "react";
import axios from "axios";

const seriesApi = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/tv/popular?api_key=b49cbfd910b10dd787f5cfdb3b44d1b0&language=en-US&page=1"
});
export default class Series extends React.Component {
  state = {
    series: []
  };
  addSeries = async () => {
    const response = await seriesApi.get();
    const info = response.data.results.map((item) => {
      return {
        nome: item.name,
        sinopse: item.overview,
        image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
      };
    });
    console.log(response);
    this.setState({
      series: info
    });
  };
  componentDidMount() {
    this.addSeries();
  }
  render() {
    return (
      <div>
        <h1 style={{ color: "blue" }}>Series em alta:</h1>
        <ol>
          {this.state.series.map((item) => (
            <>
              <li>{item.nome}</li>
              <p>{item.sinopse}</p>
              <img src={item.image} alt="" />
            </>
          ))}
        </ol>
      </div>
    );
  }
}
