import React, { useReducer } from 'react';
import AppRoutes from './Pages/Routes';
import { taskReducer, intialTaskState, taskContext } from './Pages/Actions/actions';
import { Link } from 'react-router-dom';


const App:React.FC = (props) => {
  const [state, dispatch] = useReducer(taskReducer, intialTaskState);
  return (
    <>     
        {/*<Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>*/}
        <div>
            <nav style={{display:"flex", gap:"1rem", fontSize:"24px"}}>
                <Link to="/">Categories</Link>
                <Link to="/tasks">Tasks</Link>
            </nav>    
        </div>
        <taskContext.Provider value={{ state, dispatch }}>
          <AppRoutes {...props} />
        </taskContext.Provider>
    </>
  )
}

export default App
