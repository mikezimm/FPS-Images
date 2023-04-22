import * as React from 'react';
import styles from './FpsImages.module.scss';

export interface IFPSImageWPStyles {
  height: number;
  topAdj?: number; // Needed to provide padding when rotating
  rotateMax?: number;
  topMax?: number;
  rotate?: number[];
  top?: number[];
}

export interface IFPSImage {
  href: string;
  title: string;
  src: string;
  target: string;
}

export const MockFPSImageWPStyles : IFPSImageWPStyles = {
  height: 208,
  // rotateMax: 10,
  // rotate: [ -10, -3, 3, 10 ],
  // topAdj: 30,
  // topMax: 10,
  // top: [ 30, 18, 3, 10 ],
  top: [ 0, 10, 20, 30 ],

}

export function createImageLitems( images: IFPSImage[], imgStyles: IFPSImageWPStyles ) : JSX.Element[] {
  const eles: JSX.Element[] = [];
  images.map( ( image, key ) => {
    eles.push( createImageLi( imgStyles, image, key ) );
  });
  return eles;
}


export function randomNumberRange( x: number ): number {
  return randomNumber( -x, x );
}

export function randomNumber( min: number, max: number ): number {
  return Math.random() * ( max - min ) + min;
}

export function createImageLi( imgStyles: IFPSImageWPStyles, image: IFPSImage, key: number ) : JSX.Element {

  // { transform:rotate(3deg); margin-top: 20px } 

  const transformDeg: number = imgStyles.rotate && imgStyles.rotate.length > 0 ? imgStyles.rotate[key] : imgStyles.rotateMax ? randomNumberRange( imgStyles.rotateMax ) : 0;
  const marginTop: number = imgStyles.top && imgStyles.top.length > 0 ? imgStyles.top[key] : imgStyles.topMax ? randomNumberRange( imgStyles.topMax ) : 0;
  const topAdj: number = imgStyles.topAdj ? imgStyles.topAdj : 0;
  const liStyles: React.CSSProperties = { transform: `rotate(${ transformDeg }deg)`, marginTop: `${ topAdj + marginTop }px` }
  const ele = <li key={ key } style={ liStyles }>
    <div className={ styles.image_title }><a href={ image.href }>{ image.title }</a></div>
    <a href={ image.href } target={ image.target }>
      <img src={ image.src } style={{ height: `${ imgStyles.height }px` }}/></a>
  </li>;

  return ele;

}

export const MockImages : IFPSImage[] = [
  {
    title: `LIVBAG INFO n°36`,
    href: ``,
    src: `https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wB79?ver=e222`,
    target: `_blank`,
  },  {
    title: `LIVBAG INFO n°36`,
    href: ``,
    src: `https://th.bing.com/th/id/R.7f34a70a5bee79488309934920d316cb?rik=IRJI6pSFo6OI%2fQ&riu=http%3a%2f%2fallpicts.in%2fwp-content%2fuploads%2f2018%2f03%2fNatural-Images-HD-1080p-Download-with-Keyhole-Arch-at-Pfeiffer-Beach.jpg&ehk=JPI0MFI04N62Xtd7MT1P2sw4vJgwODLsp1EcpgvuGFo%3d&risl=&pid=ImgRaw&r=0`,
    target: `_blank`,
  },  {
    title: `LIVBAG INFO n°36`,
    href: ``,
    src: `https://th.bing.com/th/id/R.67f3c87884436a35cf9991d13adf93fd?rik=tB9ndMh9dfvhAg&pid=ImgRaw&r=0`,
    target: `_blank`,
  },  {
    title: `LIVBAG INFO n°36`,
    href: ``,
    src: `https://th.bing.com/th/id/R.636484d53ae05f3953cf988492d18c81?rik=p%2f9isJYPg%2fSu%2fw&pid=ImgRaw&r=0`,
    target: `_blank`,
  },
];
