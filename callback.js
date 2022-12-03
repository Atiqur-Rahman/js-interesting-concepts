function welcomeMessage(name, greetHandler) {
    // console.log(greetHandler);
    greetHandler(name);
}
// const names = ['Tom Hanks', 'Tom Brady', 'Tom Cruise'];
// const myObj = { name: 'Tom chinku', age: 11 };
function greetMorning(name) {
    console.log('Good morning', name);
}
function greetAfternoon(name) {
    console.log('Good afternoon', name);
}
function greetEvening(name) {
    console.log('Good Evening', name);
}
welcomeMessage('Tom Hanks', greetMorning);
welcomeMessage('Sakib Hanks', greetAfternoon);
welcomeMessage('Bappa Raj', greetEvening);
