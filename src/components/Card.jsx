import React from 'react'

const Card = ({data,onClickHandle}) => {
  return (
    <div className='flex flex-col max-w-64 items-center gap-5 bg-slate-500 px-3 py-4 rounded-sm shadow-lg hover:shadow-2xl hover:shadow-zinc-50' 
     onClick={() =>onClickHandle(data.id)}>
        <img className='p-5 bg-slate-50 rounded-[50%]' src={data.sprites.front_default} alt=" bulba image" />
        <h3 className='text-xl font-bold capitalize'>{data.name}</h3>
    </div>
  )
}

export default Card