# Configurando o projeto

### Iniciado
- `react-native init nomedoprojeto`
- Crie uma pasta chamada src dentro da raiz do projeto
- Crie as pastas components, config, pages e styles dentro da pasta src
- Mova o arquivo app.js para dentro da pasta src
- Depois de mover renomeie o arquivo app.js para index.js
- Rode o projeto no emulador para verificar se está tudo ok `react-native run-ios ou run-android`

### Instalando o Eslint
- Comando: `npm info "eslint-config-airbnb@latest" peerDependencies`
    vai gerar o seguinte [código](https://github.com/leandrodavimg/Estrutura-de-um-projeto-react-native/blob/master/eslint.txt).
    Copie esse código para o arquivo packge,json dentro de devDependencies
    Nota: é necessário ter a extensão do eslint instalada no seu editor de texto.
- Comando: `yarn` -> para instalar as dependencias.
- Comando: `yarn add babel-eslint eslint-config-airbnb eslint-plugin-react-native --dev`
- Crie um arquivo chamada .eslintrc na raiz do projeto e copie o código desse repositorio [link](https://github.com/leandrodavimg/Estrutura-de-um-projeto-react-native/blob/master/.eslintrc)

### Configurar o editor config
- Crie um arquivo chamado .editorconfig dentro da raiz do projeto e cole o seguinte [código nele](https://github.com/leandrodavimg/Estrutura-de-um-projeto-react-native/blob/master/editorconfig.txt)

### Instalando o Reactotron 
- Comando: `yarn add reactotron-react-native@1.14.0 --dev`
- Crie um arquivo chamado ReactotronConfig.js dentro da pasta src/config e copie o seguinte [código](https://github.com/leandrodavimg/Estrutura-de-um-projeto-react-native/blob/master/ReactotronConfig.js)

### Instalando o React DevTools
- Comando: `yarn add react-devtools --dev`
- Para rodar: `yarn run react-devtools`

### Configurando o Babel Module Resolver
- Comando: `yarn add babel-plugin-module-resolver eslint-import-resolver-babel-module --dev`
- Depois altere o arquivo .babelrc que fica na raiz do projeto, [veja como](https://github.com/leandrodavimg/Estrutura-de-um-projeto-react-native/blob/master/babel.txt)

### Configurando o propTypes
- Comando: `yarn add prop-types`

### Configurando os estilos globais
- dentro da pasta src/styles crie 4 arquivos.
- [index.js](https://github.com/leandrodavimg/Estrutura-de-um-projeto-react-native/blob/master/index.js)
- [general.js](https://github.com/leandrodavimg/Estrutura-de-um-projeto-react-native/blob/master/general.js)
- [metrics.js](https://github.com/leandrodavimg/Estrutura-de-um-projeto-react-native/blob/master/metrics.js)
- [colors.js](https://github.com/leandrodavimg/Estrutura-de-um-projeto-react-native/blob/master/colors.js)

# Configurando REDUX e REDUX-SAGA
- Crie uma pasta chamada store dentro de src
- Crie um arquivo index.js dentro da pasta store, configure o index com o [seguinte código](https://github.com/leandrodavimg/Estrutura-de-um-projeto-react-native/blob/master/store-index.js)
- Crie uma pasta chamada ducks dentro da pasta store
- Crie uma pasta chamada sagas dentro da pasta store
- Configure o index da raiz com a tag `<Provider>` [exemplo index com redux]()
- Crie um index.js dentro da pasta ducks, [veja o código](https://github.com/leandrodavimg/Estrutura-de-um-projeto-react-native/blob/master/ducks-index.js)
- Crie um arquivo index.js dentro da pasta sagas, [veja o código](https://github.com/leandrodavimg/Estrutura-de-um-projeto-react-native/blob/master/saga-index.js)
- Instale duas dependências redux: `yarn add redux react-redux`
- Instale o axios e o Redux-saga: `yarn add axios redux-saga`
- Crie uma pasta chamada services dentro de src e dentro crie um index com a [seguinte configuração](https://github.com/leandrodavimg/Estrutura-de-um-projeto-react-native/blob/master/axios.js) 
