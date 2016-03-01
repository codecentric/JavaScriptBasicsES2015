var fn = (arg = 42, foo) => {
  return `the first argument is ${arg} and second is ${foo != null ? foo : 'not there'}`
}
