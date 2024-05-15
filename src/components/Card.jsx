import React from 'react'

const Card = ({ data, onClickHandle }) => {
  return (
    <div
      className="flex flex-col max-w-64 items-center gap-5 bg-cyan-800 px-3 py-4 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-stone-300 place-self-center"
      onClick={() => onClickHandle(data.id)}
    >
      <img
        className="p-5 bg-teal-200 rounded-[50%]"
        src={data.sprites.front_default}
        alt={`${data.name} sprite`}
      />
      <h3 className="text-xl font-bold capitalize">{data.name}</h3>
    </div>
  );
};

export default Card