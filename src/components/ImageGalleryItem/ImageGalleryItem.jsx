import { Image, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({url, largeImg, openModal}) => {
    return (
      <Item onClick={() => openModal(largeImg)}>
        <Image src={url} alt="" />
      </Item>
    );
  }
