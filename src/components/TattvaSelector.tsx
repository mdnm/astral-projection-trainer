import React from 'react';
import { TattvaData } from '../data/tattvas';
import { tattvaToSvg } from './TattvaRenderer';

interface TattvaSelectorProps {
  title: string;
  tattvas: TattvaData[];
  onSelect: (tattva: TattvaData) => void;
  size: 'small' | 'large';
}

const TattvaSelector: React.FC<TattvaSelectorProps> = ({ title, tattvas, onSelect, size }) => {
  const buttonSize = size === 'large' ? 'w-[200px] h-[200px]' : 'w-[100px] h-[100px]';

  return (
    <>
      <p className="text-2xl font-bold mb-5">{title}</p>
      <div className={`flex space-x-4 ${size === 'large' ? 'mb-4' : ''}`}>
        {tattvas.map((tattva) => (
          <button
            key={tattva.id}
            className={`${buttonSize} flex flex-col gap-5 items-center`}
            onClick={() => onSelect(tattva)}
          >
            {tattvaToSvg({
              type: tattva.type,
              fillColor: tattva.fillColor,
              className: "mt-auto"
            })}
            <p className="text-center mt-auto">{tattva.name}</p>
          </button>
        ))}
      </div>
    </>
  );
};

export default TattvaSelector;