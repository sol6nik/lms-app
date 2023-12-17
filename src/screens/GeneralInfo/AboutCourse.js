import React, { useState } from "react";
import { useTheme } from "../../hooks/use-theme";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { vh, vw } from "react-native-expo-viewport-units";
import { useIsFocused } from "@react-navigation/native";

import teacher from "../../images/AvatarPerson.png";

function AboutCourse({ navigation: { goBack } }) {
  const isFocused = useIsFocused();
  const [theme, setTheme] = useTheme(isFocused);

  const DATA_PAIRS = [
    {
      id: "1",
      headline: "Раздел 1",
      title: 'Тема "Название темы"',
      titleSecond: "Лабораторная работа №1",
      text: "В самостоятельно работе в некоторых лабораторных работах в самостоятельно работе в некоторых лабораторных",
    },
    {
      id: "2",
      headline: "Раздел 2",
      title: 'Тема "Название темы"',
      titleSecond: "Лабораторная работа №2",
      text: "В самостоятельно работе в некоторых лабораторных работах в самостоятельно работе в некоторых лабораторных",
    },
    {
      id: "3",
      headline: "Раздел 3",
      title: 'Тема "Название темы"',
    },
  ];

  const renderPairs = ({ item }) => <PairSlideComponent item={item} />;

  const PairSlideComponent = ({ item }) => (
    <View style={theme === "dark" ? styles.boxDark : styles.item}>
      <Text
        style={[
          theme === "dark" ? styles.headlineDark : styles.headline,
          { fontFamily: "gilroy-semibold" },
        ]}
      >
        {item.headline}
      </Text>

      <View style={styles.box}>
        <Text
          style={[
            theme === "dark" ? styles.titleDark : styles.title,
            { fontFamily: "gilroy-semibold" },
          ]}
        >
          {item.title}
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.btnHw}>
            <Text
              style={{ fontFamily: "gilroy-semibold" }}
              onPress={() => navigation.navigate("ReadyHomeWork")}
            >
              Подробнее
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.box, styles.boxLast]}>
        <Text
          style={[
            theme === "dark" ? styles.titleDark : styles.title,
            { fontFamily: "gilroy-semibold" },
          ]}
        >
          {item.titleSecond}
        </Text>

        <Text
          style={[
            theme === "dark" ? styles.titleDark : styles.text,
            { fontFamily: "gilroy-semibold" },
          ]}
        >
          {item.text}
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.btnHwHalf}>
            <Text
              style={{ fontFamily: "gilroy-semibold" }}
              onPress={() => navigation.navigate("ReadyHomeWork")}
            >
              Подробнее
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={theme === "dark" ? styles.btnAddDark : styles.btnAdd}
          >
            <Text
              style={[
                theme === "dark" ? styles.btnTitleDark : styles.btnTitle,
                { fontFamily: "gilroy-semibold" },
              ]}
            >
              Выполнить
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => goBack()} style={styles.btnBack}>
        <Ionicons name="chevron-back" size={24} color="#90B3E7" />
      </TouchableOpacity>

      <Text style={styles.description}>Описание курса</Text>

      <Text style={styles.date}>C 01.02.2023</Text>

      <Text style={styles.coach}>Кто ведет курс</Text>
      {/* style={styles.courseContainer} */}
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: 250,
          }}
        >
          <Image style={styles.image} source={teacher} />
          <Text
            style={[
              styles.courseName,
              theme == "dark" ? stylesDark.text : {},
              { fontFamily: "gilroy-semibold" },
            ]}
          >
            Иван Иванов
          </Text>
        </View>
      </View>

      <FlatList
        data={DATA_PAIRS}
        renderItem={renderPairs}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default AboutCourse;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
  },
  btnBack: {
    backgroundColor: "#fff",
    borderRadius: 17,
    height: 37,
    width: 37,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  item: {},
  title: {
    fontSize: 17,
    marginTop: 16,
    marginBottom: 10,
    color: "#000",
  },
  titleDark: {
    fontSize: 17,
    marginTop: 16,
    marginBottom: 27,
    color: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  timeBg: {
    backgroundColor: "#3270B3",
    borderRadius: 100,
    width: 95,
    height: 23,
    alignItems: "center",
    justifyContent: "center",
  },
  btnHw: {
    backgroundColor: "#99A9FD",
    width: 162,
    height: 41,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    width: "100%",
  },
  btnHwHalf: {
    backgroundColor: "#99A9FD",
    width: 162,
    height: 41,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  btnAdd: {
    backgroundColor: "#99A9FD",
    width: 162,
    height: 41,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  btnAddDark: {
    backgroundColor: "#292929",
    width: 162,
    height: 41,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  btnTitle: {
    color: "#000",
  },
  btnTitleDark: {
    color: "#fff",
  },
  box: {
    marginBottom: 17,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 16,
  },
  boxLast: {
    marginBottom: 0,
  },
  boxDark: {
    marginBottom: 10,
    backgroundColor: "#393A39",
    borderRadius: 20,
  },
  headline: {
    fontSize: 25,
    marginTop: 18,
    marginBottom: 18,
    color: "#000",
  },
  headlineDark: {
    fontSize: 25,
    marginTop: 16,
    marginBottom: 27,
    color: "#fff",
  },
  description: {
    marginBottom: 15,
    marginTop: 15,
    fontSize: 16,
  },
  text: {
    marginBottom: 8,
    marginTop: 5,
    fontSize: 13,
  },
  date: {
    backgroundColor: "#e7e7e7",
    borderWidth: 1,
    borderColor: "#ccc",
    alignSelf: "flex-start",
    width: 120,
    textAlign: "center",
    borderRadius: 50,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  coach: {
    fontFamily: "gilroy-semibold",
    paddingTop: 16,
    paddingBottom: 16,
    fontSize: 16,
    fontWeight: 400,
  },
});
