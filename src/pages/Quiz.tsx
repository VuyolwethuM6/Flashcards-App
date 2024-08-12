import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonText } from '@ionic/react';
import flashcardsData from '../data/flashcards.json';
import './Quiz.css';

const Quiz: React.FC = () => {
  const [flashcards, setFlashcards] = useState<{ question: string; answer: string }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setFlashcards(flashcardsData.flashcards);
  }, []);

  const handleNext = () => {
    if (showAnswer) {
      setScore(score + 1);
    }
    setShowAnswer(false);
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Quiz</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding quiz-content">
        {currentIndex < flashcards.length ? (
          <div>
            <div
              className="flashcard-container flashcard-animation"
              onClick={() => setShowAnswer(!showAnswer)}
            >
              <div className="flashcard-content">
                <IonText>{showAnswer ? flashcards[currentIndex].answer : flashcards[currentIndex].question}</IonText>
              </div>
            </div>
            <IonButton expand="full" className="button" onClick={handleNext}>
              Next
            </IonButton>
          </div>
        ) : (
          <div className="quiz-result">
            <IonText className="quiz-score">Your score is {score}/{flashcards.length}</IonText>
            <IonButton expand="full" routerLink="/home" className="button">
              Back to Home
            </IonButton>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Quiz;
