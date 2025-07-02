export const cardVariantsLeft = () => {
  return {
    visible: { opacity: 1, x:0 },
    hidden: { opacity: 0, x:-50 }
}
};
export const cardVariantsRight = () => {
  return {
    visible: { opacity: 1, x:0 },
    hidden: { opacity: 0, x:50 }
}
};
export const cardVariantsdown = () => {
  return {
    visible: { opacity: 1, y:0 },
    hidden: { opacity: 0, y:200 }
  };
};
export const cardVariantsTop =  () => {
  return {
    visible: { opacity: 1, y:0 },
    hidden: { opacity: 0, y:-200 }
}
};
