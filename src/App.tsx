import { useCallback, useEffect, useState } from 'react';
import FullScreenOption from './components/FullScreenOption';
import Instructions from './components/Instructions';
import { tattvaToSvg } from './components/TattvaRenderer';
import TattvaSelector from './components/TattvaSelector';
import { TattvaData, tattvas } from './data/tattvas';

const App = () => {
  const [selectedTattva, setSelectedTattva] = useState<TattvaData | null>(null);
  const [selectedSubTattva, setSelectedSubTattva] = useState<TattvaData | null>(null);
  const [hideTattva, setHideTattva] = useState(false);
  const [useFullScreen, setUseFullScreen] = useState(false);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.code === 'Space') {
      setHideTattva(!hideTattva);
    } else if (event.code === 'KeyQ') {
      resetMeditation();
    }
  }, [hideTattva]);

  const resetMeditation = () => {
    setSelectedTattva(null);
    setSelectedSubTattva(null);
    setHideTattva(false);
    document.exitFullscreen();
    document.documentElement.style.cursor = 'auto';
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [hideTattva, handleKeyPress]);

  useEffect(() => {
    if (useFullScreen && selectedTattva && selectedSubTattva) {
      document.documentElement.requestFullscreen();
      document.documentElement.style.cursor = 'none';
    }
  }, [selectedTattva, selectedSubTattva, useFullScreen]);

  return (
    <div className={`min-h-screen flex flex-col gap-5 items-center justify-center ${selectedTattva && selectedSubTattva ? selectedTattva.bgColor : 'bg-white'}`}>
      {(selectedTattva && selectedSubTattva) && (
        <Instructions showOnTopRight />
      )}

      {(!selectedTattva || !selectedSubTattva) && (
        <div>
          <h1 className="text-3xl font-bold mb-1">Tattva/Tatwa Meditation</h1>
          <Instructions />
          <FullScreenOption useFullScreen={useFullScreen} setUseFullScreen={setUseFullScreen} />
        </div>
      )}

      {!selectedTattva && (
        <TattvaSelector
          title="Select a Tattva/Tatwa"
          tattvas={tattvas}
          onSelect={setSelectedTattva}
          size="large"
        />
      )}

      {selectedTattva && !selectedSubTattva && (
        <>
          <div className="w-[200px] h-[200px] flex flex-col gap-5 items-center mb-5">
            {tattvaToSvg({
              type: selectedTattva.type,
              fillColor: selectedTattva.fillColor,
              className: "mt-auto"
            })}
            <p className="text-center mt-auto">{selectedTattva.name}</p>
          </div>
          <TattvaSelector
            title="Select a Sub Tattva/Tatwa or continue with only the main one"
            tattvas={tattvas}
            onSelect={setSelectedSubTattva}
            size="small"
          />
        </>
      )}

      {selectedTattva && selectedSubTattva && !hideTattva && (
        <div className="flex items-center justify-center w-[300px] h-[300px] relative">
          {tattvaToSvg({
            type: selectedTattva.type,
            fillColor: selectedTattva.fillColor,
            subType: selectedSubTattva.type,
            subFillColor: selectedSubTattva.fillColor,
          })}
        </div>
      )}
    </div>
  );
};

export default App;