import styles from "./styles.module.css";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    window.location.reload();
  };

  const value = window.localStorage.getItem("displayName");
  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>GUVI</h1>
        <h3>Welcome {value}</h3>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Main;
