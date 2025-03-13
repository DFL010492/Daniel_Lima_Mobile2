import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  safeArea: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontFamily: "BlackOpsOne",
    color: "#222",
    textAlign: "center",
    marginBottom: 10,
  },
  logo: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
    marginVertical: 10,
    fontFamily: "Poller",
  },
  subTitle: {
    fontSize: 22,
    fontFamily: "BlackOpsOne",
    color: "#222",
    marginBottom: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5BF3C",
    padding: 15,
    marginBottom: 10,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 3,
  },
  expandedCard: {
    paddingVertical: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },
  cardDescription: {
    fontSize: 14,
    color: "#333",
    marginTop: 5,
    fontFamily: "Poller",
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
});
