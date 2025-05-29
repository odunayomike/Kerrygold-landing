import { useState } from 'react';

export default function DailyQuiz() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  
  const question = "What essential mineral in milk helps build strong bones?";
  const options = [
    { id: 'A', text: 'Iron', correct: false },
    { id: 'B', text: 'Calcium', correct: true },
    { id: 'C', text: 'Zinc', correct: false }
  ];

  const handleAnswerSelect = (optionId) => {
    if (!showResult) {
      setSelectedAnswer(optionId);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer) {
      setShowResult(true);
    }
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

  return (
   
      <div className="w-full max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden p-6 md:p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-xl md:text-2xl tracking-wide text-gray-800">Daily Quiz</h1>
          </div>

          {/* Question */}
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed text-center">
              {question}
            </h2>
          </div>

          {/* Options */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4 justify-center items-center">
            {options.map((option) => (
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
              {selectedAnswer === 'B' ? (
                <div className="text-green-700 ">
                  <div className="text-2xl">🎉</div>
                  <div className="text-lg font-semibold">Correct!</div>
                  {/* <div className="text-sm mt-1">Calcium is essential for building and maintaining strong bones and teeth.</div> */}
                </div>
              ) : (
                <div className="text-red-700 ">
                  <div className="text-2xl">💡</div>
                  <div className="text-lg font-semibold">Not quite right!</div>
                  {/* <div className="text-sm mt-1">The correct answer is Calcium. It's the primary mineral that helps build and maintain strong bones.</div> */}
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