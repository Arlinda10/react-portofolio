import './product.css';



const Product = ({img, link}) => {
  return (
    <div className='p'>
      <div className='pBrowser'>
        <div className="pCircle"></div>
        <div className="pCircle"></div>
        <div className="pCircle"></div>
        <div className="pCircle"></div>
      </div>
      <a href={link} target="_blank" rel='noreferrer'>
      <img src={img} alt="" className='pImg' />
      </a>
  </div>
  )
}

export default Product;

                                         