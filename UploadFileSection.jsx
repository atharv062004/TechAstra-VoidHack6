// import React from 'react';

// const UploadFileSection = () => {
//   return (
//     <div style={styles.container}>
//       <p>Task Submission: Upload your file below</p>
//       <input type="file" style={styles.input} />
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
//   input: {
//     marginTop: '10px',
//   },
// };

// export default UploadFileSection;
import React from 'react';

const UploadFileSection = () => {
  return (
    <div style={styles.container}>
      <p>Task Submission: Upload your file below</p>
      <input type="file" style={styles.input} />
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ECF0F1',
    padding: '20px',
    marginRight: '10px',
    borderRadius: '5px',
    textAlign: 'center',
  },
  input: {
    marginTop: '10px',
  },
};

export default UploadFileSection;
