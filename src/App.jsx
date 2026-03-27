import MainContainer from "./components/mainContainer"
const App = () => {

  const users = [
    {
      img: "https://i.pinimg.com/1200x/7a/ea/08/7aea08c5323513c0a4c28ff5cb4d5d14.jpg",
      intro: "A dedicated professional focused on delivering quality work and consistent results in a fast-paced environment.",
      tag: "Satisfied"
    },
    {
      img: "https://i.pinimg.com/1200x/45/16/06/451606a21ab06742766d285ee461567e.jpg",
      intro: "A proactive individual with strong problem-solving skills and the ability to adapt quickly to new challenges.",
      tag: "Underserved"
    },
    {
      img: "https://i.pinimg.com/1200x/82/15/6e/82156efb97036511e62c4e3156e823da.jpg",
      intro: "Motivated and detail-oriented, always striving for growth and contributing effectively to team success.",
      tag: "Underbanked"
    }
  ]
  return (
    <div className="flex h-full w-full">
      <MainContainer users={users}/>
    </div>
  )
}

export default App