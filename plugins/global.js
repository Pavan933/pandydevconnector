export default (context, inject) => {
  // define global values here
  let userRoute = ''
  const getRoute = () => {
    return userRoute
  }

  const setRoute = (route) => {
    userRoute = route
  }

  // Inject in Vue, context and store.
  inject('getRoute', getRoute)
  // For Nuxt <= 2.12, also add 👇
  context.$getRoute = getRoute
  // Inject in Vue, context and store.
  inject('setRoute', setRoute)
  // For Nuxt <= 2.12, also add 👇
  context.$setRoute = setRoute
}
