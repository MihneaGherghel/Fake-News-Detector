import { createBrowserRouter, RouterProvider } from "react-router-dom";

import FirstPage from "./pages/FirstPage";
import FormTextTitlePage from "./pages/FormTextTitlePage";
import FormLinkPage from './pages/FormLinkPage';
import RootLayout from "./pages/Root";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Subscription from "./pages/Subscription";
import ProfilePage from "./pages/ProfilePage";
import SuccessPayment from "./pages/SuccessPayment";
import ErrorPayment from "./pages/ErrorPayment";
import ServerError from "./pages/ServerError";

import { LoginContextProvider } from "./store/login";

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
      { path:'/profile', element:<ProfilePage/>},
      { path:'/successPayment', element:<SuccessPayment/>},
      { path:'/errorPayment', element:<ErrorPayment/>},
      {path:'/serverError', element:<ServerError/>},
    ]
  },
])


function App() {
  return (
    <LoginContextProvider>
      <RouterProvider router={router}/>
    </LoginContextProvider>
  );
}

export default App;
