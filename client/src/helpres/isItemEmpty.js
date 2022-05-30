export const isItemEmpty = (data, dataLength) => {
  const arrFromObj = Object.values(data);
  const checkEveryValue = () => {
    return arrFromObj.every((item) => item !== "");
  };
  if (arrFromObj.length === dataLength && checkEveryValue()) {
    return false;
  }
  return true;
};
