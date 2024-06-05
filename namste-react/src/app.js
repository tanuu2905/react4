     import React from "react";
     import ReactDOM from "react-dom/client";
     import Headercomponent from "./components/Header";
     import Body from "./components/Body";
     import Footer from "./components/Footer";
    const root = ReactDOM.createRoot(document.getElementById("root"));
    /* 
      *********** App Content****************** 
    Header  
       1. logo
       2. Navbar
     Body
       1.Searchbar
       2.Restaurant Card
          2.1 Image
          2.2 Name
          2.3 Rating
          2.4 cusines
     Footer
       1.Links
       2.Copyright
     */
 const Applayout= () => (
         <>
          <Headercomponent/>
           <Body/>
           <Footer/>  
         </>

       );
    root.render(<Applayout/>);
