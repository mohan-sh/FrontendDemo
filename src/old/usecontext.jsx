import { useContext } from "react";
import { nameContext } from './App'; // Correct import

export function Usecontext1() {
  let dog = useContext(nameContext);
  return (
    <div>
      <h1>name: {dog}</h1>
    </div>
  );
}





// export   function Usecontext2(props) {
//   return (
//     <div>
//         <h1>Stomach:{props.food}</h1>
//     </div>
//   )
// }

