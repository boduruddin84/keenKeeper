import React from 'react'
import CallImg from "../../assets/images/call.png"

const TimelineCard = ({clicked}) => {
  return (
    <div>
        <div className='flex gap-4 bg-white shadow-sm px-5 py-10 rounded-sm mb-5'>
            <img className='w-10' src={CallImg} alt="Call image" />
            <p className='text-[18px] text-[#64748B]'><span className='text-[20px] font-medium text-[#244D3F]'>Call</span> with {clicked.name}</p>
        </div>
    </div>
  )
}

export default TimelineCard