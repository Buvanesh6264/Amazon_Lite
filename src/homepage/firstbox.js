import React from 'react'
import images from './corimg/images'
import '../homepage/firstbox.css'

function Firstbox() {
  return (
    <div>
        <div class='banner'>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={images.a} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={images.b} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={images.c} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={images.d} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={images.e} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={images.f} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={images.g} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={images.h} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        {/* <!-- box1 in wish list  --> */}
        <div class="wishlist">
            <div class="wl list1">
            <h4>Appliances for your home | Up to 55% off</h4>
            <div class="box1">
                <div class="c1li">
                    <div class="l1c1">
                        <img src="ac.jpg" class="img1"/>
                        <a href="#">Air Conditioners</a>
                    </div>
                    <div class="l1c2">
                        <img src="mrowv.jpg" class="img1"/>
                        <a href="#">Microwaves</a>
                    </div>
                </div>
                <div class="c2l1">
                    <div class="l1c3">
                        <img src="frg.jpg" class="img1"/>
                        <a href="#">Refrigerators</a>
                    </div>
                    <div class="l1c4">
                        <img src="wmish.jpg" class="img1"/>
                        <a href="#">Washing machines</a>
                    </div>
                </div>
            </div>
            <a href="#" id="box-a">See more</a>
            </div>

            {/* <!-- box2 in wishlist  --> */}
            <div class="wl list2">
            <h4>Starting ₹149 | Headphones</h4>
            <div class="box1">
                <div class="c1li">
                    <div class="l1c1">
                        <img src="boat.jpg" class="img1"/>
                        <a href="#">Starting ₹249 | boat</a>
                    </div>
                    <div class="l1c2">
                        <img src="noise.jpg" class="img1"/>
                        <a href="#">Starting ₹649 | Noise</a>
                    </div>
                </div>
                <div class="c2l1">
                    <div class="l1c3">
                        <img src="boult.jpg" class="img1"/>
                        <a href="#">Starting ₹349 | boult</a>
                    </div>
                    <div class="l1c4">
                        <img src="zebro.jpg" class="img1"/>
                        <a href="#">Starting ₹149 | Zebronics</a>
                    </div>
                </div>
            </div>
            <a href="#" id="box-a">See all offers</a>
            </div>

            {/* <!-- box3 in wishlist  --> */}
            <div class="wl list3">
            <h4>Revamp your home in style</h4>
                <div class="box1">
                    <div class="c1li">
                        <div class="l1c1">
                            <img src="cushn.jpg" class="img1"/>
                            <a href="#">Cusshion covers, bedsheets & more </a>
                        </div>
                        <div class="l1c2">
                            <img src="hmstrg.jpg" class="img1"/>
                            <a href="#">Refrigerators</a>
                        </div>
                    </div>
                    <div class="c2l1">
                        <div class="l1c3">
                            <img src="vas.jpg" class="img1"/>
                            <a href="#">Microwaves</a>
                        </div>
                        <div class="l1c4">
                            <img src="light.jpg" class="img1"/>
                            <a href="#">Washing machines</a>
                        </div>
                    </div>
                </div>
            <a href="#" id="box-a">Explore all</a>
            </div>

            {/* <!-- box4 in wishlist  --> */}
            <div class="wl list4">
            <h4>Starting ₹99 | Amazon Brands & more</h4>
            <div class="box1">
                <div class="c1li">
                <div class="l1c1">
                    <img src="or.jpg" class="img1"/>
                    <a href="#">Air Conditioners</a>
                </div>
                <div class="l1c2">
                    <img src="99.jpg" class="img1"/>
                    <a href="#">Refrigerators</a>
                </div>
                </div>
                <div class="c2l1">
                <div class="l1c3">
                    <img src="60.jpg" class="img1"/>
                    <a href="#">Microwaves</a>
                </div>
                <div class="l1c4">
                    <img src="sh.jpg" class="img1"/>
                    <a href="#">Washing machines</a>
                </div>
                </div>
            </div>
            <a href="#" id="box-a">Shop now</a>
            </div> 
            
        </div>
    </div>
  )
}

export default Firstbox