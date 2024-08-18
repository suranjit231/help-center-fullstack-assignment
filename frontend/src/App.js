import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./components/Layout";
import CardForm from "./pages/cardForm/CardForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";






function App() {
    
    //======== configure router for different pages ===============//
    const router  = createBrowserRouter([
      {path:"/", element:<Layout />,
         children:[
           {index:true, element:<Home />},
           {path:"createCard", element:< CardForm />}
            
      ]},

     
    ])



  return (
    <div className="App">
        {/* ======= provide router ========= */}
        <RouterProvider router={router} />
        <ToastContainer className="custom-toast-container"/>
    </div>
  );
}

export default App;
