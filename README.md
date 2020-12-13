# Officina Alimentate Development

## Introduction
1. Get started
2. Concepts
3. Production
4. Deployement

### Get Started
1. installment
2. run the code

#### installment
Make sure you have **git** & **NodeJS** installed
Copy the link [https://github.com/onkelhoy/OfficinaAlimentare.git](https://github.com/onkelhoy/OfficinaAlimentare.git)

Open **Visual Studio Code** (*vscode*) (or terminal if you dont like the editor)
And *create new project*
Name your folder and click open

Now in the terminal `cmd-j` in mac if you use *vscode*
and type:
```
git clone https://github.com/onkelhoy/OfficinaAlimentare.git .
```

Now you should have all the code but need to also install it!
first we install yarn (as the project is writted with it)
and then install the dependancies

```
npm install yarn -g
yarn install
```


Now you are done with installment!

#### Run your code
Once you finished installment type the following in the terminal
to start your project - (you will always do this to start it)
```
yarn start
```

### Concepts
`yarn start` Will start your code in a development envionment meaning that
you can change stuff and it should appear live for you.

`yarn build` Will do the magic of merging and bundling your project into a folder called **build**.
All of the contents will be later placed in your server of choise.

### Produciton
Run `yarn build` in the terminal and you should see a folder build after its done,
this is your page, try to open the `index.html` in your browser and you should see the page.

### Deployment
When you have a server of choise you can just drop all the contents of the build to it,

A service which I recomend would be [Heroku](https://www.heroku.com/), which you could even hook to git if you make it that far, feel free to contact for more information.
