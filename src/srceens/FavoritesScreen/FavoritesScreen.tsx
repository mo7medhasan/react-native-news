import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useCallback } from 'react';
import useStoreFavNews from '../../store/FavoritesStore';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NewsItem } from '../../types';
import { StackNames } from '../../navigation/StackNames';
import ScreenNames from '../../navigation/ScreenNames';
import Icon from 'react-native-vector-icons/Feather';
import { Image } from 'react-native';
import { MainParamList } from '../../navigation/mainStack';

export default function FavoritesScreen() {
  const { FavNews,removeFavNews } = useStoreFavNews();

  return (
    <SafeAreaView style={styles.containerMain}>
      <NewsList FavNews={FavNews} removeFavNews={removeFavNews} />
    </SafeAreaView>
  );
}

function NewsList({ FavNews ,removeFavNews}: { FavNews: NewsItem[] ,removeFavNews: (news: NewsItem) => void}) {
  const { navigate } = useNavigation<NavigationProp<MainParamList>>();
  const handleNavigateToArticleDetails = useCallback(
    ({ item }: { item: NewsItem }) => {
      navigate(StackNames.SharedStack, {
        screen: ScreenNames.ArticleDetails,
        params: { article: item },
      });
    },
    [navigate],
  );
  function renderItem(item: NewsItem) {
    return (
      <View style={styles.cardItem}>
        <Image source={{ uri: item.urlToImage }} style={styles.imageStyle} />
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.footerButtonContainer}>

            <TouchableOpacity
              onPress={() => handleNavigateToArticleDetails({ item })}
              style={styles.footerButton}
            >
              <Icon name="heart" size={20} color="red" />
            </TouchableOpacity>            <TouchableOpacity
              onPress={() => removeFavNews(item)}
              style={styles.footerButton}
            >
              <Icon name="arrow-right" size={20} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <FlatList
      data={FavNews}
      keyExtractor={(item, index) => item.title || index.toString()}
      renderItem={({ item }) => renderItem(item)}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.containerList}
      scrollEnabled={false}
    />
  );
}
