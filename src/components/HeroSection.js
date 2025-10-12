export default function HeroSection(){
    return(
        <>
            <div className="main-div-hero">
                <div className="bg-pattern"></div>
                <div className="text-data pt-4">
                    <h1 style={{color:"#5E3C58"}}>DIVA</h1>
                    <p>Minimilastically beautiful enjoy an aromatic experience with our wide ranging flavors.</p>
                     <button className="btn main-hero-btn" type="submit">
                        Explore Now
                    </button>
                </div>
                <div className="main-div-hero-img text-center">
                    <img src="./img/image.png" className="rounded img-fluid"/>
                </div>
            </div>
            
        </>
    )
}