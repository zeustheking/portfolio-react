import { MoveRight } from 'lucide-react';
const PhotoContent = (props) => {
  return (
    <div>
        <div className="absolute top-0 left-0 h-full w-full flex flex-col p-8 justify-between">
        <h2 className='bg-white h-10 w-10 rounded-full justify-center font-semibold text-2xl flex items-center' >{props.id+1}</h2>
        <div>
          <p className=' text-white mb-15 leading-normal'>
          {props.intro}</p>
          <div className='flex'>
          <button className=' bg-blue-600 rounded-full py-3 px-7 text-white font-medium'>{props.tag}
          </button>
          <button className=' bg-blue-600 rounded-full py-2 px-3 text-white font-medium'>
          <MoveRight/>
          </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoContent