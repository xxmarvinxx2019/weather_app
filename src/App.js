import {
  BrowserRouter,
  Navigate,
  Switch,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import React from "react";
import Home from "./modules/Home";
import Landing from "./modules/Landing";
import Weather from "./modules/Weather";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

const Auth0ProviderWithRedirect = ({ children }) => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return <>{children}</>;
};

function App() {
  const domain = "dev-yjqsfqm2bmq5kq8q.us.auth0.com";
  const clientId = "7iGjJUp8mObjvCQ2C9hPtdXkemdavxmS";
  const redirectUri = window.location.origin;
  return (
    <div className="App">
      <BrowserRouter>
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          redirectUri={redirectUri}
        >
          <Auth0ProviderWithRedirect>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/home" element={<Home />} />
              <Route path="/weather" element={<Weather />} />
            </Routes>
          </Auth0ProviderWithRedirect>
        </Auth0Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
