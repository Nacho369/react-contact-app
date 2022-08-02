# Contact App Project
Okay, so the basically, the `App.js` is my root file. Going through the code, I placed all my components in a folder named `components`. In the `components` folder, going into the card list is where I loop through the contacts gotten as props from the root file `App.js`, and then I pass it as a prop into the `ContactCard`. The contact card is each card that is that is gotten from the `server-api` folder then and displayed. The `ContactCard` gets the props and stores it in a variable as **contactData**.

## My Issue
So now the file in which I am passing the **contactData** as props is a class components and where I am passing it from is functional components, but when I pass the is as props in line `27 of ContactCard`, the problem is I can't acces the props when I pass it through the react router link. When I do that and I `console.log` `this.props` I just get the function from the `App.js` and I don't get the props I passed with the link. I'm just looking for a way to get access to the props passed from the react router link. By the way I am not really too familiar with class components Thank you.

## Usage

### Install dependencies

```
npm install
```

### Run React dev server (http://localhost:3000). **Must be in the `contact-app` folder.**

```
npm start
```

### Run the JSON server (http://localhost:3005/contacts). **Must be in the `server-api` folder.**

```
npm start
```

### To build for production

```
npm run build
```

