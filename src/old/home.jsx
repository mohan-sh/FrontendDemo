
import { useParams } from "react-router-dom"

const Home = () => {
  let{id}=useParams();
  return (
    <div>
      <h1>home{id}</h1>
      </div>
  )
}

export default Home