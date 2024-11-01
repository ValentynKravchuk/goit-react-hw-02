import React from "react";

function Feedback({ value }) {
  const totalFeedback = value.good + value.neutral + value.bad;
  const positiveFeedbackPercentage = totalFeedback
    ? Math.round((value.good / totalFeedback) * 100)
    : 0;

  return (
    <div>
      <h2>Feedback Statistics</h2>
      <ul>
        <li>Good: {value.good}</li>
        <li>Neutral: {value.neutral}</li>
        <li>Bad: {value.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive Feedback: {positiveFeedbackPercentage}%</li>
      </ul>
    </div>
  );
}

export default Feedback;
