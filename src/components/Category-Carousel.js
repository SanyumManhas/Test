import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CategoryCarousel(){
  const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  }
};
    return(
        <div className="container-fluid p-0 mt-4">
          <div className="m-0  d-flex justify-content-start">
            <div className="position-relative">
              <h6 className="text-main ps-4">Gift Packs</h6>
              <div className="h-outline"></div>
            </div>
          </div>     
        <div className="container-fluid">
            <Carousel
            // swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
             <div style={{height:'200px', width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
              <div className="container">
              <img src="./img/card-pic.jpg" width="100%"/>
                <div>
                <p className="text-main  m-0" style={{fontSize:"8px", marginTop:"7px"}}>Frosted Brew Candle</p>
                <p className="text-main  m-0" style={{fontSize:"6px"}}>frosted brew candle with aromatic experience of coffee and wax</p>
                </div>
              </div>
            </div>
            <div style={{height:'200px', width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
              <div className="container">
              <img src="./img/card-pic.jpg" width="100%"/>
                <div>
                <p className="text-main  m-0" style={{fontSize:"8px", marginTop:"7px"}}>Frosted Brew Candle</p>
                <p className="text-main  m-0" style={{fontSize:"6px"}}>frosted brew candle with aromatic experience of coffee and wax</p>
                </div>
              </div>
            </div>
             <div style={{height:'200px', width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
              <div className="container">
              <img src="./img/card-pic.jpg" width="100%"/>
                <div>
                <p className="text-main  m-0" style={{fontSize:"8px", marginTop:"7px"}}>Frosted Brew Candle</p>
                <p className="text-main  m-0" style={{fontSize:"6px"}}>frosted brew candle with aromatic experience of coffee and wax</p>
                </div>
              </div>
            </div>
             <div style={{height:'200px', width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
              <div className="container">
              <img src="./img/card-pic.jpg" width="100%"/>
                <div>
                <p className="text-main  m-0" style={{fontSize:"8px", marginTop:"7px"}}>Frosted Brew Candle</p>
                <p className="text-main  m-0" style={{fontSize:"6px"}}>frosted brew candle with aromatic experience of coffee and wax</p>
                </div>
              </div>
            </div>
          </Carousel>
          </div>
        </div>
    )
}