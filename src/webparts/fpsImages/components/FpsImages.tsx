import * as React from 'react';
import styles from './FpsImages.module.scss';
import { IFpsImagesProps } from './IFpsImagesProps';
// import { escape } from '@microsoft/sp-lodash-subset';
import { MockFPSImageWPStyles, MockImages, createImageLitems } from './MockData';

export default class FpsImages extends React.Component<IFpsImagesProps, {}> {
  public render(): React.ReactElement<IFpsImagesProps> {
    const {
      hasTeamsContext,
    } = this.props;

    return (
      <section className={`${styles.fpsImages} ${hasTeamsContext ? styles.teams : ''}`}>
      <div className={ styles.accordian1 } style={{ height: '320px'}}>
          <ul>
            { createImageLitems( MockImages, MockFPSImageWPStyles ) }
          </ul>
        </div>
      </section>
    );
  }


}
