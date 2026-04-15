import { View, Text, ImageBackground, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { use, useState, Suspense, useCallback } from 'react'
import styles from './style'
import { getEgyptianTopHeadlines } from '../../services/newsService'
import { NewsItem } from '../../types';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import ScreenNames from '../../navigation/ScreenNames';
import { MainParamList } from '../../navigation/MainStack';
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
            <TouchableOpacity onPress={() => handleNavigateToArticleDetails({ item })}>
                <ImageBackground source={{
                    uri: item.urlToImage,
                }}
                    resizeMode='cover'
                    imageStyle={styles.imageStyle}
                    style={styles.container}>
                    <View style={styles.whiteBackground}>
                        <View style={styles.titleBackground}>
                            <Text style={styles.title}>{item.source.name}</Text>
                        </View>
                        <Text style={styles.description}>
                            {item.title}
                        </Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            data={data}
            keyExtractor={(item, index) => item.title || index.toString()}
            renderItem={({ item }) => renderItem(item)}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            contentContainerStyle={styles.containerList}
        />
    )
}

export default function MainNews() {
    // 1. We must cache the promise in state so it doesn't get recreated on every render
    const [newsPromise] = useState(() =>
        getEgyptianTopHeadlines('/top-headlines?country=us').then((res) =>
            res.articles.filter((item: NewsItem) => item.urlToImage !== null)
        )
    );

    // 2. Any component utilizing use(promise) must be wrapped in a <Suspense> boundary
    return (
        <View>
            <Suspense fallback={<ActivityIndicator size="large" color="#0000ff" style={styles.ActivityIndicator} />}>
                <NewsList newsPromise={newsPromise} />
            </Suspense>
        </View>
    )
}