import React from 'react'
import InstagramImg from "../../assets/images/instagram.png";
import FacebookImg from "../../assets/images/facebook.png";
import TwitterImg from "../../assets/images/twitter.png"



const Footer = () => {
  return (
    <div className='bg-[#244D3F] pb-5'>
      <div className='lg:w-6xl mx-auto'>
        <div className='text-center space-y-5 mb-10'>
          <h3 className='text-2xl lg:text-5xl font-extrabold text-[#FFFFFF] pt-15'>KeenKeeper</h3>
          <p className='text-[16px] text-[#ffffffa8]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
          <p className='text-[20px] font-medium text-[#FFFFFF]'>Social Links</p>
          <div className='flex justify-center items-center gap-2'>
            <img src={InstagramImg} alt="Instagram image" />
            <img src={FacebookImg} alt="Facebook image" />
            <img src={TwitterImg} alt="Twitter image" />
          </div>
        </div>
        <hr className='text-[#1A8862]' />
        <div className='text-center mt-5 lg:flex lg:justify-between'>
          <p className='text-[#FAFAFA] text-[16px]'>© 2026 KeenKeeper. All rights reserved.</p>
          <div className='flex justify-center items-center gap-4'>
            <p className='text-[#FAFAFA] text-[16px]'>Privacy Policy</p>
            <p className='text-[#FAFAFA] text-[16px]'>Terms of Service</p>
            <p className='text-[#FAFAFA] text-[16px]'>Cookies</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer