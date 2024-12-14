// App.tsx
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Components/NavBar";
import Sidebar from "./Components/SideBar";
import MainContent from "./Components/Main";

const App: React.FC = () => {
  return (
    <div className="d-flex">
     
      <div className="d-none d-md-block bg-dark text-white" style={{ width: "240px" }}>
        <Sidebar />
      </div>

      
      <div className="flex-grow-1 bg-black text-white">
       
        <Navbar />

        
        <MainContent />
      </div>
    </div>
  );
};

export default App;
