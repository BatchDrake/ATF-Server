import "./index.css";

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Victories({ amount }) {
  return (
    <div className="victories">
      {amount > 1 && <span className="victories__amount">{amount}</span>}
      <Icon className="victories__star" icon={faStar} />
    </div>
  );
}

export default Victories;
