import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";
import AuthStack from "./Stacks/auth.stack";
import MainTabs from "./Tabs/main.tabs";
import { StackNames } from "./StackNames";
import SharedStack, { SharedStackList } from "./Stacks/shared.stack";

const Stack = createNativeStackNavigator<MainParamList>();

function MainStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={StackNames.AuthStack} component={AuthStack} />
            <Stack.Screen name={StackNames.MainTabs} component={MainTabs} />
            <Stack.Screen name={StackNames.SharedStack} component={SharedStack} />
        </Stack.Navigator>
    );
}


export type MainParamList = {
    [StackNames.AuthStack]: undefined,
    [StackNames.MainTabs]: undefined,
    [StackNames.SharedStack]: NavigatorScreenParams<SharedStackList>,
}

export default MainStack