export default function List(){
    return(
        <>
            <div className="list-container mt-4">
                <h6 style={{fontWeight:'400'}}>Our Favorite <span style={{color:'#B68760', fontWeight:'400'}}>Aromatics</span></h6>
                <p className="content-text">Try these if just getting started with us, You will love this!</p>
                <div className="row w-100 g-4">
                    <div className="col-4 ">
                        <img src="./img/card-pic.jpg" width="100%"/>
                        <div>
                        <p className="text-main  m-0" style={{fontSize:"8px", marginTop:"7px"}}>Frosted Brew Candle</p>
                        <p className="text-main  m-0" style={{fontSize:"6px"}}>frosted brew candle with aromatic experience of coffee and wax</p>
                        </div>
                    </div>
                    <div className="col-4 ">
                        <img src="./img/card-pic.jpg" width="100%"/>
                        <div>
                        <p className="text-main  m-0" style={{fontSize:"8px", marginTop:"7px"}}>Frosted Brew Candle</p>
                        <p className="text-main  m-0" style={{fontSize:"6px"}}>frosted brew candle with aromatic experience of coffee and wax</p>
                        </div>
                    </div>
                     <div className="col-4 ">
                        <img src="./img/card-pic.jpg" width="100%"/>
                        <div>
                        <p className="text-main  m-0" style={{fontSize:"8px", marginTop:"7px"}}>Frosted Brew Candle</p>
                        <p className="text-main  m-0" style={{fontSize:"6px"}}>frosted brew candle with aromatic experience of coffee and wax</p>
                        </div>
                    </div>
                </div>
            
            </div>
        </>
    )
}