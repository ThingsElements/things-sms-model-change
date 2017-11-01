exports.model = {
  "type": "group",
  "left": 24.16861826697891,
  "top": 0.7258140553899466,
  "width": 1895.821062760597,
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
      "fontColor": "#fff",
      "data": [
        {}
      ]
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
              "fontSize": 12,
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
                  "fontSize": 12,
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
                  "fontSize": 12,
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
                  "fontSize": 12,
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
            "footerFontSize": 12,
            "bodyFontSize": 12,
            "titleFontSize": 12,
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
        {}
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
              "fontSize": 12,
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
                  "fontSize": 12,
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
                  "fontSize": 12,
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
                  "fontSize": 12,
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
            "footerFontSize": 12,
            "bodyFontSize": 12,
            "titleFontSize": 12,
            "callbacks": {},
            "footerFontFamily": "NanumBarunGothic",
            "bodyFontFamily": "NanumBarunGothic",
            "titleFontFamily": "NanumBarunGothic"
          },
          "defaultFontFamily": "NanumBarunGothic"
        }
      },
      "data": [
        {}
      ],
      "rotation": 0,
      "fillStyle": "",
      "id": "chart_load",
      "fontFamily": "NanumBarunGothic",
      "fontSize": 12
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
      "fontFamily": "NanumBarunGothic",
      "data": [
        {}
      ]
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
      "fontFamily": "NanumBarunGothic",
      "data": [
        {}
      ]
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
      "fontFamily": "NanumBarunGothic",
      "data": [
        {}
      ]
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
      "fontColor": "#fff",
      "data": [
        {}
      ]
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
      "text": "",
      "data": [
        {}
      ]
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
      "fontColor": "#fff",
      "data": [
        {}
      ]
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
      "fontColor": "#fff",
      "data": [
        {}
      ]
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
      "fontColor": "#fff",
      "data": [
        {}
      ]
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
        {}
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
          "fontFamily": "NanumBarunGothic",
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
          "fontFamily": "NanumBarunGothic",
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
          "fontFamily": "NanumBarunGothic",
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
          "fontFamily": "NanumBarunGothic",
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
          "fontFamily": "NanumBarunGothic",
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
          "fontFamily": "NanumBarunGothic",
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
          "fontFamily": "NanumBarunGothic",
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
          "fontFamily": "NanumBarunGothic",
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
          "fontFamily": "NanumBarunGothic",
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
          "fontFamily": "NanumBarunGothic",
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
          "fontFamily": "NanumBarunGothic",
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
          "fontFamily": "NanumBarunGothic",
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
          "fontFamily": "NanumBarunGothic",
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
          "fontFamily": "NanumBarunGothic",
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
          "fontFamily": "NanumBarunGothic",
          "fontSize": 13
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
        {}
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
          "fontFamily": "NanumBarunGothic"
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
              "strokeStyle": "black",
              "lineDash": "solid",
              "lineWidth": 0
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
              "strokeStyle": "black",
              "lineDash": "solid",
              "lineWidth": 0
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "black",
              "lineDash": "solid",
              "lineWidth": 0
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
              "strokeStyle": "black",
              "lineDash": "solid",
              "lineWidth": 0
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
          "fontFamily": "NanumBarunGothic"
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
              "strokeStyle": "black",
              "lineDash": "solid",
              "lineWidth": 0
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
              "strokeStyle": "black",
              "lineDash": "solid",
              "lineWidth": 0
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "black",
              "lineDash": "solid",
              "lineWidth": 0
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
              "strokeStyle": "black",
              "lineDash": "solid",
              "lineWidth": 0
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
          "fontFamily": "NanumBarunGothic"
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
              "strokeStyle": "black",
              "lineDash": "solid",
              "lineWidth": 0
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
              "strokeStyle": "black",
              "lineDash": "solid",
              "lineWidth": 0
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "black",
              "lineDash": "solid",
              "lineWidth": 0
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
              "strokeStyle": "black",
              "lineDash": "solid",
              "lineWidth": 0
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
          "fontFamily": "NanumBarunGothic"
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
              "strokeStyle": "black",
              "lineDash": "solid",
              "lineWidth": 0
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
              "strokeStyle": "black",
              "lineDash": "solid",
              "lineWidth": 0
            },
            "bottom": {
              "strokeStyle": "#ccc",
              "lineDash": "solid",
              "lineWidth": 1
            },
            "right": {
              "strokeStyle": "black",
              "lineDash": "solid",
              "lineWidth": 0
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
              "strokeStyle": "black",
              "lineDash": "solid",
              "lineWidth": 0
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
      "type": "ellipse",
      "rx": 5,
      "ry": 5,
      "cx": 1694.9432345237851,
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
      "id": "line01_camera_ready",
      "data": [
        {}
      ]
    },
    {
      "type": "ellipse",
      "rx": 5,
      "ry": 5,
      "cx": 1694.9432345237851,
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
      "id": "line01_camera_left",
      "data": [
        {}
      ]
    },
    {
      "type": "ellipse",
      "rx": 5,
      "ry": 5,
      "cx": 1694.9432345237851,
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
      "id": "line01_camera_top",
      "data": [
        {}
      ]
    },
    {
      "type": "ellipse",
      "rx": 5,
      "ry": 5,
      "cx": 1694.9432345237851,
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
      "id": "line01_camera_right",
      "data": [
        {}
      ]
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
      "fontFamily": "NanumBarunGothic",
      "data": [
        {}
      ]
    },
    {
      "type": "text",
      "left": 59.94007669949714,
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
      "fontSize": 19,
      "rotation": 0,
      "fontColor": "rgb(72, 82, 88)",
      "bold": true,
      "data": [
        {}
      ]
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
      "fontSize": 19,
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
      "fontFamily": "NanumBarunGothic",
      "data": [
        {}
      ]
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
      "fontFamily": "NanumBarunGothic",
      "data": [
        {}
      ]
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
      "fontSize": 19,
      "rotation": 0,
      "fontColor": "rgb(72, 82, 88)",
      "bold": true,
      "data": [
        {}
      ]
    },
    {
      "type": "rect",
      "left": 1422.9902890434585,
      "top": 865.4067594800913,
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
      "mappings": [],
      "fontFamily": "NanumBarunGothic",
      "data": [
        {}
      ]
    },
    {
      "type": "text",
      "left": 1681.1894951136517,
      "top": 870.7802547312531,
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
      "fontFamily": "NanumBarunGothic",
      "fontSize": 13,
      "rotation": 0,
      "fontColor": "#fff",
      "data": [
        {}
      ]
    },
    {
      "type": "text",
      "left": 1474.073490446189,
      "top": 870.8979231289832,
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
      "fontFamily": "NanumBarunGothic",
      "fontSize": 13,
      "rotation": 0,
      "fontColor": "#fff",
      "data": [
        {}
      ]
    },
    {
      "type": "text",
      "left": 1623.6601576447633,
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
      "bold": true,
      "data": [
        {}
      ]
    },
    {
      "type": "text",
      "left": 1623.6601576447633,
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
      ],
      "data": [
        {}
      ]
    },
    {
      "type": "rect",
      "left": 1734.580945714555,
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
      "id": "line01_total_unload",
      "data": [
        {}
      ]
    },
    {
      "type": "rect",
      "left": 1745.7438416421573,
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
      "id": "line01_total_load",
      "data": [
        {}
      ]
    },
    {
      "type": "triangle",
      "x1": 1869.1148198077435,
      "y1": 20.119331392160916,
      "x2": 1878.9580211143996,
      "y2": 35.119331392160916,
      "x3": 1858.9580211143996,
      "y3": 35.119331392160916,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontFamily": "NanumBarunGothic",
      "data": [
        {}
      ]
    },
    {
      "type": "triangle",
      "x1": 1869.1213530866335,
      "y1": 65.18267980845042,
      "x2": 1859.2781517799774,
      "y2": 80.18267980845042,
      "x3": 1879.2781517799774,
      "y3": 80.18267980845042,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "NanumBarunGothic",
      "data": [
        {}
      ]
    },
    {
      "type": "line",
      "x1": 1603.0956283010069,
      "y1": 2.842170943040401e-14,
      "x2": 1603.0956283010069,
      "y2": 96.72651918097594,
      "fillStyle": "#fff",
      "strokeStyle": "#000",
      "alpha": 0.2,
      "hidden": false,
      "lineWidth": 1,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "text": "",
      "fontFamily": "NanumBarunGothic",
      "data": [
        {}
      ]
    },
    {
      "type": "line",
      "x1": 1727.5778152633538,
      "y1": 47.36575875486387,
      "x2": 1894.4085931022855,
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
      "fontFamily": "NanumBarunGothic",
      "data": [
        {}
      ]
    },
    {
      "type": "line",
      "x1": 1895.821062760597,
      "y1": 7.105427357601002e-15,
      "x2": 1895.821062760597,
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
      "fontFamily": "NanumBarunGothic",
      "data": [
        {}
      ]
    },
    {
      "type": "rect",
      "left": 1421.3183197641029,
      "top": 843.2688919156936,
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
      "fontFamily": "NanumBarunGothic",
      "data": [
        {}
      ]
    },
    {
      "type": "text",
      "left": 1443.6468916177664,
      "top": 826.7067477718405,
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
      "fontFamily": "NanumBarunGothic",
      "fontSize": 19,
      "rotation": 0,
      "fontColor": "rgb(72, 82, 88)",
      "bold": true,
      "data": [
        {}
      ]
    }
  ]
}