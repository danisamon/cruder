import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Edit from "./pages/Edit/Edit";
import Feed from "./pages/Feed/Feed";
import LerMais from "./pages/LerMais/Lermais";
import Post from "./pages/Post/Post";

function App() {
  return(
    <>
      <Router>
        <Routes>
          <Route path="/post" element={<Post/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
          <Route path="/lermais" element={<LerMais/>}/>
          <Route path="/" element={<Feed/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
