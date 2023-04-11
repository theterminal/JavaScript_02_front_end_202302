// JavaScript - Loop 'laUsing the property 'label' can be used to indicate which loop to break.


loop1: for (let i = 0; i < 10; i++) {
    loop2: for (let j = 0; j < 10; j++) {
        if (i === 2 && j === 2) {
            console.log('Now it\'ll break the main loop! And you will not have to use flag elements!');
            break loop1;
        }
        console.log(i, j);
    }
}