import React from 'react';

interface FullScreenOptionProps {
  useFullScreen: boolean;
  setUseFullScreen: (value: boolean) => void;
}

const FullScreenOption: React.FC<FullScreenOptionProps> = ({ useFullScreen, setUseFullScreen }) => {
  return (
    <div>
      <p className="text-2xl font-bold mt-5">Options</p>
      <div className="flex flex-row items-center gap-2">
        <input
          type="checkbox"
          id="full-screen"
          checked={useFullScreen}
          onChange={() => setUseFullScreen(!useFullScreen)}
        />
        <label htmlFor="full-screen" className="cursor-pointer">
          Go Full Screen when practicing
        </label>
      </div>
    </div>
  );
};

export default FullScreenOption;