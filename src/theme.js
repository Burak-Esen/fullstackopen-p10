import { Platform } from 'react-native';
import { StyleSheet } from 'react-native';

export const formStyles = StyleSheet.create({
  input: {
    margin: 10,
    padding: 10,
    fontSize: 16,
    borderRadius: 5
  },
  formCont: {
    flex: 1,
  },
  buttonText: {
    borderWidth:0,
    backgroundColor: '#0060A7',
    color: 'white',
    padding: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16
  },
});

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    fancyHeaderBar: 'rgba(20,0,110,0.3)'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;
