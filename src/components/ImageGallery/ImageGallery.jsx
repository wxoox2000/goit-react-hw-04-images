import { List } from './ImageGallery.sty;ed';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({images, openModal}) => {
    // const imageList = this.props.images;
    return (
      <List>
        {images.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              url={webformatURL}
              openModal={() => openModal(largeImageURL)}
            />
          );
        })}
      </List>
    );
  }
