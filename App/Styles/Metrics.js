/**
 * This file contains metric values that are global to the application.
 */

// Examples of metrics you can define:
export const tiny = 5
export const small = tiny * 2 // 10
export const normal = tiny * 3 // 15
export const medium = normal * 2 // 30

// Image metrics
export const xxxsImg = 10;
export const xxsImg = 16;
export const xsImg = 22;
export const sImg = 35;
export const mImg = 48;
export const lImg = 54;
export const xlImg = 62;
export const xxlImg = 80;
export const xxxlImg = 100;

export default {
  bottomMargin: {
    marginBottom: normal,
  },
  mediumBottomMargin: {
    marginBottom: medium,
  },

  tinyVerticalMargin: {
    marginVertical: tiny,
  },
  smallVerticalMargin: {
    marginVertical: small,
  },
  verticalMargin: {
    marginVertical: normal,
  },
  mediumVerticalMargin: {
    marginVertical: medium,
  },

  tinyHorizontalMargin: {
    marginHorizontal: tiny,
  },
  smallHorizontalMargin: {
    marginHorizontal: small,
  },
  horizontalMargin: {
    marginHorizontal: normal,
  },
  mediumHorizontalMargin: {
    marginHorizontal: medium,
  },

  tinyHorizontalPadding: {
    paddingHorizontal: tiny,
  },
  smallHorizontalPadding: {
    paddingHorizontal: small,
  },
  horizontalPadding: {
    paddingHorizontal: normal,
  },
  mediumHorizontalPadding: {
    paddingHorizontal: medium,
  },

  tinyVerticalPadding: {
    paddingVertical: tiny,
  },
  smallVerticalPadding: {
    paddingVertical: small,
  },
  verticalPadding: {
    paddingVertical: normal,
  },
  mediumVerticalPadding: {
    paddingVertical: medium,
  },
}
