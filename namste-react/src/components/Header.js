const Title = () => (
    <div>
   <a href="/">
    <img alt="logo" 
    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffreepng%2Fcaferesto-logo-vector-icon-menu-food-court-logo-vector_10802759.html&psig=AOvVaw1gFtfwYfXiAof0oarM38Ei&ust=1717504578121000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCKzaO5v4YDFQAAAAAdAAAAABAE"/>
     </a>
    </div>
);
const Headercomponent = () => {
    return(
         <div id="header">
         <Title/>
         <div className="nav-items">
           <ul>
           <li>Home</li>
           <li>About</li>
           <li>Contact</li>
           <li>Cart</li>  
         </ul>   
         </div>
         </div>

    );
 };
 
 export default Headercomponent ;