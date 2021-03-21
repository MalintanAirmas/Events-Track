import React from 'react';
import Navigator from 'App/Navigations/Navigator';
import { Root } from 'native-base';
import { setCustomText, setCustomTextInput, setCustomTouchableOpacity } from 'react-native-global-props';
import * as Styles from 'App/Styles';
import configureStore from 'App/Components/Redux/Store';
import { Provider } from 'react-redux';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.setGlobalProps();
    this.store = configureStore({});
  }
  setGlobalProps() {
    const customProps = {
      allowFontScaling: false,
      style: {
        fontFamily: 'OpenSans-Regular',
        color: Styles.Colors.black,
      }
    };
    const customPropsTouchableOpacity = {
      delayPressIn: 0
    };
    setCustomText(customProps);
    setCustomTextInput(customProps);
    setCustomTouchableOpacity(customPropsTouchableOpacity);
  }
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
  render() {
    return (
      <Root>
        <Provider store={this.store}>
          <Navigator.AppContainer
            ref={navigatorRef => {
              Navigator.setTopLevelNavigator(navigatorRef);
            }}
          />
        </Provider>
      </Root>
    )
  }
}


export default App;
