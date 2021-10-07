# Getting Started with SimpleDocs

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

É importante destacar que essa aplicação usa como dependencia para gerenciar as rotas o React Dom Router
```sh
npm install history react-router-dom@next
```
Não é necessário instalar ao principio uma vez que já temos o arquivo package.json atualizado com a dependencia.

Para mais informações veja a documentação: <a href="https://reactrouter.com/web/guides/quick-start" target="_blank">See Documentation</a>

<h3>To-do list</h3>
Devido as limitações de tempo algumas funcionalidades não foram implementadas mas seriam interessantes estar presentes nas versões futuras da aplicação.
<ul>
  <li>[ ] Implementar o sistema de paginação.</li>
  <li>[ ] Implementar um link de ir para o documento anterior ou seguinte quanto estamos em uma página detatle de um documento. <small>Um possível caminho é identificar o "indexfOf" que o elemento esta presente no array e verificar se existe um próximo ou anterior.</small></li>
  <li>[ ] Validar os campos no momento da criação de um novo documento</li>
  <li>[ ] Formatar o campo data no momento de guardar os datos.</li>
  <li>[ ] Configurar mensagens de alerta sempre que um novo documento é salvo ou apagado.</li>
</ul>