import { objArrayToObj } from "./entityActions";
export const OBJ_IDS = "OBJ_IDS";
export const objIds = (data) => {
  const payload = data.map((obj) => obj.id);
  return {
    type: OBJ_IDS,
    payload: payload,
  };
};

export const getObj = () => (dispatch, getState) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.clone().json())
    .then((data) => {
      dispatch(objArrayToObj(data));
      dispatch(objIds(data));
    })
    .catch((err) => console.log(err), "errr");
};
