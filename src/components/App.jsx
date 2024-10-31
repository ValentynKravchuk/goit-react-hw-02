import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import { useState } from "react";

function App() {
  const [value, setValue] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = (feedbackType) => {
    setValue;
  };
  return (
    <div>
      <Description></Description>
      <Options></Options>
      <Feedback></Feedback>
    </div>
  );
}

export default App;
