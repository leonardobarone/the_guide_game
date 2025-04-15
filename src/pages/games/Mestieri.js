import { useState, useRef, useEffect } from "react";

const pairs = [
  { name: "Antonio", job: "Impiegato" },
  { name: "Giuseppe", job: "Cameriere" },
  { name: "Leonardo", job: "Programmatore" },
  { name: "Marco", job: "Avvocato" },
  { name: "Francesca", job: "Medico" },
  // Aggiungi altre coppie qui
];

const names = pairs.map(p => p.name);
const jobs = pairs.map(p => p.job);

export default function Mestieri() {
  const [userMatches, setUserMatches] = useState([]);
  const [selectedName, setSelectedName] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const nameRefs = useRef({});
  const jobRefs = useRef({});
  const svgRef = useRef();

  // Gestire i match
  const handleMatch = (name, job) => {
    const alreadyMatched = userMatches.some((m) => m.name === name || m.job === job);
    if (!alreadyMatched) {
      setUserMatches([...userMatches, { name, job }]);
    }
  };

  // Rimuovere un match specifico
  const handleRemoveMatch = (name, job) => {
    setUserMatches((prev) =>
      prev.filter((match) => !(match.name === name && match.job === job))
    );
  };

  // Posizioni delle linee tra match
  const getLinePositions = () => {
    return userMatches.map(({ name, job }) => {
      const nameEl = nameRefs.current[name];
      const jobEl = jobRefs.current[job];

      if (nameEl && jobEl) {
        const start = nameEl.getBoundingClientRect();
        const end = jobEl.getBoundingClientRect();
        const svgBox = svgRef.current.getBoundingClientRect();

        return {
          x1: start.right - svgBox.left,
          y1: start.top + start.height / 2 - svgBox.top,
          x2: end.left - svgBox.left,
          y2: end.top + end.height / 2 - svgBox.top,
        };
      }
      return null;
    }).filter(Boolean);
  };

  const [lines, setLines] = useState([]);
  useEffect(() => {
    const handleResize = () => setLines(getLinePositions());
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [userMatches]);

  useEffect(() => {
    setLines(getLinePositions());
  }, [userMatches]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* svg per le linee */}
      <svg
        ref={svgRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
        {lines.map((line, i) => (
          <line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="gold"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
      </svg>

      {/* Colonne con i nomi e le professioni */}
      <div className="grid grid-cols-2 gap-20">
        <div>
          <h2 className="font-bold mb-2">Nomi</h2>
          {names.map((name) => (
            <div
              key={name}
              ref={(el) => (nameRefs.current[name] = el)}
              onClick={() => setSelectedName(name)}
              className={`cursor-pointer p-2 rounded my-1 ${
                selectedName === name ? "bg-blue-300" : "bg-gray-200"
              }`}
            >
              {name}
            </div>
          ))}
        </div>
        <div>
          <h2 className="font-bold mb-2">Professioni</h2>
          {jobs.map((job) => (
            <div
              key={job}
              ref={(el) => (jobRefs.current[job] = el)}
              onClick={() => {
                if (selectedName) {
                  handleMatch(selectedName, job);
                  setSelectedName(null);
                }
              }}
              className="cursor-pointer p-2 rounded my-1 bg-gray-200"
            >
              {job}
            </div>
          ))}
        </div>
      </div>

      {/* Visualizzazione dei match */}
      <div className="mt-4">
        <h3 className="font-bold">Match effettuati:</h3>
        {userMatches.map(({ name, job }) => (
          <div
            key={name + job}
            className="flex justify-between items-center py-1"
          >
            <div>{name} → {job}</div>
            <button
              onClick={() => handleRemoveMatch(name, job)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Rimuovi
            </button>
          </div>
        ))}
      </div>

      {/* Bottone Undo */}
      <button onClick={() => setUserMatches([])} className="mt-4 bg-red-200 px-4 py-2 rounded">
        Annulla tutti i match
      </button>

      {/* Bottone per mostrare i risultati */}
      <button onClick={() => setShowResults(true)} className="mt-4 bg-blue-200 px-4 py-2 rounded">
        Conferma
      </button>

      {/* Risultati finali */}
      {showResults && (
        <div className="mt-4">
          <h2>Risultati</h2>
          {userMatches.map(({ name, job }) => {
            const isCorrect = pairs.some(p => p.name === name && p.job === job);
            return (
              <div key={name} className={isCorrect ? 'text-green-500' : 'text-red-500'}>
                {name} → {job} {isCorrect ? '✅' : '❌'}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
