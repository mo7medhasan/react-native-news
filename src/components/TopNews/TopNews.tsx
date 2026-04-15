import { View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import React, { use, useState, Suspense, useCallback } from 'react'
import styles from './style'
import { getEgyptianTopHeadlines } from '../../services/newsService'
import { NewsItem } from '../../types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainParamList } from '../../navigation/MainStack';
import ScreenNames from '../../navigation/ScreenNames';
import { StackNames } from '../../navigation/StackNames';

function NewsList({ newsPromise }: { newsPromise: Promise<NewsItem[]> }) {
    // 3. The use() hook unpacks the resolved value of the stable promise
    const data = use(newsPromise);
   const { navigate } = useNavigation<NavigationProp<MainParamList>>();
    const handleNavigateToArticleDetails = useCallback(({ item }: { item: NewsItem }) => {
        navigate(StackNames.SharedStack, { screen: ScreenNames.ArticleDetails, params: { article: item } });
    }, [navigate]);
    function renderItem(item: NewsItem) {

        return (
            <TouchableOpacity onPress={() => handleNavigateToArticleDetails({ item })} style={styles.cardItem}>

                <Image source={{ uri: item.urlToImage }} style={styles.imageStyle} />
                <Text style={styles.title}>{item.title}</Text>

            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            data={data}
            keyExtractor={(item, index) => item.title || index.toString()}
            renderItem={({ item }) => renderItem(item)}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.containerList}
            scrollEnabled={false}
        />
    )
}




export default function TopNews() {
    // 1. We must cache the promise in state so it doesn't get recreated on every render
    const [newsPromise] = useState(() =>
        getEgyptianTopHeadlines("everything?q=Egypt").then((res) =>
            res.articles.filter((item: NewsItem) => item.urlToImage !== null)
        )
    );

    // 2. Any component utilizing use(promise) must be wrapped in a <Suspense> boundary
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Top News</Text>
            <Suspense fallback={<ActivityIndicator size="large" color="#0000ff" style={styles.ActivityIndicator} />}>
                <NewsList newsPromise={newsPromise} />
            </Suspense>
        </View>
    )
}