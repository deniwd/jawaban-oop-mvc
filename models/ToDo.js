const fs = require("fs");

class Todo {
  constructor(id, name, year, type, createdAt) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.type = type;
    this.createdAt = createdAt;
  }
  static getTodos() {
    const todos = JSON.parse(fs.readFileSync("./wines.json", "utf8"));
    //        console.log(todos)
    const todosInstance = todos.map((todo) => {
      let { id, name, year, type, createdAt } = todo;
      createdAt = new Date(createdAt);
      return new Todo(id, name, year, type, createdAt);
    });
    return todosInstance;
  }

  static add(params) {
    const todos = this.getTodos();
    const fields = params[0].split("/");
    const name = fields[0];
    const year = Number(fields[1]);
    let type = fields[2];

    switch (type) {
      case "R":
        type = "Red";
        break;
      case "W":
        type = "White";
        break;
      default:
        type = "Other";
        break;
    }

    const createdAt = new Date();
    const id = todos[todos.length - 1].id + 1;
    const newTodo = new Todo(id, name, year, type, createdAt);
    todos.push(newTodo);
    this.save(todos);
    return `"${name}" has been added!`;
    //  console.log(todos)
  }

  static save(todos) {
    let jsonString = JSON.stringify(todos, null, 3);
    fs.writeFileSync("./wines.json", jsonString);
  }

  static sell(params) {
    let todos = this.getTodos();
    const id = Number(params[0]);
    let sold = "";

    todos.forEach((todo) => {
      if (todo.id == id) {
        sold = todo.name;
      }
    });

    todos = todos.filter((todo) => todo.id !== id);
    this.save(todos);
    return `"${sold}" has been sold!`;

    //  return todos
  }

  static rename(params) {
    let todos = this.getTodos();
    const id = Number(params[0]);

    const fields = params[1].split("/");
    const name = fields[0];
    const year = Number(fields[1]);
    let type = fields[2];

    switch (type) {
      case "R":
        type = "Red";
        break;
      case "W":
        type = "White";
        break;
      default:
        type = "Other";
        break;
    }

//     todos = todos.map((todo) => {
//       if (todo.id === id) {
//         todo.name = name;
//         todo.year = year;
//         todo.type = type;  
//       }
//       return todo;
//     });

//     this.save(todos);
//     return `Wine number ${id} has been renamed !`;
//   }    
 

    todos = todos.map((todo) => {
      if (todo.id === id) {
        todo.name = name;
        todo.year = year;
        todo.type = type;  
      }
      return todo;
    });

    this.save(todos);
    return `Wine number ${id} has been renamed !`;
  }    


  static findById(params) {
    let todos = this.getTodos();
    const id = Number(params[0]);
    let idname = "";
    let idyear = 0;
    let idtype = "";
    let today = new Date().getFullYear()
    let years = 0;

    todos.forEach((todo) => {
        if (todo.id == id) {
          idname = todo.name;
          idyear = todo.year;
          idtype = todo.type;
        }
      });

    years = today - idyear;
    this.save(todos);
    return `${idname} is ${idtype} Wine with age of ${years} years.`;


  }


}

module.exports = Todo;
