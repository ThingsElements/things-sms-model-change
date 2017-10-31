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
    console.log(model.model.components.length)
    var modifiedComponents = modifyData(model.model.components)
    model.model.components = modifiedComponents

    // console.log(model.model.components)
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
        // 슈트 수량 표시 박스 수정
        curComponent.left = curComponent.left - 30.5

        var obj = {
          "width": 71,
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
        
    } else if(curComponent.text == "합 계" || curComponent.fillStyle == "#010eaa"){
        // 합계 박스 삭제 
        return
    } else if(curComponent.text == "상" && curComponent.fontSize == 19) {
        // 합계이면서 텍스트 "상" 삭제
        return
    } else if(curComponent.text == "하" && curComponent.fontSize == 19) {
        // 합계이면서 텍스트 "하" 삭제
        return
    } else if(curComponent.text == "상") {
        // "상" 텍스트 삭제 후 삼각형으로 변환
        var x = curComponent.left + 4
        var y = curComponent.top + 6
        curComponent = {
            "type": "triangle",
            "x1": x + 5.6248593979178,
            "y1": y,
            "x2": x,
            "y2": y + 7.61928187477525,
            "x3": x + 11.2497187958356,
            "y3": y + 7.61928187477525,
            "fillStyle": "#6599cd",
            "strokeStyle": "#000",
            "alpha": 1,
            "hidden": false,
            "lineWidth": 0,
            "lineDash": "solid",
            "lineCap": "butt",
            "rotation": 0
        }
    } else if(curComponent.text == "하"){
        // "하" 텍스트 삭제 후 삼각형으로 변환
        var x = curComponent.left + 4
        var y = curComponent.top + 7
        curComponent = {
            "type": "triangle",
            "x1": x + 5.6248593979178,
            "y1": y,
            "x2": x,
            "y2": y + 7.61928187477525,
            "x3": x + 11.2497187958356,
            "y3": y + 7.61928187477525,
            "fillStyle": "#6599cd",
            "strokeStyle": "#000",
            "alpha": 1,
            "hidden": false,
            "lineWidth": 0,
            "lineDash": "solid",
            "lineCap": "butt",
            "rotation": 3.141592653589793
        }
    } else if(curComponent.type == "line" && curComponent.fillStyle == "#fff"){
        // 슈트 번호의 흰색 라인 삭제
        return
    }
      arr.push(curComponent);
  })
  return arr
}
