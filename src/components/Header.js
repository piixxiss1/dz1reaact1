import React from 'react'
import './header.css'
import Img1 from '../../src/assets/image 1.png'
import Img2 from '../../src/assets/image 2.png'
import Img3 from '../../src/assets/image 3.png'
import Img4 from '../../src/assets/image 4.png'
import Img5 from '../../src/assets/image 7.png'   
import Img6 from '../../src/assets/image 6.png'
import Img7 from '../../src/assets/image 7.png'
import Img8 from '../../src/assets/image 8.png'

const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
            <nav className='header__nav'>
                <h1 className='header__h1'>Our Products</h1>
            <div className='header__card'>

            <div className='pic'>
                <div className='aside'>
                <img src={Img1} alt=''/>
                </div>

                <div className='slogan'>
                    <h2>Syltherine</h2>
                    <p className='p'>Stylish cafe chair</p>
                    <p className='p2'>Rp 2.500.000</p>
                </div> 
            </div>   
{/* ............. */}
            <div className='pic'>
                <div className='aside-2'>
                <img src={Img2} alt=''/>
                </div>

                <div className='slogan-2'>
                    <h2>Syltherine</h2>
                    <p className='p'>Stylish cafe chair</p>
                    <p className='p2'>Rp 2.500.000</p>
                </div> 
            </div>  
{/* ............. */}
            <div className='pic'>
                <div className='aside-3'>
                <img src={Img3} alt=''/>
                </div>

                <div className='slogan-3'>
                    <h2>Syltherine</h2>
                    <p className='p'>Stylish cafe chair</p>
                    <p className='p2'>Rp 2.500.000</p>
                </div> 
            </div>  
{/* ............. */}
            <div className='pic'>
                <div className='aside-4'>
                <img src={Img4} alt=''/>
                </div>

                <div className='slogan-4'>
                    <h2>Syltherine</h2>
                    <p className='p'>Stylish cafe chair</p>
                    <p className='p2'>Rp 2.500.000</p>
                </div> 
            </div>  
            </div> 
{/* ............. */}
        <div className='header__card2'>   

            <div className='pic'>
                <div className='aside-5'>
                <img src={Img5} alt=''/>
                </div>

                <div className='slogan-5'>
                    <h2>Syltherine</h2>
                    <p className='p'>Stylish cafe chair</p>
                    <p className='p2'>Rp 2.500.000</p>
                </div> 
            </div>  
{/* ............. */}
            <div className='pic'>
                <div className='aside-6'>
                <img src={Img6} alt=''/>
                </div>

                <div className='slogan-6'>
                    <h2>Syltherine</h2>
                    <p className='p'>Stylish cafe chair</p>
                    <p className='p2'>Rp 2.500.000</p>
                </div> 
            </div>  
{/* ............. */}
            <div className='pic'>
                <div className='aside-7'>
                <img src={Img7} alt=''/>
                </div>

                <div className='slogan-7'>
                    <h2>Syltherine</h2>
                    <p className='p'>Stylish cafe chair</p>
                    <p className='p2'>Rp 2.500.000</p>
                </div> 
            </div>  
{/* ............. */}
            <div className='pic'>
                <div className='aside-8'>
                <img src={Img8} alt=''/>
                </div>

                <div className='slogan-8'>
                    <h2>Syltherine</h2>
                    <p className='p'>Stylish cafe chair</p>
                    <p className='p2'>Rp 2.500.000</p>
                </div> 
            </div>  
            </div>   
                
        <div>
            <button className='btn1'>Show More</button>
        </div>

                
                    
            </nav>
        </div>
    </header>
  )
}

export default Header;
