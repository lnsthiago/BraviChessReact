Foi criado um projeto de React com .net Core, React responsavel pela parte do frontend enquanto o .net Core para o backend.

React:
Criado duas telas, uma delas para apresentar as informa��es do Readme e a outra tela apresentando o tabuleiro do xadrez com suas respetivas coordenadas, onde quando clicado em alguma coordenada o React faz uma requisi�ao para a API, ao receber a resposta do API � destacado em vermelho as proximas possiveis posi��es do cavalo.

.net Core:
Recebe a requisi��o do React com a posi��o atual do cavalo, processa e retorna ao React uma lista com as pr�ximas posi��es permitidas para o cavalo. Foi implementado testes cobrindo o c�digo.
