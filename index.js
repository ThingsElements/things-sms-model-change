const csv = require('csv');

const fs = require('fs');
const parse = require('csv-parse');

const program = require('commander');
const inquirer = require('inquirer');


var model = require('./data');

var regendModel = require('./regend');
var line01Total = require('./line01-total');
var line02Total = require('./line02-total');
var line03Total = require('./line03-total');
var line01Arrow = require('./line01-arrow');
var line02Arrow = require('./line02-arrow');
var line03Arrow = require('./line03-arrow');

var lineQuentity = 0;

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
    modifiedComponents.push(regendModel.regend) // 범례 모델 붙이기.
    
    if(lineQuentity == 1){
        modifiedComponents.push(line01Total.model)
        modifiedComponents.push(line01Arrow.model)
    } else if(lineQuentity == 2){
        modifiedComponents.push(line02Total.model)
        modifiedComponents.push(line02Arrow.model)
    } else {
        modifiedComponents.push(line03Total.model)
        modifiedComponents.push(line03Arrow.model)
    }

    model.model.components = modifiedComponents

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
    if(curComponent.id && curComponent.id.indexOf('unload') != -1 && curComponent.id.indexOf('unload-miss-load') == -1 &&
      curComponent.type == 'rect' && Math.floor(curComponent.width) == 63 &&
      curComponent.fillStyle == '#fcfcfc'){
        // 슈트 하차 수량 표시 박스 수정
        curComponent.left = curComponent.left - 31.5
        curComponent.top = curComponent.top + 8
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
    } else if(curComponent.id && (curComponent.id.indexOf('unload-miss-load') != -1 || curComponent.id.indexOf('unload') == -1) && 
        curComponent.type == 'rect' && Math.floor(curComponent.width) == 63 &&
        curComponent.fillStyle == '#fcfcfc'){
        // 슈트 상차 수량 표시 박스 수정
        curComponent.left = curComponent.left - 31.5
        curComponent.top = curComponent.top + 2

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
        
    } else if(curComponent.type == "rect" && curComponent.fillStyle == "#303030"){
        // 슈트 박스 수정
        curComponent.top = curComponent.top + 20
        var obj = {
            "width": 76.19281874775243,
            "height": 68.5735368729774,
            "fillStyle": "rgb(104, 111, 133)",
            "round": 8.332136809597337,
        }
        curComponent = Object.assign(curComponent, obj);
    } else if(curComponent.type == "rect" && curComponent.fillStyle == "#621213"){
        // 하차 슈트 박스 수정
        curComponent.top = curComponent.top + 20
        var obj = {
            "width": 76.19281874775243,
            "height": 68.5735368729774,
            "fillStyle": "rgb(178, 88, 85)",
            "round": 8.332136809597337,
        }
        curComponent = Object.assign(curComponent, obj);
    } else if(curComponent.type == "text" && curComponent.fillStyle == "#fcfcfc" && !isNaN(Number(curComponent.text))){
        // 슈트 번호 타이틀
        curComponent.top = curComponent.top + 20
        curComponent.left = curComponent.left - 1

        var obj = {
            "width": 73,
            "height": 20,
            "fontColor": "rgb(97, 203, 244)",
            "textAlign": "center",
            "textBaseline": "middle",
            "textWrap": true,
            "fontFamily": "Yantramanav-Regular",
            "fontSize": 16
        }
        curComponent = Object.assign(curComponent, obj);
    } else if(curComponent.type == "text" && curComponent.fillStyle == "#fcfcfc" && curComponent.text == "OverFlow"){
        // 슈트 번호 타이틀
        curComponent.top = curComponent.top + 19
        curComponent.left = curComponent.left - 0.5

        var obj = {
            "width": 73,
            "height": 16,
            "fontColor": "rgb(253, 245, 209)",
            "textAlign": "center",
            "textBaseline": "middle",
            "textWrap": true,
            "fontFamily": "Yantramanav-Regular",
            "fontSize": 12
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
        var transX = 1
        var transY = 3
        curComponent = {
            "type": "triangle",
            "x1": x + 5.6248593979178 + transX,
            "y1": y + transY,
            "x2": x + transX,
            "y2": y + 7.61928187477525 + transY,
            "x3": x + 11.2497187958356 + transX,
            "y3": y + 7.61928187477525 + transY,
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
        var transX = 1
        var transY = 7
        curComponent = {
            "type": "triangle",
            "x1": x + 5.6248593979178 + transX,
            "y1": y + transY,
            "x2": x + transX,
            "y2": y + 7.61928187477525 + transY,
            "x3": x + 11.2497187958356 + transX,
            "y3": y + 7.61928187477525 + transY,
            "fillStyle": "#6599cd",
            "strokeStyle": "#000",
            "alpha": 1,
            "hidden": false,
            "lineWidth": 0,
            "lineDash": "solid",
            "lineCap": "butt",
            "rotation": 3.141592653589793
        }
    } else if(curComponent.text == '라인01'){
        // 라인1에 대한 합계 및 화살표 생성
        lineQuentity += 1;
    } else if(curComponent.text == '라인02'){
        // 라인2에 대한 합계 및 화살표 생성
        lineQuentity += 1;
    } else if(curComponent.text == '라인03'){
        // 라인2에 대한 합계 및 화살표 생성
        lineQuentity += 1;
    } else if(curComponent.type == "line" && curComponent.fillStyle == "#fff"){
        // 슈트 번호의 흰색 라인 삭제
        return
    } else if(curComponent.type == "wheel-sorter"){
        // 휠 소터 크기 조절
        curComponent.wheelSize = 1.5
    } else if(curComponent.type == 'rect' && curComponent.fillStyle == '#6599cd'){
        // 범례 정상 표시 색 삭제
        return
    } else if(curComponent.type == 'rect' && curComponent.fillStyle == '#ffba00'){
        // 범례 슈트만재 표시 색 삭제
        return
    } else if(curComponent.type == 'rect' && curComponent.fillStyle == '#e8736a'){
        // 범례 애러 표시 색 삭제
        return
    } else if(curComponent.type == 'rect' && curComponent.fillStyle == '#aaa'){
        // 범례 정지 표시 색 삭제
        return
    } else if(curComponent.text == '정상'){
        // 정상 텍스트 삭제
        return
    } else if(curComponent.text == '슈트 만재'){
        // 슈트 만재 텍스트 삭제
        return
    } else if(curComponent.text == '에러'){
        // 에러 텍스트 삭제
        return
    } else if(curComponent.text == '정지'){
        // 정지 텍스트 삭제
        return
    } else if(curComponent.id && curComponent.id.indexOf('_total_') != -1){
        // id에 합계가 들어간 모델은 전부 삭제. (라인 갯수 파악해서 새로 만들거임)
        return
    } else if(curComponent.text == 'CAMERA 상태'){
        // CAMERA 상태 텍스트 변경
        curComponent.text = 'ITS 카메라 상태'
        curComponent.fontColor = 'rgb(72, 82, 88)'
        curComponent.fontFamily = 'NanumBarunGothic'
    } else if(curComponent.text == '상차 시간대 투입 수'){
        // 상차 시간대 투입 수 텍스트 변경
        curComponent.text = '시간별 상차 실적'
        curComponent.fontColor = 'rgb(72, 82, 88)'
        curComponent.fontFamily = 'NanumBarunGothic'
    } else if(curComponent.text == '하차 시간대 투입 수'){
        // 하차 시간대 투입 수 텍스트 변경
        curComponent.text = '시간별 하차 실적'
        curComponent.fontColor = 'rgb(72, 82, 88)'
        curComponent.fontFamily = 'NanumBarunGothic'
    } else if(curComponent.text == '알람 LIST'){
        // 알람 LIST 텍스트 변경
        curComponent.text = '설비 알람 이력'
        curComponent.fontColor = 'rgb(72, 82, 88)'
        curComponent.fontFamily = 'NanumBarunGothic'
        curComponent.width = 196
    } else if(curComponent.text == 'LIST명'){
        // 테이블의 LIST명 텍스트 삭제
        return
    } else if(curComponent.text == 'A라인'){
        // A라인 텍스트 변경
        curComponent.text = '라인1'
        curComponent.fontFamily = 'NanumBarunGothic'
    } else if(curComponent.text == 'B라인'){
        // A라인 텍스트 변경
        curComponent.text = '라인2'
        curComponent.fontFamily = 'NanumBarunGothic'
    } else if(curComponent.text == 'C라인'){
        // A라인 텍스트 변경
        curComponent.text = '라인3'
        curComponent.fontFamily = 'NanumBarunGothic'
    } else if(curComponent.text == 'D라인'){
        // A라인 텍스트 변경
        curComponent.text = '라인4'
        curComponent.fontFamily = 'NanumBarunGothic'
    } else if(curComponent.text == '설비 명칭'){
        // 설비 명칭 텍스트 변경
        curComponent.text = '설비 구분'
        curComponent.fontFamily = 'NanumBarunGothic'
    } else if(curComponent.text == '알람명'){
        // 알람명 텍스트 변경
        curComponent.text = '설명'
        curComponent.fontFamily = 'NanumBarunGothic'
    } else if(curComponent.text == '알람 시간'){
        // 알람 시간 텍스트 변경
        curComponent.text = '발생 시간'
        curComponent.fontFamily = 'NanumBarunGothic'
    } else if(curComponent.top >= 820){
        return
    }

      arr.push(curComponent);
  })
  return arr
}
