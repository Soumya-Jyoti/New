import React from 'react'
import TopNavigation from '../../Components/TopNavigation/TopNavigation'
import NavbarHeader from '../../Components/NavbarHeader/NavbarHeader'
import Navbar from '../../Components/Navbar/Navbar'
import HeroSection from '../../Components/HeroSection/HeroSection'
import ProductList from '../../Components/ProductList/ProductList'
import Cta from '../../Components/CTA/Cta'
import Footer from '../../Components/Footer/Footer'
import Wishlist from './Wishlist'
import BottomNav from '../../Components/BottomNav/BottomNav'

const WishlistPage = () => {

  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Wishlist", link: "/wishlist" },
  ];

  return (
    <div>
       
       <div className='px-6 md:px-14 py-1 md:py-3'> <NavbarHeader></NavbarHeader></div>
        <div className='px-6 md:px-14 py-3 hidden md:block'> <Navbar></Navbar></div>
        <div className='px-6 md:px-14 py-3 mt-0 md:mt-10'> <HeroSection productName={"Wishlist"} breadcrumbs={breadcrumbs}></HeroSection></div>
        <div className='px-6 md:px-14 py-3 mt-0 md:mt-10'> <Wishlist></Wishlist></div>
        <div className='px-6 md:px-14 py-3 mt-10'><Cta></Cta></div>
        <div className='px-6 md:px-14 py-3'> <Footer></Footer></div>
        <BottomNav></BottomNav>
    </div>
  )
}

export default WishlistPage