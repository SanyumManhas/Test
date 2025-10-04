import Navbar from './Navbar'
export default function Explore(){
    return(
        <>
            <Navbar/>
            {/* Breadcrumbs */}
            <div className='ps-4 bc-parent'>
                <div className='bc-child'></div>
                <p>explore / <span style={{color:'#5E3C58', fontSize:'16px'}}>candles</span></p>
            </div>

            <div class="container">
            <div class="row g-4 p-4">
                <div class="col-6 col-sm-6 col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.1s" data-wow-offset='20'>
                    <div class="product-item h-100 p-4 rounded">
                        <img class="img-fluid mb-4 rounded" src="img/infoHero.jpeg" alt=""/>
                        <div className="p-2">
                            <h6 class="mb-2">Frosted Brew Candle</h6>
                            <p class=" text-main" style={{fontSize:'13px'}}>
                                frosted brew candle with aromatic experience of coffee and wax
                            </p>
                            <div className='m-0 d-flex justify-content-between'>
                                <span>Price</span>
                                 <span className='text-dark'>Rs. 250</span>
                            </div>
                         </div>
                    </div>
                </div>
                <div class="col-6 col-sm-6 col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.1s" data-wow-offset='20'>
                    <div class="product-item h-100 p-4 rounded">
                        <img class="img-fluid mb-4 rounded" src="img/infoHero.jpeg" alt=""/>
                        <div className="p-2">
                            <h6 class="mb-2">Frosted Brew Candle</h6>
                            <p class=" text-main" style={{fontSize:'13px'}}>
                                frosted brew candle with aromatic experience of coffee and wax
                            </p>
                            <div className='m-0 d-flex justify-content-between'>
                                <span>Price</span>
                                 <span className='text-dark'>Rs. 250</span>
                            </div>
                         </div>
                    </div>
                </div>
                <div class="col-6 col-sm-6 col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.1s" data-wow-offset='20'>
                    <div class="product-item h-100 p-4 rounded">
                        <img class="img-fluid mb-4 rounded" src="img/infoHero.jpeg" alt=""/>
                        <div className="p-2">
                            <h6 class="mb-2">Frosted Brew Candle</h6>
                            <p class=" text-main" style={{fontSize:'13px'}}>
                                frosted brew candle with aromatic experience of coffee and wax
                            </p>
                            <div className='m-0 d-flex justify-content-between'>
                                <span>Price</span>
                                 <span className='text-dark'>Rs. 250</span>
                            </div>
                         </div>
                    </div>
                </div>
                <div class="col-6 col-sm-6 col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.1s" data-wow-offset='20'>
                    <div class="product-item h-100 p-4 rounded">
                        <img class="img-fluid mb-4 rounded" src="img/infoHero.jpeg" alt=""/>
                        <div className="p-2">
                            <h6 class="mb-2">Frosted Brew Candle</h6>
                            <p class=" text-main" style={{fontSize:'13px'}}>
                                frosted brew candle with aromatic experience of coffee and wax
                            </p>
                            <div className='m-0 d-flex justify-content-between'>
                                <span>Price</span>
                                 <span className='text-dark'>Rs. 250</span>
                            </div>
                         </div>
                    </div>
                </div>
                 

                
                
            </div>
        </div>
        </>
    );
}