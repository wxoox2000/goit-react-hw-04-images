import { Component } from 'react';
import { GlobalStyles } from './GlobalStyles';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from './api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Spinner } from './Spinner/Spinner';
import { ModalImage } from './modal/modal';
import { Wrap } from './App.styled';

export class App extends Component {
  state = {
    params: {
      key: '38386853-763a1f2de355a94d7870ea155',
      q: '',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: 1,
      per_page: 12,
    },
    queryResult: [],
    failed: false,
    loading: false,
    modalImg: null,
    closing: false,
  };
  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const resp = await fetchImages(this.state.params);
      this.setState({ queryResult: resp });
    } catch (error) {
      this.setState({ failed: true });
    } finally {
      this.setState({ loading: false });
    }
  }
  searchQuery = result => {
    this.setState(p => {
      return {
        queryResult: [],
        params: { ...p.params, q: result.query, page: 1 },
      };
    });
  };
  loadMore = () => {
    this.setState(p => {
      return { params: { ...p.params, page: this.state.params.page + 1 } };
    });
  };
  openModal = url => {
    this.setState({ modalImg: url });
  };
  closeModal = () => {
    this.setState({ closing: true })
    setTimeout(() => this.setState({ modalImg: null, closing: false }), 500);
  };
  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.params.q !== this.state.params.q ||
      prevState.params.page !== this.state.params.page
    ) {
      try {
        this.setState({ loading: true });
        const resp = await fetchImages(this.state.params);
        this.setState(p => {
          return { queryResult: p.queryResult.concat(resp) };
        });
      } catch (error) {
        this.setState({ failed: true });
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  render() {
    return (
      <Wrap>
        <Searchbar searchQuery={this.searchQuery} />
        {this.state.failed ? (
          <h2>Ooops, something went wrong</h2>
        ) : (
          <ImageGallery
            images={this.state.queryResult}
            openModal={this.openModal}
          />
        )}
        {this.state.loading && <Spinner />}
        {this.state.modalImg ? (
          <ModalImage closeModal={this.closeModal} closing={this.state.closing} url={this.state.modalImg} />
        ) : null}
        {this.state.queryResult.length > 0 || !this.state.failed ? (
          <Button loadMore={this.loadMore} />
        ) : null}
        <GlobalStyles />
      </Wrap>
    );
  }
}
