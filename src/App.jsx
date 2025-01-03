// import './App.css';
// import { Usecontext1 } from './usecontext';
// import { createContext } from 'react';
// // import { HookUseState1 } from './HookUseState1';
// // import Useref1 from './useref1';
// // import Form from './Form.jsx';
// // import Props2 from './props1.jsx';
// // import { HookUseState1 } from './HookUseState1.jsx';
// // import home from './home';
// // import aboutUs from './aboutUs';
// // import contact from './contact';
// // import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// // import List from './list';
// // import { List } from 'semantic-ui-react';

// function App() {
//   return (
//     // <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//     //   <Router>
//     //     {/* Navigation Bar */}
//     //     <nav style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: "gray" }}>
//     //       <ol style={{ display: 'flex', justifyContent: 'flex-start', listStyle: 'none', marginRight: "auto" }}>
//     //         <li><img src="" alt="Brand_logo" /></li>
//     //         <li>HP</li>
//     //       </ol>

//     //       <ol style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none', gap: "50px" }}>
//     //         <li>
//     //           <Link to="/">Home</Link>
//     //         </li>
//     //         <li>
//     //           <Link to="/aboutUs">About Us</Link>
//     //         </li>
//     //         <li>
//     //           <Link to="/contact">Contact</Link>
//     //         </li>
//     //       </ol>
//     //     </nav>

//     //     {/* Main Content */}
//     //     <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
//     //       <Routes>
//     //         <Route path="/" exact Component={home} />
//     //         <Route path="/aboutUs" exact Component={aboutUs} />
//     //         <Route path="/contact" exact Component={contact} />
//     //       </Routes>
//     //     </div>

//     //     {/* Footer */}
//     //     <footer style={{ textAlign: 'center', padding: '10px', background: '#f1f1f1' }}>
//     //       <p>Footer</p>
//     //     </footer>
//     //   </Router>
//     // </div>
//     // <List/>
//     // <HookUseState1/>er asad as as asd a ssa as a  as a as as a 
//     // <Useref1/>

//     <nameContext.Provider value={"mohan"}>

//       <Usecontext1 />
//     </nameContext.Provider>
//   );
// }

// export default App;


import './App.css';
import { Usecontext1 } from './usecontext';
import Home from './home';
// import { createContext } from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

// export const nameContext = createContext(); // Export the context

function App() {
  return (
   <>
   <h1>hello peter </h1>
   <Router>
     <Routes>
       <Route path='/'  exact Component={Usecontext1} />
       <Route path='/home/:id' exact Component={Home} />
     </Routes>

   </Router>
   </>

  );
}

export default App;
