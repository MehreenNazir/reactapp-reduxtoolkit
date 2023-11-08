import React from 'react'
import Header from '../../Component/Header/Header'
import Banner from '../../Component/Banner/Banner'
import { useDispatch, useSelector } from 'react-redux';
import heart from "../../images/Fill Heart (1).png";
import Button from '../../Component/Button/Button';
import { handleDataToDisplay, selectShowAllData } from '../../Store/AppSlice';
import { data } from '../../Component/Data';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import { faV } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
  const [count, setCount] = React.useState(0)
  const [favorites, setFavorites] = React.useState([]);
  //Functionality of favorate
  const handleCount = () => {
    // const isfav = favorites.find((i) => i.id === id)
    // if (isfav) {
      setCount(count + 1);
      // setFavorites([...setFavorites, isfav]);
    }
  //   else {
  //     setCount(0)
  //   }  
  // }



  //For grid View
  const showAllData = useSelector(selectShowAllData)
  const dispatch = useDispatch()
  const handleButtonClick = () => {
    dispatch(handleDataToDisplay())
  }
  const productDisplay = showAllData ? data : data.slice(0, 4)
  //For search items
  const searchProduct = useSelector(state => state.products.searchProduct)
  const searchProducts = data.filter(item => item.text.includes(searchProduct))
  return (
    <>
      <div className='items-center'>
        <Header count={count} />
        <Banner />
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
            maxWidth: "1170px",
            margin: "0 auto 140px",
          }}
        >
          {searchProduct ? searchProducts.map((item, index) => (
            <div className="w-[270px] h-[320px]">
              <div className="text-white absolute rounded pl-2 pr-2 pt-1 pb-1 bg-red-600 ml-[12px] mt-[12px] mb-[212px] mr-[203px]" alt="Discount">
                {item.discount}
              </div>
              <div className="absolute ml-[224px] mr-[12px] mt-[12px] mb-[204px]">

                <img className='w-[32px] h-[32px]' src={heart} alt='' />
              </div>
              <div className="bg-gray-100 w-[270px] h-[250px]">
                <img
                  className="absolute pl-[9px] pr-[9px] pt-[14px] pb-[14px] m-[49px] object-fit"
                  src={item.img}
                  alt="Product"
                />
              </div>
              <p className="text-black pt-2 text-[16px] font-medium leading-[24px]">
                {item.text}
              </p>
              <div className="flex space-x-4">
                <div className="text-red-600 pt-2 text-[16px] font-medium leading-[24px]">
                  ${item.price}
                </div>
                <div className="text-gray-600 line-through pt-2 text-[16px] font-medium leading-[24px]">
                  ${item.oldprice}
                </div>
              </div>
            </div>)) :
            productDisplay.map((item, index) => (
              <div className="w-[270px] h-[320px]">
                <div className="text-white absolute rounded pl-2 pr-2 pt-1 pb-1 bg-red-600 ml-[12px] mt-[12px] mb-[212px] mr-[203px]" alt="Discount">
                  {item.discount}
                </div>
                <div className="absolute w-[32px] h-[32px] content-center ml-[224px] mr-[12px] mt-[12px] mb-[204px] bg-white rounded-full" onClick={() => handleCount()}>
                  <FavoriteIcon
                    sx={{
                      marginLeft: '6px',
                      marginTop: '3px',
                      // color: favorites.includes(item.id)? "red":"black" 
                    }}
                    fontSize="small"
                  />
                </div>
                <div className="bg-gray-100 w-[270px] h-[250px]">
                  <img
                    className="absolute pl-[9px] pr-[9px] pt-[14px] pb-[14px] m-[49px] object-fit"
                    src={item.img}
                    alt="Product"
                  />
                </div>
                <p className="text-black pt-2 text-[16px] font-medium leading-[24px]">
                  {item.text}
                </p>
                <div className="flex space-x-4">
                  <div className="text-red-600 pt-2 text-[16px] font-medium leading-[24px]">
                    ${item.price}
                  </div>
                  <div className="text-gray-600 line-through pt-2 text-[16px] font-medium leading-[24px]">
                    ${item.oldprice}
                  </div>
                </div>
              </div>
            ))
          }
        </section>
        <Button onClick={handleButtonClick} className="mr-[603px] ml-[603px] mb-[162px] text-white bg-red-600 w-[234px] h-[75px]">
          {showAllData ? 'Show Less Products' : 'View All Products'}
        </Button>
      </div>

    </>
  )
}

export default Home