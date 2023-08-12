import classes from "./Header.module.css";
import mealsimage from "../../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <>
    <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
    </header>
    <div className={classes['main-image']}>
        <img src={mealsimage} alt="table of food"/>
    </div>
      
    </>
  )
}
