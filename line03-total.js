exports.model = {
  "type": "group",
  "left": 24.16861826697891,
  "top": 0.7258140553899466,
  "width": 1895.1163907636328,
  "height": 1061.6822400249487,
  "rotation": 0,
  "components": [
    {
      "type": "half-roundrect",
      "left": 0,
      "top": 825.0348518281564,
      "width": 1866.6042154566744,
      "height": 235.9640420777573,
      "round": 2.1268767432199978,
      "fillStyle": "#fff",
      "strokeStyle": "#585858",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "NanumBarunGothic",
      "locked": false,
      "shadow": {
        "left": 0,
        "top": 2,
        "blurSize": 2,
        "color": "rgba(0, 0, 0, 0.15)"
      },
      "data": [
        {}
      ]
    },
    {
      "type": "text",
      "left": 583.6857666055876,
      "top": 856.8372642546278,
      "width": 65.354354329834,
      "height": 17.53287503307797,
      "text": "알람시간",
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "left",
      "textBaseline": "top",
      "textWrap": true,
      "fontFamily": "NanumBarunGothic",
      "fontSize": 13,
      "rotation": 0,
      "fontColor": "#fff"
    },
    {
      "type": "chartjs",
      "top": 865.0411600728066,
      "left": 607.0583274859301,
      "width": 377.3042066218517,
      "height": 188.37441154996077,
      "lineWidth": 5,
      "alpha": 1,
      "chart": {
        "type": "bar",
        "data": {
          "labels": [],
          "datasets": [
            {
              "label": "A-Line",
              "type": "bar",
              "data": [],
              "backgroundColor": "#6688be",
              "borderColor": "#6688be",
              "borderWidth": 0,
              "dataKey": "line01",
              "yAxisID": "left"
            },
            {
              "label": "B-Line",
              "data": [],
              "borderWidth": 0,
              "dataKey": "line02",
              "yAxisID": "left",
              "fill": false,
              "backgroundColor": "#aaa",
              "type": "bar",
              "borderColor": "#aaa"
            },
            {
              "label": "C-Line",
              "type": "bar",
              "data": [],
              "borderWidth": 0,
              "dataKey": "line03",
              "yAxisID": "left",
              "backgroundColor": "rgb(57, 169, 221)",
              "borderColor": "rgb(57, 169, 221)"
            }
          ],
          "labelDataKey": "work_time"
        },
        "options": {
          "theme": "dark",
          "legend": {
            "display": false,
            "position": "bottom",
            "labels": {
              "fontSize": 10,
              "fontColor": "rgba(0, 0, 0, 0.5)",
              "fontFamily": "NanumBarunGothic"
            }
          },
          "scales": {
            "xAxes": [
              {
                "gridLines": {
                  "zeroLineColor": "rgba(0, 0, 0, 0.5)",
                  "color": "rgba(0, 0, 0, 0.1)"
                },
                "ticks": {
                  "fontSize": 10,
                  "fontColor": "rgba(0, 0, 0, 0.5)",
                  "fontFamily": "NanumBarunGothic"
                },
                "scaleLabel": {
                  "display": false
                }
              }
            ],
            "yAxes": [
              {
                "id": "left",
                "position": "left",
                "gridLines": {
                  "zeroLineColor": "rgba(0, 0, 0, 0.5)",
                  "color": "rgba(0, 0, 0, 0.1)"
                },
                "ticks": {
                  "autoMin": false,
                  "autoMax": true,
                  "fontSize": 10,
                  "fontColor": "rgba(0, 0, 0, 0.5)",
                  "min": "0",
                  "fontFamily": "NanumBarunGothic"
                },
                "scaleLabel": {
                  "display": false
                }
              },
              {
                "position": "right",
                "id": "right",
                "gridLines": {
                  "zeroLineColor": "rgba(0, 0, 0, 0.5)",
                  "color": "rgba(0, 0, 0, 0.1)"
                },
                "ticks": {
                  "beginAtZero": false,
                  "fontSize": 10,
                  "fontColor": "rgba(0, 0, 0, 0.5)",
                  "fontFamily": "NanumBarunGothic"
                },
                "scaleLabel": {
                  "display": false
                }
              }
            ]
          },
          "defaultFontSize": 3,
          "tooltips": {
            "footerFontSize": 10,
            "bodyFontSize": 10,
            "titleFontSize": 10,
            "callbacks": {},
            "footerFontFamily": "NanumBarunGothic",
            "bodyFontFamily": "NanumBarunGothic",
            "titleFontFamily": "NanumBarunGothic"
          },
          "displayValue": false,
          "defaultFontFamily": "NanumBarunGothic"
        }
      },
      "data": [
        {
          "__field1": "work_time",
          "__field2": "line01",
          "__field3": "line02",
          "__field4": "line01",
          "__field5": "line02",
          "__field6": "line03",
          "__field7": "line04"
        },
        {
          "__field1": "04",
          "__field2": "0",
          "__field3": "0",
          "__field4": "0",
          "__field5": "0",
          "__field6": "0",
          "__field7": "0"
        },
        {
          "__field1": "05",
          "__field2": "800",
          "__field3": "500",
          "__field4": "800",
          "__field5": "500",
          "__field6": "800",
          "__field7": "500"
        },
        {
          "__field1": "06",
          "__field2": "1200",
          "__field3": "400",
          "__field4": "1200",
          "__field5": "400",
          "__field6": "1200",
          "__field7": "400"
        },
        {
          "__field1": "07",
          "__field2": "2100",
          "__field3": "1500",
          "__field4": "2100",
          "__field5": "1500",
          "__field6": "2100",
          "__field7": "1500"
        },
        {
          "__field1": "08",
          "__field2": "1700",
          "__field3": "2000",
          "__field4": "1700",
          "__field5": "2000",
          "__field6": "1700",
          "__field7": "2000"
        },
        {
          "__field1": "09",
          "__field2": "1900",
          "__field3": "1860",
          "__field4": "1900",
          "__field5": "1860",
          "__field6": "1900",
          "__field7": "1860"
        },
        {
          "__field1": "10",
          "__field2": "1940",
          "__field3": "1700",
          "__field4": "1940",
          "__field5": "1700",
          "__field6": "1940",
          "__field7": "1700"
        },
        {
          "__field1": "11",
          "__field2": "1850",
          "__field3": "1600",
          "__field4": "1850",
          "__field5": "1600",
          "__field6": "1850",
          "__field7": "1600"
        },
        {
          "__field1": "12",
          "__field2": "1300",
          "__field3": "1250",
          "__field4": "1300",
          "__field5": "1250",
          "__field6": "1300",
          "__field7": "1250"
        },
        {
          "__field1": "13",
          "__field2": "1100",
          "__field3": "800",
          "__field4": "1100",
          "__field5": "800",
          "__field6": "1100",
          "__field7": "800"
        },
        {
          "__field1": "14",
          "__field2": "1150",
          "__field3": "1200",
          "__field4": "1150",
          "__field5": "1200",
          "__field6": "1150",
          "__field7": "1200"
        },
        {
          "__field1": "15",
          "__field2": "1300",
          "__field3": "1050",
          "__field4": "1300",
          "__field5": "1050",
          "__field6": "1300",
          "__field7": "1050"
        },
        {
          "__field1": "16",
          "__field2": "1450",
          "__field3": "1670",
          "__field4": "1450",
          "__field5": "1670",
          "__field6": "1450",
          "__field7": "1670"
        },
        {
          "__field1": "17",
          "__field2": "1320",
          "__field3": "1500",
          "__field4": "1320",
          "__field5": "1500",
          "__field6": "1320",
          "__field7": "1500"
        },
        {
          "__field1": "18",
          "__field2": "1620",
          "__field3": "1800",
          "__field4": "1620",
          "__field5": "1800",
          "__field6": "1620",
          "__field7": "1800"
        },
        {
          "__field1": "19",
          "__field2": "1540",
          "__field3": "1750",
          "__field4": "1540",
          "__field5": "1750",
          "__field6": "1540",
          "__field7": "1750"
        },
        {
          "__field1": "20",
          "__field2": "1480",
          "__field3": "1720",
          "__field4": "1480",
          "__field5": "1720",
          "__field6": "1480",
          "__field7": "1720"
        },
        {
          "__field1": "21",
          "__field2": "1720",
          "__field3": "1790",
          "__field4": "1720",
          "__field5": "1790",
          "__field6": "1720",
          "__field7": "1790"
        },
        {
          "__field1": "22",
          "__field2": "1560",
          "__field3": "1420",
          "__field4": "1560",
          "__field5": "1420",
          "__field6": "1560",
          "__field7": "1420"
        },
        {
          "__field1": "23",
          "__field2": "0",
          "__field3": "",
          "__field4": "0",
          "__field5": "",
          "__field6": "0",
          "__field7": ""
        },
        {
          "__field1": "24",
          "__field2": "0",
          "__field3": "",
          "__field4": "0",
          "__field5": "",
          "__field6": "0",
          "__field7": ""
        },
        {
          "__field1": "25",
          "__field2": "0",
          "__field3": "",
          "__field4": "0",
          "__field5": "",
          "__field6": "0",
          "__field7": ""
        },
        {
          "__field1": "26",
          "__field2": "0",
          "__field3": "",
          "__field4": "0",
          "__field5": "",
          "__field6": "0",
          "__field7": ""
        },
        {
          "__field1": "27",
          "__field2": "0",
          "__field3": "",
          "__field6": "0",
          "__field7": ""
        }
      ],
      "rotation": 0,
      "fillStyle": "",
      "id": "chart_unload",
      "fontFamily": "NanumBarunGothic",
      "fontSize": 12
    },
    {
      "type": "chartjs",
      "top": 865.0411600728066,
      "left": 1014.5696671923467,
      "width": 377.18656581726714,
      "height": 188.37441154996122,
      "lineWidth": 5,
      "alpha": 1,
      "chart": {
        "type": "bar",
        "data": {
          "labels": [],
          "datasets": [
            {
              "label": "A-Line",
              "type": "bar",
              "data": [],
              "backgroundColor": "#6688be",
              "borderColor": "#6688be",
              "borderWidth": 0,
              "dataKey": "line01",
              "yAxisID": "left"
            },
            {
              "label": "B-Line",
              "data": [],
              "borderWidth": 0,
              "dataKey": "line02",
              "yAxisID": "left",
              "fill": false,
              "backgroundColor": "#aaa",
              "type": "bar",
              "borderColor": "#aaa"
            },
            {
              "label": "C-Line",
              "type": "bar",
              "data": [],
              "borderWidth": 0,
              "dataKey": "line03",
              "yAxisID": "left",
              "backgroundColor": "rgb(57, 169, 221)",
              "borderColor": "rgb(57, 169, 221)"
            }
          ],
          "labelDataKey": "work_time"
        },
        "options": {
          "theme": "dark",
          "legend": {
            "display": false,
            "position": "top",
            "labels": {
              "fontSize": 10,
              "fontColor": "rgba(0, 0, 0, 0.5)",
              "fontFamily": "NanumBarunGothic"
            }
          },
          "scales": {
            "xAxes": [
              {
                "gridLines": {
                  "zeroLineColor": "rgba(0, 0, 0, 0.5)",
                  "color": "rgba(0, 0, 0, 0.1)"
                },
                "ticks": {
                  "fontSize": 10,
                  "fontColor": "rgba(0, 0, 0, 0.5)",
                  "fontFamily": "NanumBarunGothic"
                },
                "scaleLabel": {
                  "display": false
                }
              }
            ],
            "yAxes": [
              {
                "id": "left",
                "position": "left",
                "gridLines": {
                  "zeroLineColor": "rgba(0, 0, 0, 0.5)",
                  "color": "rgba(0, 0, 0, 0.1)"
                },
                "ticks": {
                  "autoMin": false,
                  "autoMax": true,
                  "fontSize": 10,
                  "fontColor": "rgba(0, 0, 0, 0.5)",
                  "min": "0",
                  "fontFamily": "NanumBarunGothic"
                },
                "scaleLabel": {
                  "display": false
                }
              },
              {
                "position": "right",
                "id": "right",
                "gridLines": {
                  "zeroLineColor": "rgba(0, 0, 0, 0.5)",
                  "color": "rgba(0, 0, 0, 0.1)"
                },
                "ticks": {
                  "beginAtZero": false,
                  "fontSize": 10,
                  "fontColor": "rgba(0, 0, 0, 0.5)",
                  "fontFamily": "NanumBarunGothic"
                },
                "scaleLabel": {
                  "display": false
                }
              }
            ]
          },
          "defaultFontSize": 3,
          "tooltips": {
            "footerFontSize": 10,
            "bodyFontSize": 10,
            "titleFontSize": 10,
            "callbacks": {},
            "footerFontFamily": "NanumBarunGothic",
            "bodyFontFamily": "NanumBarunGothic",
            "titleFontFamily": "NanumBarunGothic"
          },
          "defaultFontFamily": "NanumBarunGothic"
        }
      },
      "data": [
        {
          "__field1": "work_time",
          "__field2": "line01",
          "__field3": "line02",
          "__field4": "line03",
          "__field5": "line04"
        },
        {
          "__field1": "04",
          "__field2": "0",
          "__field3": "0"
        },
        {
          "__field1": "05",
          "__field2": "800",
          "__field3": "500"
        },
        {
          "__field1": "06",
          "__field2": "1200",
          "__field3": "400"
        },
        {
          "__field1": "07",
          "__field2": "2100",
          "__field3": "1500",
          "__field4": ""
        },
        {
          "__field1": "08",
          "__field2": "1700",
          "__field3": "2000"
        },
        {
          "__field1": "09",
          "__field2": "1900",
          "__field3": "1860"
        },
        {
          "__field1": "10",
          "__field2": "1940",
          "__field3": "1700"
        },
        {
          "__field1": "11",
          "__field2": "1850",
          "__field3": "1600"
        },
        {
          "__field1": "12",
          "__field2": "1300",
          "__field3": "1250"
        },
        {
          "__field1": "13",
          "__field2": "1100",
          "__field3": "800"
        },
        {
          "__field1": "14",
          "__field2": "1150",
          "__field3": "1200"
        },
        {
          "__field1": "15",
          "__field2": "1300",
          "__field3": "1050"
        },
        {
          "__field1": "16",
          "__field2": "1450",
          "__field3": "1670"
        },
        {
          "__field1": "17",
          "__field2": "1320",
          "__field3": "1500"
        },
        {
          "__field1": "18",
          "__field2": "1620",
          "__field3": "1800"
        },
        {
          "__field1": "19",
          "__field2": "1540",
          "__field3": "1750"
        },
        {
          "__field1": "20",
          "__field2": "1480",
          "__field3": "1720"
        },
        {
          "__field1": "21",
          "__field2": "1720",
          "__field3": "1790"
        },
        {
          "__field1": "22",
          "__field2": "1560",
          "__field3": "1420"
        },
        {
          "__field1": "23",
          "__field2": "0",
          "__field3": ""
        },
        {
          "__field1": "24",
          "__field2": "0",
          "__field3": ""
        },
        {
          "__field1": "25",
          "__field2": "0",
          "__field3": ""
        },
        {
          "__field1": "26",
          "__field2": "0",
          "__field3": ""
        },
        {
          "__field1": "27",
          "__field2": "0",
          "__field3": ""
        }
      ],
      "rotation": 0,
      "fillStyle": "",
      "id": "chart_load",
      "fontFamily": "NanumBarunGothic",
      "fontSize": 10
    },
    {
      "type": "line",
      "x1": 589.7256327322017,
      "y1": 824.1053056294531,
      "x2": 589.7256327322017,
      "y2": 1061.6822400249487,
      "fillStyle": "#fff",
      "strokeStyle": "#ccc",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 1,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "line",
      "x1": 1000.2521489110018,
      "y1": 824.5840627780038,
      "x2": 1000.2521489110018,
      "y2": 1061.6822400249487,
      "fillStyle": "#fff",
      "strokeStyle": "#ccc",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 1,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "line",
      "x1": 1400.1208755356204,
      "y1": 824.0864983444188,
      "x2": 1400.1208755356204,
      "y2": 1061.6822400249487,
      "fillStyle": "#fff",
      "strokeStyle": "#ccc",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 1,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "text",
      "left": 46.794153920303756,
      "top": 866.1010723103857,
      "width": 137.29769117957403,
      "height": 27.002452203073062,
      "text": "설비 명칭",
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "NanumBarunGothic",
      "fontSize": 13,
      "rotation": 0,
      "fontColor": "#fff"
    },
    {
      "type": "rect",
      "left": 42.67841716269493,
      "top": 866.1386322238429,
      "width": 517.016491566736,
      "height": 24.650617709505468,
      "fillStyle": "rgb(106, 123, 149)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 2.0144746608388426,
      "fontFamily": "NanumBarunGothic",
      "text": ""
    },
    {
      "type": "text",
      "left": 405.32909805039804,
      "top": 866.5374552113162,
      "width": 152.05829177492427,
      "height": 24,
      "text": "발생 시간",
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "NanumBarunGothic",
      "fontSize": 13,
      "rotation": 0,
      "fontColor": "#fff"
    },
    {
      "type": "text",
      "left": 255.50981871449,
      "top": 867.5468010057087,
      "width": 149.69133316424598,
      "height": 24,
      "text": "설명",
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "NanumBarunGothic",
      "fontSize": 13,
      "rotation": 0,
      "fontColor": "#fff"
    },
    {
      "type": "text",
      "left": 43.26909945407283,
      "top": 866.4754849869173,
      "width": 212.37010771675523,
      "height": 24.313725490196134,
      "text": "설비 구분",
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "NanumBarunGothic",
      "fontSize": 13,
      "rotation": 0,
      "fontColor": "#fff"
    },
    {
      "type": "table",
      "top": 898.1032810661034,
      "left": 45.54132252932777,
      "width": 511.23721842599525,
      "height": 146.75359270458398,
      "strokeStyle": "#000",
      "fillStyle": "white",
      "lineWidth": 0,
      "rows": 5,
      "columns": 3,
      "data": [
        [
          "header1",
          "header2",
          "header3"
        ],
        [
          100,
          200,
          300
        ],
        [
          1000,
          2000,
          3000
        ]
      ],
      "widths": [
        1.23,
        0.88,
        0.89
      ],
      "heights": [
        1,
        1,
        1,
        1,
        1
      ],
      "rotation": 0,
      "fontFamily": "NanumBarunGothic",
      "id": "alarms",
      "components": [
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 0,
          "top": 0,
          "width": 209.60725955465804,
          "height": 29.350718540916795,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "dataKey": "equip_name",
          "dataIndex": 0,
          "text": "",
          "data": [
            {}
          ],
          "fontFamily": "맑은 고딕",
          "fontSize": 13
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 209.60725955465804,
          "top": 0,
          "width": 149.96291740495863,
          "height": 29.350718540916795,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "dataKey": "error_desc",
          "dataIndex": 0,
          "text": "",
          "fontFamily": "맑은 고딕",
          "fontSize": 13
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 359.5701769596167,
          "top": 0,
          "width": 151.66704146637858,
          "height": 29.350718540916795,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "dataKey": "timestamp",
          "dataIndex": 0,
          "text": "",
          "fontFamily": "맑은 고딕",
          "fontSize": 13
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 0,
          "top": 29.350718540916795,
          "width": 209.60725955465804,
          "height": 29.350718540916795,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "dataKey": "equip_name",
          "dataIndex": 1,
          "text": "",
          "fontFamily": "맑은 고딕",
          "fontSize": 13
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 209.60725955465804,
          "top": 29.350718540916795,
          "width": 149.96291740495863,
          "height": 29.350718540916795,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "dataKey": "error_desc",
          "dataIndex": 1,
          "text": "",
          "fontFamily": "맑은 고딕",
          "fontSize": 13
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 359.5701769596167,
          "top": 29.350718540916795,
          "width": 151.66704146637858,
          "height": 29.350718540916795,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "text": "",
          "dataKey": "timestamp",
          "dataIndex": 1,
          "fontFamily": "맑은 고딕",
          "fontSize": 13
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 0,
          "top": 58.70143708183359,
          "width": 209.60725955465804,
          "height": 29.350718540916787,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "dataKey": "equip_name",
          "dataIndex": 2,
          "text": "",
          "fontFamily": "맑은 고딕",
          "fontSize": 13
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 209.60725955465804,
          "top": 58.70143708183359,
          "width": 149.96291740495863,
          "height": 29.350718540916787,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "dataKey": "error_desc",
          "dataIndex": 2,
          "text": "",
          "fontFamily": "맑은 고딕",
          "fontSize": 13
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 359.5701769596167,
          "top": 58.70143708183359,
          "width": 151.66704146637858,
          "height": 29.350718540916787,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "dataKey": "timestamp",
          "dataIndex": 2,
          "text": "",
          "fontFamily": "맑은 고딕",
          "fontSize": 13
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 0,
          "top": 88.05215562275038,
          "width": 209.60725955465804,
          "height": 29.3507185409168,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "dataKey": "equip_name",
          "dataIndex": 3,
          "text": "",
          "fontFamily": "맑은 고딕",
          "fontSize": 13
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 209.60725955465804,
          "top": 88.05215562275038,
          "width": 149.96291740495863,
          "height": 29.3507185409168,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "dataKey": "error_desc",
          "dataIndex": 3,
          "text": "",
          "fontFamily": "맑은 고딕",
          "fontSize": 13
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 359.5701769596167,
          "top": 88.05215562275038,
          "width": 151.66704146637858,
          "height": 29.3507185409168,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "dataKey": "timestamp",
          "dataIndex": 3,
          "text": "",
          "fontFamily": "맑은 고딕",
          "fontSize": 13
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 0,
          "top": 117.40287416366718,
          "width": 209.60725955465804,
          "height": 29.3507185409168,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "dataKey": "equip_name",
          "dataIndex": 4,
          "text": "",
          "fontFamily": "맑은 고딕",
          "fontSize": 13
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 209.60725955465804,
          "top": 117.40287416366718,
          "width": 149.96291740495863,
          "height": 29.3507185409168,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "dataKey": "error_desc",
          "dataIndex": 4,
          "text": "",
          "fontFamily": "맑은 고딕",
          "fontSize": 13
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 359.5701769596167,
          "top": 117.40287416366718,
          "width": 151.66704146637858,
          "height": 29.3507185409168,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "dataKey": "timestamp",
          "dataIndex": 4,
          "text": "",
          "fontFamily": "맑은 고딕",
          "fontSize": 13
        }
      ]
    },
    {
      "type": "text",
      "left": 1041.051461992589,
      "top": 13.505085475121874,
      "width": 148.3689134699266,
      "height": 30.94488846479132,
      "text": "라인01",
      "fillStyle": "#fff",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "left",
      "textBaseline": "top",
      "textWrap": true,
      "fontFamily": "NanumBarunGothic",
      "fontSize": 24,
      "rotation": 0,
      "fontColor": "#6599cd",
      "bold": true
    },
    {
      "type": "text",
      "left": 1041.051461992589,
      "top": 43.57651231341876,
      "width": 148.3689134699266,
      "height": 42.69836435022984,
      "text": "Total",
      "fillStyle": "#fff",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "left",
      "textBaseline": "top",
      "textWrap": true,
      "fontFamily": "NanumBarunGothic",
      "fontSize": 38,
      "rotation": 0,
      "fontColor": "rgb(85, 96, 132)",
      "bold": true,
      "id": "line01_total",
      "mappings": [
        {
          "rule": "value",
          "property": "data",
          "target": "#line01_total_unload",
          "accessor": "unload_count"
        },
        {
          "rule": "value",
          "target": "#line01_total_load",
          "property": "data",
          "accessor": "load_count"
        }
      ]
    },
    {
      "type": "rect",
      "left": 1151.972250062381,
      "top": 1.2935395369572689,
      "width": 122.02792559449404,
      "height": 48.65158371040718,
      "fillStyle": "",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.142979044670822,
      "text": "#{data}",
      "fontSize": 28,
      "fontFamily": "NanumBarunGothic",
      "textFormat": "#,##0",
      "textAlign": "right",
      "fontColor": "#585858",
      "paddingRight": 9,
      "textWrap": true,
      "bold": true,
      "id": "line01_total_unload"
    },
    {
      "type": "rect",
      "left": 1163.1351459899831,
      "top": 46.356887953246854,
      "width": 111.70213373929028,
      "height": 48.651583710407124,
      "fillStyle": "",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.142979044670822,
      "text": "#{data}",
      "fontSize": 28,
      "fontFamily": "NanumBarunGothic",
      "textFormat": "#,##0",
      "textAlign": "right",
      "fontColor": "#585858",
      "paddingRight": 9,
      "textWrap": true,
      "bold": true,
      "id": "line01_total_load"
    },
    {
      "type": "triangle",
      "x1": 1286.5061241555693,
      "y1": 20.119331392160916,
      "x2": 1296.3493254622254,
      "y2": 35.119331392160916,
      "x3": 1276.3493254622254,
      "y3": 35.119331392160916,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "triangle",
      "x1": 1286.5126574344592,
      "y1": 65.18267980845042,
      "x2": 1276.6694561278032,
      "y2": 80.18267980845042,
      "x3": 1296.6694561278032,
      "y3": 80.18267980845042,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "line",
      "x1": 1020.4869326488326,
      "y1": 7.105427357601002e-15,
      "x2": 1020.4869326488326,
      "y2": 94.71263659969247,
      "fillStyle": "#fff",
      "strokeStyle": "#000",
      "alpha": 0.2,
      "hidden": false,
      "lineWidth": 1,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "text": "",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "line",
      "x1": 1144.9691196111796,
      "y1": 47.36575875486387,
      "x2": 1311.7998974501113,
      "y2": 47.36575875486385,
      "fillStyle": "#fff",
      "strokeStyle": "#000",
      "alpha": 0.2,
      "hidden": false,
      "lineWidth": 1,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "text": "",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "text",
      "left": 1332.9073312347882,
      "top": 13.505085475121874,
      "width": 148.3689134699266,
      "height": 30.94488846479132,
      "text": "라인02",
      "fillStyle": "#fff",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "left",
      "textBaseline": "top",
      "textWrap": true,
      "fontFamily": "NanumBarunGothic",
      "fontSize": 24,
      "rotation": 0,
      "fontColor": "#6599cd",
      "bold": true
    },
    {
      "type": "text",
      "left": 1332.9073312347882,
      "top": 43.57651231341876,
      "width": 148.3689134699266,
      "height": 42.69836435022984,
      "text": "Total",
      "fillStyle": "#fff",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "left",
      "textBaseline": "top",
      "textWrap": true,
      "fontFamily": "NanumBarunGothic",
      "fontSize": 38,
      "rotation": 0,
      "fontColor": "rgb(85, 96, 132)",
      "bold": true,
      "id": "line02_total",
      "mappings": [
        {
          "rule": "value",
          "property": "data",
          "target": "#line02_total_unload",
          "accessor": "unload_count"
        },
        {
          "rule": "value",
          "target": "#line02_total_load",
          "property": "data",
          "accessor": "load_count"
        }
      ]
    },
    {
      "type": "rect",
      "left": 1443.8281193045802,
      "top": 1.2935395369572689,
      "width": 122.02792559449404,
      "height": 48.65158371040718,
      "fillStyle": "",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.142979044670822,
      "text": "#{data}",
      "fontSize": 28,
      "fontFamily": "NanumBarunGothic",
      "textFormat": "#,##0",
      "textAlign": "right",
      "fontColor": "#585858",
      "paddingRight": 9,
      "textWrap": true,
      "bold": true,
      "id": "line02_total_unload"
    },
    {
      "type": "rect",
      "left": 1454.9910152321822,
      "top": 46.356887953246854,
      "width": 111.70213373929028,
      "height": 48.651583710407124,
      "fillStyle": "",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.142979044670822,
      "text": "#{data}",
      "fontSize": 28,
      "fontFamily": "NanumBarunGothic",
      "textFormat": "#,##0",
      "textAlign": "right",
      "fontColor": "#585858",
      "paddingRight": 9,
      "textWrap": true,
      "bold": true,
      "id": "line02_total_load"
    },
    {
      "type": "triangle",
      "x1": 1578.3619933977684,
      "y1": 20.119331392160916,
      "x2": 1588.2051947044245,
      "y2": 35.119331392160916,
      "x3": 1568.2051947044245,
      "y3": 35.119331392160916,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "triangle",
      "x1": 1578.3685266766583,
      "y1": 65.18267980845042,
      "x2": 1568.5253253700023,
      "y2": 80.18267980845042,
      "x3": 1588.5253253700023,
      "y3": 80.18267980845042,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "line",
      "x1": 1312.3428018910317,
      "y1": 7.105427357601002e-15,
      "x2": 1312.3428018910317,
      "y2": 94.71263659969247,
      "fillStyle": "#fff",
      "strokeStyle": "#000",
      "alpha": 0.2,
      "hidden": false,
      "lineWidth": 1,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "text": "",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "line",
      "x1": 1436.8249888533787,
      "y1": 47.36575875486387,
      "x2": 1603.6557666923104,
      "y2": 47.36575875486385,
      "fillStyle": "#fff",
      "strokeStyle": "#000",
      "alpha": 0.2,
      "hidden": false,
      "lineWidth": 1,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "text": "",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "text",
      "left": 1624.3679553061106,
      "top": 13.505085475121874,
      "width": 148.3689134699266,
      "height": 30.94488846479132,
      "text": "라인03",
      "fillStyle": "#fff",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "left",
      "textBaseline": "top",
      "textWrap": true,
      "fontFamily": "NanumBarunGothic",
      "fontSize": 24,
      "rotation": 0,
      "fontColor": "#6599cd",
      "bold": true
    },
    {
      "type": "text",
      "left": 1624.3679553061106,
      "top": 43.57651231341876,
      "width": 148.3689134699266,
      "height": 42.69836435022984,
      "text": "Total",
      "fillStyle": "#fff",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "left",
      "textBaseline": "top",
      "textWrap": true,
      "fontFamily": "NanumBarunGothic",
      "fontSize": 38,
      "rotation": 0,
      "fontColor": "rgb(85, 96, 132)",
      "bold": true,
      "id": "line03_total",
      "mappings": [
        {
          "rule": "value",
          "property": "data",
          "target": "#line03_total_unload",
          "accessor": "unload_count"
        },
        {
          "rule": "value",
          "target": "#line03_total_load",
          "property": "data",
          "accessor": "load_count"
        }
      ]
    },
    {
      "type": "rect",
      "left": 1735.2887433759026,
      "top": 1.2935395369572689,
      "width": 122.02792559449404,
      "height": 48.65158371040718,
      "fillStyle": "",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.142979044670822,
      "text": "#{data}",
      "fontSize": 28,
      "fontFamily": "NanumBarunGothic",
      "textFormat": "#,##0",
      "textAlign": "right",
      "fontColor": "#585858",
      "paddingRight": 9,
      "textWrap": true,
      "bold": true,
      "id": "line03_total_unload"
    },
    {
      "type": "rect",
      "left": 1746.4516393035046,
      "top": 46.356887953246854,
      "width": 111.70213373929028,
      "height": 48.651583710407124,
      "fillStyle": "",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.142979044670822,
      "text": "#{data}",
      "fontSize": 28,
      "fontFamily": "NanumBarunGothic",
      "textFormat": "#,##0",
      "textAlign": "right",
      "fontColor": "#585858",
      "paddingRight": 9,
      "textWrap": true,
      "bold": true,
      "id": "line03_total_load"
    },
    {
      "type": "triangle",
      "x1": 1869.8226174690908,
      "y1": 20.11933139216086,
      "x2": 1879.6658187757469,
      "y2": 35.11933139216086,
      "x3": 1859.6658187757469,
      "y3": 35.11933139216086,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "triangle",
      "x1": 1869.8291507479807,
      "y1": 65.18267980845042,
      "x2": 1859.9859494413247,
      "y2": 80.18267980845042,
      "x3": 1879.9859494413247,
      "y3": 80.18267980845042,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "line",
      "x1": 1603.8034259623541,
      "y1": 7.105427357601002e-15,
      "x2": 1603.8034259623541,
      "y2": 94.71263659969247,
      "fillStyle": "#fff",
      "strokeStyle": "#000",
      "alpha": 0.2,
      "hidden": false,
      "lineWidth": 1,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "text": "",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "line",
      "x1": 1728.2856129247011,
      "y1": 47.36575875486387,
      "x2": 1895.1163907636328,
      "y2": 47.36575875486385,
      "fillStyle": "#fff",
      "strokeStyle": "#000",
      "alpha": 0.2,
      "hidden": false,
      "lineWidth": 1,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "text": "",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "group",
      "left": 1421.3183197641029,
      "top": 826.7067477718405,
      "width": 301.7695390359054,
      "height": 42.12428828770635,
      "rotation": 0,
      "components": [
        {
          "type": "rect",
          "left": 0,
          "top": 16.562144143853175,
          "width": 14,
          "height": 9,
          "fillStyle": "",
          "strokeStyle": "#22a6dc",
          "alpha": 1,
          "hidden": false,
          "lineWidth": 3,
          "lineDash": "solid",
          "lineCap": "butt",
          "rotation": 0,
          "round": 56.20197585071464
        },
        {
          "type": "text",
          "left": 22.32857185366356,
          "top": 0,
          "width": 279.4409671822418,
          "height": 42.12428828770635,
          "text": "ITS 카메라 상태",
          "fillStyle": "#fff",
          "strokeStyle": "#000",
          "alpha": 1,
          "hidden": false,
          "lineWidth": 5,
          "lineDash": "solid",
          "lineCap": "butt",
          "textAlign": "left",
          "textBaseline": "middle",
          "textWrap": true,
          "fontFamily": "맑은 고딕 볼드체",
          "fontSize": 20,
          "rotation": 0,
          "fontColor": "rgb(72, 82, 88)",
          "bold": true
        }
      ]
    },
    {
      "type": "table",
      "top": 894.8363536497402,
      "left": 1425.0172583166993,
      "width": 397.367061209344,
      "height": 150.02052012094714,
      "strokeStyle": "#000",
      "fillStyle": "white",
      "lineWidth": 0,
      "rows": 4,
      "columns": 4,
      "data": [
        [
          "header1",
          "header2",
          "header3"
        ],
        [
          100,
          200,
          300
        ],
        [
          1000,
          2000,
          3000
        ]
      ],
      "widths": [
        1.47,
        0.9,
        0.9,
        0.9
      ],
      "heights": [
        1,
        1,
        1,
        1
      ],
      "rotation": 0,
      "fontFamily": "NanumBarunGothic",
      "components": [
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 0,
          "top": 0,
          "width": 140.07903596588386,
          "height": 37.505130030236785,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "fillStyle": "rgb(220, 230, 239)",
          "text": "Ready Signal",
          "fontFamily": "Arial"
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 140.07903596588386,
          "top": 0,
          "width": 85.76267508115339,
          "height": 37.505130030236785,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "fillStyle": "#FFFFFF",
          "alpha": 1
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 225.84171104703725,
          "top": 0,
          "width": 85.76267508115339,
          "height": 37.505130030236785,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "fillStyle": "#FFFFFF"
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 311.60438612819064,
          "top": 0,
          "width": 85.76267508115336,
          "height": 37.505130030236785,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "fillStyle": "#FFFFFF"
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 0,
          "top": 37.505130030236785,
          "width": 140.07903596588386,
          "height": 37.505130030236785,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "fillStyle": "rgb(220, 230, 239)",
          "text": "1번 Camera",
          "fontFamily": "Arial"
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 140.07903596588386,
          "top": 37.505130030236785,
          "width": 85.76267508115339,
          "height": 37.505130030236785,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "fillStyle": "#FFFFFF"
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 225.84171104703725,
          "top": 37.505130030236785,
          "width": 85.76267508115339,
          "height": 37.505130030236785,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "fillStyle": "#FFFFFF"
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 311.60438612819064,
          "top": 37.505130030236785,
          "width": 85.76267508115336,
          "height": 37.505130030236785,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "fillStyle": "#FFFFFF"
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 0,
          "top": 75.01026006047357,
          "width": 140.07903596588386,
          "height": 37.505130030236785,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "fillStyle": "rgb(220, 230, 239)",
          "text": "2번 Camera",
          "fontFamily": "Arial"
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 140.07903596588386,
          "top": 75.01026006047357,
          "width": 85.76267508115339,
          "height": 37.505130030236785,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "fillStyle": "#FFFFFF"
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 225.84171104703725,
          "top": 75.01026006047357,
          "width": 85.76267508115339,
          "height": 37.505130030236785,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "fillStyle": "#FFFFFF"
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 311.60438612819064,
          "top": 75.01026006047357,
          "width": 85.76267508115336,
          "height": 37.505130030236785,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "fillStyle": "#FFFFFF"
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 0,
          "top": 112.51539009071035,
          "width": 140.07903596588386,
          "height": 37.505130030236785,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "fillStyle": "rgb(220, 230, 239)",
          "text": "3번 Camera",
          "fontFamily": "Arial"
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 140.07903596588386,
          "top": 112.51539009071035,
          "width": 85.76267508115339,
          "height": 37.505130030236785,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "fillStyle": "#FFFFFF"
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 225.84171104703725,
          "top": 112.51539009071035,
          "width": 85.76267508115339,
          "height": 37.505130030236785,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "fillStyle": "#FFFFFF"
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 311.60438612819064,
          "top": 112.51539009071035,
          "width": 85.76267508115336,
          "height": 37.505130030236785,
          "textWrap": true,
          "border": {
            "top": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "left": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            }
          },
          "rotation": 0,
          "fillStyle": "#FFFFFF"
        }
      ]
    },
    {
      "type": "group",
      "left": 1422.9902890434585,
      "top": 865.4067594800913,
      "width": 402.964311661731,
      "height": 24.02238633928846,
      "rotation": 0,
      "components": [
        {
          "type": "rect",
          "left": 0,
          "top": 0,
          "width": 402.964311661731,
          "height": 24.02238633928846,
          "fillStyle": "rgb(106, 123, 149)",
          "strokeStyle": "#333",
          "alpha": 1,
          "hidden": false,
          "lineWidth": 0,
          "lineDash": "solid",
          "lineCap": "butt",
          "rotation": 0,
          "round": 3.4334763948496954,
          "mappings": []
        },
        {
          "type": "text",
          "left": 173.63510350609067,
          "top": 5.373495251161785,
          "width": 59.81405014583811,
          "height": 17.53287503307797,
          "text": "라인1",
          "fillStyle": "#fcfcfc",
          "strokeStyle": "#000",
          "alpha": 1,
          "hidden": false,
          "lineWidth": 5,
          "lineDash": "solid",
          "lineCap": "butt",
          "textAlign": "left",
          "textBaseline": "top",
          "textWrap": true,
          "fontFamily": "Arial",
          "fontSize": 13,
          "rotation": 0,
          "fontColor": "#fff",
          "data": [
            {}
          ]
        },
        {
          "type": "text",
          "left": 51.08320140273054,
          "top": 5.49116364889187,
          "width": 76.14418845505702,
          "height": 17.53287503307797,
          "text": "",
          "fillStyle": "#fcfcfc",
          "strokeStyle": "#000",
          "alpha": 1,
          "hidden": false,
          "lineWidth": 5,
          "lineDash": "solid",
          "lineCap": "butt",
          "textAlign": "left",
          "textBaseline": "top",
          "textWrap": true,
          "fontFamily": "Arial",
          "fontSize": 13,
          "rotation": 0,
          "fontColor": "#fff"
        },
        {
          "type": "text",
          "left": 257.06429027186596,
          "top": 5.373495251161785,
          "width": 59.81405014583788,
          "height": 17.53287503307797,
          "text": "라인2",
          "fillStyle": "#fcfcfc",
          "strokeStyle": "#000",
          "alpha": 1,
          "hidden": false,
          "lineWidth": 5,
          "lineDash": "solid",
          "lineCap": "butt",
          "textAlign": "left",
          "textBaseline": "top",
          "textWrap": true,
          "fontFamily": "Arial",
          "fontSize": 13,
          "rotation": 0,
          "fontColor": "#fff",
          "data": [
            {}
          ]
        },
        {
          "type": "text",
          "left": 341.0778376695466,
          "top": 5.373495251161785,
          "width": 59.81405014583811,
          "height": 17.53287503307797,
          "text": "라인3",
          "fillStyle": "#fcfcfc",
          "strokeStyle": "#000",
          "alpha": 1,
          "hidden": false,
          "lineWidth": 5,
          "lineDash": "solid",
          "lineCap": "butt",
          "textAlign": "left",
          "textBaseline": "top",
          "textWrap": true,
          "fontFamily": "Arial",
          "fontSize": 13,
          "rotation": 0,
          "fontColor": "#fff"
        }
      ]
    },
    {
      "type": "ellipse",
      "rx": 5,
      "ry": 5,
      "cx": 1608.81502939558,
      "cy": 913.5833567281097,
      "fillStyle": "rgb(83, 203, 57)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": true,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "text": "",
      "fontFamily": "NanumBarunGothic",
      "bold": true,
      "fontColor": "#fff",
      "fontSize": 22,
      "id": "line01_camera_ready"
    },
    {
      "type": "ellipse",
      "rx": 5,
      "ry": 5,
      "cx": 1608.81502939558,
      "cy": 951.4237093236043,
      "fillStyle": "rgb(83, 203, 57)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": true,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "text": "",
      "fontFamily": "NanumBarunGothic",
      "bold": true,
      "fontColor": "#fff",
      "fontSize": 22,
      "id": "line01_camera_left"
    },
    {
      "type": "ellipse",
      "rx": 5,
      "ry": 5,
      "cx": 1608.81502939558,
      "cy": 989.3306632903036,
      "fillStyle": "rgb(83, 203, 57)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": true,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "text": "",
      "fontFamily": "NanumBarunGothic",
      "bold": true,
      "fontColor": "#fff",
      "fontSize": 22,
      "id": "line01_camera_top"
    },
    {
      "type": "ellipse",
      "rx": 5,
      "ry": 5,
      "cx": 1608.81502939558,
      "cy": 1027.1710158857982,
      "fillStyle": "rgb(83, 203, 57)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": true,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "text": "",
      "fontFamily": "NanumBarunGothic",
      "bold": true,
      "fontColor": "#fff",
      "fontSize": 22,
      "id": "line01_camera_right"
    },
    {
      "type": "ellipse",
      "rx": 5,
      "ry": 5,
      "cx": 1694.2602568139016,
      "cy": 913.5833567281097,
      "fillStyle": "rgb(83, 203, 57)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": true,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "text": "",
      "fontFamily": "NanumBarunGothic",
      "bold": true,
      "fontColor": "#fff",
      "fontSize": 22,
      "id": "line02_camera_ready"
    },
    {
      "type": "ellipse",
      "rx": 5,
      "ry": 5,
      "cx": 1694.2602568139016,
      "cy": 951.4237093236043,
      "fillStyle": "rgb(83, 203, 57)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": true,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "text": "",
      "fontFamily": "NanumBarunGothic",
      "bold": true,
      "fontColor": "#fff",
      "fontSize": 22,
      "id": "line02_camera_left"
    },
    {
      "type": "ellipse",
      "rx": 5,
      "ry": 5,
      "cx": 1694.2602568139016,
      "cy": 1027.1710158857982,
      "fillStyle": "rgb(83, 203, 57)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": true,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "text": "",
      "fontFamily": "NanumBarunGothic",
      "bold": true,
      "fontColor": "#fff",
      "fontSize": 22,
      "id": "line02_camera_right"
    },
    {
      "type": "ellipse",
      "rx": 5,
      "ry": 5,
      "cx": 1779.051416327034,
      "cy": 913.5833567281097,
      "fillStyle": "rgb(83, 203, 57)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": true,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "text": "",
      "fontFamily": "NanumBarunGothic",
      "bold": true,
      "fontColor": "#fff",
      "fontSize": 22,
      "id": "line03_camera_ready"
    },
    {
      "type": "ellipse",
      "rx": 5,
      "ry": 5,
      "cx": 1779.051416327034,
      "cy": 951.4237093236043,
      "fillStyle": "rgb(83, 203, 57)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": true,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "text": "",
      "fontFamily": "NanumBarunGothic",
      "bold": true,
      "fontColor": "#fff",
      "fontSize": 22,
      "id": "line03_camera_left"
    },
    {
      "type": "ellipse",
      "rx": 5,
      "ry": 5,
      "cx": 1779.051416327034,
      "cy": 989.3306632903036,
      "fillStyle": "rgb(83, 203, 57)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": true,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "text": "",
      "fontFamily": "NanumBarunGothic",
      "bold": true,
      "fontColor": "#fff",
      "fontSize": 22,
      "id": "line03_camera_top"
    },
    {
      "type": "ellipse",
      "rx": 5,
      "ry": 5,
      "cx": 1779.051416327034,
      "cy": 1027.1710158857982,
      "fillStyle": "rgb(83, 203, 57)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": true,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "text": "",
      "fontFamily": "NanumBarunGothic",
      "bold": true,
      "fontColor": "#fff",
      "fontSize": 22,
      "id": "line03_camera_right"
    },
    {
      "type": "ellipse",
      "rx": 5,
      "ry": 5,
      "cx": 1694.2602568139016,
      "cy": 989.3306632903036,
      "fillStyle": "rgb(83, 203, 57)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": true,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "text": "",
      "fontFamily": "NanumBarunGothic",
      "bold": true,
      "fontColor": "#fff",
      "fontSize": 22,
      "id": "line02_camera_top"
    },
    {
      "type": "rect",
      "left": 38.95574448964851,
      "top": 843.2688919156935,
      "width": 14,
      "height": 9,
      "fillStyle": "",
      "strokeStyle": "#22a6dc",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 3,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 56.20197585071464,
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "text",
      "left": 59.94007669949703,
      "top": 826.7067477718402,
      "width": 195.8709150664285,
      "height": 42.12428828770658,
      "text": "설비 알람 이력",
      "fillStyle": "#fff",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "left",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "NanumBarunGothic",
      "fontSize": 20,
      "rotation": 0,
      "fontColor": "rgb(72, 82, 88)",
      "bold": true
    },
    {
      "type": "text",
      "left": 631.9119946705116,
      "top": 824.7067477718405,
      "width": 302.9028964976103,
      "height": 42.12428828770635,
      "text": "시간별 하차 실적",
      "fillStyle": "#fff",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "left",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "NanumBarunGothic",
      "fontSize": 20,
      "rotation": 0,
      "fontColor": "rgb(72, 82, 88)",
      "bold": true,
      "data": [
        {}
      ]
    },
    {
      "type": "rect",
      "left": 610.9296579123915,
      "top": 841.2688919156936,
      "width": 14,
      "height": 9,
      "fillStyle": "",
      "strokeStyle": "#22a6dc",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 3,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 56.20197585071464,
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "rect",
      "left": 1012.7916844766389,
      "top": 841.2688919156936,
      "width": 14,
      "height": 9,
      "fillStyle": "",
      "strokeStyle": "#22a6dc",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 3,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 56.20197585071464,
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "text",
      "left": 1033.7740212347592,
      "top": 824.7067477718405,
      "width": 302.90289649761144,
      "height": 42.12428828770635,
      "text": "시간별 상차 실적",
      "fillStyle": "#fff",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "left",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "NanumBarunGothic",
      "fontSize": 20,
      "rotation": 0,
      "fontColor": "rgb(72, 82, 88)",
      "bold": true
    }
  ]
}