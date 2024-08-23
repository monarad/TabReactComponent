import "./App.css"
import React, { useState, useEffect } from "react";

function App() {
   const [activeTab, setActiveTab] = useState("tab1");

   // بارگذاری آخرین تب از localStorage
   useEffect(() => {
     const lastTab = localStorage.getItem("activeTab");
     if (lastTab) {
       setActiveTab(lastTab);
     }
   }, []);

   // ذخیره آخرین تب در localStorage
   const handleTabClick = (tab) => {
     setActiveTab(tab);
     localStorage.setItem("activeTab", tab);
   };

   const renderContent = () => {
     switch (activeTab) {
       case "tab1":
         return <div  className="tabs">محتوای تب ۱</div>;
       case "tab2":
         return <div className="tabs">محتوای تب ۲</div>;
       case "tab3":
         return <div className="tabs">محتوای تب ۳</div>;
       case "tab4":
         return <div className="tabs">محتوای تب ۴</div>;
       default:
         return null;
     }
   };

  return (
    <div>
      <nav className="navbar">
        <ul className="ul">
          {["tab1", "tab2", "tab3", "tab4"].map((tab) => (
            <li
              key={tab}
              className={ `${ activeTab === tab ? "active":"none"}`}
             
              onClick={() => handleTabClick(tab)}
            >
              ‍ {`TAB ${tab.charAt(tab.length - 1)}`}
              
            </li>
          ))}
        </ul>
      </nav>
      <div>{renderContent()}</div>
    </div>
  );
}

export default App
