import React, { useEffect, useState } from "react";
import { getObj } from "../store/actions";
import Item from "../componenets/item";
import { connect } from "react-redux";
const MainScreen = ({ data, dispatch }) => {
  useEffect(() => {
    dispatch(getObj());
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {data?.map((userId) => {
        return <Item id={userId} key={userId} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { data: state.obj.dataId };
};
export default connect(mapStateToProps)(MainScreen);
