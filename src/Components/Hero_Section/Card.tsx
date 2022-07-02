import React from 'react'

const Card = () => {
  return (
    
    <div className='flex flex-wrap justify-center my-5'>
      <div>
        <div>
          <div className='flex'>
            {/* Heart icon */}
              {/* <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className='absolute h-6  w-6' fill="rgba(0, 0, 0, 0.5)" stroke="#FFFFFF" ><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg> */}
              <img className="w-[24.4rem] md:h-[19rem] md:w-[20rem] object-cover h-[23.4rem] sm:w-80 mx-3 my-2 rounded-3xl" src="https://bit.ly/3xVzQ7G" alt="" />
          </div>
          <div>
            <div className='mx-3 justify-between flex'>
              <div>
                <h2 className='text-lg font-semibold text-left inline-block'>Maldives Trip</h2>
              </div>
              <div className='text-gray-800 font-[Poppins]'>
                New <span>
                {/* Star icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
              </div>
            </div>
            <div className='text-gray-500 text-left mx-3 text-lg'>
              <p>1,706 kilometers away</p>
              <p>1-6 jul</p>
              <p className='text-black'><span className='font-semibold'>₹42,169</span> night</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
