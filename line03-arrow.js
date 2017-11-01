exports.model = {
  "type": "group",
  "left": 897.8602662469204,
  "top": 593.9809028191147,
  "width": 228.92124780400104,
  "height": 74.44074789945057,
  "rotation": 0,
  "components": [
    {
      "type": "text",
      "left": 57.376288338714176,
      "top": 0,
      "width": 116.64935306714756,
      "height": 44.92576435694218,
      "text": "라인03",
      "fillStyle": "#ccc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "top",
      "textWrap": true,
      "fontFamily": "NanumBarunGothic",
      "fontSize": 34,
      "rotation": 0,
      "fontColor": "rgb(85, 96, 132)",
      "locked": false,
      "id": "line03_status",
      "mappings": [
        {
          "rule": "map",
          "param": {
            "OK": false,
            "default": true
          },
          "accessor": "camera_right_error",
          "target": "#line03_camera_right",
          "property": "hidden"
        },
        {
          "rule": "map",
          "param": {
            "OK": false,
            "default": true
          },
          "accessor": "camera_top_error",
          "property": "hidden",
          "target": "#line03_camera_top"
        },
        {
          "rule": "map",
          "param": {
            "OK": false,
            "default": true
          },
          "target": "#line03_camera_left",
          "accessor": "camera_left_error",
          "property": "hidden"
        },
        {
          "rule": "map",
          "param": {
            "OK": false,
            "default": true
          },
          "target": "#line03_camera_ready",
          "accessor": "camera_ready",
          "property": "hidden"
        },
        {
          "rule": "value",
          "target": "#line03_speed",
          "property": "data",
          "accessor": "sorter_speed"
        },
        {
          "rule": "value",
          "target": "#line-c",
          "property": "data"
        },
        {
          "rule": "value",
          "target": "#line03_its",
          "property": "data"
        }
      ],
      "bold": true
    },
    {
      "type": "polygon",
      "path": [
        {
          "x": 52.88349920686153,
          "y": 19.605491035581394
        },
        {
          "x": 49.306195007092924,
          "y": 39.96097068687948
        },
        {
          "x": 198.58425778321066,
          "y": 39.5874134626647
        },
        {
          "x": 228.92124780400104,
          "y": 70.96626980852182
        },
        {
          "x": 0,
          "y": 70.96626980852182
        }
      ],
      "fillStyle": {
        "type": "gradient",
        "gradientType": "linear",
        "colorStops": [
          {
            "color": "#6599cd",
            "position": 0
          },
          {
            "color": "rgb(91, 181, 205)",
            "position": 0.3142857142857142
          },
          {
            "color": "#6599cd",
            "position": 0.7061224489795918
          },
          {
            "color": "rgba(255,255,255,0)",
            "position": 0.9469387755102041
          }
        ],
        "rotation": 0,
        "center": "center",
        "rotateWithShapes": true
      },
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": true,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "NanumBarunGothic",
      "locked": false,
      "mappings": [],
      "text": "",
      "shadow": {
        "left": 2,
        "top": 2,
        "blurSize": 2,
        "color": "rgba(0,0,0,.1)"
      },
      "id": "line-c-reverse",
      "fontSize": 9
    },
    {
      "type": "polygon",
      "path": [
        {
          "x": 176.03774859713872,
          "y": 19.60549103558094
        },
        {
          "x": 179.61505279690778,
          "y": 39.96097068687891
        },
        {
          "x": 30.33699002079004,
          "y": 39.587413462665154
        },
        {
          "x": 0,
          "y": 70.96626980852136
        },
        {
          "x": 228.92124780400104,
          "y": 70.96626980852113
        }
      ],
      "fillStyle": {
        "type": "gradient",
        "gradientType": "linear",
        "colorStops": [
          {
            "color": "#6599cd",
            "position": 0
          },
          {
            "color": "rgb(91, 181, 205)",
            "position": 0.3142857142857142
          },
          {
            "color": "#6599cd",
            "position": 0.7061224489795918
          },
          {
            "color": "rgba(255,255,255,0)",
            "position": 0.9469387755102041
          }
        ],
        "rotation": 3.141592653589793,
        "center": "center",
        "rotateWithShapes": true
      },
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "NanumBarunGothic",
      "locked": false,
      "mappings": [
        {
          "rule": "map",
          "param": {
            "1": false,
            "2": true,
            "3": false,
            "4": false,
            "5": true,
            "default": false
          },
          "target": "(self)",
          "property": "hidden",
          "accessor": "line_mode"
        },
        {
          "rule": "map",
          "param": {
            "1": true,
            "2": false,
            "3": true,
            "4": true,
            "5": false,
            "default": true
          },
          "target": "#line-c-reverse",
          "property": "hidden",
          "accessor": "line_mode"
        }
      ],
      "text": "",
      "shadow": {
        "left": 2,
        "top": 2,
        "blurSize": 2,
        "color": "rgba(0,0,0,.1)"
      },
      "id": "line-c",
      "fontSize": 9
    },
    {
      "type": "text",
      "left": 58.43741229473096,
      "top": 42.79198483439666,
      "width": 66.49671553899634,
      "height": 30.501288138718564,
      "text": "#{data}",
      "fillStyle": "#fff",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "right",
      "textBaseline": "top",
      "textWrap": true,
      "fontFamily": "NanumBarunGothic",
      "fontSize": 24,
      "rotation": 0,
      "fontColor": "#fff",
      "id": "line03_speed",
      "data": [
        {
          "__field1": "42"
        }
      ],
      "textFormat": "#,###.0"
    },
    {
      "type": "text",
      "left": 131.37592703401765,
      "top": 50.6136400939904,
      "width": 51.21647325821937,
      "height": 23.827107805460173,
      "text": "m/m",
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
      "fontSize": 12,
      "rotation": 0,
      "fontColor": "#fff"
    }
  ]
}