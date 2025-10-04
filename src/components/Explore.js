import { useState } from 'react';
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
export default function Explore(){
    const array = Array.from({length:6}, ()=> {});

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
                {
                    array.map((_,i)=>{
                        let delay = 0.1 + 0.1*i;
                        return(
                             <Link to="/product" className="col-6 col-sm-6 col-md-6 col-lg-3 wow fadeIn" data-wow-delay={`${delay}s`}>
                                <div class="product-item p-0 rounded">
                                    <img className="img-fluid mb-2 p-2 h-50 br-class" src="img/infoHero.jpeg" alt=""/>
                                    <div className="p-0">
                                        <h6 class="mb-2 ps-2" style={{fontSize:"0.9em"}}>Frosted Brew Candle</h6>
                                        <p class="mb-1 text-dark ps-2 pe-2" style={{fontSize:'0.7em'}}>
                                            frosted brew candle with experience of coffee and wax
                                        </p>
                                        <span class="text-dark d-flex pe-2 pb-1 justify-content-end" style={{fontSize:'1em'}}>
                                        ₹ 200</span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })               
                }
               
                
                
            </div>
        </div>
        </>
    );
}