import React from "react";
import { useLocation, useParams } from "react-router-dom";

const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  return (
    <>
      <h1>
        THIS IS {fname}
        {lname} PAGE
      </h1>
      <p>MY CURRENT LOCATION IS {location.pathname}</p>
      {location.pathname === `/user/raja/usman` ? (
        <button onClick={()=>{alert('YOUR ARE MY FAVOURITE CUSTOMER')}}>YOU GOT ME</button>
      ) : null}
    </>
  );
};
export default User;
