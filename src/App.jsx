import React, { useState } from "react"
import "./App.css";
import LoginPage from "./pages/loginpage";
import SignupPage from "./pages/Registration";
import FormPage from "./pages/form";

function App(){
  const [currentPage, setCurrentPage] = useState("signup"); // "signup", "login", or "form"

  const renderPage = () => {
    switch (currentPage) {
      case "signup":
        return <SignupPage onNavigate={setCurrentPage} />;
      case "login":
        return <LoginPage onNavigate={setCurrentPage} />;
      case "form":
        return <FormPage onNavigate={setCurrentPage} />;
      default:
        return <SignupPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <>
      {renderPage()}
    </>
  );
}

export default App
