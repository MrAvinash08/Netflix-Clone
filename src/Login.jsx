import { signInWithPopup } from "firebase/auth";
import { myAuthentication, provider } from "./firebase/FireBase";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const pleaseLogin = () => {
    signInWithPopup(myAuthentication, provider)
      .then(() => {
        // eslint-disable-next-line react/prop-types
        props.setLogout(true);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button onClick={pleaseLogin}>Sign-Up From Google</button>
    </div>
  );
}

export default Login;
