function getShippingCost(weight, isMember) {
  if (isMember){
    return weight <= 5 ? 0 : 3;
  }

} else {
  if (weight <= 1) return 5;
  if (weight <= 5) return 8;
  return 12
}