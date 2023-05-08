import { MutatingDots } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderBox>
      <MutatingDots
        height="100"
        width="100"
        color="#ffd700"
        secondaryColor="#ffd700"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderBox>
  );
};

export default Loader;
