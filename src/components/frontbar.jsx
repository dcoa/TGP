import React, {useContext} from "react";
import user from "../img/user.png";
import { AuthContext } from '../context/AuthContext';



// const Button = ({ cName, onClick, img, text }) => (
//   <button
//     className={cName}
//     type="button"
//     onClick={onClick}
//   >
//     {img}
//     {text}
//   </button>
// );

// export default Button;

const FrontBar = ({ searcher }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="front">
      {searcher}
      <div className="front-user">
        <p className="front-user-text">{currentUser && currentUser.displayName}</p>
        <img className="front-tgp-logo" src={user} alt="userName" />
      </div>
    </div>
  )
};

export default FrontBar;
