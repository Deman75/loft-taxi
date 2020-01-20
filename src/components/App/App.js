import React from "react";
import Header from "../Header/Header.jsx";

import "./App.css";

import Main from "../../pages/Main/Main";
import Map from "../../pages/Map/Map";
import Profile from "../../pages/Profile/Profile";

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
    title: "Войти",
    href: "main",
    index: 3
  }
];

const switchPage = (activePage, setPage, activeForm, setForm) => {
  switch (activePage) {
    case "map":
      return <Map />;
    case "profile":
      return <Profile />;
    case "main":
      return <Main setPage={setPage} />;
    default:
      return null;
  }
};

function App() {
  const [activePage, setPage] = React.useState("main");

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
