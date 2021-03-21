/**
 * This file defines the Main styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import Colors from './Colors'
import { Platform } from 'react-native'

export default {
  button: {
    backgroundColor: Colors.primary,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.trueWhite
  },
  appFrameHeaderLeftIcon: {
    height: 20,
    width: 20,
    tintColor: Colors.trueWhite,
    marginHorizontal: Platform.OS === 'ios' ? 14 : 0,
  },
  boxShadow2: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  boxShadow5: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  noShadow: {
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowOpacity: 0,
    elevation: 0
  },
}
