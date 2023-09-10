import { ProgressBar } from 'react-loader-spinner';
import { Loading } from './spinner.styled';

export const Spinner = () => {
  return (
    <Loading>
      <ProgressBar
        height="300"
        width="300"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#3f51b5"
        barColor="#3f51b5"
      />
    </Loading>
  );
};
