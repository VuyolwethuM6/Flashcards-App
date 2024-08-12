import React from 'react';
import Flashcard from './Flashcard';

interface FlashcardListProps {
  flashcards: Array<{ question: string; answer: string }>;
}

const FlashcardList: React.FC<FlashcardListProps> = ({ flashcards }) => {
  return (
    <div>
      {flashcards.map((flashcard, index) => (
        <Flashcard key={index} question={flashcard.question} answer={flashcard.answer} />
      ))}
    </div>
  );
};

export default FlashcardList;
