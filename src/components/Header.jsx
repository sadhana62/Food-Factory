import LogoImage from "../assets/logo.jpg";
import Button from "../UI/Button.jsx"
import {useContext} from "react";
import CartContext from "../store/CartContext.jsx";
export default function Header() {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOFItems,item)=>{
    return totalNumberOFItems + item.quantity;
  },0);
  return (
    <header id ="main-header">
      <div id="title">
        <img src={LogoImage}/>
        <h1>Food Carvaan</h1>
      </div>
      <nav>
        <Button textOnly={true}>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}

