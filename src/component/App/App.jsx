import { Route, Routes } from 'react-router-dom';


import Layout from '../pages/Layout';
import Main from '../pages/Main';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/about/" element={<h2>About</h2>} />
          <Route path="/rate/" element={<h2>Rate</h2>} />
          <Route path="/help/" element={<h2>Help</h2>} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
