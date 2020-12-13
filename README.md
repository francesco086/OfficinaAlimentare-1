# Officina Alimentate Development

## Introduction
1. Get started
2. Concepts
  - styling
  - page loader
  - slider
  - portfolio
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
All the code will live under the src file 
#### Styling
All the styling is done in a language called `scss` which is basically `css` but abit easier 
and the files can be found in folder `Styles` and each section has its own file under `Styles/sections`

All the colors are defined in the `color.scss` file and are referenced by $ ex: `color: $WHITE;`
this will make it easy to change colors really fast later on

#### Page-Loader
You should see that the page is first white and then fades away, this is the loader to "hide" the startup faze of the page, you can control this at 2 points
1. The cool-off period which is the time it will take before it fades away (search for LOADING-COOL-OFF `cmd-shift-f`)
2. The fade period, which is the duration of the actual animation (search for LOADING-FADE-OFF - now its 1000ms)

#### Slider
Follow the style for slider `styles/slider.scss` to style the drsgger
To change the images just 
replace the `source.png & overlay.png` under *public/assets/images/slider*


#### Portfolio
Make sure that all pdf-documents has a corresponding file
and put the documents under `public/assets/documents/portfolio`
and with the same name but for images under `public/assets/images/portfolio`

Then inside the *Portfolio code* (found in `src/pages/Home/Components/Portfolio.jsx`)
on line 5 there is a array called names, add all the document names here
example:
```
const names = ["laura"] 
``` 
 

### Produciton
Run `yarn build` in the terminal and you should see a folder build after its done,
this is your page, try to open the `index.html` in your browser and you should see the page.

### Deployment
When you have a server of choise you can just drop all the contents of the build to it,

A service which I recomend would be [Heroku](https://www.heroku.com/), which you could even hook to git if you make it that far, feel free to contact for more information.
