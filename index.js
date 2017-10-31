const csv = require('csv');

const fs = require('fs');
const parse = require('csv-parse');

const program = require('commander');
const inquirer = require('inquirer');


var model = require('./data');

program
    .version('1.0.0')
    .parse(process.argv);

var filename = '';

getListJSON()

var parser = parse({
    delimiter: ':',
    trim: true,
    skip_empty_line: true,
    skip_lines_with_empty_values: true
}, function (err, data) {

    var modifiedComponents = modifyData(model.model.components)
    model.model.components = modifiedComponents

    console.log(model.model)
    var regex = /(.+)(.json)$/
    var newFilename = regex.exec(filename)[1] + '-change.json';
    writeFile(newFilename, JSON.stringify(model.model, ' ', '  '));
});



function inquir(files) {
    inquirer.prompt([{
        type: "list",
        name: "filename",
        message: "JSON Filename:",
        choices: function () {
            return files
        }
    }]).then(function (answers) {
        filename = answers.filename;
        fs.createReadStream('./' + filename).pipe(parser);
    });
}


function getListJSON() {
    // 숫자로 끝나는 .json파일.  package등등 때문에 필터함.
    var regex = /\d\.(json)$/;
    fs.readdir('./', (err, files) => {
        var csvFiles = files.filter(file => {
            return regex.test(file)
        });

        inquir(csvFiles);
    });
}



function writeFile(fileName, outputString) {
    var outputFileFullName = fileName

    fs.writeFile(outputFileFullName, outputString, {
        encoding: 'utf8',
        flag: 'w'
    }, (err, fd) => {
        if (err && err.code != 'EEXIST') {
            throw err;
        }

        console.info(outputFileFullName + " file created.")
    });
}

function sortObject(object, desc) {
    var sortable = [];
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            sortable.push({
                key: key,
                value: object[key]
            })
        }
    }

    sortable.sort((a, b) => {
        var isSmallerThanB = a.key < b.key ? -1 : 1;

        if (desc)
            isSmallerThanB = -isSmallerThanB

        return isSmallerThanB
    })

    var sorted = {};
    sortable.forEach(o => {
        sorted[o.key] = o.value;
    })

    return sorted;
}




function modifyData(components) {

  var arr = [];

  components.forEach(function(curComponent, index, components){
    if(curComponent.id && curComponent.id.indexOf('chute') != -1 &&
      curComponent.type == 'rect' && Math.floor(curComponent.width) == 63 &&
      curComponent.fillStyle == '#fcfcfc'){
        var obj = {
          "width": 70,
          "height": 21,
          "fillStyle": "#fcfcfc",
          "strokeStyle": "#000",
          "alpha": 1,
          "hidden": false,
          "lineWidth": 0,
          "lineDash": "solid",
          "lineCap": "butt",
          "rotation": 0,
          "round": 11.878751288743588,
          "text": "#{data}",
          "fontSize": 16,
          "fontFamily": "Yantramanav-Regular",
          "textFormat": "#,##0",
          "textAlign": "right",
          "fontColor": "#303030",
          "paddingRight": 5
        }
        curComponent = Object.assign(curComponent, obj);
      }
      arr.push(curComponent);
  })

  return arr
}
