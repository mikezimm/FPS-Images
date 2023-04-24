import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  IPropertyPaneGroup,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'FpsImagesWebPartStrings';
import FpsImages from './components/FpsImages';
import { IFpsImagesProps } from './components/IFpsImagesProps';
import { IFPSImageWPStyles } from "./components/IFPSImageWPStyles";
import { FPSImageStyleGroup } from './components/FPSImageStylesGroup';

require('./GrayPropPaneAccordions.css');

export interface IFpsImagesWebPartProps extends IFPSImageWPStyles {
  description: string;
}

export default class FpsImagesWebPart extends BaseClientSideWebPart<IFpsImagesWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  
  protected onInit(): Promise<void> {
    this._environmentMessage = this._getEnvironmentMessage();

    return super.onInit();
  }

  public render(): void {

    const { layout, titlePos, titleWid, imgHeight, imageOverlap, topAdj, rotateArrayStr, rotateMax, topArrayStr, topMax } = this.properties;
    const element: React.ReactElement<IFpsImagesProps> = React.createElement(
      FpsImages,
      {
        description: this.properties.description,
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName,
        fpsImageStyles: {
          layout: layout, // IFPSImageLayout;
          titlePos: titlePos, // IFPSImageTitlePos; // Default === Bottom
          titleWid: titleWid, // number; // Default 150px
          imgHeight: imgHeight, // number;
          imageOverlap: imageOverlap, // number;
          topAdj: topAdj, // number; // Needed to provide padding when rotating
          rotateMax: rotateMax, // number;
          topMax: topMax, // number;
          rotateArray: !rotateArrayStr ? [] : rotateArrayStr.split(',').map( ( numb: string)  => { return parseInt( numb, 10 )}), // number[];
          topArray: !topArrayStr ? [] : topArrayStr.split(',').map( ( numb: string)  => { return parseInt( numb, 10 )}), // number[];
        }
      }
    );

    ReactDom.render(element, this.domElement);
  }


  private _getEnvironmentMessage(): string {
    if (!!this.context.sdks.microsoftTeams) { // running in Teams
      return this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
    }

    return this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment;
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const {
      semanticColors
    } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }

  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {

    const group: IPropertyPaneGroup = FPSImageStyleGroup( this.properties );

    return {
      pages: [
        {
          header: {
            description: ``, // strings.PropertyPaneDescription
          },
          groups: [
            group
          ]
        }
      ]
    };
  }
}
