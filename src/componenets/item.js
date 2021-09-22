import React, { useState } from "react";
import "./item.css";
import { connect } from "react-redux";
import { changeName } from "../store/actions";
const Item = ({ objArray, id, dispatch }) => {
  const { name, username, email } = objArray[id];
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    objArray[id].name = newName;
    dispatch(changeName(objArray[id]));
    setNewName("");
  };
  return (
    <div className="item">
      {isEditing ? (
        <div>
          <form onSubmit={handleSubmit}>
            enter new name :{" "}
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <button type="submit">Chnage</button>
          </form>
        </div>
      ) : (
        <p>
          {name}
          <button type="button" onClick={() => setIsEditing(true)}>
            Chnage name
          </button>
        </p>
      )}

      <p>{username}</p>
      <p>{email}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { objArray: state.entity.data };
};
export default connect(mapStateToProps)(Item);
