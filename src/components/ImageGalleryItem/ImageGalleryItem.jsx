import { Component } from 'react';
import { Image, Item } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <Item onClick={() => this.props.openModal(this.props.largeImg)}>
        <Image src={this.props.url} alt="" />
      </Item>
    );
  }
}
