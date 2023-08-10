import { Home } from "./Home/Home"
import { About } from "./About/About"
import { Youtube } from "./Youtube/Youtube"
import { Chess } from "./Chess/Chess"
import { Gym } from "./Gym/Gym"
import { Coding } from "./Coding/Coding"
import { Tarot } from "./Tarot/Tarot"

export const Personal = () => {
  return (
    <div className="personal-div">
      <Home />
      <About />
      <Youtube />
      <Chess />
      <Gym />
      <Coding />
      <Tarot />
    </div>
  )
}
