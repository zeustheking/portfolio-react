import PhotoContent from "./PhotoContent"

const Photo = (props) => {
  return (
    <div className="h-full w-80 rounded-4xl overflow-hidden relative">
      <img className="object-cover h-full w-full" src={props.img}/>
      <PhotoContent intro={props.intro} tag={props.tag} id={props.id}/>
    </div>
  )
}

export default Photo