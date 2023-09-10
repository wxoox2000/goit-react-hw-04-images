import { Component } from 'react';
import { List } from './ImageGallery.sty;ed';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  render() {
    const imageList = this.props.images;
    return (
      <List>
        {imageList.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              url={webformatURL}
              openModal={() => this.props.openModal(largeImageURL)}
            />
          );
        })}
      </List>
    );
  }
}
