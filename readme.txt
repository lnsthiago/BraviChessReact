Foi criado um projeto de React com .net Core, React responsavel pela parte do frontend enquanto o .net Core para o backend.

React:
Criado duas telas, uma delas para apresentar as informações do Readme e a outra tela apresentando o tabuleiro do xadrez com suas respetivas coordenadas, onde quando clicado em alguma coordenada o React faz uma requisiçao para a API, ao receber a resposta do API é destacado em vermelho as proximas possiveis posições do cavalo.

.net Core:
Recebe a requisição do React com a posição atual do cavalo, processa e retorna ao React uma lista com as próximas posições permitidas para o cavalo. Foi implementado testes cobrindo o código.
