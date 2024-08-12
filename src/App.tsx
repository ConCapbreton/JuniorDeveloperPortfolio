import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router";
import CvProvider from "./context/CvContext";
import MenuProvider from "./context/MenuContext";

function App() {
  
  return (
    <>
      <MenuProvider>
        <CvProvider>
          <Header />
          <Outlet />
          <Footer />
        </CvProvider>
      </MenuProvider>
    </>
  )
}

export default App
