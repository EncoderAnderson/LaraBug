import { StyleSheet } from 'react-native';




const Styles = StyleSheet.create({
    ContainerP: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',

    },
    ContainerP2: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        position: 'absolute'

    },

    InputText: {
        width: '%83',
        height: 200,
        borderWidth: 1,
        borderColor: 'white'
    },
    TextPink:
    {
        fontSize: 30,
        textShadowRadius: 5,
        color: '#FF00FF', // Cor do texto rosa choque
        textShadowColor: 'black', // Cor da sombra de texto (azul bebê)
        textShadowOffset: { width: 3, height: 3 }, // Deslocamento da sombra

    },
    TextBlue:
    {
        fontSize: 30,
        textShadowRadius: 5,
        color: '#00FFFF', // Cor do texto rosa choque
        textShadowColor: 'black', // Cor da sombra de texto (azul bebê)
        textShadowOffset: { width: 3, height: 3 }, // Deslocamento da sombra

    },
    TextPurple:
    {
        fontSize: 30,
        textShadowRadius: 5,
        color: '#A020F0', // Cor do texto rosa choque
        textShadowColor: '#00FFFF', // Cor da sombra de texto (azul bebê)
        textShadowOffset: { width: 5, height: 5 }, // Deslocamento da sombra

    },
    TextWhite:
    {
        fontSize: 28,
        textShadowRadius: 2,
        color: '#00FFFF', // Cor do texto rosa choque
        textShadowColor: 'black', // Cor da sombra de texto (azul bebê)
        textShadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
        fontWeight: '400'

    },

    ButtonHome: {
        backgroundColor: 'transparent',
        borderRadius: 25,
        shadowColor: '#ff2ce9', // Cor da sombra neon (mesma cor de fundo)
        shadowOpacity: 1, // Opacidade da sombra ajustada
        shadowRadius: 50, // Raio da sombra ajustado
        elevation: 20, // Elevação (usado para criar sombra no Android)
        paddingVertical: 5, // Espaçamento vertical para tornar o botão visível
        paddingHorizontal: 20, // Espaçamento horizontal para tornar o botão visível
        marginTop: -50,
        alignSelf: 'center',
    },


    ButtonTextPink: {
        color: 'white',
        fontSize: 33,
        fontWeight: 'bold',
        textShadowColor: '#ff2ce9', // Cor do efeito neon (mesma cor de fundo)
        textShadowOffset: { width: 0, height: 0 }, // Posição do efeito neon (não desloca a sombra)
        textShadowRadius: 10, // Raio do efeito neon
        alignSelf: 'center',
        fontFamily: 'Roboto',
    },


    ButtonTextBlue: {
        color: '#00FFFF',
        fontSize: 33,
        fontWeight: 'bold',
        textShadowColor: '#FF00FF', // Cor do efeito neon (mesma cor de fundo)
        textShadowOffset: { width: 3, height: 3 }, // Posição do efeito neon (não desloca a sombra)
        textShadowRadius: 10, // Raio do efeito neon
        alignSelf: 'center',
        fontFamily: 'Roboto',

    },


})

export default Styles;