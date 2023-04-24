import { IPropertyPaneDropdownOption } from "@microsoft/sp-property-pane";


export interface IFPSImageWPStyles {
  layout?: IFPSImageLayout;
  titlePos?: IFPSImageTitlePos; // Default === Bottom
  titleWid?: number; // Default 150px
  imgHeight: number;
  imageOverlap: number;

  topAdj?: number; // Needed to provide padding when rotating
  rotateMax?: number;
  topMax?: number;
  rotateArrayStr?: string;
  topArrayStr?: string;
}

export interface IFPSImageStyles extends IFPSImageWPStyles {

  rotateArray?: number[];
  topArray?: number[];
}

export const FPSImagePresetChoices: IPropertyPaneDropdownOption[] = <IPropertyPaneDropdownOption[]>[`Custom`, `Poker`, `SlantDown`, `Horizontal`].map((key, idx) => { return { index: idx, key: key, text: key }; });

export const FPSImageTitlePosChoices: IPropertyPaneDropdownOption[] = <IPropertyPaneDropdownOption[]>[`Bottom`, `Top`].map((key, idx) => { return { index: idx, key: key, text: key }; });

export type IFPSImageLayout = `Custom` | `Poker` | `SlantDown` | `Horizontal`;
export type IFPSImageTitlePos = `Top` | `Bottom` | ``;
