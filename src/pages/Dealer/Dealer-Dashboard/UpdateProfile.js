import React from "react";

function UpdateProfile(props) {
  console.warn("hi", props.match.params.id);

  return (
    <div>
      <h1>updateProfile</h1>
    </div>
  );
}

export default UpdateProfile;
