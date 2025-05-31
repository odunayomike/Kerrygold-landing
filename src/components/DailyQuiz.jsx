import { useState, useEffect } from 'react';

export default function DailyQuiz({ onScoreSubmitted }) {
  const [userEmail, setUserEmail] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  // All questions from the document
  const allQuestions = [
    {
      question: "What is the predominant colour of Kerrygold Avantage milk pack?",
      options: [
        { id: 'A', text: 'Red', correct: false },
        { id: 'B', text: 'Blue', correct: true },
        { id: 'C', text: 'Yellow', correct: false }
      ]
    },
    {
      question: "What is the predominant colour of Kerrygold Full Cream pack?",
      options: [
        { id: 'A', text: 'Blue', correct: false },
        { id: 'B', text: 'Green', correct: true },
        { id: 'C', text: 'Red', correct: false }
      ]
    },
    {
      question: "What is Kerrygold Campaign Theme?",
      options: [
        { id: 'A', text: 'May Your Table Always Be Full', correct: true },
        { id: 'B', text: 'Taste the Tradition', correct: false },
        { id: 'C', text: 'Pure Milk Excellence', correct: false }
      ]
    },
    {
      question: "What is the official theme for World Milk Day 2025?",
      options: [
        { id: 'A', text: 'Celebrate Dairy Power', correct: false },
        { id: 'B', text: 'Let\'s celebrate the power of dairy', correct: true },
        { id: 'C', text: 'Milk for Everyone', correct: false }
      ]
    },
    {
      question: "Which Nigerian milk brand is known for the tagline 'Tradition of Great Taste'?",
      options: [
        { id: 'A', text: 'Peak Milk', correct: false },
        { id: 'B', text: 'Kerrygold', correct: true },
        { id: 'C', text: 'Dano Milk', correct: false }
      ]
    },
    {
      question: "What component of Kerrygold is responsible for strong teeth and bones?",
      options: [
        { id: 'A', text: 'Calcium', correct: true },
        { id: 'B', text: 'Protein', correct: false },
        { id: 'C', text: 'Vitamins', correct: false }
      ]
    },
    {
      question: "What is the colour of Kerrygold milk powder?",
      options: [
        { id: 'A', text: 'Pure White', correct: false },
        { id: 'B', text: 'Cream/White', correct: true },
        { id: 'C', text: 'Light Yellow', correct: false }
      ]
    },
    {
      question: "Kerrygold milk is obtained from:",
      options: [
        { id: 'A', text: 'Well-fed cows', correct: false },
        { id: 'B', text: 'Grass-fed cows', correct: true },
        { id: 'C', text: 'Over-fed cows', correct: false }
      ]
    },
    {
      question: "What event is Kerrygold celebrating on June 1st?",
      options: [
        { id: 'A', text: 'Kerrygold Day', correct: false },
        { id: 'B', text: 'World Milk Day', correct: true },
        { id: 'C', text: 'Dairy Appreciation Day', correct: false }
      ]
    },
    {
      question: "Kerrygold milk comes in what form?",
      options: [
        { id: 'A', text: 'Liquid', correct: false },
        { id: 'B', text: 'Powdered', correct: true },
        { id: 'C', text: 'Both', correct: false }
      ]
    },
    {
      question: "Kerrygold is known to _______ food experiences.",
      options: [
        { id: 'A', text: 'Recreate', correct: false },
        { id: 'B', text: 'Elevate', correct: true },
        { id: 'C', text: 'Imitate', correct: false }
      ]
    },
    {
      question: "Kerrygold milk is an ideal drink for refuelling after exercise or sports.",
      options: [
        { id: 'A', text: 'True', correct: true },
        { id: 'B', text: 'False', correct: false },
        { id: 'C', text: 'Sometimes', correct: false }
      ]
    },
    {
      question: "What is the Nigerian Kerrygold instagram handle?",
      options: [
        { id: 'A', text: '@kerrygold_ng', correct: false },
        { id: 'B', text: '@kerrygoldnigeria', correct: true },
        { id: 'C', text: '@kerrygold_official', correct: false }
      ]
    },
    {
      question: "One glass of milk provides about 30% of your daily calcium requirement.",
      options: [
        { id: 'A', text: 'True', correct: true },
        { id: 'B', text: 'False', correct: false },
        { id: 'C', text: 'Only 20%', correct: false }
      ]
    },
    {
      question: "When is World Milk Day?",
      options: [
        { id: 'A', text: 'May 1st', correct: false },
        { id: 'B', text: 'June 1st', correct: true },
        { id: 'C', text: 'July 1st', correct: false }
      ]
    }
  ];

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    // Shuffle questions and limit to 10 when component mounts
    const shuffled = shuffleArray(allQuestions);
    setShuffledQuestions(shuffled.slice(0, 10));
  }, []);

  const submitToServer = (email, score, totalQuestions, action = 'submit_score') => {
    return new Promise((resolve, reject) => {
      // Create a hidden form
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'http://kerrygoldnigeria.com/api/quiz-handler.php';
      form.style.display = 'none';
      
      // Add form fields
      const fields = {
        email: email,
        score: score,
        totalQuestions: totalQuestions,
        timestamp: new Date().toISOString(),
        action: action
      };
      
      Object.keys(fields).forEach(key => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = fields[key];
        form.appendChild(input);
      });
      
      // Create hidden iframe for response
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.name = 'response-frame';
      form.target = 'response-frame';
      
      // Handle response
      iframe.onload = () => {
        try {
          document.body.removeChild(form);
          document.body.removeChild(iframe);
          resolve('Success');
        } catch (e) {
          reject(e);
        }
      };
      
      // Submit form
      document.body.appendChild(iframe);
      document.body.appendChild(form);
      form.submit();
    });
  };

  const handleEmailSubmit = async () => {
    if (userEmail.trim() && validateEmail(userEmail)) {
      try {
        // Create user via form submission to avoid CORS
        await submitToServer(userEmail, 0, 0, 'create_user');
        setGameStarted(true);
      } catch (error) {
        console.error('Error creating user:', error);
        setGameStarted(true); // Continue anyway
      }
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleAnswerSelect = (optionId) => {
    if (!showResult) {
      setSelectedAnswer(optionId);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer) {
      const currentQuestion = shuffledQuestions[currentQuestionIndex];
      const isCorrect = currentQuestion.options.find(opt => opt.id === selectedAnswer)?.correct;
      
      if (isCorrect) {
        setScore(score + 1);
      }
      
      setShowResult(true);
      
      // Auto advance after 2 seconds
      setTimeout(() => {
        handleNextQuestion();
      }, 2000);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameCompleted(true);
      // Here you can send the final score to your PHP backend
      submitScoreToDatabase();
    }
  };

  const submitScoreToDatabase = async () => {
    try {
      await submitToServer(userEmail, score, shuffledQuestions.length, 'submit_score');
      console.log('Score submitted successfully');
      
      // Call the parent component's refresh function
      if (onScoreSubmitted) {
        onScoreSubmitted();
      }
    } catch (error) {
      console.error('Error submitting score:', error);
    }
  };

  const resetGame = () => {
    setUserEmail('');
    setGameStarted(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setGameCompleted(false);
    // Shuffle and limit to 10 questions on reset
    const shuffled = shuffleArray(allQuestions);
    setShuffledQuestions(shuffled.slice(0, 10));
  };

  const getOptionStyle = (option) => {
    let baseStyle = "flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer text-center ";
    
    if (showResult) {
      if (option.correct) {
        baseStyle += "bg-green-100 text-green-800 ";
      } else if (selectedAnswer === option.id && !option.correct) {
        baseStyle += "bg-red-100 text-red-800 ";
      } else {
        baseStyle += "bg-gray-100 text-gray-600 cursor-not-allowed ";
      }
    } else {
      if (selectedAnswer === option.id) {
        baseStyle += "bg-green-50 text-green-800 ";
      } else {
        baseStyle += "bg-white text-gray-700 hover:bg-green-50 ";
      }
    }
    
    return baseStyle;
  };

  const getRadioStyle = (option) => {
    let baseStyle = "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 flex-shrink-0 relative ";
    
    if (showResult) {
      if (option.correct) {
        baseStyle += "border-green-500 ";
      } else if (selectedAnswer === option.id && !option.correct) {
        baseStyle += "border-red-500 ";
      } else {
        baseStyle += "border-gray-400 ";
      }
    } else {
      if (selectedAnswer === option.id) {
        baseStyle += "border-green-500 ";
      } else {
        baseStyle += "border-gray-400 ";
      }
    }
    
    return baseStyle;
  };

  const getRadioDotStyle = (option) => {
    let baseStyle = "w-3 h-3 rounded-full transition-all duration-300 ";
    
    if (showResult) {
      if (option.correct) {
        baseStyle += "bg-green-500 ";
      } else if (selectedAnswer === option.id && !option.correct) {
        baseStyle += "bg-red-500 ";
      } else {
        baseStyle += "bg-transparent ";
      }
    } else {
      if (selectedAnswer === option.id) {
        baseStyle += "bg-green-500 ";
      } else {
        baseStyle += "bg-transparent ";
      }
    }
    
    return baseStyle;
  };

  // Email Collection Screen - using your original design style
  if (!gameStarted) {
    return (
      <div className="w-full max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden p-6 md:p-8">
          <div className="text-center mb-8">
            <h1 className="text-xl md:text-2xl tracking-wide text-gray-800">Daily Quiz</h1>
            <p className="text-gray-600 mt-2">Enter your email to start playing</p>
          </div>
          
          <div className="mb-6">
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="w-full px-6 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-center bg-gray-50 text-gray-800"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={handleEmailSubmit}
              disabled={!userEmail.trim() || !validateEmail(userEmail)}
              className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
                userEmail.trim() && validateEmail(userEmail)
                  ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Game Completed Screen - using your original design style
  if (gameCompleted) {
    const percentage = Math.round((score / shuffledQuestions.length) * 100);
    return (
      <div className="w-full max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden p-6 md:p-8">
          <div className="text-center mb-8">
            <h1 className="text-xl md:text-2xl tracking-wide text-gray-800">Quiz Completed!</h1>
          </div>
          
          <div className="mb-4 text-center">
            <div className="text-6xl mb-4">
              {percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '💪'}
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-green-800 font1 leading-relaxed">
              Your Score: {score} out of {shuffledQuestions.length} ({percentage}%)
            </h2>
          </div>

          <div className="mb-4 p-2 rounded-xl text-center">
            <div className="text-green-700">
              <div className="text-lg font-semibold">
                {percentage >= 80 ? "Excellent! You're a Kerrygold expert!" :
                 percentage >= 60 ? "Good job! You know your Kerrygold facts!" :
                 "Keep learning about Kerrygold products!"}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={resetGame}
              className="px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Main Quiz Screen - your original design
  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  
  if (!currentQuestion) return <div>Loading...</div>;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden p-6 md:p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-xl md:text-2xl tracking-wide text-gray-800">Daily Quiz</h1>
        </div>

        {/* Question */}
        <div className="mb-4">
          <h2 className="text-xl md:text-2xl font-semibold text-green-800 font1 leading-relaxed text-center">
            {currentQuestion.question}
          </h2>
        </div>

        {/* Options */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4 justify-center items-center">
          {currentQuestion.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleAnswerSelect(option.id)}
              className={getOptionStyle(option)}
              disabled={showResult}
            >
              <div className={getRadioStyle(option)}>
                <div className={getRadioDotStyle(option)}></div>
              </div>
              <span className="text-lg font-medium">
                {option.id}) {option.text}
              </span>
              {showResult && option.correct && (
                <div className="text-green-600 font-bold text-xl ml-2">✓</div>
              )}
              {showResult && selectedAnswer === option.id && !option.correct && (
                <div className="text-red-600 font-bold text-xl ml-2">✗</div>
              )}
            </button>
          ))}
        </div>

        {/* Result Message */}
        {showResult && (
          <div className="mb-2 p-2 rounded-xl text-center">
            {currentQuestion.options.find(opt => opt.id === selectedAnswer)?.correct ? (
              <div className="text-green-700">
                <div className="text-2xl">🎉</div>
                <div className="text-lg font-semibold">Correct!</div>
              </div>
            ) : (
              <div className="text-red-700">
                <div className="text-2xl">💡</div>
                <div className="text-lg font-semibold">Not quite right!</div>
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {!showResult && (
            <button
              onClick={handleSubmit}
              disabled={!selectedAnswer}
              className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
                selectedAnswer
                  ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Submit Answer
            </button>
          )}
        </div>
      </div>
    </div>
  );
}