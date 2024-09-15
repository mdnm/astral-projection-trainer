export type Tattva = 'prithvi' | 'apas' | 'tejas' | 'vayu' | 'akash';

export interface TattvaData {
  id: number;
  type: Tattva;
  name: string;
  fillColor: string;
  bgColor: string;
}

export const tattvas: TattvaData[] = [
  {
    id: 1,
    type: 'prithvi',
    name: 'Prithvi/Earth',
    fillColor: '#FFFF00',
    bgColor: 'bg-[#81017E]'
  },
  {
    id: 2,
    type: 'apas',
    name: 'Apas/Water',
    fillColor: '#C1C1C1',
    bgColor: 'bg-[#000000]'
  },
  {
    id: 3,
    type: 'tejas',
    name: 'Tejas/Fire',
    fillColor: '#FE0000',
    bgColor: 'bg-[#00FF01]'
  },
  {
    id: 4,
    type: 'vayu',
    name: 'Vayu/Air',
    fillColor: '#3064FF',
    bgColor: 'bg-[#FE0000]'
  },
  {
    id: 5,
    type: 'akash',
    name: 'Akasha/Ether',
    fillColor: '#000000',
    bgColor: 'bg-[#FFFFFF]'
  }
];