import React from 'react'
import './Home.css'
import img from '../Assests/productValues1.svg'
import imgs from '../Assests/productValues2.svg'
import images from '../Assests/productValues3.svg'
const Home = () => {
  const inlineBorder = {
    height: '4px',
   width: '73px',
   display: 'block',
   margin: '8px auto 0',
   backgroundColor: '#ff3366'
     
  }
  return (
    <>
    <div  className='container'>
        <div className="container-heading">
            <h1>UPGRADE YOUR SUNDAYS</h1>
            <span style={inlineBorder}></span>
            <h3>Enjoy secret offers up to -70% off the best luxury hotels every Sunday.</h3>
            <button>REGISTER</button>
            <p>Discover the experience</p>
            <p className='arrow-img'></p>
        </div>
    </div>
    {/*section-second */}
    <section>
      <div className="second-section">
        <div className="inner-conatiner">
          <div className="grid-section">
            <div className="icon">
              <img src={img} alt="" />
              <h2>THE BEST LUXURY HOTELS</h2>
              <p>From the latest trendy boutique hotel to the iconic palace with XXL pool, go for a mini-vacation just a few subway stops away from home.</p>
            </div>
          </div>


          <div className="grid-section">
            <div className="icon">
              <img src={imgs} alt="" />
              <h2>NEW EXPERIENCES</h2>
              <p>Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… your Sundays will not be alike.</p>
            </div>
          </div>

          <div className="grid-section">
            <div className="icon">
              <img src={images} alt="" />
              <h2>EXCLUSIVE RATES</h2>
              <p>By registering, you will access specially negotiated rates that you will not find anywhere else.</p>
            </div>
          </div>

        </div>
      </div>

    </section>
    </>
  )
}

export default Home