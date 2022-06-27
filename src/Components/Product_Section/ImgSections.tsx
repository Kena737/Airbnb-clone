import React from 'react'

const ImgSections = () => {
  return (
    <div className='flex mx-32 mt-6'>
      {/* 560 311 */}
      <div className=''>
        <img className='h-[311px] w-[570px] rounded-l-xl object-cover hover:opacity-90' src="https://bit.ly/3niuD4T" alt="Maldives" />
      </div>
      <div>
        <div className='grid grid-cols-2 pl-2'>
          <div>
            <img className='h-[155.5px] w-[280px] pr-2 pb-2 object-cover hover:opacity-90' src="https://bit.ly/3Ab17pv" alt="Maldives" />
          </div>
          <div>
            <img className='h-[155.5px] w-[280px] pb-2 rounded-tr-xl object-cover hover:opacity-90' src="https://bit.ly/3OExvET" alt="Maldives" />
          </div>
          <div>
            <img className='h-[155.5px] w-[280px] pr-2 object-cover hover:opacity-90' src="https://bit.ly/39RjcOm" alt="Maldives" />
          </div>
          <div>
            <img className='h-[155.5px] w-[280px] rounded-br-xl object-cover hover:opacity-90' src="https://bit.ly/3QRcVTo" alt="Maldives" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImgSections
