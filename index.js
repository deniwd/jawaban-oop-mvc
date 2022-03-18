const command = process.argv[2];
const params = process.argv.slice(3);
const ToDoController = require("./controllers/ToDoController");

switch (command) {
  case "help":
    // console.log("Help")
    ToDoController.help();
    break;
  case "wines":
    //    console.log("Wines")
    ToDoController.wines();
    break;
  case "add":
    //    console.log("Add");
    ToDoController.add(params);
    break;
  case "sell":
    //    console.log("Sell");
    ToDoController.sell(params);
    break;
  case "rename":
    //    console.log("Rename");
    ToDoController.rename(params);
    break;
  case "findById":
    //    console.log("FindByID");
    ToDoController.findById(params);
    break;
  default:
    //    console.log("Unknown Command");
    ToDoController.message("Unknown command.");
    break;
}

// console.log(command)

/**
 * Todo Apps dengan menggunakan konsep OOP dan MVC:
 *
 * Terdapat 6 command:
 * - node index.js
 * - node index.js help
 * - node index.js wines
 *      - menampilkan list dari wines yang tersedia dalam rak
 *
 * - node index.js add <wine_name>
 *      - menambah wine ke dalam rak
 *
 * - node index.js sell <wind_id>
 *      - menghapus wine dari dalam rak
 *
 * - node index.js rename <wine_id> <wine_name>
 *      - mengganti nama wine di dalam rak
 *
 * - node index.js findById <wine_id>
 *      - mengetahui informasi wine dari dalam rak
 *
 */

// const fs = require('fs');

// let data = fs.readFileSync('./wines.json', 'utf8');

// let parsedData = JSON.parse(data)

// console.log(parsedData)


// JSON
// [
//   {
//       "id": 1,
//       "name": "Moscato 2010",
//       "year": 2010,
//       "type": "Red",
//      "createdAt": "2021-01-10"
//   }
// ]

