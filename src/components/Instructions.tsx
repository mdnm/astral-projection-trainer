import React from 'react';

interface InstructionsProps {
  showOnTopRight?: boolean;
  hasStarted?: boolean;
}

const Instructions: React.FC<InstructionsProps> = ({ showOnTopRight = false, hasStarted = false }) => {
  return (
    <div className={showOnTopRight ? "absolute top-10 right-10 bg-white rounded-lg px-3 py-2 md:p-3 flex flex-col items-center gap-2" : "flex flex-col items-center gap-2"}>
      {!hasStarted && (
        <>
          <a href="https://x.com/matmoura19/status/1835312422787100954" className="text-blue-500 underline">How to use this</a>
          <p>Press <kbd>Space</kbd> or tap to hide/show the symbol.</p>
          <p>Press <kbd>Q</kbd> or press on the X button to exit the meditation.</p>
        </>
      )}
      {hasStarted && (
        <>
          <button className="text-black" onClick={() => window.location.reload()}>X</button>
        </>
      )}
    </div>
  );
};

export default Instructions;