/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import i18n from "translation/i18n";
import Context from "context";

export default ({ children }) => {
  const timer = React.useRef();
  const [loading, setLoading] = React.useState("loading");
  const [language, _setLanguage] = React.useState("it");

  React.useEffect(() => {
    assignTimer(() => setLoading(""), 500);
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const provides = {
    language,
    setLanguage,
  };
  function assignTimer(cb, time) {
    return new Promise((resolve) => {
      timer.current = setTimeout(() => {
        cb();
        resolve();
      }, time);
    });
  }

  async function setLanguage(language) {
    setLoading("loading");

    await assignTimer(() => {
      i18n.changeLanguage(language);
      _setLanguage(language);
      setLoading("");
    }, 1000);
  }

  return (
    <Context.Provider value={provides}>
      <div className={`loader ${loading}`}>{children}</div>
    </Context.Provider>
  );
};
