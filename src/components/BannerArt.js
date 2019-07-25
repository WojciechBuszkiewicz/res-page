import React from 'react'
import bakerimg from '../img/baker.PNG'
import bannerimg1 from '../img/bannerimg1.jpg'
import bannerimg2 from '../img/bannerimg2.jpg'
import bannerimg3 from '../img/bannerimg3.jpg'
import bannerimg4 from '../img/bannerimg4.jpg'
const BannerArt = () => {

    return (
        <section className='banner-art'>
            <div className='text-wrapper'>
                <h2>Art of cakes</h2>
                <span>we crate delicious memories</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minus commodi numquam asperiores amet itaque odio dolore temporibus excepturi odit ad, deleniti ut quos praesentium reiciendis facilis, voluptatibus soluta animi.</p>
                <h3>Chef cook</h3>
                <div className="baker-wrapper">
                    <h4>Amando</h4>
                    <img src={bakerimg} alt="baker" />
                    <h4>Gabriel</h4>
                </div>
                <span>Unique creations for unique <br />occasions</span>
            </div>
            <div className='images-wrapper'>
                <div className='img-box'>
                    <div>
                        <img src={bannerimg1} alt="banner imgage" />
                    </div>
                    <div>
                        <img src={bannerimg2} alt="banner imgage" />
                    </div>
                    <div>
                        <img src={bannerimg3} alt="banner imgage" />
                    </div>
                    <div>
                        <img src={bannerimg4} alt="banner imgage" />
                    </div>
                </div>
                <div className="img-box-banner">
                    <h3>tastes <br />so good!</h3>
                </div>
            </div>
        </section>
    );
}

export default BannerArt;