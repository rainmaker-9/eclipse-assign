import React from "react";
import { Link } from "react-router-dom";

const Summary = ({
  TxtFuncProblems,
  ProblemDiagnosed,
  AfterPhysicalTrauma,
  AfterMentalTrauma,
  ExpFrequency,
  ProbOccurence = [],
  ExpIntensity,
}) => {
  return (
    <div className="summary">
      <table>
        <thead>
          <tr>
            <th>Symptoms</th>
            <th>Is Diagnosed</th>
            <th>After Physical Trauma</th>
            <th>After Mental Trauma</th>
            <th>Problem Frequency</th>
            <th>Problem Occurences</th>
            <th>Problem Intensity (0-10 Scale)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{TxtFuncProblems}</td>
            <td>{ProblemDiagnosed}</td>
            <td>{AfterPhysicalTrauma}</td>
            <td>{AfterMentalTrauma}</td>
            <td>{ExpFrequency}</td>
            <td>{ProbOccurence && ProbOccurence.filter(Boolean).join(",")}</td>
            <td>{ExpIntensity}</td>
          </tr>
        </tbody>
      </table>
      <div className="buttons">
        <Link to="/" className="text-upper">
          back
        </Link>
      </div>
    </div>
  );
};

export default Summary;
