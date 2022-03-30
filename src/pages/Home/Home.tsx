import "./styles.scss"
import { Bloco } from "../../components"
import Lottie from 'react-lottie'
import code from "../../assets/lottie/72422-code.json"

export const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: code,
  }
  return (
    <div className="container">
      {/* <Bloco /> */}
      <Lottie options={defaultOptions} height={100} width={100} />
    </div>
  )  
}