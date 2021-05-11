import React, { Component } from 'react';
import styles from '../../styles.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  hendleChange = e => {
    this.setState({ query: e.currentTarget.value });
    console.log(e);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    // console.log(this.props.onSubmit(this.state.query));
    this.setState({ query: '' });
  };
  render() {
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.hendleChange}
            value={this.state.query}
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
