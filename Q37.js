"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
function make_shirt(size = "l", message = "i love typescript!") {
    console.log(`i'm making a ${size} T_shirt wuth the message"${message}".`);
}
make_shirt("large");
make_shirt("medium");
make_shirt("small", "i m programer");
