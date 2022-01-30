import './productList.css';
import Product from '../product/Product';

const products = [
    {
        id: 1,
        img: 'https://previews.123rf.com/images/raidenpictures/raidenpictures1911/raidenpictures191100700/134597390-math-on-black-board-with-many-solution-vertical.jpg',
        link: "https://www.instagram.com/mathacademy002/"
    },
    {
        id: 2,
        img: 'https://i.pinimg.com/originals/d6/24/6b/d6246b3d091283ba472a1b033838fb1b.jpg',
        link: "https://www.pinterest.com/scrappinmichele/crafts-photo-craft-ideas/"   
    },
    {
        id: 3,
        img: 'https://theseamanmom.com/wp-content/uploads/2019/09/Sewing-hacks.jpg',
        link: "https://theseamanmom.com/sewing-tips-tricks-hacks/"
    },
    {
        id: 4,
        img: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/sunrise-rails-art-vertical-panorama-debra-and-dave-vanderlaan.jpg',
        link: 'https://www.instagram.com/made_by_arda/'
    }
    
]

const ProductList = () => {
  return (
    <div className='pl'>
        <div className="plText">
            <h1 className='plTitle'>Create, Inspire and Learn About Science</h1>
            <p className='plDescription'>
                Arlinda is a creative portofolio  with many fields of creation. 
                Do not forget about Science.
                Many things you need about Math and Physics. 
            </p>
        </div>
        <div className='plList'>
          {
          products.map((item) => (
              <Product key={item.id} img={item.img} link={item.link} />
          ))}
         
        </div>
      
    </div>
  )
}

export default ProductList;
