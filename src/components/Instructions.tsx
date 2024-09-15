import React from 'react';

interface InstructionsProps {
  showOnTopRight?: boolean;
}

const Instructions: React.FC<InstructionsProps> = ({ showOnTopRight = false }) => {
  return (
    <div className={showOnTopRight ? "absolute top-10 right-10 bg-white rounded-lg p-3" : ""}>
      <a href="https://x.com/matmoura19/status/1835312422787100954" className="text-blue-500 underline mb-1">How to use this</a>
      <p className="mb-1">Press <kbd>Space</kbd> to hide/show the tattva/tatwa.</p>
      <p>Press <kbd>Q</kbd> to exit the meditation.</p>
    </div>
  );
};

export default Instructions;