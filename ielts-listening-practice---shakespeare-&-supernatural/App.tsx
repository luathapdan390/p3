
import React, { useState, useCallback, useMemo } from 'react';
import { QUESTIONS, TRANSCRIPT, MATCHING_OPTIONS } from './constants';
import { AnswersState, QuestionType } from './types';

const App: React.FC = () => {
  const [answers, setAnswers] = useState<AnswersState>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  const handleSelect = (questionId: number, answerId: string) => {
    if (isSubmitted) return;
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerId
    }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < QUESTIONS.length) {
      alert('Vui lòng hoàn thành tất cả các câu hỏi trước khi nộp bài!');
      return;
    }
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const score = useMemo(() => {
    const correctCount = QUESTIONS.reduce((acc, q) => {
      return acc + (answers[q.id] === q.correctAnswer ? 1 : 0);
    }, 0);
    return ((10 * correctCount) / QUESTIONS.length).toFixed(1);
  }, [answers]);

  const resetQuiz = () => {
    setAnswers({});
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen py-8 px-4 md:px-8 max-w-4xl mx-auto">
      <header className="mb-8 text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-900">
          IELTS Listening Part 3
        </h1>
        <p className="text-slate-600 italic">Literature students and their lecturer discussion</p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="px-6 py-2 bg-white border-2 border-indigo-600 text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition-colors shadow-sm"
          >
            {showTranscript ? "Ẩn Transcript" : "Xem Transcript"}
          </button>
          {isSubmitted && (
            <button
              onClick={resetQuiz}
              className="px-6 py-2 bg-slate-100 border-2 border-slate-300 text-slate-600 font-semibold rounded-full hover:bg-slate-200 transition-colors shadow-sm"
            >
              Làm lại
            </button>
          )}
        </div>
      </header>

      {showTranscript && (
        <div className="mb-8 bg-white p-6 rounded-xl border border-indigo-100 shadow-md animate-in slide-in-from-top duration-300 overflow-y-auto max-h-[60vh]">
          <h2 className="text-xl font-bold mb-4 text-indigo-800 sticky top-0 bg-white pb-2 border-b border-indigo-100">Transcript</h2>
          <pre className="whitespace-pre-wrap font-sans text-slate-700 leading-relaxed text-sm md:text-base">
            {TRANSCRIPT}
          </pre>
        </div>
      )}

      {isSubmitted && (
        <div className="mb-8 p-6 bg-indigo-600 text-white rounded-xl shadow-lg text-center transform transition-all animate-bounce-short">
          <h2 className="text-2xl font-bold">Kết quả bài làm</h2>
          <div className="text-5xl font-black mt-2">{score} / 10</div>
          <p className="mt-2 opacity-90">
            Số câu đúng: {QUESTIONS.filter(q => answers[q.id] === q.correctAnswer).length} / {QUESTIONS.length}
          </p>
        </div>
      )}

      <div className="space-y-12">
        {/* SECTION 1: 21-25 */}
        <section>
          <div className="mb-6 pb-2 border-b-2 border-indigo-200">
            <h2 className="text-xl font-bold text-indigo-900">Questions 21-25</h2>
            <p className="text-sm text-slate-500">Choose the correct letter, A, B or C.</p>
          </div>
          <div className="grid gap-6">
            {QUESTIONS.filter(q => q.type === QuestionType.MULTIPLE_CHOICE).map(q => (
              <QuestionCard 
                key={q.id} 
                question={q} 
                selectedAnswer={answers[q.id]} 
                isSubmitted={isSubmitted} 
                onSelect={(ans) => handleSelect(q.id, ans)} 
              />
            ))}
          </div>
        </section>

        {/* SECTION 2: 26-30 */}
        <section>
          <div className="mb-6 pb-2 border-b-2 border-indigo-200">
            <h2 className="text-xl font-bold text-indigo-900">Questions 26-30</h2>
            <p className="text-sm text-slate-500">What does Julie say about the following subjects?</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-3 p-3 bg-indigo-50 rounded-lg text-sm border border-indigo-100">
               {MATCHING_OPTIONS.map(opt => (
                 <div key={opt.id} className="font-semibold text-indigo-800">
                   {opt.id}: {opt.text}
                 </div>
               ))}
            </div>
          </div>
          <div className="grid gap-6">
            {QUESTIONS.filter(q => q.type === QuestionType.MATCHING).map(q => (
              <MatchingQuestion 
                key={q.id} 
                question={q} 
                selectedAnswer={answers[q.id]} 
                isSubmitted={isSubmitted} 
                onSelect={(ans) => handleSelect(q.id, ans)} 
              />
            ))}
          </div>
        </section>
      </div>

      {!isSubmitted && (
        <div className="mt-12 sticky bottom-8 flex justify-center">
          <button
            onClick={handleSubmit}
            className="px-12 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xl rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95"
          >
            Nộp bài
          </button>
        </div>
      )}
      
      <footer className="mt-20 text-center text-slate-400 text-sm pb-8">
        Designed for IELTS Academic Listening Practice
      </footer>
    </div>
  );
};

interface QuestionCardProps {
  question: any;
  selectedAnswer: string | undefined;
  isSubmitted: boolean;
  onSelect: (ans: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, selectedAnswer, isSubmitted, onSelect }) => {
  return (
    <div className={`p-5 rounded-2xl bg-white shadow-sm border-2 transition-all ${
      isSubmitted 
        ? selectedAnswer === question.correctAnswer 
          ? 'border-emerald-400 bg-emerald-50' 
          : 'border-rose-400 bg-rose-50'
        : 'border-transparent hover:border-indigo-100'
    }`}>
      <div className="flex items-start gap-4 mb-4">
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm">
          {question.id}
        </span>
        <h3 className="text-lg font-semibold text-slate-800 leading-tight">
          {question.text}
        </h3>
      </div>
      
      <div className="grid gap-3 ml-12">
        {question.options?.map((opt: any) => {
          const isSelected = selectedAnswer === opt.id;
          const isCorrect = isSubmitted && opt.id === question.correctAnswer;
          const isWrongSelection = isSubmitted && isSelected && opt.id !== question.correctAnswer;
          
          let btnClass = "text-left p-3 rounded-xl border-2 transition-all ";
          if (isSelected) {
            btnClass += isSubmitted 
              ? isCorrect ? "bg-emerald-200 border-emerald-500 " : "bg-rose-200 border-rose-500 "
              : "bg-indigo-100 border-indigo-600 ";
          } else {
            btnClass += "bg-slate-50 border-slate-200 hover:border-indigo-300 ";
          }

          return (
            <button
              key={opt.id}
              onClick={() => onSelect(opt.id)}
              disabled={isSubmitted}
              className={btnClass}
            >
              <span className="font-bold mr-2 text-indigo-600">{opt.id}.</span>
              <span className="text-slate-700">{opt.text}</span>
              {isSubmitted && isSelected && (
                <span className="ml-2 font-bold">
                  {isCorrect ? " ✓ Đúng" : " ✗ Sai"}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const MatchingQuestion: React.FC<QuestionCardProps> = ({ question, selectedAnswer, isSubmitted, onSelect }) => {
  return (
    <div className={`p-5 rounded-2xl bg-white shadow-sm border-2 transition-all ${
      isSubmitted 
        ? selectedAnswer === question.correctAnswer 
          ? 'border-emerald-400 bg-emerald-50' 
          : 'border-rose-400 bg-rose-50'
        : 'border-transparent hover:border-indigo-100'
    }`}>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm">
            {question.id}
          </span>
          <h3 className="text-lg font-semibold text-slate-800">
            {question.text}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          {['A', 'B', 'C'].map(choiceId => {
            const isSelected = selectedAnswer === choiceId;
            const isCorrectChoice = isSubmitted && choiceId === question.correctAnswer;
            
            let circleClass = "w-10 h-10 rounded-full flex items-center justify-center border-2 font-bold transition-all ";
            if (isSelected) {
              circleClass += isSubmitted 
                ? isCorrectChoice ? "bg-emerald-500 border-emerald-600 text-white " : "bg-rose-500 border-rose-600 text-white "
                : "bg-indigo-600 border-indigo-700 text-white shadow-md ";
            } else {
              circleClass += "bg-white border-slate-300 text-slate-400 hover:border-indigo-400 hover:text-indigo-400 ";
            }

            return (
              <button
                key={choiceId}
                onClick={() => onSelect(choiceId)}
                disabled={isSubmitted}
                className={circleClass}
                title={MATCHING_OPTIONS.find(o => o.id === choiceId)?.text}
              >
                {choiceId}
              </button>
            );
          })}
          
          {isSubmitted && (
            <div className="ml-4 flex items-center gap-2">
               <span className={`px-3 py-1 rounded-full text-sm font-bold ${selectedAnswer === question.correctAnswer ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                 {selectedAnswer === question.correctAnswer ? 'Đúng' : 'Sai'}
               </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
