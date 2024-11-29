import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function ProductDetails() {
 const params= useParams()
  return (
    <>
    Product Details


    <div className='main flex flex-col '>
<div>
<div className="w-full max-w-6xl text-gray-400 text-sm mb-5">
          Home / <span className="text-gray-200">Card </span><span className='text-black'> <span className='text-gray-400'> /</span> Havic HV G-92 Gamepad</span>
        </div>
</div>
<div>
<div className='ml-9'>{params.id}
</div>
<div></div>

</div>

<div className="flex justify-center items-start my-3">      <Link className="bg-myTheme active:bg-red-700 py-3 px-8 rounded text-white" to={"/"}>Go To Home</Link>
</div>
    </div>
    
    </>
  )
}

export default ProductDetails