exports.model = {
  "type": "group",
  "left": 149.36099633134432,
  "top": 483.2255991079369,
  "width": 228.92124780400115,
  "height": 73.77896361183457,
  "rotation": 0,
  "components": [
    {
      "type": "text",
      "left": 57.971494730192546,
      "top": 0,
      "width": 116.64935306714779,
      "height": 44.92576435694218,
      "text": "라인02",
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
      "id": "line02_status",
      "mappings": [
        {
          "rule": "map",
          "param": {
            "OK": false,
            "default": true
          },
          "accessor": "camera_right_error",
          "target": "#line02_camera_right",
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
          "target": "#line02_camera_top"
        },
        {
          "rule": "map",
          "param": {
            "OK": false,
            "default": true
          },
          "target": "#line02_camera_left",
          "accessor": "camera_left_error",
          "property": "hidden"
        },
        {
          "rule": "map",
          "param": {
            "OK": false,
            "default": true
          },
          "target": "#line02_camera_ready",
          "accessor": "camera_ready",
          "property": "hidden"
        },
        {
          "rule": "value",
          "target": "#line02_speed",
          "property": "data",
          "accessor": "sorter_speed"
        },
        {
          "rule": "value",
          "target": "#line-b",
          "property": "data"
        },
        {
          "rule": "value",
          "target": "#line02_its",
          "property": "data"
        }
      ],
      "bold": true
    },
    {
      "type": "polygon",
      "path": [
        {
          "x": 176.03774859713928,
          "y": 18.943706747965052
        },
        {
          "x": 179.61505279690834,
          "y": 39.299186399263135
        },
        {
          "x": 30.33699002079038,
          "y": 38.925629175048925
        },
        {
          "x": 0,
          "y": 70.30448552090547
        },
        {
          "x": 228.92124780400115,
          "y": 70.30448552090547
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
      "id": "line-b-reverse",
      "fontSize": 9
    },
    {
      "type": "polygon",
      "path": [
        {
          "x": 52.8834992068621,
          "y": 18.943706747965052
        },
        {
          "x": 49.306195007093265,
          "y": 39.299186399263135
        },
        {
          "x": 198.58425778321123,
          "y": 38.925629175048925
        },
        {
          "x": 228.92124780400115,
          "y": 70.30448552090547
        },
        {
          "x": 0,
          "y": 70.30448552090547
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
          "target": "#line-b-reverse",
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
      "id": "line-b",
      "fontSize": 9
    },
    {
      "type": "text",
      "left": 58.43741229473116,
      "top": 42.130200546780316,
      "width": 66.49671553899631,
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
      "id": "line02_speed",
      "textFormat": "#,###.0",
      "data": [
        {
          "__field1": "27"
        }
      ]
    },
    {
      "type": "text",
      "left": 131.37592703401788,
      "top": 49.9518558063744,
      "width": 51.21647325821948,
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