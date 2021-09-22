export const OBJ_ARRAY_TO_OBJECT = "OBJ_ARRAY_TO_OBJECT";
export const CHANGE_NAME = "CHANGE_NAME";
export const objArrayToObj = (data) => {
  let obj = {};
  data.forEach((item) => {
    obj[item.id] = { ...item };
  });
  return { type: OBJ_ARRAY_TO_OBJECT, payload: obj };
};

export const changeName = (newObj) => {
  return {
    type: CHANGE_NAME,
    payload: newObj,
  };
};
