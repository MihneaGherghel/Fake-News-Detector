import { createBrowserRouter, RouterProvider } from "react-router-dom";

import FirstPage from "./pages/FirstPage";
import FormTextTitlePage from "./pages/FormTextTitlePage";
import FormLinkPage from './pages/FormLinkPage';
import RootLayout from "./pages/Root";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Subscription from "./pages/Subscription";
import SuccessPayment from "./pages/SuccessPayment";
import ErrorPayment from "./pages/ErrorPayment";
import ServerError from "./pages/ServerError";

import { LoginContext } from "./store/login";
import { useState } from "react";

const router=createBrowserRouter([
  {
    path:'/',
    element: <RootLayout/>,
    children:[
      { path:'/', element: <FirstPage />},
      { path:'/formLinkPage', element:<FormLinkPage/>},
      { path:'/formTextTitlePage', element:<FormTextTitlePage/>},
      { path:'/login', element:<Login/>},
      { path:'/signup', element:<Signup/>},
      { path:'/subscription', element:<Subscription/>},
      { path:'/successPayment', element:<SuccessPayment/>},
      { path:'/errorPayment', element:<ErrorPayment/>},
      {path:'/serverError', element:<ServerError/>},
    ]
  },
])

function initialState(){
  if(localStorage.getItem("token")){
    return 1
  }
  return 0
}

function App() {
  const [isLoginValue,setIsLoginValue]=useState(initialState())
  function loginContext(){
    setIsLoginValue(1)
  }
  function logoutContext(){
    setIsLoginValue(0)
  }

  const ctxValue={
    isLogin:isLoginValue,
    login:loginContext,
    logout:logoutContext
  }
  return (
    <LoginContext.Provider value={ctxValue}>
      <RouterProvider router={router}/>
    </LoginContext.Provider>
  );
}

export default App;
