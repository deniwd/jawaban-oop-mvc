class View {
    static help() {
        console.log(" ");
        console.log("Command List: ")
        console.log("node index.js")
        console.log("node index.js help")
        console.log("node index.js wines")
        console.log("node index.js add <wine_name>")
        console.log("node index.js sell <wine_id>")
        console.log("node index.js rename <wind_id> <wine_name>")
        console.log("node index.js findById <wine_id>")
        console.log("  ");
    }

    static wines(todos) {
        console.log(" ");
        console.log("Welcome to Wine Management!!");
        todos.forEach(todo => {
            const {id, name} = todo
            console.log(`${id}. ${name} `)
        })
        console.log(" ");
    }


    static message(msg){
        console.log(msg)
    }

}

module.exports = View;

