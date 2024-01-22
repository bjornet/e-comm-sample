



const CheckoutPage = async () => {
  const dynamicData = await useCheckout();



  return (<>this is the checkout</>);
  // const { cartItems, total } = useCart();
  // const { checkout, loading, error } = useCheckout();

  // const handleCheckout = () => {
  //     checkout();
  // };

  // return (
  //     <div>
  //     <h1>Checkout</h1>
  //     <div>
  //         {cartItems.map((item) => (
  //         <div key={item.id}>
  //             <div>{item.name}</div>
  //             <div>{item.price}</div>
  //         </div>
  //         ))}
  //     </div>
  //     <div>Total: {total}</div>
  //     <button onClick={handleCheckout} disabled={loading}>
  //         Checkout
  //     </button>
  //     {error && <div>{error}</div>}
  //     </div>
  // );
};

export default CheckoutPage;
