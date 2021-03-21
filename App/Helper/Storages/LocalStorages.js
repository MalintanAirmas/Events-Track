/**
 * LocalStorage Library
 */
import AsyncStorage from '@react-native-community/async-storage';
import * as Hooks from 'App/Helpers/Hooks';

const TAG = 'LocalStorage Helper';

// Key for storage item
export const FCM_TOKEN = '@FcmToken';

/**
 * Set Storage Value
 * @param {String} key LocalStorage key
 * @param {String} value localStorage value
 * @return {Promise}
 */
export async function setValue(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  }
  catch (err) {
    Hooks.consoleError(`${TAG} setItem Error`, err);
    return false;
  }
}

/**
 * Get Storage Value
 * @param {String} key LocalStorage key
 * @param {String} defaultValue Default value if error
 * @return {Promise}
 */
export function getValue(key, defaultValue = '') {
  return new Promise((resolve) => {
    AsyncStorage.getItem(key).then(res => {
      resolve(res || defaultValue);
    }).catch(err => {
      Hooks.consoleError(`${TAG} getItem Error`, err);
      resolve(defaultValue);
    });
  });
}