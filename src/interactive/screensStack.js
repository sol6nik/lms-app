import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/authScreen";
import NewNavBar from "./NewNavBar";
import PersonalMenu from "../screens/personalOption/personalMenu";
import AboutAccount from "../screens/personalOption/aboutAccount";
import OptionsSdo from "../screens/personalOption/optionsSdo";
import AboutUser from "../screens/personalOption/aboutUser";
import ReadyHW from "../screens/funcOpt/readyHw";
import Notifications from "../screens/funcOpt/notifications";
import AboutCourse from "../screens/GeneralInfo/AboutCourse";

const Stack = createNativeStackNavigator();

export default function ScreensStacks() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Authorization" component={Login} />
      <Stack.Screen name="MainScreen" component={NewNavBar} />
      <Stack.Screen name="Profile" component={PersonalMenu} />
      <Stack.Screen name="Account" component={AboutAccount} />
      <Stack.Screen name="Sdo" component={OptionsSdo} />
      <Stack.Screen name="User" component={AboutUser} />
      <Stack.Screen name="ReadyHomeWork" component={ReadyHW} />
      <Stack.Screen name="Noti" component={Notifications} />
      <Stack.Screen name="AboutCourse" component={AboutCourse} />
    </Stack.Navigator>
  );
}
