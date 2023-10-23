export default interface IPet {
  rescue_date?: Date;
  name?: string;
  age?: number;
  gender?: number;
  specie?: number;
  breed?: string;
  weight?: number;
  weight_date?: Date;
  feed_month?: number;
  type_feed?: number;
  character?: string;
  castrated?: string;
  vac_v8_dose1?: Date;
  vac_v8_dose2?: Date;
  vac_v8_dose3?: Date;
  vac_v8_next_dose?: Date;
  vac_antirage?: Date;
  vac_antirage_next_dose?: Date;
  vermifuge_dose1?: Date;
  vermifuge_dose2?: Date;
  vermifuge_dose3?: Date;
  vermifuge_next_dose?: Date;
  antiparasitic_dose?: Date;
  antiparasitic_next_dose?: Date;
  diseases?: string;
}
