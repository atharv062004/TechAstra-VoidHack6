// import React from 'react';

// const Countdown = ({ title, timeLeft }) => {
//   return (
//     <div style={styles.container}>
//       <h4>{title}</h4>
//       <p>{timeLeft}</p>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     backgroundColor: '#ECF0F1',
//     padding: '20px',
//     margin: '10px 0',
//     borderRadius: '5px',
//     textAlign: 'center',
//   },
// };

// export default Countdown;
import React from 'react';

const Countdown = ({ title, timeLeft }) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      <p>{timeLeft}</p>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ECF0F1',
    padding: '15px',
    margin: '0 10px',
    borderRadius: '5px',
    textAlign: 'center',
  },
};

export default Countdown;
