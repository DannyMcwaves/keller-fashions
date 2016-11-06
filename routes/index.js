
//this routes thingy is supposed to bring out all the exported apis in the routes functions that are located
// just over here.
// so it will require all the functions and then return them to the caller.

module.exports =  {
    gets: require("./gets"),
    posts: require("./posts"),
    puts: require("./puts"),
    deletes: require("./deletes")
};
