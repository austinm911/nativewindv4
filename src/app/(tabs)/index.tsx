import { StyleSheet } from "react-native"

import EditScreenInfo from "@/components/EditScreenInfo"
import { Text, View } from "@/components/Themed"

export default function TabOneScreen() {
    return (
        <View className="items-center p-4 rounded-md">
            <Text className="text-3xl text-center text-white bg-red-900">
                Tab One
            </Text>
            <View className="p-4 rounded-md">
                <Text className="text-3xl text-white bg-red-900">
                    Using Nativewind
                </Text>
            </View>

            <EditScreenInfo path="app/(tabs)/index.tsx" />
        </View>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: "bold",
//     },
//     separator: {
//         marginVertical: 30,
//         height: 1,
//         width: "80%",
//     },
// })
