# Dependências
### Dev Dependencies
* @types/express: servem para importar as tipagens das bibliotecas. Portanto, usada para o typescript funcionar corretamente 
* @types/pg: para que a biblioteca que faz a conexão do banco de dados com nossa API reconheça a tipagem do ts
* ts-node-dev: necessário para que o interpretador node traduza o typescript para javascript. Além disso ele realiza o hot reload.
* typescript: necessário para o reconhecimento do typescript

### Dependencies
* dotenv: necessário para importar as variáveis de ambiente para dentro do nosso projeto
* express: framework usado para hostear o servidor, tratar rotas e muitas outras funcionalidades
* express-promise-router: utilizado para conseguirmos exportar rotas para outros arquivos (as rotas retornam promises) e assim podemos utiliza-las no nosso arquivo de services. Isso torna possível a segmentação do código. Dessa forma, temos um arquivo específico de rotas para cada controller, e não um único arquivo contendo todas as rodas da api.
* pg: facilitador para estabelecer a conexão entre a api e o banco de dados postgresql

# Estrutura
* Temos quatro subpastas dentro da pasta source. A pasta config é responsável por configurar a conexão da API com o banco de dados. A pasta controllers é responsável por controlar o que a API deve fazer quando receber as chamadas nas rotas, e chamar as devidas funções necessárias para fazer a regra de negócios funcionar. A pasta models representa as entidades do projeto. Por fim, a pasta routes contêm todas as rotas da API, e nela chamamos os controllers. Na raiz da pasta source temos o arquivo app.ts para configurar todo o ambiente.

# Modo de execução da aplicação
* Inicialmente, no arquivo service, definimos a porta padrão para hospedar o servidor. Após isso, no arquivo app.ts, temos toda a configuração de ambiente do projeto. Esse arquivo diz que a nossa api irá usar todas as rotas presente na pasta routes, além de instanciar a aplicação do express. A arquitetura do projeto funciona da seguinte maneira: quando uma rota receber um post, a rota irá chamar o controller responsável por tratar a requisição. O controller irá estabelecer a regra de negócio, criar uma instância de classe presente em models e por fim adicionar o json da requisição no banco de dados.
