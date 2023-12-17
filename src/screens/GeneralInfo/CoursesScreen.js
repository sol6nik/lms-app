import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { useTheme } from "../../hooks/use-theme";
import { useIsFocused } from "@react-navigation/native";
import { vh, vw } from "react-native-expo-viewport-units";

export default function CoursesScreen() {
  const coursesState = [
    {
      id: 1,
      courseName: "Управление стратегическими коммуникациями",
      images: require("../../images/avatar1.png"),
    },
    {
      id: 2,
      courseName: "Школа руководителя",
      images: require("../../images/avatar2.png"),
    },
    {
      id: 3,
      courseName: "Основы программирования",
      images: require("../../images/avatar3.png"),
    },
    {
      id: 4,
      courseName: "Фокусировка на результате",
      images: require("../../images/avatar4.png"),
    },
    {
      id: 5,
      courseName: "Программирование на Python",
      images: require("../../images/avatar5.png"),
    },
  ];

  const isFocused = useIsFocused();

  const [theme, setTheme] = useTheme(isFocused);

  return (
    <View
      style={[styles.container, theme == "dark" ? stylesDark.container : {}]}
    >
      <ScrollView>
        <View>
          {coursesState.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.card,
                theme == "dark" ? stylesDark.block : stylesDark.white,
              ]}
            >
              <View style={styles.courseContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: 250,
                  }}
                >
                  <Image style={styles.image} source={item.images} />
                  <Text
                    style={[
                      styles.courseName,
                      theme == "dark" ? stylesDark.text : {},
                    ]}
                  >
                    {item.courseName}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  card: {
    justifyContent: "center",
    width: vw(90),
    height: vh(10),
    backgroundColor: "#fff",
    borderRadius: 25,
    margin: 5,
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  courseName: {},
});

const stylesDark = StyleSheet.create({
  container: {
    backgroundColor: "#292929",
  },
  white: {
    backgroundColor: "#fff",
  },
  block: {
    backgroundColor: "#393A39",
  },
  info: {
    backgroundColor: "#393A39",
  },
  text: {
    color: "#FFF",
  },
});
