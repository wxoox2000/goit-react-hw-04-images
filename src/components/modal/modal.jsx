import { Component } from 'react';
import { Modal, Overlay } from './modal.styled';

export class ModalImage extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEsc);
  }

  handleEsc = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  BackdropClose = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };
  render() {
    return (
      <Overlay onClick={this.BackdropClose} closing={this.props.closing}>
        <Modal closing={this.props.closing}>
          <img src={this.props.url} alt="" width={800} />
        </Modal>
      </Overlay>
    );
  }
}
