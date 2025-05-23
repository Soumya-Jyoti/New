import React from 'react'
import NavbarHeader from '../../Components/NavbarHeader/NavbarHeader'
import Navbar from '../../Components/Navbar/Navbar'
import HeroSection from '../../Components/HeroSection/HeroSection'
import Cta from '../../Components/CTA/Cta'
import Footer from '../../Components/Footer/Footer'
import OrderBox from '../../Components/OrderBox/OrderBox'
import BottomNav from '../../Components/BottomNav/BottomNav'

const OrderPage = () => {

  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Account", link: "/account" },
    { label: "Orders", link: "/orders" },
  ];

  return (
    <div>
        <div className='px-6 md:px-14 py-1 md:py-3'> <NavbarHeader></NavbarHeader></div>
        <div className='px-6 md:px-14 py-3 hidden md:block'> <Navbar></Navbar></div>
        <div className='px-6 md:px-14 py-3 mt-0 md:mt-10'>  <HeroSection productName={"Your Orders"} breadcrumbs={breadcrumbs}></HeroSection></div>


        <div className='px-6 md:px-14 py-3'>
            <ul className='flex flex-col gap-3'>
                <li><OrderBox></OrderBox></li>

                <li><OrderBox></OrderBox></li>

                <li><OrderBox></OrderBox></li>

                <li><OrderBox></OrderBox></li>

                <li><OrderBox></OrderBox></li>
            </ul>

        </div>


        <div className='px-6 md:px-14 py-3 mt-10'><Cta></Cta></div>
        <div className='px-6 md:px-14 py-3'> <Footer></Footer></div>
        <BottomNav></BottomNav>
    </div>
  )
}

export default OrderPage