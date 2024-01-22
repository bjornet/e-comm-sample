const CheckoutForm = () => {
  const handleCheckoutSubmit = async () => {
    console.log('handleSubmit');
  };

  return (
    <form onSubmit={handleCheckoutSubmit}>
      {/**
       * @note The CheckoutForm might have the following steps:
       * - Freight Method
       * - Payment Method
       * - Billing Address
       * - Review Order
       * - Place Order
       */}

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-emerald-600 text-emerald-50 text-xl p-2 pl-6 pr-6"
          disabled
        >
          Place Order
        </button>
      </div>
    </form>
  );
};

export { CheckoutForm };
