export const isEveryFalse = (data, dataLength) => {
  const arrFromObj = Object.values(data);
  const checkEveryValue = () => {
    return arrFromObj.every((item) => item !== "");
  };
  console.log(arrFromObj, dataLength, checkEveryValue());
  if (arrFromObj.length === dataLength && checkEveryValue()) {
    return false;
  }
  return true;
};
