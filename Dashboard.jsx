// import React from 'react';
// import NavigationBar from './NavigationBar';
// import Countdown from './Countdown';
// import UploadFileSection from './UploadFileSection';
// import PerformanceReport from './PerformanceReport';
// import SubmissionStats from './SubmissionStats';
// import TrackGraph from './TrackGraph';

// const Dashboard = () => {
//   return (
//     <div style={styles.container}>
//       <NavigationBar />
//       <div style={styles.content}>
//         <div style={styles.countdowns}>
//           <Countdown title="Internship Period Left" timeLeft="6 months" />
//           <Countdown title="Countdown for Next Submission" timeLeft="15 days" />
//         </div>
//         <UploadFileSection />
//         <div style={styles.reports}>
//           <PerformanceReport />
//           <SubmissionStats />
//         </div>
//         <TrackGraph />
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//   },
//   content: {
//     marginLeft: '200px',
//     padding: '20px',
//     width: '100%',
//   },
//   countdowns: {
//     display: 'flex',
//     justifyContent: 'space-between',
//   },
//   reports: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginTop: '20px',
//   },
// };

// export default Dashboard;
import React from 'react';
import NavigationBar from './NavigationBar';
import Countdown from './Countdown';
import UploadFileSection from './UploadFileSection';
import PerformanceReport from './PerformanceReport';
import SubmissionStats from './SubmissionStats';
import TrackGraph from './TrackGraph';

const Dashboard = () => {
  return (
    <div style={styles.dashboard}>
      {/* Left Navigation Bar */}
      <NavigationBar />

      {/* Main Content */}
      <div style={styles.content}>
        {/* Countdown Section */}
        <div style={styles.countdownSection}>
          <Countdown title="Internship Period Left" timeLeft="6 months" />
          <Countdown title="Countdown for Next Submission" timeLeft="15 days" />
        </div>

        {/* Task Submission and Track Graph */}
        <div style={styles.taskAndGraph}>
          <UploadFileSection />
          <TrackGraph />
        </div>

        {/* Performance and Submission Stats */}
        <div style={styles.reportsSection}>
          <PerformanceReport />
          <SubmissionStats />
        </div>
      </div>
    </div>
  );
};

const styles = {
  dashboard: {
    display: 'flex',
    fontFamily: 'Arial, sans-serif',
  },
  content: {
    marginLeft: '220px',
    padding: '20px',
    width: '100%',
  },
  countdownSection: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  taskAndGraph: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  reportsSection: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

export default Dashboard;
