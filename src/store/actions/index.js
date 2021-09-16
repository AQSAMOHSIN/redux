export const OBJ_IDS = "OBJ_IDS";
export const OBJ_ARRAY_TO_OBJECT = "OBJ_ARRAY_TO_OBJECT";

export const objIds = (data) => {
  const payload = data.map((obj) => obj.id);
  console.log(payload);
  return {
    type: OBJ_IDS,
    payload,
  };
};

export const objArrayToObj = (data) => {
  let obj = {};
  data.forEach((item) => {
    const { id, title } = item;
    obj[id] = { title };
  });

  return { type: OBJ_ARRAY_TO_OBJECT, payload: obj };
};
