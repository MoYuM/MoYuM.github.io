import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const home: React.FC = () => {
  return (
    <div className="bg-slate-50 h-screen">
      <Header />
      <Main />
    </div>
  );
};

export default home;
