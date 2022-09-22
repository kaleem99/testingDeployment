import { NegotiationData } from "../Prompts";
import "./OtherComponents.scss";
export default function PAYOFFTable({ tableData }) {
  let maxTotal = 0;
  let minTotal = 0;
  const NegotiationNames = [
    "Job Assignment",
    "Vacation Time",
    "Starting Date",
    "Moving Expense Coverage",
    "Insurance Coverage",
    "Salary",
    "Bonus",
    "Location",
  ];
  let index = 0;
  const ResultTable = [];
  for (let neg in tableData) {
    const tableObj = {};
    if (neg === NegotiationData[index]) {
      tableObj.name = NegotiationNames[index];
      // console.log(tableData[neg]);
      tableObj.min = Math.min(...tableData[neg].map((val) => val.points));
      tableObj.max = Math.max(...tableData[neg].map((val) => val.points));
      maxTotal += tableObj.max;
      minTotal += tableObj.min;
      index++;
      ResultTable.push(tableObj);
    }
  }
  return (
    <div key={0} className="PayOffTable">
      <caption>Payoff schedule</caption>
      <br></br>
      <br></br>
      <table key={1} className="table" tabIndex={0}>
        <tr key={0} tabIndex={0}>
          <th style={{ width: "40%" }}>Negotiations</th>
          <th>Lowest</th>
          <th>Highest</th>
        </tr>
        {ResultTable.map((val, i) => (
          <tr key={i} tabIndex={0}>
            <td>{val.name}</td>
            <td>{val.min}</td>
            <td>{val.max}</td>
          </tr>
        ))}
        <tr key={1}>
          <td>Total</td>
          <td>{minTotal}</td>
          <td>{maxTotal}</td>
        </tr>
      </table>
      <br></br>
    </div>
  );
}
