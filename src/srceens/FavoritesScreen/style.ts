import { StyleSheet } from 'react-native';
import { Fonts } from '../../utils/constants/fonts';

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  backButton: {
    padding: 10,
    backgroundColor: 'black',
    fontSize: 16,
    borderRadius: 10,
  },
  textBackButton: {
    color: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex:3,
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.AtmaBold,
    maxWidth:"85%",
    flex:1
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: Fonts.AtmaRegular,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  footerButton: {
    padding: 10,
    backgroundColor: 'white',
    
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerList: {
    marginTop: 10,
  },
  footerButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
   
    borderWidth: 1,
    borderColor: 'black',
    gap: 5,
  },
  imageStyle: {
    borderRadius: 10,
    flex:1,
    width: 100,
    height: 100,
  },
});
export default styles;
