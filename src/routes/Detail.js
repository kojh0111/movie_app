import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <section className="container">
          <div className="detail">
            <img src={location.state.poster} alt={location.state.title}></img>
            <div className="detail__info">
              <h1 className="detail__title">{location.state.title}</h1>
              <h3 className="detail__year">{location.state.year}</h3>
              <ul className="detail__genres">
                {location.state.genres.map((genre, index) => (
                  <li key={index} className="genres__genre">
                    {genre}
                  </li>
                ))}
              </ul>
              <p className="detail__summary">{location.state.summary}</p>
            </div>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
