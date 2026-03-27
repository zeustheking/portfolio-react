import LeftSide from "./LeftSide"
import RightSide from "./RightSide"
const Section2 = (props) => {
  return (
    <div className="flex h-135 mt-6 p-1 w-300">
        <LeftSide/>
        <RightSide users={props.users}/>
    </div>
  )
}

export default Section2