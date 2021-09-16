import React, { useEffect, useState } from "react";
import articles from "../data";
import { objIds } from "../store/actions";
import { useDispatch } from "react-redux";

const MainScreen = () => {
  const dispatch = useDispatch();
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        dispatch(objIds(json));
        setUser(json);
      });
  }, []);

  return (
    <div>
      <h1>USERs</h1>
      {users?.map((user) => (
        <h5>{user.username}</h5>
      ))}
    </div>
  );
};

export default MainScreen;
