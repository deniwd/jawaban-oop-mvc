const View = require('../views/View')
const Todo = require('../models/ToDo')

class ToDoController{
    static help() {
//        console.log("Help dalam controllers")
        View.help()
    }

    static wines() {
//        Todo.getTodos()
        const result = Todo.getTodos()
        View.wines(result)
    }

    static add(params) {
//        Todo.add(params)
//        console.log(params)
        let feedback = Todo.add(params)
        View.message(feedback)
    }

    static sell(params) {
        let feedback = Todo.sell(params)
        View.message(feedback)



    }

    static rename(params) {
        let feedback = Todo.rename(params)
        View.message(feedback)
    }

    static findById(params) {
        let feedback = Todo.findById(params)
        View.message(feedback)
    }
  
    static message(msg) {
        View.message(msg)
    }

}






module.exports = ToDoController;

