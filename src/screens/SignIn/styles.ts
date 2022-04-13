import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    borderBottomWidth: 2,
  },
  content: {
    marginTop: -60,
    paddingHorizontal: 50,
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 32,
    marginBottom: 12,
    fontFamily: theme.fonts.title700,
    lineHeight: 40
  },
  subtitle: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 32,
    fontFamily: theme.fonts.title500,
    lineHeight: 25
  }
});
