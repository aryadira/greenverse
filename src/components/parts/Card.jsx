const Card = ({ key, src, type, title, price }) => {
  return (
    <div className='card-content mt-8 rounded-[30px]' key={key}>
      <div className='relative overflow-hidden bg-cover bg-no-repeat hover:saturate-150'>
        <img src={src} alt='' className='w-full transition duration-300 ease-in-out hover:scale-110 hover:rounded-[30px] cursor-pointer' />
      </div>
      <div className='text pt-4 border-b cursor-pointer links py-6'>
        <h1 className='text-sm text-[#676767]'>{type}</h1>
        <h1 className='text-2xl font-HaasMd'>{title}</h1>
        <h1 className='text-base'>{price}</h1>
      </div>
    </div>
  );
};

export default Card;
