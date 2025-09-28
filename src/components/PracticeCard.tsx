import React, { useState } from 'react';

interface PracticeCardProps {
  title: string;
  description: string;
  initialCode: string;
  expectedOutput?: string;
  hint?: string;
  solution?: string;
}

const PracticeCard: React.FC<PracticeCardProps> = ({
  title,
  description,
  initialCode,
  expectedOutput,
  hint,
  solution
}) => {
  const [userCode, setUserCode] = useState(initialCode);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const runCode = () => {
    console.log('Running code:', userCode);
    alert('Code çalıştırıldı! Console\'u kontrol edin.');
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm border-2 border-secondary-light rounded-2xl p-6 mb-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-">{title}</h3>
        <div className="flex space-x-2">
          <button
            onClick={runCode}
            className="bg-secondary-dark hover:bg-secondary-light text-white px-4 py-2 rounded-lg text-sm transition-colors duration-200"
          >
            ▶️ Çalıştır
          </button>
          {hint && (
            <button
              onClick={() => setShowHint(!showHint)}
              className="bg- hover:bg-secondary text- px-4 py-2 rounded-lg text-sm transition-colors duration-200"
            >
              💡 İpucu
            </button>
          )}
          {solution && (
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="bg-secondary-light hover:bg-secondary-dark text-white px-4 py-2 rounded-lg text-sm transition-colors duration-200"
            >
              {showSolution ? '👁️ Gizle' : '👁️ Çözüm'}
            </button>
          )}
        </div>
      </div>

      <p className="text-secondary-dark mb-4">{description}</p>

      {expectedOutput && (
        <div className="bg-/20 border border- rounded-lg p-3 mb-4">
          <h4 className="font-semibold text- mb-2">Beklenen Çıktı:</h4>
          <p className="text-secondary-dark text-sm">{expectedOutput}</p>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text- mb-2">
            Kodunuzu buraya yazın:
          </label>
          <textarea
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            className="w-full h-32 bg-black/50 text-white p-4 rounded-lg font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-secondary-dark"
            placeholder="Kodunuzu buraya yazın..."
          />
        </div>

        {showHint && hint && (
          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-800 mb-2">💡 İpucu:</h4>
            <p className="text-yellow-700 text-sm">{hint}</p>
          </div>
        )}

        {showSolution && solution && (
          <div className="bg-green-100 border border-green-300 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">✅ Çözüm:</h4>
            <pre className="text-green-700 text-sm whitespace-pre-wrap">{solution}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeCard;
