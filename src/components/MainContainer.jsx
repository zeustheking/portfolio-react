import Section1 from "./section1"
import Section2 from "./section2"

const MainContainer = (props) => {
  return (
    <div className='h-full p-1 flex flex-col'>
        <Section1/>
        <Section2 users={props.users}/>
    </div>
  )
}

export default MainContainer