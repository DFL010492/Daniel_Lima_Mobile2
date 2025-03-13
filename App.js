import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Animated } from 'react-native';
import { styles } from './AppStyle';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

SplashScreen.preventAutoHideAsync();

const integrantesLiga = [
  { id: '1', nome: 'Superman', imagem: require('./assets/imagens/superman.png'), descricao: 'Superman é um dos heróis mais poderosos da DC Comics. Ele vem do planeta Krypton e tem habilidades sobre-humanas, incluindo força, voo e visão de calor. Seu maior inimigo é Lex Luthor.' },
  { id: '2', nome: 'Batman', imagem: require('./assets/imagens/batman.png'), descricao: 'Batman é um vigilante que protege Gotham City. Sem superpoderes, ele usa sua inteligência, habilidades de luta e tecnologia avançada para combater o crime. Seu maior inimigo é o Coringa.' },
  { id: '3', nome: 'Mulher-Maravilha', imagem: require('./assets/imagens/ww.png'), descricao: 'Mulher-Maravilha é uma guerreira amazona com força sobre-humana. Ela usa um laço mágico que obriga a verdade e braceletes indestrutíveis para proteger o mundo contra ameaças.' },
  { id: '4', nome: 'Flash', imagem: require('./assets/imagens/flash.png'), descricao: 'Flash é o homem mais rápido do mundo. Ele usa sua supervelocidade para combater vilões e viajar no tempo. Barry Allen, sua identidade civil, é um cientista forense.' },
  { id: '5', nome: 'Aquaman', imagem: require('./assets/imagens/aquaman.png'), descricao: 'Aquaman é o rei de Atlântida e tem o poder de se comunicar com criaturas marinhas. Ele também possui força sobre-humana e usa um tridente mágico para lutar contra o mal.' },
  { id: '6', nome: 'Ciborgue', imagem: require('./assets/imagens/ciborgue.png'), descricao: 'Ciborgue é meio humano e meio máquina. Ele possui tecnologia avançada incorporada ao seu corpo, incluindo força aprimorada, armas embutidas e a capacidade de se conectar a qualquer sistema eletrônico.' },
];

export default function App() {
  const [fontsLoaded] = useFonts({
    'BlackOpsOne': require('./assets/fonts/BlackOpsOne-Regular.ttf'),
    'Poller': require('./assets/fonts/PollerOne-Regular.ttf'),
  });
  const [selectedHero, setSelectedHero] = useState(null);
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
    setSelectedHero(id);
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <SafeAreaProvider>
        <SafeAreaView edges={['top']} style={styles.safeArea}>
          <FlatList
            contentContainerStyle={{ paddingHorizontal: 16 }}
            ListHeaderComponent={
              <>
                <Text style={styles.title}>Liga da Justiça</Text>
                <Image source={require('./assets/imagens/jl.png')} style={styles.logo} />
                <Text style={styles.description}>
                  A Liga da Justiça, também conhecida como Liga da Justiça da América (no original, Justice League of America),
                  é uma fictícia equipe de super-heróis originada nas histórias em quadrinhos publicadas pela DC Comics.
                </Text>
                <Text style={styles.subTitle}>Integrantes:</Text>
              </>
            }
            data={integrantesLiga}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => toggleExpand(item.id)}>
                <Animated.View style={[styles.card, expanded[item.id] && styles.expandedCard]}>
                  <Image source={item.imagem} style={styles.avatar} />
                  <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>{item.nome}</Text>
                    {expanded[item.id] && <Text style={styles.cardDescription}>{item.descricao}</Text>}
                  </View>
                  <Ionicons name={expanded[item.id] ? 'chevron-down' : 'chevron-forward'} size={24} color="#000" style={styles.arrowIcon} />
                </Animated.View>
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
}