import { create } from 'zustand';
import { NewsItem } from '../types';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Store = {
  FavNews: NewsItem[];
  addFavNews: (news: NewsItem) => void;
  removeFavNews: (news: NewsItem) => void;
  isFav: (news: NewsItem) => boolean;
};

const useStoreFavNews = create<Store>()(
  persist(
    (set, get) => ({
      FavNews: [],
      addFavNews: (news: NewsItem) => set((state) => ({ FavNews: [...state.FavNews, news] })),
      removeFavNews: (news: NewsItem) => set((state) => ({ FavNews: state.FavNews.filter((item) => item.title !== news.title) })),
      isFav: (news: NewsItem) => get().FavNews.some((item) => item.title === news.title),
    }),
    {
      name: 'fav-news-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useStoreFavNews;