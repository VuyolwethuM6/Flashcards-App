import React, { useState } from 'react';

interface FlashcardProps {
  question: string;
  answer: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="flashcard-container flashcard-animation" onClick={() => setShowAnswer(!showAnswer)}>
      <div className="flashcard-content">
        <p>{showAnswer ? answer : question}</p>
      </div>
    </div>
  );
};

export default Flashcard;
