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
    vai gerar o seguinte código:
    `"eslint": "^4.9.0",
    "eslint-plugin-import": "^2.7.0",
    "eslint-plugin-jsx-a11y": "^6.0.2",
    "eslint-plugin-react": "^7.4.0"`
    Copie esse código para o arquivo packge,json dentro de devDependencies
    Nota: é necessário ter a extensão do eslint instalada no seu editor de texto.
- Comando: `yarn` -> para instalar as dependencias.
- Comando: `yarn add babel-eslint eslint-config-airbnb eslint-plugin-react-native --dev`
- Crie um arquivo chamada .eslintrc na raiz do projeto e copie o código desse repositorio [link](https://github.com/leandrodavimg/Estrutura-de-um-projeto-react-native/blob/master/.eslintrc)

### Configurar o editor config
- Crie um arquivo chamado .editorconfig dentro da raiz do projeto e cole o seguinte [código nele](#)

### Instalando o Reactotron 