export const apiURL = () => {
    return window.location.hostname === "localhost"
      ? "http://localhost:3003"
      : "https://afternoon-lowlands-78727.herokuapp.com/";
  };