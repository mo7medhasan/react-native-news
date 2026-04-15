import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerList: {
    marginTop: 10,
  },
  ActivityIndicator: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',   
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    gap: 10,
  },
  imageStyle: {
    height: 100,
    aspectRatio:1,
    borderRadius: 10,
  },
  title: {
    flex: 1,
    fontSize: 16,
    paddingEnd: 10,
    fontWeight: 'bold',
  },
});
export default styles;
