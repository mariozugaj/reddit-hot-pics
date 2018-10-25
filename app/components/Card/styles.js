import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const imageWidth = Dimensions.get("window").width;

export default EStyleSheet.create({
  $underlayColor: "$underlay",
  container: {
    flex: 1,
    backgroundColor: "$white",
    marginTop: 5,
    marginBottom: 5,
  },
  header: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 29,
    height: 29,
    borderRadius: 15,
    overflow: "hidden",
  },
  metaText: {
    paddingLeft: 10,
    color: "$lightText",
  },
  title: {
    padding: 15,
    fontSize: 20,
    fontWeight: "400",
  },
  pinIcon: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  image: {
    width: imageWidth,
    height: imageWidth,
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
  },
  footerText: {
    color: "$darkText",
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 10,
  },
  footerGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
});
