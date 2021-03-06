import React from "react";
import Header from "../Header/Header.jsx";

import "./App.css";

import Main from "../../pages/Main/Main";
import Map from "../../pages/Map/Map";
import Profile from "../../pages/Profile/Profile";

import { ContextLogin } from "../../store/context/Context";

const pages = [
  {
    title: "Карта",
    href: "map",
    index: 1
  },
  {
    title: "Профиль",
    href: "profile",
    index: 2
  },
  {
    title: "Выйти",
    href: "logout",
    index: 3
  }
];

const switchPage = (activePage, setPage) => {
  switch (activePage) {
    case "map":
      return <Map />;
    case "profile":
      return <Profile />;
    case "main":
      return <Main setPage={setPage} />;
    default:
      return <Main setPage={setPage} />;
  }
};

function App() {
  const [activePage, setPage] = React.useState("main");
  const { isLoggedIn } = React.useContext(ContextLogin);

  if (!isLoggedIn && activePage !== "main") setPage("main");

  return (
    <div className="wrapper">
      {activePage !== "main" ? (
        <Header activePage={activePage} setPage={setPage} pages={pages} />
      ) : null}
      {switchPage(activePage, setPage)}
    </div>
  );
}
export default App;
