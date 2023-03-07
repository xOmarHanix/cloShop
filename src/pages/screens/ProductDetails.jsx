import Helmet from '../../common/helmet/Helmet';
import Banner from '../../common/banner/Banner';
import productsData from '../../assets/data/productsData';
import { useParams } from 'react-router-dom';
import Header from '../../common/header/Header';
import ProductInfo from '../../components/productInfo/ProductInfo';
import ProductDiscussion from '../../components/productDiscussion/ProductDiscussion';
import { useEffect } from 'react';


function ProductDetails() {

  const {id} = useParams();
  const product = productsData.find((item) => item.id === id);
  const {productName} = product;

  useEffect(() => {
    window.scrollTo(0,0)
  },[product])


  return (
    <Helmet title={productName}>
      <Header />
      <Banner title={productName} />
      <ProductInfo />
      <ProductDiscussion />
    </Helmet>
  )
}

export default ProductDetails