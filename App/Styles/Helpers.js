import { StyleSheet } from 'react-native';
import Colors from './Colors';
import * as Metrics from './Metrics';

export default StyleSheet.create({
  backgroundReset: {
    backgroundColor: Colors.transparent,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  colCenter: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  colCross: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  colMain: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  columnReverse: {
    flexDirection: 'column-reverse',
  },
  crossCenter: {
    alignItems: 'center',
  },
  crossEnd: {
    alignItems: 'flex-end',
  },
  crossStart: {
    alignItems: 'flex-start',
  },
  crossStretch: {
    alignItems: 'stretch',
  },
  fill: {
    flex: 1,
  },
  fillCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  fillCol: {
    flex: 1,
    flexDirection: 'column',
  },
  fillColCenter: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  fillColCross: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  fillColMain: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  fillColReverse: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  fillRow: {
    flex: 1,
    flexDirection: 'row',
  },
  fillRowCenter: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  fillRowCross: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  fillRowMain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  fillRowReverse: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
  fullSize: {
    height: '100%',
    width: '100%',
  },
  fullWidth: {
    width: '100%',
  },
  mainCenter: {
    justifyContent: 'center',
  },
  mainEnd: {
    justifyContent: 'flex-end',
  },
  mainSpaceAround: {
    justifyContent: 'space-around',
  },
  mainSpaceBetween: {
    justifyContent: 'space-between',
  },
  mainStart: {
    justifyContent: 'flex-start',
  },
  mirror: {
    transform: [{ scaleX: -1 }],
  },
  rotate90: {
    transform: [{ rotate: '90deg' }],
  },
  rotate90Inverse: {
    transform: [{ rotate: '-90deg' }],
  },
  row: {
    flexDirection: 'row',
  },
  rowCenter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowCross: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  rowMain: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  scrollSpaceAround: {
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  scrollSpaceBetween: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  selfStretch: {
    alignSelf: 'stretch',
  },
  textCenter: {
    textAlign: 'center',
  },
  textJustify: {
    textAlign: 'justify',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },

  // Image sizing
  xxxsImgBox: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.xxxsImg,
    height: Metrics.xxxsImg,
  },
  xxsImgBox: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.xxsImg,
    height: Metrics.xxsImg,
  },
  xsImgBox: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.xsImg,
    height: Metrics.xsImg,
  },
  sImgBox: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.sImg,
    height: Metrics.sImg,
  },
  mImgBox: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.mImg,
    height: Metrics.mImg,
  },
  lImgBox: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.lImg,
    height: Metrics.lImg,
  },
  xlImgBox: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.xlImg,
    height: Metrics.xlImg,
  },
  xxlImgBox: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.xxlImg,
    height: Metrics.xxlImg,
  },
  xxxsImg4_3Landscape: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.xxxsImg,
    height: 0.75 * Metrics.xxxsImg,
  },
  xxsImg4_3Landscape: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.xxsImg,
    height: 0.75 * Metrics.xxsImg,
  },
  xsImg4_3Landscape: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.xsImg,
    height: 0.75 * Metrics.xsImg,
  },
  sImg4_3Landscape: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.sImg,
    height: 0.75 * Metrics.sImg,
  },
  mImg4_3Landscape: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.mImg,
    height: 0.75 * Metrics.mImg,
  },
  lImg4_3Landscape: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.lImg,
    height: 0.75 * Metrics.lImg,
  },
  xlImg4_3Landscape: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.xlImg,
    height: 0.75 * Metrics.xlImg,
  },
  xxlImg4_3Landscape: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.xxlImg,
    height: 0.75 * Metrics.xxlImg,
  },
  xxxlImg4_3Landscape: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.xxlImg,
    height: 0.75 * Metrics.xxxlImg,
  },
  xxxsImg16_9Landscape: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.xxxsImg,
    height: 0.5625 * Metrics.xxxsImg,
  },
  xxsImg16_9Landscape: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.xxsImg,
    height: 0.5625 * Metrics.xxsImg,
  },
  xsImg16_9Landscape: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.xsImg,
    height: 0.5625 * Metrics.xsImg,
  },
  sImg16_9Landscape: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.sImg,
    height: 0.5625 * Metrics.sImg,
  },
  mImg16_9Landscape: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.mImg,
    height: 0.5625 * Metrics.mImg,
  },
  lImg16_9Landscape: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.lImg,
    height: 0.5625 * Metrics.lImg,
  },
  xlImg16_9Landscape: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.xlImg,
    height: 0.5625 * Metrics.xlImg,
  },
  xxlImg16_9Landscape: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.xxlImg,
    height: 0.5625 * Metrics.xxlImg,
  },
  xxxsImg: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.xxxsImg
  },
  xxsmallImg: {
    alignSelf: 'center',
    resizeMode: 'center',
    width: Metrics.xxsImg
  },
  xsmallImg: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.xsImg,
  },
  smallImg: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.sImg
  },
  mediumImg: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.mImg
  },
  largeImg: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.lImg
  },
  xlargeImg: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.xlImg
  },
  xxlargeImg: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.xxlImg
  },
  labelImg: {
    alignSelf: 'center',
    color: Colors.black,
    textAlign: 'center'
  },
  xsmallIcon: {
    alignSelf: 'center',
    color: Colors.black,
    width: 30,
    height: 30
  },
  smallIcon: {
    alignSelf: 'center',
    color: Colors.black,
    width: 30
  },
  mediumIcon: {
    alignSelf: 'center',
    color: Colors.black,
    width: 25
  },
  largeIcon: {
    alignSelf: 'center',
    color: Colors.black,
    width: 50
  },
})
