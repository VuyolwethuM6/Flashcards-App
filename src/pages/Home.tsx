import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import FlashcardList from '../components/FlashcardList';
import flashcardsData from '../data/flashcards.json';
import './Home.css';

const Home: React.FC = () => {
  const [flashcards, setFlashcards] = useState<{ question: string; answer: string }[]>([]);

  useEffect(() => {
    setFlashcards(flashcardsData.flashcards);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Flashcards</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding home-content">
        <FlashcardList flashcards={flashcards} />
        <IonButton expand="full" routerLink="/quiz" className="button">
          Start Quiz
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
