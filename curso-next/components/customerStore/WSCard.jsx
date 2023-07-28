import React from 'react';

const WSCard = ({store}) => {
  return (
    <div className='fixed bottom-4 left-4'>
        <a target="_blank" href={`https://wa.me/${store.contactnumber}`} rel="noopener noreferrer">
                <img src="/assets/images/ws-image.png" className='h-16 w-16' alt="Contactanos" />	
        </a>
  </div>
  )
}

export default WSCard