const shuffler = array => array.reduce((accumulator, currentValue) => {
    const randomIndex = Math.ceil(Math.random() * 10);
    accumulator.splice(randomIndex, 0 ,currentValue);
    return accumulator;
}, []);
