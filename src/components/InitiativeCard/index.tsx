import React from 'react';

export interface InitiativeCardProps {
  name: string;
  initiative: number;
  ac: number;
  hp: number;
  status?: string;
}

const InitiativeCard: React.FC<InitiativeCardProps> = ({
  name,
  initiative,
  ac,
  hp,
  status = 'Healthy',
}) => {
  return (
    <div className="max-w-xs p-4 bg-white shadow-lg rounded-2xl">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <div className="flex justify-between mb-2">
        <span className="font-semibold">Init:</span>
        <span>{initiative}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="font-semibold">AC:</span>
        <span>{ac}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="font-semibold">HP:</span>
        <span>{hp}</span>
      </div>
      <div className="mt-3 inline-block px-2 py-1 text-sm bg-gray-200 rounded-full">
        {status}
      </div>
    </div>
  );
};

export default InitiativeCard;
