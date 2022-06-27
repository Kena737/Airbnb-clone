import React from 'react'
import ImgSections from './ImgSections'
import ProdunctDetailed from './ProdunctDetailed'

const Product = () => {
    return (
        <>
            <div className='max-w-screen-xl mx-auto px-20'>
                <h1 className='text-left text-3xl font-semibold py-3'>Adaaran Club Rannalhi, Maldives, Water Bungalows</h1>
                <div className='flex justify-between font-semibold text-md underline'>
                    <div>
                        <p >Maldives</p>
                    </div>
                    <div className='flex text-gray-900'>
                        <div className='px-2'>
                            <span className='px-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                </svg>
                            </span>Share
                        </div>
                        <div className='text-left text-lg underline px-2'>
                            <span className='px-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </span>Save
                        </div>
                    </div>
                </div>
            </div>
            <ImgSections />
            <div className='flex'>
                <div className='w-8/12'>
                    <ProdunctDetailed />
                </div>
                <div></div>
            </div>
        </>
    )
}

export default Product
