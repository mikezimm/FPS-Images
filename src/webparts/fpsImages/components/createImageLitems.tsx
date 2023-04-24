import * as React from 'react';
import styles from './FpsImages.module.scss';
import { IFPSImage } from './MockData';
import { IFPSImageStyles, IFPSImageWPStyles } from "./IFPSImageWPStyles";


export function createImageLitems(images: IFPSImage[], imgStyles: IFPSImageStyles): JSX.Element[] {
  const eles: JSX.Element[] = [];
  images.map((image, key) => {
    eles.push(createImageLi(imgStyles, image, key));
  });
  return eles;
}

export function randomNumberRange(x: number): number {
  return randomNumber(-x, x);
}

export function randomNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
function isEven(number: number): boolean {
  return number % 2 === 0;
}
/**
 *
 * @param imgStyles
 * @param image
 * @param key
 * @param alternate :  if true, alternates rotation angle
 * @returns
 */

export function createImageLi(imgStyles: IFPSImageStyles, image: IFPSImage, key: number, alternate: boolean = false): JSX.Element {
  // { transform:rotate(3deg); margin-top: 20px } 

  let transformDeg: number = imgStyles.rotateArray && imgStyles.rotateArray.length > 0 ? imgStyles.rotateArray[key] : imgStyles.rotateMax ? randomNumberRange(imgStyles.rotateMax) : 0;
  if (alternate === true && isEven(key) === false && transformDeg > 0) { transformDeg = transformDeg * -1; }
  else if (alternate === true && isEven(key) === true && transformDeg < 0) { transformDeg = transformDeg * -1; }

  const marginTop: number = imgStyles.topArray && imgStyles.topArray.length > 0 ? imgStyles.topArray[key] : imgStyles.topMax ? randomNumberRange(imgStyles.topMax) : 0;
  const topAdj: number = imgStyles.topAdj ? imgStyles.topAdj : 0;
  const liStyles: React.CSSProperties = { transform: `rotate(${transformDeg}deg)`, marginTop: `${topAdj + marginTop}px`, width: imgStyles.imageOverlap ? `${imgStyles.imageOverlap}px` : `20px`  };
  const ele = <li key={key} style={liStyles}>
    <div className={[styles.image_title, imgStyles.titlePos === 'Top' ? styles.posTop : styles.posBot].join(' ')}
      style={{ width:  imgStyles.titleWid ? `${imgStyles.titleWid}px` : null }}
      title = {image.title}
      ><a href={image.href}>{image.title}</a>
    </div>
    <a href={image.href} target={image.target}>
      <img src={image.src} style={{ height: `${imgStyles.imgHeight}px` }} /></a>
  </li>;

  return ele;

}
