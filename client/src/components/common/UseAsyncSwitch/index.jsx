import React from "react";

import { Status } from "../../../hooks/common/useAsync";
import LoadPage from "../../common/LoadPage";

/**
 * @returns a React component that displays the page's content depending on the result of an useAsync-derived hook
 */
function UseAsyncSwitch({ hook, Content }) {
  const { status, value, error } = hook();

  switch (status) {
    case Status.IDLE:
    case Status.PENDING:
      return <LoadPage />;
    case Status.SUCCESS:
      return <Content value={value} />;
    case Status.ERROR:
      // TODO: Common failure page
      return <>{`${error}`}</>;
    default:
      throw TypeError("Ranking call is in unexpected status " + status);
  }
}

export default UseAsyncSwitch;
