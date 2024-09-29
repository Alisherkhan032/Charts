import "./Chart2.css";
import { Chart as ChartJS , defaults} from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import sourceData from "../data/sourceData.json";
import revenueData from '../data/revenueData.json'

defaults.maintainAspectRatio = false;
defaults.responsive =true;

function App() {
  return (
    <div className="App">
      <div className="chart1 chart">
      <Line
            data={{
              labels: revenueData.map((data) => data.label),
              datasets: [
                {
                  label: "revenue",
                  data: revenueData.map((data) => data.revenue),
                  backgroundColor : "skyblue",
                  borderColor : "blue"
                },
                {
                  label : "cost",
                  data : revenueData.map((data) => data.cost),
                  backgroundColor : "lightgreen",
                  borderColor : "green"
                },
              ],
              
            }}

            options={{
              plugins: {
                title: {
                  display: true,
                  text: 'Monthly Revenue',
                  font: {
                    size: 20, // Font size of the title
                  },
                  padding: {
                    bottom: 20, // Space below the title
                  },
                },
              },
            }}
          />
      </div>
      <div className="line2">
        <div className="chart2 chart">
          <Bar
            data={{
              labels: sourceData.map((data) => data.label),
              datasets: [
                {
                  label: "Count",
                  data: sourceData.map((data) => data.value),
                  backgroundColor: [
                    "rgba(93, 63, 229, 0.8)",
                  ],
                  borderRadius : 5,
                },
                {
                  label: "Check",
                  data: sourceData.map((data) => data.value+19),
                  backgroundColor: [
                    // "rgba(33, 63, 229, 0.8)",
                    "rgba(50, 182, 119, 0.8)",
                    // "rgba(23, 135, 135, 0.8)",
                  ],
                  borderRadius : 5,
                },
              ],
            }}
          />
        </div>
        <div className="chart3 chart">
        <Doughnut className="doughnut"
            data={{
              labels: sourceData.map((data) => data.label),
              datasets: [
                {
                  label: "Count",
                  data: sourceData.map((data) => data.value),
                  backgroundColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                  ],
                  borderColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                  ],
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
