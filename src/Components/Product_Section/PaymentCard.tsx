import React from 'react'

const PaymentCard = () => {
    return (
        <div className='my-14'>
            <div className='border w-96 p-7 rounded-xl shadow-lg '>
                <h1 className='text-lg font-thin'><span className='font-semibold text-3xl'>₹42,555 </span>night</h1>

                <div className='border rounded-xl mt-6 mb-4 border-gray-400'>
                    <div className='flex justify-between'>
                        <div className='border-r border-gray-400 pr-20 pl-3 py-3'>
                            <div className='text-xs font-semibold font-mono'>CHECK-IN</div>
                            <div className='font-thin text-[14px]'>8/2/2022</div>
                        </div>
                        <div className='pr-24 py-3'>
                            <div className='text-xs font-semibold font-mono'>CHECKOUT</div>
                            <div className='font-thin text-[14px]'>8/2/2022</div>
                        </div>
                    </div>
                    <div>
                        <div className='pr-24 py-3 px-3 border-t-gray-400 border rounded-b-xl'>
                            <div className='text-xs font-semibold font-mono'>GUESTS</div>
                            <div className='font-thin text-[12px]'>1 guest</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='text-xs font-semibold font-mono text-gray-800 px-2'>CANCELLATION POLICIES</div>
                    <div className='flex justify-between py-3 px-3 border-gray-400 border rounded-t-xl'>
                        <div className='font-thin text-[14px]'>Non-refundable · ₹2,42,814 total</div>
                        <div>
                            <input id="Non-refundable" name="Non-refundable" className="overflow-hidden rounded-full bg-white border-8 border-[rgb(34, 34, 34)]" type="radio"></input>
                        </div>
                    </div>
                    <div className=' py-3 px-3 border-gray-400 border-b border-x rounded-b-xl'>
                        <div className='flex justify-between'>
                            <div className='font-thin my-1 text-[14px]'>Refundable · ₹2,42,814 total</div>
                            <div>
                                <input id="Non-refundable" name="Non-refundable" className="overflow-hidden rounded-full bg-white border-8 border-[rgb(34, 34, 34)]" type="radio"></input>
                            </div>
                        </div>
                        <p className='font-thin text-[12px] text-gray-500'>Free cancellation before 27 Jul. Cancel before check-in on 28 Jul for a partial refund.</p>
                    </div>
                    <button className='btn rounded-lg py-3 my-5 text-xl font-semibold text-white w-full'>Reserve</button>
                    <div className='font-normal my-1 text-[14px] text-center text-gray-800 font-[Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif]'>You won't be charged yet</div>
                    <h3 className='inline-block text-left py-5 text-lg font-medium underline text-gray-800'>Show price details
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                    </h3>
                    <hr />
                    <div className='flex justify-between mt-7'>
                        <div className='text-xl font-semibold text-gray-800'>Total before taxes</div>
                        <div className='text-xl font-semibold text-gray-800'>₹2,42,814</div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='underline text-center my-3 text-gray-600'>
                <span>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className='inline-block h-4 w-4 fill-current'>
                    <path d="M28 6H17V4a2 2 0 0 0-2-2H3v28h2V18h10v2a2 2 0 0 0 2 2h11l.115-.006a1 1 0 0 0 .847-1.269L27.039 14l1.923-6.724A1 1 0 0 0 28 6z"></path>
                </svg>
                </span> Report this listing</h3>
            </div>
        </div>
    )
}

export default PaymentCard
