import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Qhelpful = styled.div`
  font-size: 15px;
  text-dec
`;

const helpfulnessStyle = {
  textDecoration: "underline",
  cursor: "pointer"
}

const beforeClickedStyle = {
  textDecoration: "underline",
  cursor: "pointer"
}

const afterClickedStyle = {
  fontWeight: "bold",
  cursor: "pointer"
}

const QuestionHelpful = ({ helpfulness, questionId }) => {
  const [QHelpfulness, setQHelpfulness] = useState(helpfulness)
  const [isHelpful, setIsHelpful] = useState(false)
  const [isQsReported, setIsQsReported] = useState(false);

  const handleQHelpfulnessClicked = (e) => {
    if (!isHelpful) {
      axios.put(`/qa/questions/${questionId}/helpful`,{question_id:questionId,helpful:QHelpfulness+1})
      .then(setQHelpfulness(QHelpfulness + 1))
      .catch(console.log)
    }
    setIsHelpful(true);
  };

  const handleQsReport = (e) => {
    setIsQsReported(1);
    axios.put(`/qa/questions/${questionId}/report`,{question_id:questionId})
      .then((res) => {console.log('Question is reported with ID: ', questionId)})
      .catch(console.log)
  };

  return (
    <Qhelpful className="question-helpfulness">
        <span>helpful?</span>
        <span> | </span>
        <span className="q-helpfulness" style={helpfulnessStyle} onClick={handleQHelpfulnessClicked}> yes({QHelpfulness})</span>
        <span> | </span>
        {
          isQsReported? <span style={afterClickedStyle} className="question-not-report">  reported  </span>
                      : <span style={beforeClickedStyle} className = "question-reported" onClick = {handleQsReport}> report </span>
        }
    </Qhelpful>
  );
};

export default QuestionHelpful;