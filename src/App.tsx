import { useCallback, useEffect, useState } from 'react';
import FullScreenOption from './components/FullScreenOption';
import Instructions from './components/Instructions';
import { tattvaToSvg } from './components/TattvaRenderer';
import TattvaSelector from './components/TattvaSelector';
import { Deck, MajorArcana, TarotData } from './data/tarot';
import { TattvaData, tattvas } from './data/tattvas';

const TattvaSection = ({
  selectedMainSymbol,
  selectedSecondarySymbol,
  setSelectedMainSymbol,
  setSelectedSecondarySymbol,
  hideSymbol,
  setHideSymbol,
}: {
  selectedMainSymbol: TattvaData | null;
  selectedSecondarySymbol: TattvaData | null;
  setSelectedMainSymbol: (tattva: TattvaData) => void;
  setSelectedSecondarySymbol: (tattva: TattvaData) => void;
  hideSymbol: boolean;
  setHideSymbol: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      {!selectedMainSymbol && (
        <TattvaSelector
          title="Select a Tattva/Tatwa"
          tattvas={tattvas}
          onSelect={setSelectedMainSymbol}
          size="large"
        />
      )}
    
      {selectedMainSymbol && !selectedSecondarySymbol && (
        <>
          <div className="w-[200px] h-[200px] flex flex-col gap-5 items-center mb-5">
            {tattvaToSvg({
              type: selectedMainSymbol.type,
              fillColor: selectedMainSymbol.fillColor,
              className: "mt-auto"
            })}
            <p className="text-center mt-auto">{selectedMainSymbol.name}</p>
          </div>
          <TattvaSelector
            title="Select a Sub Tattva/Tatwa or continue with only the main one"
            tattvas={tattvas}
            onSelect={setSelectedSecondarySymbol}
            size="small"
          />
        </>
      )}

      {selectedMainSymbol && selectedSecondarySymbol && (
        <button className="w-full md:w-[300px] h-[300px]" onClick={() => setHideSymbol(prev => !prev)}>
          {!hideSymbol && (
            tattvaToSvg({
              type: selectedMainSymbol.type,
              fillColor: selectedMainSymbol.fillColor,
              subType: selectedSecondarySymbol.type,
              subFillColor: selectedSecondarySymbol.fillColor,
              className: "max-w-[260px] md:max-w-[400px] object-cover"
            })
          )}
        </button>
      )}
    </> 
  )       
}

const TarotSection = ({
  selectedMainSymbol,
  setSelectedMainSymbol,
  hideSymbol,
  setHideSymbol
}: {
  selectedMainSymbol: TarotData | null;
  setSelectedMainSymbol: (tarot: TarotData) => void;
  hideSymbol: boolean;
  setHideSymbol: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [selectedDeck, setSelectedDeck] = useState<Deck>('papus_pt');
  const majorArcana: MajorArcana[] = ['01_the_magician', '02_the_high_priestess', '03_the_empress', '04_the_emperor', '05_the_hierophant', '06_the_lover', '07_the_chariot', '08_justice', '09_the_hermit', '10_the_wheel_of_fortune', '11_strength', '12_the_hanged_man', '13_death',
    '14_temperance', '15_the_devil', '16_the_house_of_god', '17_the_star', '18_the_moon', '19_the_sun', '20_judgement', '21_the_fool', '22_the_world'];

  return (
    <>
      {!selectedMainSymbol && (
        <div className='flex flex-col items-center'>
          <div className="mb-4 py-2 px-3 rounded-md flex flex-col gap-3 items-center">
            <button
              className={`py-2 px-3 rounded-md ${selectedDeck === 'papus_pt' ? 'bg-slate-100' : 'bg-white border border-gray-300'}`}
              onClick={() => setSelectedDeck('papus_pt')}
            >
              Papus Kaabalistic
            </button>
            <button
              className={`py-2 px-3 rounded-md ${selectedDeck === 'papus' ? 'bg-slate-100' : 'bg-white border border-gray-300'}`}
              onClick={() => setSelectedDeck('papus')}
            >
              Papus Divinatory
            </button>
            <button
              className={`py-2 px-3 rounded-md ${selectedDeck === 'mythic' ? 'bg-slate-100' : 'bg-white border border-gray-300'}`}
              onClick={() => setSelectedDeck('mythic')}
            >
              Mythic Tarot
            </button>
          </div>
          <p className="text-2xl font-bold mb-5">Select a Tarot Card</p>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 mb-4">
            {majorArcana.map((name) => (
                  <button
                    key={name}
                    className="flex flex-col gap-5 items-center border border-gray-300 rounded-md p-2"
                    onClick={() => setSelectedMainSymbol({ deck: selectedDeck, name: name as MajorArcana, bgColor: selectedDeck === 'papus_pt' ? 'bg-black' : 'bg-white' })}
                  >
                    <img src={`https://kaabalah-app.s3.amazonaws.com/tarot/${selectedDeck}/major/${name}.${selectedDeck === 'papus_pt' ? 'png' : 'jpg'}`} alt={name} className="max-w-[250px] object-cover" />
                  </button>
                ))
            }
          </div>
        </div>
      )}

      {selectedMainSymbol && (
        <button className="flex items-center justify-center w-full h-[300px] md:w-[500px] md:h-[500px] relative" onClick={() => setHideSymbol(prev => !prev)}>
          {!hideSymbol && (
            <img src={`https://kaabalah-app.s3.amazonaws.com/tarot/${selectedMainSymbol.deck}/major/${selectedMainSymbol.name}.${selectedMainSymbol.deck === 'papus_pt' ? 'png' : 'jpg'}`} alt={selectedMainSymbol.name} className="max-w-[260px] md:max-w-[400px] object-cover" />
          )}
        </button>
      )}
    </>
  );
}

const App = () => {
  const [symbolType, setSymbolType] = useState<'tattva' | 'tarot'>('tattva');
  const [selectedMainSymbol, setSelectedMainSymbol] = useState<TattvaData | TarotData | null>(null);
  const [selectedSecondarySymbol, setSelectedSecondarySymbol] = useState<TattvaData | null>(null);
  const [hideSymbol, setHideSymbol] = useState(false);
  const [useFullScreen, setUseFullScreen] = useState(false);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.code === 'Space') {
      setHideSymbol(!hideSymbol);
      document.querySelector('body')?.blur();
    } else if (event.code === 'KeyQ') {
      resetMeditation();
    }
  }, [hideSymbol]);

  const resetMeditation = () => {
    setSelectedMainSymbol(null);
    setSelectedSecondarySymbol(null);
    setHideSymbol(false);
    document.exitFullscreen();
    document.documentElement.style.cursor = 'auto';
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [hideSymbol, handleKeyPress]);

  useEffect(() => {
    if (useFullScreen && selectedMainSymbol && selectedSecondarySymbol) {
      document.documentElement.requestFullscreen();
      document.documentElement.style.cursor = 'none';
    }
  }, [selectedMainSymbol, selectedSecondarySymbol, useFullScreen]);

  const handleStopPractice = () => {
    setSelectedMainSymbol(null);
    setSelectedSecondarySymbol(null);
    setHideSymbol(false);
    setUseFullScreen(false);

    if (useFullScreen) {
      document.exitFullscreen();
      document.documentElement.style.cursor = 'auto';
    }
  }

  return (
    <div className={`min-h-screen flex flex-col gap-5 items-center justify-center ${(symbolType === 'tattva' && selectedMainSymbol && selectedSecondarySymbol) || (symbolType === 'tarot' && selectedMainSymbol) ? selectedMainSymbol.bgColor : 'bg-white'}`}>
      {(symbolType === 'tattva' && (selectedMainSymbol && selectedSecondarySymbol) || (symbolType === 'tarot' && selectedMainSymbol)) && (
        <Instructions showOnTopRight hasStarted handleStopPractice={handleStopPractice} />
      )}

      {((symbolType === 'tattva' && (!selectedMainSymbol || !selectedSecondarySymbol)) || (symbolType === 'tarot' && !selectedMainSymbol)) && (
        <div className="flex flex-col gap-3 items-center text-center pt-10 px-3">
          <h1 className="text-3xl font-bold mb-1">Third Eye Meditation</h1>
          <Instructions />
          <FullScreenOption useFullScreen={useFullScreen} setUseFullScreen={setUseFullScreen} />
          <p className="mb-3">
            All rights of the tarot decks belong to<br />
            Papus Kaabalistic: <a className="text-blue-500 underline" target="_blank" href="https://www.amazon.com.br/dp/853152217X">Pensamento</a><br/>
            Papus Divinatory: <a className="text-blue-500 underline" target="_blank" href="https://www.etsy.com/shop/RinascimentoItalian">RINASCIMENTO ITALIAN / Giordano Berti</a><br/>
            Mythic: <a className="text-blue-500 underline" target="_blank" href="https://themythictarot.com/">Juliet Sharman-Burke</a>
          </p>
          <div className="mb-1 py-2 px-3 rounded-md flex flex-col gap-3 items-center">
            <button
              className={`py-2 px-3 rounded-md ${symbolType === 'tattva' ? 'bg-slate-100' : 'bg-white border border-gray-300'}`}
              onClick={() => setSymbolType('tattva')}
            >
              Tattva/Tatwa
            </button>
            <button
              className={`py-2 px-3 rounded-md ${symbolType === 'tarot' ? 'bg-slate-100' : 'bg-white border border-gray-300'}`}
              onClick={() => setSymbolType('tarot')}
            >
              Tarot
            </button>
          </div>
        </div>
      )}

      {symbolType === 'tattva' && (
        <TattvaSection
          selectedMainSymbol={selectedMainSymbol as TattvaData}
          selectedSecondarySymbol={selectedSecondarySymbol}
          setSelectedMainSymbol={setSelectedMainSymbol}
          setSelectedSecondarySymbol={setSelectedSecondarySymbol}
          hideSymbol={hideSymbol}
          setHideSymbol={setHideSymbol}
        />
      )}

      {symbolType === 'tarot' && (
        <TarotSection
          selectedMainSymbol={selectedMainSymbol as TarotData}
          setSelectedMainSymbol={setSelectedMainSymbol}
          hideSymbol={hideSymbol}
          setHideSymbol={setHideSymbol}
        />
      )}
    </div>
  );
};

export default App;