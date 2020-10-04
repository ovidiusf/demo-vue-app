# demo-vue-app

This application serves as a demonstration of the following technologies:

- Vue
- Vuetify
- Vuex
- Vue Router
- Axios
- NProgress Library
- Vuelidate

It has the following capabilities:

- Home tab
- Event List Tab, to see all events running
- Create Event tab, to add an event via a form
- Check every event by clicking on it or after creating it directly
- 404 and Network Issues pages
- Loading bars and notifications

## Project setup

```
npm install
```

### Compile and hot-reload for development

Go to the /src/services/EventService.js file and update the baseIp variable to the IP of the machine where you want to run the dev server.

```
npm run serve
```

### To serve the local DB via nodemon

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```
