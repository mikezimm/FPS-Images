

import {
  IPropertyPaneGroup,
  PropertyPaneTextField, 
  PropertyPaneToggle,
  IPropertyPaneField,
  PropertyPaneDropdown,
  PropertyPaneSlider,
  IPropertyPaneDropdownProps,
  IPropertyPaneDropdownOption,
} from '@microsoft/sp-property-pane';

import { IFpsImagesWebPartProps } from '../FpsImagesWebPart';
import { FPSImagePresetChoices, FPSImageTitlePosChoices } from './IFPSImageWPStyles';

// import { IThisFPSWebPartClass } from '../../FPSWebPartClass/IThisFPSWebPartClass';
  /**
   * This is the second version which is more simple (toggles and sliders)
   * @param showSearch
   * @param pageStyle 
   * @param quickLaunchHide 
   * @param containerMaxWidth 
   */
  // export const FPSImagePresetChoices: IPropertyPaneDropdownOption[] = <IPropertyPaneDropdownOption[]>
  //  [ `Custom`, `Poker`, `SlantDown`, `Horizontal` ].map( ( key, idx ) => { return {   index: idx, key: key, text: key } });

  // export const FPSImageTitlePosChoices: IPropertyPaneDropdownOption[] = <IPropertyPaneDropdownOption[]>
  //   [ `Bottom`, `Top` ].map( ( key, idx ) => { return {   index: idx, key: key, text: key } });

  // export type IFPSImageLayout = `Custom` | `Poker` | `SlantDown` | `Horizontal`;
  // export type IFPSImageTitlePos = `Top` | `Bottom` | ``;

  // export interface IFPSImageWPStyles {
  //   imgLayout?: IFPSImageLayout;
  //   titlePos?: IFPSImageTitlePos; // Default === Bottom
  //   titleWid?: number; // Default 150px
  //   imgHeight: number;
  //   topAdj?: number; // Needed to provide padding when rotating
  //   rotateMax?: number;
  //   topMax?: number;
  //   rotateArray?: number[];
  //   topArray?: number[];
  // }

   /**
    * Model for IFPSBasicToggleSetting properties
    * For if ( allSectWidth !== 'skip' ) {
    */
export function FPSImageStyleGroup( webPartProps: IFpsImagesWebPartProps ):IPropertyPaneGroup {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fields: IPropertyPaneField<any>[] = [];

    fields.push(
      PropertyPaneDropdown('imgLayout', <IPropertyPaneDropdownProps>{
        label: 'Image style presets',
        options: FPSImagePresetChoices,
      }), );

    fields.push(
      PropertyPaneDropdown('titlePos', <IPropertyPaneDropdownProps>{
        label: 'Image style presets',
        options: FPSImageTitlePosChoices,
      }), );

    fields.push(
      PropertyPaneSlider('titleWid', { //hidePageHeader, allSectionMaxWidthEnable, allSectionMaxWidth, allSectionMarginEnable, allSectionMargin
          label: 'Image Title width (pixels)',
          min: 100,
          max: 200,
          step: 10,
        })
    );

    fields.push(
      PropertyPaneSlider('imgHeight', { //hidePageHeader, allSectionMaxWidthEnable, allSectionMaxWidth, allSectionMarginEnable, allSectionMargin
          label: 'Image Height (pixels)',
          min: 100,
          max: 250,
          step: 10,
        })
    );

    fields.push(
      PropertyPaneSlider('imageOverlap', { //hidePageHeader, allSectionMaxWidthEnable, allSectionMaxWidth, allSectionMarginEnable, allSectionMargin
          label: 'Image Overlap (pixels)',
          min: 25,
          max: 100,
          step: 5,
        })
    );

    fields.push(
      PropertyPaneSlider('topAdj', { //hidePageHeader, allSectionMaxWidthEnable, allSectionMaxWidth, allSectionMarginEnable, allSectionMargin
          label: 'Top adjustment down (pixels)',
          min: 10,
          max: 100,
          step: 10,
        })
    );

    fields.push(
      PropertyPaneSlider('rotateMax', { //hidePageHeader, allSectionMaxWidthEnable, allSectionMaxWidth, allSectionMarginEnable, allSectionMargin
          label: 'Rotation max (degrees)',
          min: 0,
          max: 21,
          step: 3,
        })
    );

    fields.push(
      PropertyPaneSlider('topMax', { //hidePageHeader, allSectionMaxWidthEnable, allSectionMaxWidth, allSectionMarginEnable, allSectionMargin
          label: 'Top max (pixels)',
          min: 0,
          max: 21,
          step: 3,
        })
    );

    fields.push(
      PropertyPaneTextField('rotateArrayStr', {
        label: 'Custom individual rotation',
        description: 'coma separted numbers in degrees rotation',
      }), );

    fields.push(
      PropertyPaneTextField('topArrayStr', {
        label: 'Custom individual rotation',
        description: 'coma separted numbers in degrees rotation',
      }), );

    const ExportThisGroup: IPropertyPaneGroup = {
      groupName: 'FPS Image Style props',
      isCollapsed: false,
      groupFields: fields,
    };
  
    return ExportThisGroup;
}
