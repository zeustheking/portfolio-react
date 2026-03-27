import Photo from "./Photo"
  
  const RightSide = (props) => {
    console.log(props)
    return (
      <div className="flex flex-wrap gap-1 overflow-x-auto h-full w-full shrink-0">
        {props.users.map(function(elem,idx){
          return <Photo key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag}/> 
        })}
      </div>
    )
  }
  
  export default RightSide