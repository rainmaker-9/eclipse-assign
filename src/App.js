import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Summary from "./Summary";

const App = () => {
  const [TxtFuncProblems, setTxtFuncProbmes] = useState("");
  const [ProblemDiagnosed, setProblemDiagnosed] = useState("");
  const [AfterPhysicalTrauma, setAfterPhysicalTrauma] = useState("");
  const [AfterMentalTrauma, setAfterMentalTrauma] = useState("");
  const [ExpFrequency, setExpFrequency] = useState("");
  const [ProbOccurence, setProbOccurence] = useState([""]);
  const [ExpIntensity, setExpIntensity] = useState(0);

  const changeFunProblem = (e) => {
    setTxtFuncProbmes(e.target.value);
  };

  const changeProblemDiagnosed = (e) => {
    setProblemDiagnosed(e.target.value);
  };

  const changeAfterPhysicalTrauma = (e) => {
    setAfterPhysicalTrauma(e.target.value);
  };

  const changeAfterMentalTrauma = (e) => {
    setAfterMentalTrauma(e.target.value);
  };

  const changeExpFrequency = (e) => {
    setExpFrequency(e.target.value);
  };

  const changeProbOccurence = (e) => {
    if (ProbOccurence.includes(e.target.value)) {
      setProbOccurence([
        ...ProbOccurence.filter((val) => val !== e.target.value),
      ]);
    } else {
      setProbOccurence([...ProbOccurence, e.target.value]);
    }
  };

  const changeExpIntensity = (e) => {
    setExpIntensity(Number(e.target.value));
  };

  return (
    <main className="main">
      <Routes>
        <Route
          index
          element={
            <section className="form">
              <h2 className="text-center text-ltblue">
                Pain &amp; Functional Description
              </h2>
              <p className="text-center">
                The description of the current situation gives your Optimum
                Trainer a picture of and clues to the underlying causes of your
                problems
              </p>
              <form>
                <div>
                  <label htmlFor="TxtFuncProblems">
                    If you have problems with pain/aches, stiffness, weakness or
                    functional problems, describe this/these below. (List
                    symptoms in descending order with the most troublesome first
                  </label>
                  <textarea
                    name="TxtFuncProblems"
                    id="TxtFuncProblems"
                    cols="30"
                    rows="5"
                    className="w-100"
                    onChange={(e) => changeFunProblem(e)}
                  ></textarea>
                </div>
                <div className="d-flex align-items-center form-inline-radio">
                  <p>Have you been diagnosed with this problem?</p>
                  <div className="d-flex justify-content-evenly flex-grow-1">
                    <div className="form-control-inline">
                      <input
                        type="radio"
                        name="isProblemDiagnosed"
                        id="isProblemDiagnosedNR"
                        value="Not Relevant"
                        onChange={(e) => changeProblemDiagnosed(e)}
                      />
                      <label htmlFor="isProblemDiagnosedNR">Not relevant</label>
                    </div>
                    <div className="form-control-inline">
                      <input
                        type="radio"
                        name="isProblemDiagnosed"
                        id="isProblemDiagnosedYes"
                        value="Yes"
                        onChange={(e) => changeProblemDiagnosed(e)}
                      />
                      <label htmlFor="isProblemDiagnosedYes">Yes</label>
                    </div>
                    <div className="form-control-inline">
                      <input
                        type="radio"
                        name="isProblemDiagnosed"
                        id="isProblemDiagnosedNo"
                        value="No"
                        onChange={(e) => changeProblemDiagnosed(e)}
                      />
                      <label htmlFor="isProblemDiagnosedNo">No</label>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center form-inline-radio">
                  <p>Did the problem start after a physical trauma?</p>
                  <div className="d-flex justify-content-evenly flex-grow-1">
                    <div className="form-control-inline">
                      <input
                        type="radio"
                        name="isAfterPhysicalTrauma"
                        id="isAfterPhysicalTraumaNR"
                        value="Not Relevant"
                        onChange={(e) => changeAfterPhysicalTrauma(e)}
                      />
                      <label htmlFor="isAfterPhysicalTraumaNR">
                        Not relevant
                      </label>
                    </div>
                    <div className="form-control-inline">
                      <input
                        type="radio"
                        name="isAfterPhysicalTrauma"
                        id="isAfterPhysicalTraumaYes"
                        value="Yes"
                        onChange={(e) => changeAfterPhysicalTrauma(e)}
                      />
                      <label htmlFor="isAfterPhysicalTraumaYes">Yes</label>
                    </div>
                    <div className="form-control-inline">
                      <input
                        type="radio"
                        name="isAfterPhysicalTrauma"
                        id="isAfterPhysicalTraumaNo"
                        value="No"
                        onChange={(e) => changeAfterPhysicalTrauma(e)}
                      />
                      <label htmlFor="isAfterPhysicalTraumaNo">No</label>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center form-inline-radio">
                  <p>Did the problem start after a mental trauma?</p>
                  <div className="d-flex justify-content-evenly flex-grow-1">
                    <div className="form-control-inline">
                      <input
                        type="radio"
                        name="isAfterMentalTrauma"
                        id="isAfterMentalTraumaNR"
                        value="Not Relevant"
                        onChange={(e) => changeAfterMentalTrauma(e)}
                      />
                      <label htmlFor="isAfterMentalTraumaNR">
                        Not relevant
                      </label>
                    </div>
                    <div className="form-control-inline">
                      <input
                        type="radio"
                        name="isAfterMentalTrauma"
                        id="isAfterMentalTraumaYes"
                        value="Yes"
                        onChange={(e) => changeAfterMentalTrauma(e)}
                      />
                      <label htmlFor="isAfterMentalTraumaYes">Yes</label>
                    </div>
                    <div className="form-control-inline">
                      <input
                        type="radio"
                        name="isAfterMentalTrauma"
                        id="isAfterMentalTraumaNo"
                        value="No"
                        onChange={(e) => changeAfterMentalTrauma(e)}
                      />
                      <label htmlFor="isAfterMentalTraumaNo">No</label>
                    </div>
                  </div>
                </div>
                <div>
                  <p>How often do you experience the problem?</p>
                  <div className="d-flex justify-content-between flex-wrap">
                    <div className="form-control-inline flex-grow-1">
                      <input
                        type="radio"
                        name="expFrequency"
                        id="expFrequencyNR"
                        value="Not Relevant"
                        onChange={(e) => changeExpFrequency(e)}
                      />
                      <label htmlFor="expFrequencyNR">Not relevant</label>
                    </div>
                    <div className="form-control-inline flex-grow-1">
                      <input
                        type="radio"
                        name="expFrequency"
                        id="expFrequencyDaily"
                        value="Daily"
                        onChange={(e) => changeExpFrequency(e)}
                      />
                      <label htmlFor="expFrequencyDaily">Daily</label>
                    </div>
                    <div className="form-control-inline flex-grow-1">
                      <input
                        type="radio"
                        name="expFrequency"
                        id="expFrequencySeveralTimesWeek"
                        value="Several times/week"
                        onChange={(e) => changeExpFrequency(e)}
                      />
                      <label htmlFor="expFrequencySeveralTimesWeek">
                        Several times/week
                      </label>
                    </div>
                    <div className="form-control-inline flex-grow-1">
                      <input
                        type="radio"
                        name="expFrequency"
                        id="expFrequencyFewTimesMonth"
                        value="A few times/month"
                        onChange={(e) => changeExpFrequency(e)}
                      />
                      <label htmlFor="expFrequencyFewTimesMonth">
                        A few times/month
                      </label>
                    </div>
                    <div className="form-control-inline flex-grow-1">
                      <input
                        type="radio"
                        name="expFrequency"
                        id="expFrequencyFewTimesYear"
                        value="A few times/year"
                        onChange={(e) => changeExpFrequency(e)}
                      />
                      <label htmlFor="expFrequencyFewTimesYear">
                        A few times/year
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <p>When do you experience the problem?</p>
                  <div className="d-flex gap-3 justify-content-start align-items-start">
                    <div className="d-flex flex-column">
                      <div className="form-control-inline flex-grow-1">
                        <input
                          type="checkbox"
                          name="probOccurence"
                          id="probOccurenceNR"
                          value="Not Relevant"
                          onChange={(e) => changeProbOccurence(e)}
                        />
                        <label htmlFor="probOccurenceNR">Not relevant</label>
                      </div>
                      <div className="form-control-inline flex-grow-1">
                        <input
                          type="checkbox"
                          name="probOccurence"
                          id="probOccurenceLyingDown"
                          value="When Lying Down"
                          onChange={(e) => changeProbOccurence(e)}
                        />
                        <label htmlFor="probOccurenceLyingDown">
                          When lying down
                        </label>
                      </div>
                      <div className="form-control-inline flex-grow-1">
                        <input
                          type="checkbox"
                          name="probOccurence"
                          id="probOccurenceSitting"
                          value="When Sitting"
                          onChange={(e) => changeProbOccurence(e)}
                        />
                        <label htmlFor="probOccurenceSitting">
                          When sitting
                        </label>
                      </div>
                      <div className="form-control-inline flex-grow-1">
                        <input
                          type="checkbox"
                          name="probOccurence"
                          id="probOccurenceUnderStanding"
                          value="Under standing"
                          onChange={(e) => changeProbOccurence(e)}
                        />
                        <label htmlFor="probOccurenceUnderStanding">
                          Under standing
                        </label>
                      </div>
                      <div className="form-control-inline flex-grow-1">
                        <input
                          type="checkbox"
                          name="probOccurence"
                          id="probOccurenceWalking"
                          value="In walking"
                          onChange={(e) => changeProbOccurence(e)}
                        />
                        <label htmlFor="probOccurenceWalking">In walking</label>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <textarea
                        className="w-100"
                        name=""
                        id=""
                        cols="30"
                        rows="5"
                        placeholder="Other? For example in rotations, side bends, wing stairs, when working with the arms above the head."
                        onChange={(e) => changeProbOccurence(e)}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div>
                  <p>
                    How intense is the experience of the problem on average on a
                    0-10 scale?
                  </p>
                  <div className="d-flex gap-3 flex-wrap" id="intensity">
                    <div className="text-center">
                      <label htmlFor="expIntensity1">1</label>
                      <input
                        type="radio"
                        name="expIntensity"
                        id="expIntensity1"
                        value="1"
                        onChange={(e) => changeExpIntensity(e)}
                      />
                    </div>
                    <div className="text-center">
                      <label htmlFor="expIntensity2">2</label>
                      <input
                        type="radio"
                        name="expIntensity"
                        id="expIntensity2"
                        value="2"
                        onChange={(e) => changeExpIntensity(e)}
                      />
                    </div>
                    <div className="text-center">
                      <label htmlFor="expIntensity3">3</label>
                      <input
                        type="radio"
                        name="expIntensity"
                        id="expIntensity3"
                        value="3"
                        onChange={(e) => changeExpIntensity(e)}
                      />
                    </div>
                    <div className="text-center">
                      <label htmlFor="expIntensity4">4</label>
                      <input
                        type="radio"
                        name="expIntensity"
                        id="expIntensity4"
                        value="4"
                        onChange={(e) => changeExpIntensity(e)}
                      />
                    </div>
                    <div className="text-center">
                      <label htmlFor="expIntensity5">5</label>
                      <input
                        type="radio"
                        name="expIntensity"
                        id="expIntensity5"
                        value="5"
                        onChange={(e) => changeExpIntensity(e)}
                      />
                    </div>
                    <div className="text-center">
                      <label htmlFor="expIntensity6">6</label>
                      <input
                        type="radio"
                        name="expIntensity"
                        id="expIntensity6"
                        value="6"
                        onChange={(e) => changeExpIntensity(e)}
                      />
                    </div>
                    <div className="text-center">
                      <label htmlFor="expIntensity7">7</label>
                      <input
                        type="radio"
                        name="expIntensity"
                        id="expIntensity7"
                        value="7"
                        onChange={(e) => changeExpIntensity(e)}
                      />
                    </div>
                    <div className="text-center">
                      <label htmlFor="expIntensity8">8</label>
                      <input
                        type="radio"
                        name="expIntensity"
                        id="expIntensity8"
                        value="8"
                        onChange={(e) => changeExpIntensity(e)}
                      />
                    </div>
                    <div className="text-center">
                      <label htmlFor="expIntensity9">9</label>
                      <input
                        type="radio"
                        name="expIntensity"
                        id="expIntensity9"
                        value="9"
                        onChange={(e) => changeExpIntensity(e)}
                      />
                    </div>
                    <div className="text-center">
                      <label htmlFor="expIntensity10">10</label>
                      <input
                        type="radio"
                        name="expIntensity"
                        id="expIntensity10"
                        value="10"
                        onChange={(e) => changeExpIntensity(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="buttons">
                  <Link to="/summary" className="text-upper">
                    next
                  </Link>
                </div>
              </form>
            </section>
          }
        ></Route>
        <Route
          path="/summary"
          element={
            <Summary
              TxtFuncProblems={TxtFuncProblems}
              AfterPhysicalTrauma={AfterPhysicalTrauma}
              AfterMentalTrauma={AfterMentalTrauma}
              ProblemDiagnosed={ProblemDiagnosed}
              ProbOccurence={ProbOccurence}
              ExpFrequency={ExpFrequency}
              ExpIntensity={ExpIntensity}
            />
          }
        ></Route>
      </Routes>
    </main>
  );
};

export default App;
