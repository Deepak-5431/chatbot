
import  Carousel  from "react-multi-carousel";
import { impdata } from "./files/data";
import "react-multi-carousel/lib/styles.css";

//import { bannerData } from "./files/data";

import { styled } from "@mui/material";

const Image = styled('img')({
  width:'100%',
  height:'600px'
})

const responsive = {

  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Fourth = () => {
  return(
   <Carousel
     responsive={responsive}
       dotListClass="custom-dot-list-style"
       itemClass="carousel-item-padding-40-px"
       containerClass="carousel-container"
       swipeable={false}
       draggable={false}
       infinite={true}
       autoPlay={true}
       keyBoardControl={true}
       slidesToSlide={1}
       autoPlaySpeed={4000}
   >      
        {
          impdata.map(data => (
              <Image src={data.url} alt="banner" />
          ))
   }
   </Carousel>
  );
}

export default Fourth;