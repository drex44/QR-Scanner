import { createStackNavigator, createAppContainer } from "react-navigation";
import HistoryScreen from "../Screens/HistoryScreen";
import ResultScreen from "../Screens/ResultScreen";
import ScannerScreen from "../Screens/ScannerScreen";

const RootStack = createStackNavigator(
  {
    Scanner: {
      screen: ScannerScreen
    },
    History: {
      screen: HistoryScreen
    },
    Result: {
      screen: ResultScreen
    }
  },
  {
    initialRouteName: "Scanner" //Default screen name
  }
);

export default createAppContainer(RootStack);
