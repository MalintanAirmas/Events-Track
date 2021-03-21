import { StyleSheet } from 'react-native'

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,

  headline1: 26,
  heading2: 24,
  heading3: 20,
  paragraph: 12,
  smallText: 10,
}

export default StyleSheet.create({
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2,
  },
  h3: {
    fontSize: size.h3,
  },
  normal: {
    fontSize: size.regular,
  },


  // Ayooservice Text Styles
  headline1: {
    fontSize: size.headline1,
    fontFamily: 'OpenSans-Bold',
  },
  heading2: {
    fontSize: size.heading2,
    fontFamily: 'OpenSans-SemiBold',
  },
  heading3: {
    fontSize: size.heading3,
    fontFamily: 'OpenSans-SemiBold',
  },
  paragraph_12_reg: {
    fontSize: size.paragraph,
    fontFamily: 'OpenSans-Regular',
  },
  paragraph_12_med: {
    fontSize: size.paragraph,
    fontFamily: 'OpenSans-SemiBold',
  },
  paragraph_12_bold: {
    fontSize: size.paragraph,
    fontFamily: 'OpenSans-Bold',
  },
  smallText_10_reg: {
    fontSize: size.smallText,
    fontFamily: 'OpenSans-Regular',
  },
})
