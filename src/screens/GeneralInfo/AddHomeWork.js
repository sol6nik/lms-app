import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function AddHomeWork({ navigation: { goBack } }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.closeModalContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.btnModalClose}
            >
              <Ionicons name="ios-close-outline" size={25} color="#90B3E7" />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: 19,
                fontSize: 26,
                fontFamily: "gilroy-medium",
              }}
            >
              Добавить файл
            </Text>
          </View>

          <Text
            style={{
              marginTop: 41,
              fontFamily: "gilroy-medium",
              fontSize: 26,
            }}
          >
            Лабораторная работа №1
          </Text>

          <Text
            style={{
              marginTop: 9,
              fontFamily: "gilroy-medium",
              fontSize: 17,
              color: "#999999",
            }}
          >
            В этот элемент LMS необходимо загрузить отчеты по ЛР в формате pdf
            или word до 12.03.22 включительно.
          </Text>

          <TouchableOpacity style={styles.btnModalAdd}>
            <Image source={require("../../images/uploadFile.png")} />
            <Text
              style={{
                marginTop: 27,
                fontSize: 17,
                fontFamily: "gilroy-medium",
                color: "#999999",
              }}
            >
              Прикрепить файл
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSave}>
            <Text
              style={{
                fontFamily: "gilroy-medium",
                fontSize: 16,
                color: "#fff",
              }}
            >
              Сохранить
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => goBack()} style={styles.btnBack}>
          <Ionicons name="chevron-back" size={24} color="#90B3E7" />
        </TouchableOpacity>
        <Text style={styles.titleAdd}>Добавить ответ</Text>
      </View>

      <Text style={styles.headerLab}>Лабораторная работа №1</Text>

      <Text style={styles.description_hw}>
        В этот элемент LMS необходимо загрузить отчеты по ЛР в формате pdf или
        word до 12.03.22 включительно.
      </Text>

      <View style={styles.addFile}>
        <Text
          style={{
            fontFamily: "gilroy-medium",
            fontSize: 17,
          }}
        >
          Прикрепленные файлы
        </Text>

        <View style={styles.filesContainer}>
          <Text
            style={{
              color: "#999999",
            }}
          >
            Нет прикрепленных файлов
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.btnAddFiles}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Ionicons name="ios-add-outline" size={24} color="black" />
          <Text>Добавить файл</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnEditFiles}>
        <Text>Редактировать ответ</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.sendCheck}
        onPress={() => setModalVisible(true)}
      >
        <Text
          style={{
            color: "#fff",
            fontFamily: "gilroy-medium",
            fontSize: 16,
          }}
        >
          Отправить на проверку
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddHomeWork;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
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
  titleAdd: {
    marginLeft: 15,
    fontFamily: "gilroy-medium",
    fontSize: 26,
  },
  headerLab: {
    marginTop: 31,
    fontFamily: "gilroy-medium",
    fontSize: 26,
  },
  description_hw: {
    fontSize: 16,
    fontFamily: "gilroy-medium",
    color: "#999999",
    marginTop: 10,
  },
  filesContainer: {
    width: 326,
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#E2E2E2",
    marginTop: 14,
  },
  addFile: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    width: 349,
    height: 128,
    marginTop: 28,
  },
  btnAddFiles: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: 349,
    height: 50,
    borderRadius: 45,
    marginTop: 25,
  },
  btnEditFiles: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: 349,
    height: 50,
    borderRadius: 45,
    marginTop: 10,
  },
  sendCheck: {
    backgroundColor: "#90B3E7",
    width: 349,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 45,
  },
  btnModalClose: {
    width: 38,
    height: 38,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 17,
  },
  closeModalContainer: {
    height: 775,
    backgroundColor: "#fff",
    marginTop: 118,
    padding: 20,
    borderRadius: 40,
  },
  btnModalAdd: {
    width: 349,
    height: 267,
    backgroundColor: "#F0F0F0",
    borderRadius: 25,
    marginTop: 21,
    alignItems: "center",
    justifyContent: "center",
  },
  btnSave: {
    width: 349,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#90B3E7",
  },
});
