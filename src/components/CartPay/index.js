import React from "react";

import styles from "./style.module.scss";

const CartPay = ({cart,setState}) => {

  const handleClick = (id) => {
    setState(prevState => ({...prevState,cart: cart.filter(item => item.id !== id)}))
  }

  // const subTotal = cart.reduce(function (price, number){
  //   return price * number;
  //   console.log(subTotal);
  // })

  // {cart.reduce(item =>{
  //
  // })}

  const subTotal = cart.map(item => item.price * item.number).reduce((acc, item) => { return acc + item }, 0)
  return (
    <div className={styles.container}>
      <div className={styles.goods}>
      <div className={styles.cardPrice}>
                    <a>Sub total:</a>{`$${subTotal}`}
                  </div>

      </div>
    </div>
  );
}

export default CartPay