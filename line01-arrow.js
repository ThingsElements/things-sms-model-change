exports.model = {
      "type": "group",
      "left": 1431.984069321497,
      "top": 480.8725792568433,
      "width": 228.9212478040008,
      "height": 76.09967602007305,
      "rotation": 0,
      "components": [
        {
          "type": "text",
          "left": 60.25245345189683,
          "top": 0,
          "width": 116.64935306714779,
          "height": 44.92576435694218,
          "text": "라인01",
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
          "id": "line01_status",
          "mappings": [
            {
              "rule": "map",
              "param": {
                "OK": false,
                "default": true
              },
              "accessor": "camera_right_error",
              "target": "#line01_camera_right",
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
              "target": "#line01_camera_top"
            },
            {
              "rule": "map",
              "param": {
                "OK": false,
                "default": true
              },
              "target": "#line01_camera_left",
              "accessor": "camera_left_error",
              "property": "hidden"
            },
            {
              "rule": "map",
              "param": {
                "OK": false,
                "default": true
              },
              "target": "#line01_camera_ready",
              "accessor": "camera_ready",
              "property": "hidden"
            },
            {
              "rule": "value",
              "target": "#line01_speed",
              "property": "data",
              "accessor": "sorter_speed"
            },
            {
              "rule": "value",
              "target": "#line-a",
              "property": "data"
            },
            {
              "rule": "value",
              "target": "#line01_its",
              "property": "data"
            }
          ],
          "bold": true
        },
        {
          "type": "polygon",
          "path": [
            {
              "x": 52.88349920686187,
              "y": 21.2644191562037
            },
            {
              "x": 49.30619500709281,
              "y": 41.6198988075015
            },
            {
              "x": 198.58425778321066,
              "y": 41.24634158328752
            },
            {
              "x": 228.9212478040008,
              "y": 72.62519792914406
            },
            {
              "x": 0,
              "y": 72.62519792914406
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
          "id": "line-a-reverse",
          "fontSize": 9
        },
        {
          "type": "polygon",
          "path": [
            {
              "x": 176.03774859713894,
              "y": 21.2644191562037
            },
            {
              "x": 179.61505279690778,
              "y": 41.619898807501954
            },
            {
              "x": 30.336990020789926,
              "y": 41.24634158328706
            },
            {
              "x": 0,
              "y": 72.62519792914406
            },
            {
              "x": 228.9212478040008,
              "y": 72.62519792914406
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
              "target": "#line-a-reverse",
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
          "id": "line-a",
          "fontSize": 9
        },
        {
          "type": "text",
          "left": 58.43741229473085,
          "top": 44.45091295501891,
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
          "id": "line01_speed",
          "textFormat": "#,###.0",
          "data": [
            {
              "__field1": "35"
            }
          ]
        },
        {
          "type": "text",
          "left": 131.37592703401742,
          "top": 52.272568214612875,
          "width": 51.216473258219594,
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