import Question5Image from "./img/Question5.png";
export default function TestYourKnowldgeComponents({
  questionsArr,
  tableData,
  level,
}) {
  return (
    <div>
      {questionsArr.table !== undefined ? (
        <>
          <table className="reflectionQuestion3Table">
            <tr>
              <th></th>
              <th>Package 1</th>
              <th>Package 2</th>
              <th>Package 3</th>
            </tr>
            {tableData.map((data, i) => {
              return (
                <>
                  <tr>
                    <td>{data}</td>
                    <td>{questionsArr.table[0][data]}</td>
                    <td>{questionsArr.table[1][data]}</td>
                    <td>{questionsArr.table[2][data]}</td>
                  </tr>
                </>
              );
            })}
          </table>
          <p tabIndex={0} className="header-text">
            Considering Cilna’s issues and interests, which package should she
            take?
          </p>
        </>
      ) : level === 4 ? (
        <div>
          {" "}
          <p tabIndex={0}>
            In the graph below, the y-axis represents Person B’s surplus, and
            the x-axis represents Person A’s surplus. After negotiating for some
            time, seven possible agreements were put on the table for the
            parties to consider. Questions 5 to 9 relate to the agreements shown
            in the graph in Figure 1.
          </p>
          <img tabIndex={0} alt="" src={Question5Image}></img>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
