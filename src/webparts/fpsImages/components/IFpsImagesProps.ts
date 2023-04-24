import { IFPSImageStyles } from "./IFPSImageWPStyles";


export interface IFpsImagesProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;

  fpsImageStyles: IFPSImageStyles;
}
