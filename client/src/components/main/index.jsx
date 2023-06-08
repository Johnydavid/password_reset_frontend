import styles from "./styles.module.css";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    window.location.reload();
  };

  // const myDropDown = () => {
  //   document.getElementById("myDropdown").classList.toggle("show");
  // };

  // Close the dropdown if the user clicks outside of it
  // window.onclick = function (e) {
  //   if (!e.target.matches(".dropbtn")) {
  //     var myDropdown = document.getElementById("myDropdown");
  //     if (myDropdown.classList.contains("show")) {
  //       myDropdown.classList.remove("show");
  //     }
  //   }
  // };
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
