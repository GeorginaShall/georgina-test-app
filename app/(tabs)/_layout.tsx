import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import {
  Image,
  Pressable,
  View,
  useColorScheme,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Colors from "../../constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo-removebg-preview.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

export default function TabLayout() {
  const colorScheme = useColorScheme();


  const navigation = useNavigation();
  return (
    <Tabs
      // screenOptions={{
      //   tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      // }}
      screenOptions={{
        tabBarActiveTintColor: '#b47cec',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerLeft: () => <Logo />,
          headerRight: () => (
            // <Link href="/modal" asChild>
            //   <Pressable>
            //     {({ pressed }) => (
            //       <FontAwesome
            //         name="info-circle"
            //         size={25}
            //         color={Colors[colorScheme ?? 'light'].text}
            //         style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
            //       />
            //     )}
            //   </Pressable>
            // </Link>
            <Link href="/" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={styles.container}>
                    <TouchableOpacity>
                      <FontAwesome5
                        name="search"
                        size={24}
                        color='pink'
                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                      />
                    </TouchableOpacity>
                  </View>
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="offers"
        options={{
          title: "Offers",
          tabBarIcon: ({ color }) => <TabBarIcon name="gift" color={color} />,
          headerLeft: () => <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" size={24} color='#b47cec' style={{ marginLeft: 15 }} />
        </TouchableOpacity>,
          headerRight: () => (
            <Link href="/" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={styles.container}>
                    <TouchableOpacity>
                      <FontAwesome5
                        name="search"
                        size={24}
                        color='pink'
                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                      />
                    </TouchableOpacity>
                  </View>
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
        <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",       
          tabBarIcon: ({ color }) => <TabBarIcon name="shopping-cart" color={color} />,
          headerLeft: () => <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" size={24} color='#b47cec' style={{ marginLeft: 15 }} />
        </TouchableOpacity>,
          headerRight: () => (
            <Link href="/" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={styles.container}>
                    <TouchableOpacity>
                      <FontAwesome5
                        name="search"
                        size={24}
                        color='pink'
                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                      />
                    </TouchableOpacity>
                  </View>
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 60,
  },
  logo: {
    width: 40,
    height: 40,
  },
});
