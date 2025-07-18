import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { trending } from '../../assets/Assest';
import { IoArrowBackOutline } from "react-icons/io5";
import { TravelContext } from '../../Context/TravelContext';

const Trending = () => {
    const {navigate} =useContext(TravelContext)
     const {id } =useParams();
     const item = trending.find((trending)=>trending._id === parseInt(id))   


    
  return (
    <div className='top-20'>
        {/*------------------name--------------- */}

       <div className='flex flex-row  ml-2 gap-6 mt-40 items-center'>
        <IoArrowBackOutline className='text-black size-6' onClick={()=>navigate('/')}/>
         <h1 className='prata-regular text-xl sm:text-3xl '>{item.name}</h1>
         <h1 className='prata-regular text-xl sm:text-3xl  text-green-900'>{"("}{item.subname}{")"}</h1>
       </div>
        {/*---------------banner image------------- */}
<div className='mt-8 sm:mt-20 flex flex-row justify-center'>
  <img
    src={item.image}
    alt={item.name}
    className='h-42 sm:h-96 w-auto rounded-xl shadow-md'
  />
</div>

{/*-----------description----------- */}
<p className='mt-20 inter-regular text-base sm:text-xl ml-5 '>{item.description}</p>
  {/*-------------sub images---------- */}

  <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mt-20 mb-20 ml-5'>
       {item.Subimage?.map((item,index)=>(
        <div >
            <img src={item} alt='' className='h-32 sm:h-64 sm:w-auto w-42 '/>
            </div>
       ))}
  </div>






    </div>
  )
}

export default Trending