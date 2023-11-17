const calculateDiscountedPrice = (price: number, discount: number) => {
  return (price * (1 + discount / 100)).toFixed(0);
};

export default calculateDiscountedPrice;
