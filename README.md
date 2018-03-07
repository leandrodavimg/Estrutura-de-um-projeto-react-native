# Configurando o projeto

### Iniciado
- `react-native init nomedoprojeto`
- Crie uma pasta chamada src dentro da raiz do projeto
- Crie as pastas components, config e styles dentro da pasta src
- Mova o arquivo app.js para dentro da pasta src
- Depois de mover renomeie o arquivo app.js para index.js
- Rode o projeto no emulador para verificar se está tudo ok `react-native run-ios ou run-android`

### Instalando o Eslint
- Comando: `npm info "eslint-config-airbnb@latest" peerDependencies`
    vai gerar o seguinte [código](https://github.com/leandrodavimg/Estrutura-de-um-projeto-react-native/blob/master/eslint.txt)
    Copie esse código para o arquivo packge,json dentro de devDependencies
    Nota: é necessário ter a extensão do eslint instalada no seu editor de texto.
- Comando: `yarn` -> para instalar as dependencias.
- Comando: `yarn add babel-eslint eslint-config-airbnb eslint-plugin-react-native --dev`
- Crie um arquivo chamada .eslintrc na raiz do projeto e copie o código desse repositorio [link](https://github.com/leandrodavimg/Estrutura-de-um-projeto-react-native/blob/master/.eslintrc)

### Configurar o editor config
- Crie um arquivo chamado .editorconfig dentro da raiz do projeto e cole o seguinte [código nele](https://github.com/leandrodavimg/Estrutura-de-um-projeto-react-native/blob/master/editorconfig.txt)

### Instalando o Reactotron 
- Comando: `yarn add reactotron-react-native@1.14.0 --dev`
- Crie um arquivo chamado ReactotronConfig.js dentro da pasta src/config e copie o seguinte [código]()