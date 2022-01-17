// Write your Character component here
import React from 'react';
// import "./componen/Character.css";

class Character extends React.Component {
    state = {
      user: null,
      error: null,
      loading: true,
    };
    componentDidMount() {
      fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
          const user = data.results[0];
          this.setState({ user, loading: false });
        })
        .catch(error => this.setState({
          error: error.message,
          loading: false,
        }));
    }
    render() {
      return (
        <section>
          {this.props.render(this.state)}
        </section>
      );
    }
  } 