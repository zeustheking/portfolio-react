import Heading from "./Heading"
import Hero from "./Hero"
import Arrow from "./Arrow"
const LeftSide = () => {
  return (
    <div className="p-5 flex-col h-full w-1/2">
      <Heading/>
      <br />
      <br />
      <Hero/>
      <Arrow/>
    </div>
  )
}

export default LeftSide