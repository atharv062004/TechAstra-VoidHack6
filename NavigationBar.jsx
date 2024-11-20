// import React from 'react';

// const NavigationBar = () => {
//   return (
//     <div style={styles.navbar}>
//       <button style={styles.button}>Dashboard</button>
//       <button style={styles.button}>Profile</button>
//       <button style={styles.button}>Logout</button>
//     </div>
//   );
// };

// const styles = {
//   navbar: {
//     backgroundColor: '#34495E',
//     color: 'white',
//     padding: '15px',
//     height: '100vh',
//     width: '200px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   button: {
//     margin: '10px 0',
//     padding: '10px 20px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     backgroundColor: '#1ABC9C',
//     color: 'white',
//     fontSize: '16px',
//   },
// };

// export default NavigationBar;
import React from 'react';

const NavigationBar = () => {
  return (
    <div style={styles.navbar}>
      <button style={styles.button}>Dashboard</button>
      <button style={styles.button}>Profile</button>
      <button style={styles.button}>Logout</button>
    </div>
  );
};

const styles = {
  navbar: {
    position: 'fixed',
    left: '0',
    top: '0',
    height: '100vh',
    width: '200px',
    backgroundColor: '#34495E',
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
  },
  button: {
    margin: '15px 0',
    padding: '10px 20px',
    backgroundColor: '#1ABC9C',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default NavigationBar;
