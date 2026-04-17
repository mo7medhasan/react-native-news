import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { RouteProp } from '@react-navigation/native';
import ScreenNames from '../../navigation/ScreenNames';
import styles from './style';
import Icon from 'react-native-vector-icons/Feather';
import { SharedStackList } from '../../navigation/Stacks/shared.stack';
import useStoreFavNews from '../../store/FavoritesStore';

export default function ArticleDetails() {
    const { goBack } = useNavigation();
    const { params } = useRoute<RouteProp<SharedStackList, ScreenNames.ArticleDetails>>();
    const { article } = params ?? {};

    const { title, description, urlToImage, } = article ?? {};

    const { isFav, addFavNews, removeFavNews } = useStoreFavNews();

    const handleFav = () => {
        if (isFav(article)) {
            removeFavNews(article);
        } else {
            addFavNews(article);
        }
    }



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
                <View style={styles.header}>

                    <TouchableOpacity onPress={goBack} style={styles.backButton}>
                        <Icon name="arrow-left" size={20} color="white" />
                    </TouchableOpacity>
                </View>

                <Image source={{ uri: urlToImage }} style={styles.image} />
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </ScrollView>
            
            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton} onPress={handleFav}>
                    <Icon name="heart" size={30} color={isFav(article)?"red":"black"} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}