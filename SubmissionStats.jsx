// import React from 'react';

// const SubmissionStats = () => {
//   const submissions = [
//     { id: 1, task: 'Submission 1', status: 'Completed' },
//     { id: 2, task: 'Submission 2', status: 'Not Completed' },
//   ];

//   return (
//     <div style={styles.container}>
//       <h3>Submission Stats</h3>
//       <ul>
//         {submissions.map((submission) => (
//           <li key={submission.id}>
//             {submission.task}: {submission.status}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     backgroundColor: '#ECF0F1',
//     padding: '20px',
//     borderRadius: '5px',
//   },
// };

// export default SubmissionStats;
import React from 'react';

const SubmissionStats = () => {
  const submissions = [
    { id: 1, task: 'Submission 1', status: 'Completed' },
    { id: 2, task: 'Submission 2', status: 'Not Completed' },
  ];

  return (
    <div style={styles.container}>
      <h3>Submission Stats</h3>
      <ul>
        {submissions.map((submission) => (
          <li key={submission.id}>
            {submission.task}: {submission.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ECF0F1',
    padding: '20px',
    marginLeft: '10px',
    borderRadius: '5px',
    textAlign: 'center',
  },
};

export default SubmissionStats;
