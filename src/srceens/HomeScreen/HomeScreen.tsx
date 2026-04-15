import { ScrollView } from "react-native";
import Header from "../../components/Header/Header";
import MainNews from "../../components/MainNews/MainNews";
import TopNews from "../../components/TopNews/TopNews";
import { SafeAreaView } from "react-native-safe-area-context";


const HomeScreen = () => {
    return (
        <SafeAreaView >
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header />
                <MainNews />
                <TopNews />
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;