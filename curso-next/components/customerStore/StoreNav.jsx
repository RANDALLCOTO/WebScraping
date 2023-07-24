"use client"
import React, {useState} from 'react'

const StoreNav = () => {
  const [showCard, setShowCard] = useState(false);

  return (<>
        <header className='relative'>
          <div className="absolute top-0  z-50 container mx-auto px-6 py-3">
              <div className="flex items-center justify-between">
                  <div className="hidden w-full text-gray-600 md:flex md:items-center">
                      <img src="https://www.gollo.com/static/version1689679430/frontend/Gollo/default/es_CR/images/logo.svg" className='absolute top-2 left-2 max-w-xs'/>
                  </div>
                  <div className="flex items-center justify-end w-full">
                      <button  className="text-gray-600 focus:outline-none mx-4 sm:mx-0" onClick={()=>{setShowCard(true)}}>
                          <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                          </svg>
                      </button>

                      <div className="flex sm:hidden">
                          <button  type="button" className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-label="toggle menu">
                              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                              </svg>
                          </button>
                      </div>
                  </div>
              </div>
              <nav /*className="isOpen ? '' : 'hidden'" */className="sm:flex sm:justify-center sm:items-center mt-4">
                  <div className="flex flex-col sm:flex-row">
                      <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Home</a>
                      <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Shop</a>
                      <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Categories</a>
                      <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Contact</a>
                      <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">About</a>
                  </div>
              </nav>
              <div className="relative mt-6 max-w-lg mx-auto w-full text-center">
                 <label className='text-gray-700 text-4xl'>Nombre de tienda</label>
              </div>
          </div>
      </header>
      <div /*className="CARRO CON ITEMS translate-x-0 ease-out' : CARROSIN ITEMS 'translate-x-full ease-in'"*/ className={`fixed translate-x-0 ease-out right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300 ${!showCard?'translate-x-full ease-in':'translate-x-0 ease-out'}`}>
          <div className="flex items-center justify-between">
              <h3 className="text-2xl font-medium text-gray-700">Your cart</h3>
              <button  className="text-gray-600 focus:outline-none" onClick={()=>{setShowCard(false)}}>
                  <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
          </div>
          <hr className="my-3"/>
          <div className="flex justify-between mt-6">
              <div className="flex">
                  <img className="h-20 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt=""/>
                  <div className="mx-3">
                      <h3 className="text-sm text-gray-600">Mac Book Pro</h3>
                      <div className="flex items-center mt-2">
                          <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                              <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          </button>
                          <span className="text-gray-700 mx-2">2</span>
                          <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                              <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          </button>
                      </div>
                  </div>
              </div>
              <span className="text-gray-600">20$</span>
          </div>
          <div className="flex justify-between mt-6">
              <div className="flex">
                  <img className="h-20 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt=""/>
                  <div className="mx-3">
                      <h3 className="text-sm text-gray-600">Mac Book Pro</h3>
                      <div className="flex items-center mt-2">
                          <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                              <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          </button>
                          <span className="text-gray-700 mx-2">2</span>
                          <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                              <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          </button>
                      </div>
                  </div>
              </div>
              <span className="text-gray-600">20$</span>
          </div>
          <div className="flex justify-between mt-6">
              <div className="flex">
                  <img className="h-20 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt=""/>
                  <div className="mx-3">
                      <h3 className="text-sm text-gray-600">Mac Book Pro</h3>
                      <div className="flex items-center mt-2">
                          <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                              <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          </button>
                          <span className="text-gray-700 mx-2">2</span>
                          <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                              <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          </button>
                      </div>
                  </div>
              </div>
              <span className="text-gray-600">20$</span>
          </div>
          <div className="mt-8">
              <form className="flex items-center justify-center">
                  <input className="form-input w-48" type="text" placeholder="Add promocode"/>
                  <button className="ml-3 flex items-center px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                      <span>Apply</span>
                  </button>
              </form>
          </div>
          <a className="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              <span>Chechout</span>
              <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
    </div>
    </>
  )
}
export default StoreNav
