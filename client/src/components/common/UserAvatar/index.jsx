import "./index.css";

import React from "react";
import { Image, OverlayTrigger, Tooltip } from "react-bootstrap";

function UserAvatar({ user, tooltip }) {
  if (tooltip) {
    return (
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>{user.name}</Tooltip>}
      >
        <Image className={"avatar"} src={user.avatar} roundedCircle />
      </OverlayTrigger>
    );
  } else {
    return <Image className={"avatar"} src={user.avatar} roundedCircle />;
  }
}

export default UserAvatar;
