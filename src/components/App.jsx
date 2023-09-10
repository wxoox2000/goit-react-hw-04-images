import { GlobalStyles } from './GlobalStyles';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from './api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Spinner } from './Spinner/Spinner';
import { ModalImage } from './modal/modal';
import { Wrap } from './App.styled';
import { useState, useEffect } from 'react';

export const App = () => {
  const [params, setParams] = useState({
    key: '38386853-763a1f2de355a94d7870ea155',
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 12,
  });
  const [queryResult, setQueryResult] = useState([]);
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [closing, setClosing] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const fetchDataFirst = async () => {
      try {
        setLoading(true);
        const resp = await fetchImages(params, controller);
        setQueryResult(resp);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setFailed(true);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchDataFirst();
    return () => {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const searchQuery = result => {
    setQueryResult([]);
    setParams({ ...params, q: result.query, page: 1 });
  };
  const loadMore = () => {
    setParams({ ...params, page: params.page + 1 });
  };
  const openModal = url => {
    setModalImg(url);
  };
  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setModalImg(null);
      setClosing(false);
    }, 500);
  };
  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      if (params.q === '') {
        return;
      }
      try {
        setLoading(true);
        const resp = await fetchImages(params, controller);
        setQueryResult(q => q.concat(resp));
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setFailed(true);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [params]);
  return (
    <Wrap>
      <Searchbar searchQuery={searchQuery} />
      {failed ? (
        <h2>Ooops, something went wrong</h2>
      ) : (
        <ImageGallery images={queryResult} openModal={openModal} />
      )}
      {loading && <Spinner />}
      {modalImg ? (
        <ModalImage closeModal={closeModal} closing={closing} url={modalImg} />
      ) : null}
      {queryResult.length > 0 || failed ? <Button loadMore={loadMore} /> : null}
      <GlobalStyles />
    </Wrap>
  );
};
