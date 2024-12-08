export type Tattva = 'prithvi' | 'apas' | 'tejas' | 'vayu' | 'akash';

export interface TattvaData {
  type: Tattva;
  name: string;
  fillColor: string;
  bgColor: string;
}

export const tattvas: TattvaData[] = [
  {
    type: 'prithvi',
    name: 'Prithvi/Earth',
    fillColor: '#FFFF00',
    bgColor: 'bg-[#81017E]'
  },
  {
    type: 'apas',
    name: 'Apas/Water',
    fillColor: '#C1C1C1',
    bgColor: 'bg-[#000000]'
  },
  {
    type: 'tejas',
    name: 'Tejas/Fire',
    fillColor: '#FE0000',
    bgColor: 'bg-[#00FF01]'
  },
  {
    type: 'vayu',
    name: 'Vayu/Air',
    fillColor: '#3064FF',
    bgColor: 'bg-[#FE0000]'
  },
  {
    type: 'akash',
    name: 'Akasha/Ether',
    fillColor: '#000000',
    bgColor: 'bg-[#FFFFFF]'
  }
];