import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductItemInformation.scss';
import Loader from '../Loader/Loader';
import { useAppDispatch, useAppSelector } from '../../hooks';
import useFetchProductItem from '../../hooks/useFetchProductItem';
import { setStoreProduct } from '../../redux/slices/productSlice';
import ProductInfo from './ProductInfo/ProductInfo';

const ProductItemInformation: FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetchProductItem('products', id as string);
  const [showInfo, setShowInfo] = useState(false);
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.products.product);

  setTimeout(() => {
    setShowInfo(true);
  }, 2000);

  useEffect(() => {
    dispatch(
      setStoreProduct({
        product: data,
      }),
    );
  }, [dispatch, data]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className='item-information__wrapper'>
      {showInfo ? <ProductInfo product={product} /> : <Loader />}
    </div>
  );
};

export default ProductItemInformation;
