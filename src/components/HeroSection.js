export default function HeroSection(){
    return(
        <>
            <div class="container-fluid mt-3 bg-primary mb-5 bg-transparent ">
                <div className="container ms-4 hero-back">
                    <div class="row align-items-center hero-tint">
                        <div class="hero-block col-lg-6 text-center  text-lg-start ps-5 d-flex justify-content-center flex-column">
                            <h1 class="w-75 text-white animated fadeIn "><span className="text-main">DIVA</span></h1>
                            <div className="w-75 ms-2">
                                <p class="text-black w-100 mb-4 animated fadeIn text-justify">Minimilastically beautiful enjoy an aromatic experience with our wide ranging flavors.</p>
                            </div>
                            <div className="w-75 ms-2">
                                <a href="" class="btn-hollow py-2 px-4 animated fadeIn">Explore Now</a>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-6 hero-block">
                            <div className="img-block animated fadeIn">
                                    <img className="img-float" src="./img/image.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* info section */}
            <div class="container-fluid py-5 mb-5">
                <div class="container">
                    <div class="row g-5 align-items-center">
                        <div class="col-md-5 col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                            <div className="bblock">
                                <div className="fblock">
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1 col-lg-1"></div>
                        <div class="col-md-6 col-lg-6 wow fadeIn position-relative" data-wow-delay="0.5s">
                            <div style={{backgroundColor:"#FCFFCD", position:'absolute', zIndex:'-1', right:'0px', width:"75%", bottom:"60%", height:"25%"}}></div>
                            <h1 class="text-main fs-1 fw-normal mb-4">Combining Wellness with Creativity</h1>
                            
                            <p class="mb-4">it is not just about living, lets live well and enjoy life. Explore a wide range of our products to light up your room. it is not just about living, lets live well and enjoy life. Explore a wide range of our products to light up your room.</p>
                            {/* <a class="btn btn-primary py-2 px-4" href="">Shop Now</a> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured items section */}
             <div class="container-fluid py-5">
        <div class="container">
            <div class="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <h1 class="text-highlight mb-3"><span class="text-dark fw-light me-1">Our Favorite</span>Aromatics</h1>
                <p class="mb-5">Try these if just getting started with us, You will love these!</p>
            </div>
            <div class="row g-4">
                <div class="col-6 col-sm-6 col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                    <div class="product-item h-100 p-4">
                        <img class="img-fluid mb-4" src="img/infoHero.jpeg" alt=""/>
                        <div className="p-2">
                            <h6 class="mb-2">Frosted Brew Candle</h6>
                            <p class="mb-4 text-main" style={{fontSize:'13px'}}>
                                frosted brew candle with aromatic experience of coffee and wax
                            </p>
                         </div>
                    </div>
                </div>
                <div class="col-6 col-sm-6 col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                    <div class="product-item h-100 p-4">
                        <img class="img-fluid mb-4" src="img/infoHero.jpeg" alt=""/>
                        <div className="p-2">
                            <h6 class="mb-2">Frosted Brew Candle</h6>
                            <p class="mb-4 text-main" style={{fontSize:'13px'}}>
                                frosted brew candle with aromatic experience of coffee and wax
                            </p>
                         </div>
                    </div>
                </div>
                <div class="col-6 col-sm-6 col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                    <div class="product-item h-100 p-4">
                        <img class="img-fluid mb-4" src="img/infoHero.jpeg" alt=""/>
                        <div className="p-2">
                            <h6 class="mb-2">Frosted Brew Candle</h6>
                            <p class="mb-4 text-main" style={{fontSize:'13px'}}>
                                frosted brew candle with aromatic experience of coffee and wax
                            </p>
                         </div>
                    </div>
                </div>
               <div class="col-6 col-sm-6 col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                    <div class="product-item h-100 p-4">
                        <img class="img-fluid mb-4" src="img/infoHero.jpeg" alt=""/>
                        <div className="p-2">
                            <h6 class="mb-2">Frosted Brew Candle</h6>
                            <p class="mb-4 text-main" style={{fontSize:'13px'}}>
                                frosted brew candle with aromatic experience of coffee and wax
                            </p>
                         </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
        </>
    );
}