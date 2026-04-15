module.exports={
    project:{
        ios:{},
        android:{},
    },
    assets:['./src/assets/fonts/'],
    dependencies: {
    // Remove any entries like this
    "react-native-vector-icons": {
      platforms: {
        ios: null,
      },
    },
  },
};