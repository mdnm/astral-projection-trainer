export type Deck = "papus" | "papus_pt" | "mythic"

export type MajorArcana = "01_the_magician" | "02_the_high_priestess" | "03_the_empress" | "04_the_emperor" | "05_the_hierophant" | "06_the_lover" | "07_the_chariot" | "08_justice" | "09_the_hermit" | "10_the_wheel_of_fortune" | "11_strength" | "12_the_hanged_man" | "13_death" | "14_temperance" | "15_the_devil" | "16_the_house_of_god" | "17_the_star" | "18_the_moon" | "19_the_sun" | "20_judgement" | "21_the_fool" | "22_the_world";

export interface TarotData {
  deck: Deck;
  name: MajorArcana;
  bgColor: string;
}