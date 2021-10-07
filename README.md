# Getting Started with SimpleDocs

## Available Scripts

In the project directory, you can run:

```sh
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

```sh
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

It's important to highlight that this application uses as dependency to manage the route. 
```sh
npm install history react-router-dom@next
```
It's not necessary to install in the beginning, once that we already have the package.json updated with the dependency. 

For more information, : <a href="https://reactrouter.com/web/guides/quick-start" target="_blank">check the documentation</a>

<h3>To-do list</h3>
Because we're short on time, a few funcionalities weren't implemented but it would be nice if they were in the next version of the application.
<ul>
  <li>[ ] Implement the pagination system.</li>
  <li>[ ] Implement a link to go to the previous or following document when we're at a detailed page of a document. </li>
  <li>[ ] Validate the fields once the new document is created</li>
  <li>[ ] Format the data field once it's time to save the data.</li>
  <li>[ ] Always set up alert messages once a new document is saved or erased.</li>
</ul>

<h3>See online</h3>
<p><a href="https://react-simple-docs.netlify.app/" target="_blank">See online</a></p>