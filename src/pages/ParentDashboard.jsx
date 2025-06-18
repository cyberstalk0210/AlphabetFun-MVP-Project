import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const ParentDashboard = () => {
  const data = {
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        label: 'Progress',
        data: [80, 90, 70],
        borderColor: '#28a745',
        backgroundColor: 'rgba(40, 167, 69, 0.2)',
      },
    ],
  };

  return (
    <div style={{ padding: 20, textAlign: 'center', backgroundColor: '#e8f5e9' }}>
      <h1 style={{ color: '#28a745' }}>Parent Dashboard</h1>
      <Line data={data} />
    </div>
  );
};

export default ParentDashboard;