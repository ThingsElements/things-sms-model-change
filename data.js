exports.model = {
  "left": 0,
  "top": 0,
  "width": 1920,
  "height": 1080,
  "links": [],
  "type": "model-layer",
  "translate": {
    "x": 111.76811142693577,
    "y": 129.21529305095493
  },
  "scale": {
    "x": 0.5671875000000001,
    "y": 0.5671875000000001
  },
  "fillStyle": "#efefef",
  "data": [
    {}
  ],
  "id": null,
  "startAngle": 2.3736477827122884,
  "mappings": [],
  "components": [
    {
      "type": "rect",
      "left": -0.4373469776302521,
      "top": -0.06282387664682787,
      "width": 29,
      "height": 31,
      "fillStyle": "#efefef",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "locked": true,
      "text": "",
      "data": [
        {}
      ],
      "fontSize": 14
    },
    {
      "type": "firebase",
      "top": -54.01570680628273,
      "left": 718.8219895287958,
      "width": 30,
      "height": 30.00000000000003,
      "fillStyle": "",
      "strokeStyle": "#000",
      "lineWidth": 0,
      "apiKey": "AIzaSyDrLyv8_9LI3JoKwOh-fP4HRmV0W7X6F5Q",
      "authDomain": "hatiolab-sms-test-cde98.firebaseapp.com",
      "databaseURL": "https://hatiolab-sms-test-cde98.firebaseio.com",
      "projectId": "hatiolab-sms-test-cde98",
      "storageBucket": "hatiolab-sms-test-cde98.appspot.com",
      "messagingSenderId": "88334726717",
      "childDataPath": "SCENE-322",
      "email": "test@example.com",
      "password": "testpass",
      "rotation": 0
    },
    {
      "type": "half-roundrect",
      "left": 46.839596164787054,
      "top": 774.9391126773046,
      "width": 1823.698407368558,
      "height": 276.7855952839991,
      "round": 2.1268767432199978,
      "fillStyle": "#fff",
      "strokeStyle": "#585858",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "Arial",
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
      "type": "conveyor",
      "top": 266.1799095509639,
      "left": 353.0358139878242,
      "width": 98.39288158149947,
      "height": 33.649610365049284,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "id": "02001",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 266.42187709772713,
      "left": 451.53823096588656,
      "width": 43.58556345184962,
      "height": 17.404970878473932,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "id": "02002",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 297.9612828646515,
      "left": 839.554330050675,
      "width": 28.067226837202497,
      "height": 35.80456522544205,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 4,
      "rotation": 1.5707963267948966,
      "animated": false,
      "id": "02021",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor-join",
      "cx": 836.0088852928377,
      "cy": 330.96831629889414,
      "rx": 35.30173638002623,
      "ry": 33.649610365049284,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7504915783575618,
      "ratio": 0,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 2.356194490192345,
      "animated": false,
      "id": "02022",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 330.33029748121794,
      "left": 802.653770710939,
      "width": 32.86713387105908,
      "height": 34.80994175694764,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "animated": false,
      "id": "02023",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor-join",
      "cx": 836.419016305776,
      "cy": 236.05792181926108,
      "rx": 35.01619070469269,
      "ry": 33.37742826576209,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7504915783575618,
      "ratio": 0,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0.7853981633974483,
      "animated": false,
      "id": "02019",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 232.8083105394751,
      "left": 839.554330050675,
      "width": 27.997928853124336,
      "height": 35.25781806261239,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 4,
      "rotation": -1.5707963267948966,
      "animated": false,
      "id": "02018",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "wheel-sorter",
      "top": 265.01957815906553,
      "left": 834.873990403865,
      "width": 37.73633888899383,
      "height": 35.97027314884599,
      "lineWidth": 0,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 0,
      "tilt": 1,
      "rotation": -3.141592653589793,
      "id": "02061",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 3;\nif(data.chute_full == 'Y')\n    return 2;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ]
    },
    {
      "type": "wheel-sorter",
      "top": 265.01957815906553,
      "left": 1183.2809841294682,
      "width": 37.736338888993714,
      "height": 35.97027314884599,
      "lineWidth": 0,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 0,
      "tilt": 0,
      "rotation": -3.141592653589793,
      "id": "02063",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 3;\nif(data.chute_full == 'Y')\n    return 2;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ]
    },
    {
      "type": "conveyor-belt",
      "top": 268.70869279661787,
      "left": 568.3155610216555,
      "width": 184.61973738060465,
      "height": 29.85791123750039,
      "strokeStyle": "black",
      "lineWidth": 1,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 13,
      "rotation": 0,
      "conveyorType": 1,
      "id": "02008",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 283.34546409547886,
      "left": 451.53823096588656,
      "width": 43.58556345184962,
      "height": 17.404970878473705,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "id": "02003",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 266.1799095509639,
      "left": 495.50531359715245,
      "width": 17.639968786732254,
      "height": 33.649610365049284,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "id": "02004",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 266.1799095509639,
      "left": 513.4858073794601,
      "width": 17.715202558604233,
      "height": 33.649610365049284,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "id": "02005",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 266.1799095509639,
      "left": 549.4467949440756,
      "width": 17.86567010234785,
      "height": 33.649610365049284,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "id": "02007",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 266.1799095509639,
      "left": 531.4663011617678,
      "width": 17.79043633047604,
      "height": 33.649610365049284,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "id": "02006",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "scanner",
      "top": 238.41720867273932,
      "left": 597.5097851378356,
      "width": 82.06147705413707,
      "height": 91.34558348842734,
      "lineWidth": 1,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 1,
      "rollWidth": 3,
      "rotation": 0,
      "id": "line02_its",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\n\nif((data.camera_ready && data.camera_ready == 'ER')\n|| (data.camera_top_error && data.camera_top_error == 'ER')\n|| (data.camera_left_error && data.camera_left_error == 'ER')\n|| (data.camera_right_error && data.camera_right_error == 'ER')\n|| (data.its_comm_state && data.its_comm_state == 'ER')\n)\n    return 3;\n\nreturn 1;\n",
          "target": "(self)",
          "property": "value"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 282.7571930175143,
      "left": 789.262775997455,
      "width": 26.116891925591176,
      "height": 17.404970878473705,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "id": "02010",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 265.66620897589576,
      "left": 789.262775997455,
      "width": 26.116891925591176,
      "height": 17.404970878473705,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "id": "02009",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 266.61807665000237,
      "left": 816.1275165831541,
      "width": 17.760430316309453,
      "height": 33.6496103650494,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "animated": false,
      "id": "02011",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 202.108156403992,
      "left": 802.6537707109392,
      "width": 33.013886291099766,
      "height": 35.130478646115876,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "animated": false,
      "id": "02020",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 266.61807665000237,
      "left": 873.2915322443562,
      "width": 53.68491285833568,
      "height": 33.6496103650494,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "id": "02012",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "wheel-sorter",
      "top": 265.01957815906553,
      "left": 927.8479057060877,
      "width": 37.736338888993714,
      "height": 35.97027314884599,
      "lineWidth": 0,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 0,
      "tilt": 1,
      "rotation": -3.141592653589793,
      "id": "02062",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 3;\nif(data.chute_full == 'Y')\n    return 2;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 232.8083105394751,
      "left": 932.5282453528974,
      "width": 27.997928853124108,
      "height": 35.25781806261239,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 4,
      "rotation": -1.5707963267948966,
      "animated": false,
      "id": "02024",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 200.9665371961253,
      "left": 964.6980777286146,
      "width": 68.11600047050842,
      "height": 35.13047864611599,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "animated": false,
      "id": "02026",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor-join",
      "cx": 963.8524301517643,
      "cy": 330.7907678602986,
      "rx": 35.37878938908739,
      "ry": 33.72305728291349,
      "startAngle": 2.356194490192345,
      "endAngle": -2.3911010752322315,
      "ratio": 0,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0.7853981633974483,
      "animated": false,
      "id": "02028",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor-join",
      "cx": 963.9428002299195,
      "cy": 235.8294927937518,
      "rx": 35.30173638002657,
      "ry": 33.649610365049284,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7504915783575618,
      "ratio": 0,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -0.7853981633974483,
      "animated": false,
      "id": "02025",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 297.9612828646515,
      "left": 932.5282453528973,
      "width": 28.067226837202497,
      "height": 35.80456522544205,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 4,
      "rotation": 1.5707963267948966,
      "animated": false,
      "id": "02027",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 330.7019423538951,
      "left": 964.7629728721056,
      "width": 67.96924805046706,
      "height": 34.80994175694741,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "animated": false,
      "id": "02029",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 266.61807665000237,
      "left": 966.2621123743298,
      "width": 108.04093518115758,
      "height": 33.6496103650494,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "id": "02013",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 266.61807665000237,
      "left": 1074.4684740302205,
      "width": 107.8467851635296,
      "height": 33.6496103650494,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "animated": false,
      "id": "02014",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 232.8083105394751,
      "left": 1187.8331484807998,
      "width": 27.99792885312445,
      "height": 35.25781806261239,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 4,
      "rotation": -1.5707963267948966,
      "animated": false,
      "id": "02030",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 200.4095490579098,
      "left": 1220.2879467712412,
      "width": 68.1160004705082,
      "height": 35.13047864611599,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "animated": false,
      "id": "02032",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor-join",
      "cx": 1219.5784115227775,
      "cy": 235.6591687035442,
      "rx": 34.46712195316468,
      "ry": 32.85405600572187,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7504915783575618,
      "ratio": 0,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -0.7853981633974483,
      "animated": false,
      "id": "02031",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor-join",
      "cx": 1220.1573332796665,
      "cy": 330.5340576056532,
      "rx": 35.37878938908739,
      "ry": 33.72305728291349,
      "startAngle": 2.356194490192345,
      "endAngle": -2.3911010752322315,
      "ratio": 0,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0.7853981633974483,
      "animated": false,
      "id": "02034",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 297.9612828646515,
      "left": 1187.8331484807998,
      "width": 28.067226837202497,
      "height": 35.80456522544205,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 4,
      "rotation": 1.5707963267948966,
      "animated": false,
      "id": "02033",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 330.7019423538951,
      "left": 1221.067876000008,
      "width": 67.96924805046751,
      "height": 34.80994175694741,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "animated": false,
      "id": "02035",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 266.61807665000237,
      "left": 1330.3264602583906,
      "width": 106.9585311821586,
      "height": 33.6496103650494,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "animated": false,
      "id": "02016",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 266.61807665000237,
      "left": 1222.1200986024996,
      "width": 107.66780319893405,
      "height": 33.6496103650494,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "id": "02015",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "wheel-sorter",
      "top": 265.01957815906553,
      "left": 1438.5955833228998,
      "width": 37.736338888993714,
      "height": 35.97027314884599,
      "lineWidth": 0,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 0,
      "tilt": 0,
      "rotation": -3.141592653589793,
      "id": "02064",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 3;\nif(data.chute_full == 'Y')\n    return 2;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 232.8083105394751,
      "left": 1443.1477476742311,
      "width": 27.997928853123994,
      "height": 35.25781806261239,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 4,
      "rotation": -1.5707963267948966,
      "animated": false,
      "id": "02036",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 200.9665371961253,
      "left": 1475.3175800499484,
      "width": 68.11600047050797,
      "height": 35.13047864611599,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "animated": false,
      "id": "02038",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor-join",
      "cx": 1474.5623025512546,
      "cy": 235.8294927937518,
      "rx": 35.30173638002657,
      "ry": 33.649610365049284,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7504915783575618,
      "ratio": 0,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -0.7853981633974483,
      "animated": false,
      "id": "02037",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor-join",
      "cx": 1474.471932473099,
      "cy": 330.7907678602986,
      "rx": 35.37878938908807,
      "ry": 33.72305728291349,
      "startAngle": 2.356194490192345,
      "endAngle": -2.3911010752322315,
      "ratio": 0,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0.7853981633974483,
      "animated": false,
      "id": "02040",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 297.9612828646515,
      "left": 1443.1477476742314,
      "width": 28.067226837202497,
      "height": 35.80456522544205,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 4,
      "rotation": 1.5707963267948966,
      "animated": false,
      "id": "02039",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 330.7019423538951,
      "left": 1475.3824751934396,
      "width": 67.96924805046751,
      "height": 34.80994175694741,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "animated": false,
      "id": "02041",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 266.61807665000237,
      "left": 1477.434697795931,
      "width": 197.53245684837952,
      "height": 33.6496103650494,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "id": "02017",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "wheel-sorter",
      "top": 266.01957815906553,
      "left": 753.2510395841929,
      "width": 35.67436641715028,
      "height": 34.00480126627167,
      "lineWidth": 0,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 0,
      "tilt": 1,
      "rotation": -3.141592653589793,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 3;\nif(data.chute_full == 'Y')\n    return 2;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "02060"
    },
    {
      "type": "conveyor-join",
      "cx": 352.207179230031,
      "cy": 327.8627080897204,
      "rx": 63.85860582479751,
      "ry": 60.87001447542127,
      "startAngle": -0.8058479779300503,
      "endAngle": 0.7696555931824532,
      "ratio": 45.72930092058439,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -0.7853981633974483,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "id": "02056"
    },
    {
      "type": "conveyor",
      "top": 348.3022842438421,
      "left": 270.5967873181012,
      "width": 72.44847771588456,
      "height": 35.80456522544205,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 4,
      "rotation": 1.5707963267948966,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "id": "02055"
    },
    {
      "type": "conveyor",
      "top": 418.67822409346616,
      "left": 270.5967873181012,
      "width": 72.44847771588456,
      "height": 35.80456522544205,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 4,
      "rotation": 1.5707963267948966,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "id": "02054"
    },
    {
      "type": "conveyor",
      "top": 489.5955173265488,
      "left": 270.5967873181012,
      "width": 72.44847771588456,
      "height": 35.80456522544205,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 4,
      "rotation": 1.5707963267948966,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "id": "02053"
    },
    {
      "type": "conveyor",
      "top": 561.0541639430902,
      "left": 270.5967873181012,
      "width": 72.44847771588456,
      "height": 35.80456522544205,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 4,
      "rotation": 1.5707963267948966,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "id": "02052"
    },
    {
      "type": "conveyor",
      "top": 633.0541639430903,
      "left": 270.5967873181012,
      "width": 72.44847771588456,
      "height": 35.80456522544205,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 4,
      "rotation": 1.5707963267948966,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "id": "02051"
    },
    {
      "type": "conveyor-join",
      "cx": 268.1583864859318,
      "cy": 685.8166624825856,
      "rx": 55.590733951929394,
      "ry": 52.98908011924118,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7504915783575618,
      "ratio": 38.68448193996481,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 2.356194490192345,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "id": "02050"
    },
    {
      "type": "conveyor-join",
      "cx": 280.0793596811592,
      "cy": 681.155941172427,
      "rx": 63.85860582479751,
      "ry": 60.87001447542127,
      "startAngle": -0.017290575443727363,
      "endAngle": 1.0471066114401713,
      "ratio": 45.72930092058439,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -2.617993877991494,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "id": "02049"
    },
    {
      "type": "rect",
      "left": 211.41093884420255,
      "top": 706.0623245875735,
      "width": 56.30075187969939,
      "height": 34.646616541353296,
      "fillStyle": "#efefef",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0
    },
    {
      "type": "conveyor",
      "top": 706.3002103028437,
      "left": 214.83026316899387,
      "width": 53.11378082479811,
      "height": 33.649610365049284,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "id": "02048"
    },
    {
      "type": "conveyor",
      "top": 627.0541639430903,
      "left": 197.92761438577034,
      "width": 72.44847771588454,
      "height": 35.80456522544205,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 4,
      "rotation": 1.5707963267948966,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "id": "02059"
    },
    {
      "type": "conveyor-join",
      "cx": 223.23725441800138,
      "cy": 681.155941172427,
      "rx": 63.85860582479751,
      "ry": 60.87001447542127,
      "startAngle": -0.017290575443727363,
      "endAngle": 1.0471066114401713,
      "ratio": 45.72930092058439,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -2.617993877991494,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "id": "02047"
    },
    {
      "type": "rect",
      "left": 155.65154034796197,
      "top": 706.0623245875735,
      "width": 56.30075187969936,
      "height": 34.646616541353296,
      "fillStyle": "#efefef",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0
    },
    {
      "type": "conveyor",
      "top": 706.3002103028437,
      "left": 161.23082024303142,
      "width": 53.37857133666989,
      "height": 33.649610365049284,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "id": "02046"
    },
    {
      "type": "conveyor",
      "top": 627.0541639430903,
      "left": 140.5441557391538,
      "width": 72.44847771588451,
      "height": 35.80456522544205,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 4,
      "rotation": 1.5707963267948966,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "id": "02058"
    },
    {
      "type": "conveyor-join",
      "cx": 168.56056268867803,
      "cy": 681.155941172427,
      "rx": 63.85860582479751,
      "ry": 60.87001447542127,
      "startAngle": -0.017290575443727363,
      "endAngle": 1.0471066114401713,
      "ratio": 45.72930092058439,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -2.617993877991494,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "id": "02045"
    },
    {
      "type": "rect",
      "left": 99.89214185172139,
      "top": 706.0623245875735,
      "width": 56.30075187969936,
      "height": 34.646616541353296,
      "fillStyle": "#efefef",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0
    },
    {
      "type": "conveyor",
      "top": 706.3002103028437,
      "left": 98.97484861863865,
      "width": 61.71523609438725,
      "height": 33.649610365049284,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "id": "02044",
      "fontSize": 16
    },
    {
      "type": "conveyor",
      "top": 627.0541639430903,
      "left": 85.9501707767478,
      "width": 72.44847771588451,
      "height": 35.80456522544205,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 4,
      "rotation": 1.5707963267948966,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "id": "02057"
    },
    {
      "type": "conveyor-join",
      "cx": 96.80868298942994,
      "cy": 677.3664674882166,
      "rx": 63.85860582479751,
      "ry": 60.87001447542127,
      "startAngle": -0.806400203896799,
      "endAngle": 0.7734030055768449,
      "ratio": 45.72930092058439,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -2.356194490192345,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "id": "02043"
    },
    {
      "type": "conveyor",
      "top": 624.0541639430902,
      "left": 15.115584310582477,
      "width": 72.44847771588451,
      "height": 35.80456522544205,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 4,
      "rotation": 1.5707963267948966,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "id": "02042"
    },
    {
      "type": "conveyor",
      "top": 619.5162833876942,
      "left": 406.2115026311444,
      "width": 98.99418635337287,
      "height": 35.10473969465397,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "id": "01001",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "startAngle": 2.251474735072685
    },
    {
      "type": "conveyor",
      "top": 619.2494226653746,
      "left": 505.3199610828261,
      "width": 44.59072104306301,
      "height": 18.157623979993332,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "id": "01002",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor-belt",
      "top": 622.154420252277,
      "left": 622.147159952932,
      "width": 192.60335418246314,
      "height": 31.149073955019958,
      "strokeStyle": "black",
      "lineWidth": 1,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 13,
      "rotation": 0,
      "conveyorType": 1,
      "id": "01008",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 636.1270672294509,
      "left": 505.3199610828261,
      "width": 44.59072104306301,
      "height": 18.157623979993332,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "id": "01003",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 619.5162833876942,
      "left": 550.1883373926764,
      "width": 17.743163110814976,
      "height": 35.10473969465397,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "id": "01004",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 619.5162833876942,
      "left": 567.9463719423084,
      "width": 17.17895483541122,
      "height": 35.10473969465397,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "id": "01005",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 619.5162833876942,
      "left": 603.4624410415727,
      "width": 17.704522491351554,
      "height": 35.10473969465397,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "id": "01007",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 619.5162833876942,
      "left": 585.7044064919407,
      "width": 17.717402697839248,
      "height": 35,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "id": "01006",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "scanner",
      "top": 590.5530241707942,
      "left": 652.6038465851905,
      "width": 85.61010839924677,
      "height": 95.29569275334484,
      "lineWidth": 1,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 1,
      "rollWidth": 3,
      "rotation": 0,
      "id": "line01_its",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\n\nif((data.camera_ready && data.camera_ready == 'ER')\n|| (data.camera_top_error && data.camera_top_error == 'ER')\n|| (data.camera_left_error && data.camera_left_error == 'ER')\n|| (data.camera_right_error && data.camera_right_error == 'ER')\n|| (data.its_comm_state && data.its_comm_state == 'ER')\n)\n    return 3;\n\nreturn 1;\n",
          "target": "(self)",
          "property": "value"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 539.7491416328196,
      "left": 322.1765102336582,
      "width": 64.09635541299048,
      "height": 31.215093985321232,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 4,
      "rotation": -1.5707963267948966,
      "animated": false,
      "id": "01043",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor-join",
      "cx": 403.05471378285324,
      "cy": 588.6882195978357,
      "rx": 67.16484140681854,
      "ry": 61.48893931610178,
      "startAngle": 2.303834612632515,
      "endAngle": -2.426007660272118,
      "ratio": 52.02345916203139,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0.8069880627838009,
      "locked": false,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "data": [
        {}
      ],
      "id": "01044"
    },
    {
      "type": "wheel-sorter",
      "top": 622.1474673116206,
      "left": 815.4559581716971,
      "width": 33.19587136617872,
      "height": 31.6423001173456,
      "lineWidth": 0,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 0,
      "tilt": 1,
      "rotation": -3.141592653589793,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 3;\nif(data.chute_full == 'Y')\n    return 2;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01049"
    },
    {
      "type": "conveyor",
      "top": 652.6719967885967,
      "left": 900.223414466691,
      "width": 29.280953965939148,
      "height": 37.352882499492466,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 4,
      "rotation": 1.5707963267948966,
      "animated": false,
      "id": "01021",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 686.440763201038,
      "left": 843.3114754098362,
      "width": 54.613091894957165,
      "height": 36.315247959986664,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "animated": false,
      "id": "01023",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 584.7015772504285,
      "left": 900.223414466691,
      "width": 29.208659289536058,
      "height": 36.78249203666985,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 4,
      "rotation": -1.5707963267948966,
      "animated": false,
      "id": "01018",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "wheel-sorter",
      "top": 618.305775122361,
      "left": 895.3406802180208,
      "width": 39.36819295546161,
      "height": 37.52575622531947,
      "lineWidth": 0,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 0,
      "tilt": 1,
      "rotation": -3.141592653589793,
      "id": "01050",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 3;\nif(data.chute_full == 'Y')\n    return 2;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ]
    },
    {
      "type": "wheel-sorter",
      "top": 618.305775122361,
      "left": 1258.8140366654943,
      "width": 39.36819295546161,
      "height": 37.52575622531947,
      "lineWidth": 0,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 0,
      "tilt": 0,
      "rotation": -3.141592653589793,
      "id": "01052",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 3;\nif(data.chute_full == 'Y')\n    return 2;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 636.441966715073,
      "left": 849.1841065714364,
      "width": 27.246279607253996,
      "height": 18.157623979993218,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "id": "01010",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 619.8013690839762,
      "left": 849.1841065714364,
      "width": 27.246279607253996,
      "height": 18.157623979993332,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "id": "01009",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 619.9733983969809,
      "left": 876.6026079477898,
      "width": 18.5284547534211,
      "height": 35.104739694653745,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "id": "01011",
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 552.673838806501,
      "left": 834.6538693854591,
      "width": 62.19654693084408,
      "height": 36.64964600901942,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "animated": false,
      "id": "01020",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 619.9733983969809,
      "left": 935.4195337734747,
      "width": 56.00644022254494,
      "height": 35.104739694653745,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "id": "01012",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "wheel-sorter",
      "top": 618.305775122361,
      "left": 992.3351196682713,
      "width": 39.368192955461836,
      "height": 37.52575622531947,
      "lineWidth": 0,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 0,
      "tilt": 1,
      "rotation": -3.141592653589793,
      "id": "01051",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 3;\nif(data.chute_full == 'Y')\n    return 2;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 584.7015772504285,
      "left": 997.2178539169419,
      "width": 29.208659289535603,
      "height": 36.78249203666985,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 4,
      "rotation": -1.5707963267948966,
      "animated": false,
      "id": "01024",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 551.4828519068664,
      "left": 1030.7788247370722,
      "width": 69.67493630592412,
      "height": 36.649646009019534,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "animated": false,
      "id": "01026",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor-join",
      "cx": 1029.896608338823,
      "cy": 686.9211459638504,
      "rx": 36.90869459534292,
      "ry": 35.18136271955723,
      "startAngle": 2.356194490192345,
      "endAngle": -2.3911010752322315,
      "ratio": 0,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0.7853981633974483,
      "animated": false,
      "id": "01028",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor-join",
      "cx": 1029.9908863419087,
      "cy": 587.8534062153385,
      "rx": 36.82830953898065,
      "ry": 35.104739694653745,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7504915783575618,
      "ratio": 0,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -0.7853981633974483,
      "animated": false,
      "id": "01025",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 652.6719967885967,
      "left": 997.2178539169412,
      "width": 29.280953965939148,
      "height": 37.352882499492466,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 4,
      "rotation": 1.5707963267948966,
      "animated": false,
      "id": "01027",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 686.8284793253156,
      "left": 1030.8465261783367,
      "width": 69.52183778712379,
      "height": 36.315247959986436,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "animated": false,
      "id": "01029",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 619.9733983969809,
      "left": 1032.4104938267174,
      "width": 112.71301107964359,
      "height": 35.104739694653745,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "id": "01013",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 619.9733983969809,
      "left": 1145.2960850126724,
      "width": 112.51046532185933,
      "height": 35.104739694653745,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "id": "01014",
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 584.7015772504285,
      "left": 1263.56305286114,
      "width": 29.2086592895364,
      "height": 36.78249203666985,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 4,
      "rotation": -1.5707963267948966,
      "animated": false,
      "id": "01030",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 550.9017776123071,
      "left": 1297.421312539885,
      "width": 69.96830310845394,
      "height": 36.649646009019534,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "animated": false,
      "id": "01032",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor-join",
      "cx": 1296.6810944532187,
      "cy": 587.6757167031685,
      "rx": 35.95760340352945,
      "ry": 34.27478272355768,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7504915783575618,
      "ratio": 0,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -0.7853981633974483,
      "animated": false,
      "id": "01031",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor-join",
      "cx": 1297.2850508544568,
      "cy": 686.6533346409699,
      "rx": 36.90869459534338,
      "ry": 35.18136271955723,
      "startAngle": 2.356194490192345,
      "endAngle": -2.3911010752322315,
      "ratio": 0,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0.7853981633974483,
      "animated": false,
      "id": "01034",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 652.6719967885967,
      "left": 1263.56305286114,
      "width": 29.28095396593926,
      "height": 37.352882499492466,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 4,
      "rotation": 1.5707963267948966,
      "animated": false,
      "id": "01033",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 686.8284793253156,
      "left": 1298.2349686939708,
      "width": 69.81520458965451,
      "height": 36.315247959986436,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "animated": false,
      "id": "01035",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 619.9733983969809,
      "left": 1412.2182843456947,
      "width": 111.58380006599145,
      "height": 35.104739694653745,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "animated": false,
      "id": "01016",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 619.9733983969809,
      "left": 1299.332693159739,
      "width": 112.32374353789282,
      "height": 35.104739694653745,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "id": "01015",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "wheel-sorter",
      "top": 618.305775122361,
      "left": 1525.1693509677243,
      "width": 39.36819295546138,
      "height": 37.52575622531947,
      "lineWidth": 0,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 0,
      "tilt": 0,
      "rotation": -3.141592653589793,
      "id": "01053",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 3;\nif(data.chute_full == 'Y')\n    return 2;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 551.4828519068664,
      "left": 1563.4793379835012,
      "width": 69.96830310845417,
      "height": 36.649646009019534,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "animated": false,
      "id": "01038",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor-join",
      "cx": 1562.691399588338,
      "cy": 587.8534062153385,
      "rx": 36.8283095389811,
      "ry": 35.104739694653745,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7504915783575618,
      "ratio": 0,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -0.7853981633974483,
      "animated": false,
      "id": "01037",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor-join",
      "cx": 1562.5971215852535,
      "cy": 686.9211459638504,
      "rx": 36.908694595344514,
      "ry": 35.18136271955723,
      "startAngle": 2.356194490192345,
      "endAngle": -2.3911010752322315,
      "ratio": 0,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0.7853981633974483,
      "animated": false,
      "id": "01040",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 652.6719967885967,
      "left": 1529.9183671633702,
      "width": 29.280953965939716,
      "height": 37.352882499492466,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 4,
      "rotation": 1.5707963267948966,
      "animated": false,
      "id": "01039",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 686.8284793253156,
      "left": 1563.5470394247654,
      "width": 69.81520458965451,
      "height": 36.315247959986436,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "animated": false,
      "id": "01041",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor",
      "top": 619.9733983969809,
      "left": 1565.6880074619696,
      "width": 197.31512726393294,
      "height": 35.104739694653745,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 7,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "id": "01017",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ]
    },
    {
      "type": "conveyor-join",
      "cx": 896.1264626297474,
      "cy": 588.0928265679006,
      "rx": 37.03514678596741,
      "ry": 33.90541607166017,
      "startAngle": 2.356194490192345,
      "endAngle": -2.4085543677521746,
      "ratio": 0,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -2.356194490192345,
      "locked": false,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "data": [
        {}
      ],
      "id": "01019"
    },
    {
      "type": "conveyor-join",
      "cx": 897.5790499754033,
      "cy": 687.3529618543917,
      "rx": -37.035146785967186,
      "ry": 33.90541607166017,
      "startAngle": 2.356194490192345,
      "endAngle": -2.4085543677521746,
      "ratio": 0,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 5.497787143782137,
      "locked": false,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "data": [
        {}
      ],
      "id": "01022"
    },
    {
      "type": "conveyor",
      "top": 584.4003915427667,
      "left": 1529.9183671633702,
      "width": 29.280953965939716,
      "height": 37.35288249949235,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 4,
      "rotation": 1.5707963267948966,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "id": "01036"
    },
    {
      "type": "conveyor",
      "top": 438.47630283880244,
      "left": 285.3017104303883,
      "width": 137.84595501953032,
      "height": 31.215093985321175,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 4,
      "rotation": -1.5707963267948966,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "id": "01042"
    },
    {
      "type": "conveyor",
      "top": 402.6993831268386,
      "left": 313.4618043336578,
      "width": 41.568341867935715,
      "height": 8.02110733318608,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -1.5707963267948966,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "id": "01045"
    },
    {
      "type": "conveyor",
      "top": 445.30700113921466,
      "left": 313.6892408836607,
      "width": 41.11346876792993,
      "height": 8.02110733318608,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -1.5707963267948966,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "id": "01046"
    },
    {
      "type": "conveyor",
      "top": 487.4669473611466,
      "left": 313.41191092521126,
      "width": 41.06709565931624,
      "height": 8.021107333185853,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -1.5707963267948966,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "id": "01047"
    },
    {
      "type": "conveyor",
      "top": 529.1310697798062,
      "left": 313.33310349934,
      "width": 41.30322346581363,
      "height": 8.021107333186137,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -1.5707963267948966,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "id": "01048"
    },
    {
      "type": "polygon",
      "path": [
        {
          "x": 390.1530175409606,
          "y": 202.45916382505447
        },
        {
          "x": 390.1530175409606,
          "y": 214.2913289130097
        },
        {
          "x": 579.0722802820045,
          "y": 214.2913289130097
        },
        {
          "x": 579.1176590974777,
          "y": 228.16863886675765
        },
        {
          "x": 357.80192811348445,
          "y": 228.16863886675765
        }
      ],
      "fillStyle": {
        "type": "gradient",
        "gradientType": "linear",
        "colorStops": [
          {
            "color": "#cc3300",
            "position": 0
          },
          {
            "color": "rgb(251, 111, 2)",
            "position": 0.22857142857142862
          },
          {
            "color": "#a92d30",
            "position": 0.7306122448979591
          },
          {
            "color": "#cc3300",
            "position": 1
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
      "fontFamily": "Arial",
      "id": "line-b-reverse"
    },
    {
      "type": "text",
      "left": 356.44428278431155,
      "top": 231.68239229679216,
      "width": 137.40758278955803,
      "height": 27.76422548231642,
      "text": "#{data} m/m",
      "fillStyle": "#000",
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
      "fontSize": 20,
      "rotation": 0,
      "fontColor": "#cc3300",
      "italic": true,
      "bold": true,
      "locked": false,
      "id": "line02_speed"
    },
    {
      "type": "polygon",
      "path": [
        {
          "x": 546.7665696700017,
          "y": 201.45916382505447
        },
        {
          "x": 546.7665696700017,
          "y": 213.2913289130097
        },
        {
          "x": 357.84730692895766,
          "y": 213.2913289130097
        },
        {
          "x": 357.80192811348445,
          "y": 227.16863886675765
        },
        {
          "x": 579.1176590974778,
          "y": 227.16863886675765
        }
      ],
      "fillStyle": {
        "type": "gradient",
        "gradientType": "linear",
        "colorStops": [
          {
            "color": "#cc3300",
            "position": 0
          },
          {
            "color": "rgb(251, 111, 2)",
            "position": 0.22857142857142862
          },
          {
            "color": "#a92d30",
            "position": 0.7306122448979591
          },
          {
            "color": "#cc3300",
            "position": 1
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
      "fontFamily": "Arial",
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
      "id": "line-b"
    },
    {
      "type": "text",
      "left": 398.2530884553645,
      "top": 159.2779978343503,
      "width": 171.08858336587218,
      "height": 39.558389082114445,
      "text": "라인02",
      "fillStyle": "#ccc",
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
      "fontSize": 50,
      "rotation": 0,
      "fontColor": "#aaa",
      "locked": false,
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
      "id": "line02_status"
    },
    {
      "type": "polygon",
      "path": [
        {
          "x": 434.65116179417316,
          "y": 558.4509092428493
        },
        {
          "x": 434.65116179417316,
          "y": 570.2830743308045
        },
        {
          "x": 623.5704245352171,
          "y": 570.2830743308045
        },
        {
          "x": 623.6158033506903,
          "y": 584.1603842845526
        },
        {
          "x": 402.300072366697,
          "y": 584.1603842845526
        }
      ],
      "fillStyle": {
        "type": "gradient",
        "gradientType": "linear",
        "colorStops": [
          {
            "color": "#cc3300",
            "position": 0
          },
          {
            "color": "rgb(251, 111, 2)",
            "position": 0.22857142857142862
          },
          {
            "color": "#a92d30",
            "position": 0.7306122448979591
          },
          {
            "color": "#cc3300",
            "position": 1
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
      "fontFamily": "Arial",
      "id": "line-a-reverse"
    },
    {
      "type": "text",
      "left": 439.64785281167656,
      "top": 516.3231402873625,
      "width": 171.08858336587218,
      "height": 39.55838908211456,
      "text": "라인01",
      "fillStyle": "#ccc",
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
      "fontSize": 50,
      "rotation": 0,
      "fontColor": "#aaa",
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
      ]
    },
    {
      "type": "text",
      "left": 487.39879142039547,
      "top": 585.1908778962105,
      "width": 137.40758278955786,
      "height": 27.764225482316533,
      "text": "#{data} m/m",
      "fillStyle": "#000",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "right",
      "textBaseline": "top",
      "textWrap": true,
      "fontFamily": "Arial",
      "fontSize": 20,
      "rotation": 0,
      "fontColor": "#cc3300",
      "italic": true,
      "bold": true,
      "id": "line01_speed"
    },
    {
      "type": "polygon",
      "path": [
        {
          "x": 591.2647139232141,
          "y": 558.4509092428493
        },
        {
          "x": 591.2647139232141,
          "y": 570.2830743308045
        },
        {
          "x": 402.3454511821702,
          "y": 570.2830743308045
        },
        {
          "x": 402.300072366697,
          "y": 584.1603842845526
        },
        {
          "x": 623.6158033506903,
          "y": 584.1603842845526
        }
      ],
      "fillStyle": {
        "type": "gradient",
        "gradientType": "linear",
        "colorStops": [
          {
            "color": "#cc3300",
            "position": 0
          },
          {
            "color": "rgb(251, 111, 2)",
            "position": 0.22857142857142862
          },
          {
            "color": "#a92d30",
            "position": 0.7306122448979591
          },
          {
            "color": "#cc3300",
            "position": 1
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
      "fontFamily": "Arial",
      "id": "line-a",
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
          "accessor": "line_mode",
          "target": "(self)",
          "property": "hidden"
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
          "accessor": "line_mode",
          "target": "#line-a-reverse",
          "property": "hidden"
        }
      ]
    },
    {
      "type": "rect",
      "left": -0.6058091286307672,
      "top": -0.27470544970091737,
      "width": 1920.8436774966603,
      "height": 97.73058957160336,
      "fillStyle": "#fff",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "data": [
        {}
      ],
      "shadow": {
        "top": 2,
        "blurSize": 2,
        "color": "rgba(0, 0, 0, 0.16)"
      },
      "text": ""
    },
    {
      "type": "image-view",
      "left": 286.0814182247022,
      "top": 7.0010731466836305,
      "width": 87.46134401592013,
      "height": 87.42993617202572,
      "isGray": false,
      "fillStyle": "#fff",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 1,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "src": "$base_url/download/707d7659-9cfc-4ca0-9241-80ba5aea19e3"
    },
    {
      "type": "text",
      "left": 387.46117957281115,
      "top": 20.982855054535463,
      "width": 293.5436697578174,
      "height": 28.51573866194788,
      "text": "Sorter Management System",
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
      "fontFamily": "Arial",
      "fontSize": 12,
      "rotation": 0,
      "bold": false,
      "fontColor": "#879bbd"
    },
    {
      "type": "text",
      "left": 384.4553241865149,
      "top": 44.85723056737583,
      "width": 300.5855386294263,
      "height": 28.515223435416523,
      "text": "서브터미널 - 울산 남B&중",
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
      "fontFamily": "Arial",
      "fontSize": 25,
      "rotation": 0,
      "bold": true,
      "fontColor": "#636363"
    },
    {
      "type": "rect",
      "left": -0.3544834274357527,
      "top": -0.25963132277465206,
      "width": 266.6565689680783,
      "height": 97.71551544467694,
      "fillStyle": "#555c6b",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0
    },
    {
      "type": "image-view",
      "left": 38.631159341959375,
      "top": 3.936000671687353,
      "width": 179.83252838020664,
      "height": 87.49023267973085,
      "isGray": false,
      "fillStyle": "#fff",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 1,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "src": "$base_url/download/5370315a-1555-4443-9d0c-1b9e216065e7"
    },
    {
      "type": "rect",
      "left": 1106.6273009803067,
      "top": 516.7050585161401,
      "width": 100,
      "height": 90,
      "fillStyle": "#303030",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Arial",
      "fontSize": 13,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-03-unload",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-03-load",
          "property": "data"
        }
      ],
      "id": "chute-01026"
    },
    {
      "type": "line",
      "x1": 1106.6804274076499,
      "y1": 543.8772037898871,
      "x2": 1206.5142408147399,
      "y2": 543.8772037898871,
      "fillStyle": "#fff",
      "strokeStyle": "#fff",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 2,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "Arial",
      "fontSize": 13
    },
    {
      "type": "rect",
      "left": 1141.1286182840686,
      "top": 548.97702067908,
      "width": 63.330615939967174,
      "height": 23.510083785288998,
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
      "fontSize": 18,
      "fontFamily": "Arial",
      "textFormat": "#,##0",
      "textAlign": "right",
      "fontColor": "#303030",
      "paddingRight": 2,
      "textWrap": true,
      "id": "chute-03-unload"
    },
    {
      "type": "rect",
      "left": 1141.1286182840686,
      "top": 579.5774471932659,
      "width": 63.330615939967174,
      "height": 23.51008378528934,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Arial",
      "fontSize": 18,
      "textAlign": "right",
      "paddingRight": 2,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-03-load"
    },
    {
      "type": "text",
      "left": 1108.842565751726,
      "top": 549.2655145613112,
      "width": 30.28215830570025,
      "height": 23.633677991137574,
      "text": "하",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1108.842565751726,
      "top": 516.7692073234973,
      "width": 95.83815422784755,
      "height": 26.5878877400296,
      "text": "03",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1108.5251325841691,
      "top": 579.3984540000115,
      "width": 30.28215830570025,
      "height": 23.633677991137233,
      "text": "상",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "rect",
      "left": 1758.091020315852,
      "top": 180.9490312114658,
      "width": 23.685499748317625,
      "height": 9.198066812659505,
      "fillStyle": "#e8736a",
      "strokeStyle": "#666",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "text": ""
    },
    {
      "type": "text",
      "left": 1795.9976695506477,
      "top": 179.28963495722934,
      "width": 102.23515642104803,
      "height": 18.818176330158906,
      "text": "에러",
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "left",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "Arial",
      "fontSize": 22,
      "rotation": 0,
      "fontColor": "#333"
    },
    {
      "type": "rect",
      "left": 1758.091020315852,
      "top": 149.53694455018632,
      "width": 23.685499748317625,
      "height": 9.198066812659505,
      "fillStyle": "#ffba00",
      "strokeStyle": "#666",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0
    },
    {
      "type": "text",
      "left": 1795.9976695506477,
      "top": 147.4141378101375,
      "width": 103.59591285190209,
      "height": 18.818176330158906,
      "text": "슈트 만재",
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "left",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "Arial",
      "fontSize": 22,
      "rotation": 0,
      "fontColor": "#333"
    },
    {
      "type": "rect",
      "left": 1758.091020315852,
      "top": 118.18849891737483,
      "width": 23.685499748316715,
      "height": 9.198066812659391,
      "fillStyle": "#6599cd",
      "strokeStyle": "#666",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0
    },
    {
      "type": "text",
      "left": 1795.9976695506487,
      "top": 115.53864066304567,
      "width": 90.74204904164935,
      "height": 18.818176330158906,
      "text": "정상",
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "left",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "Arial",
      "fontSize": 22,
      "rotation": 0,
      "fontColor": "#333"
    },
    {
      "type": "rect",
      "left": 1758.091020315852,
      "top": 212.4366171114268,
      "width": 23.685499748317625,
      "height": 9.198066812659476,
      "fillStyle": "#aaa",
      "strokeStyle": "#666",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "text": ""
    },
    {
      "type": "text",
      "left": 1795.997669550648,
      "top": 210.16513210432117,
      "width": 93.60666108150076,
      "height": 18.818176330158934,
      "text": "정지",
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "left",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "Arial",
      "fontSize": 22,
      "rotation": 0,
      "fontColor": "#333"
    },
    {
      "type": "text",
      "left": 607.8543848725665,
      "top": 880.5630783100178,
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
      "fontFamily": "Arial",
      "fontSize": 13,
      "rotation": 0,
      "fontColor": "#fff"
    },
    {
      "type": "chartjs",
      "top": 832.4948123863614,
      "left": 645.1941229957973,
      "width": 357.15481691237676,
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
              "backgroundColor": "rgb(94, 201, 146)",
              "type": "bar",
              "borderColor": "rgb(94, 201, 146)"
            },
            {
              "label": "new series",
              "type": "bar",
              "data": [],
              "borderWidth": 0,
              "dataKey": "",
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
              "fontSize": 3,
              "fontColor": "rgba(0, 0, 0, 0.5)"
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
                  "fontSize": 3,
                  "fontColor": "rgba(0, 0, 0, 0.5)"
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
                  "fontSize": 3,
                  "fontColor": "rgba(0, 0, 0, 0.5)",
                  "min": "0"
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
                  "fontSize": 3,
                  "fontColor": "rgba(0, 0, 0, 0.5)"
                },
                "scaleLabel": {
                  "display": false
                }
              }
            ]
          },
          "defaultFontSize": 3,
          "tooltips": {
            "footerFontSize": 3,
            "bodyFontSize": 3,
            "titleFontSize": 3,
            "callbacks": {}
          },
          "displayValue": false
        }
      },
      "data": [
        {
          "__field1": "work_time",
          "__field2": "line01",
          "__field3": "line02"
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
          "__field3": "1500"
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
      "id": "chart_unload"
    },
    {
      "type": "table",
      "top": 857.7004381038253,
      "left": 1449.1858765836782,
      "width": 397.367061209344,
      "height": 160.64439916209176,
      "strokeStyle": "#000",
      "fillStyle": "white",
      "lineWidth": 0,
      "rows": 4,
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
        1.5,
        0.87,
        0.87
      ],
      "heights": [
        1,
        1,
        1,
        1
      ],
      "rotation": 0,
      "fontFamily": "Arial",
      "components": [
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 0,
          "top": 0,
          "width": 183.96623204136296,
          "height": 40.16109979052294,
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
          "left": 183.96623204136296,
          "top": 0,
          "width": 106.7004145839905,
          "height": 40.16109979052294,
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
          "left": 290.66664662535345,
          "top": 0,
          "width": 106.70041458399055,
          "height": 40.16109979052294,
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
          "top": 40.16109979052294,
          "width": 183.96623204136296,
          "height": 40.16109979052294,
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
          "left": 183.96623204136296,
          "top": 40.16109979052294,
          "width": 106.7004145839905,
          "height": 40.16109979052294,
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
          "left": 290.66664662535345,
          "top": 40.16109979052294,
          "width": 106.70041458399055,
          "height": 40.16109979052294,
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
          "top": 80.32219958104588,
          "width": 183.96623204136296,
          "height": 40.16109979052294,
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
          "left": 183.96623204136296,
          "top": 80.32219958104588,
          "width": 106.7004145839905,
          "height": 40.16109979052294,
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
          "left": 290.66664662535345,
          "top": 80.32219958104588,
          "width": 106.70041458399055,
          "height": 40.16109979052294,
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
          "top": 120.48329937156882,
          "width": 183.96623204136296,
          "height": 40.16109979052294,
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
          "left": 183.96623204136296,
          "top": 120.48329937156882,
          "width": 106.7004145839905,
          "height": 40.16109979052294,
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
          "left": 290.66664662535345,
          "top": 120.48329937156882,
          "width": 106.70041458399055,
          "height": 40.16109979052294,
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
      "type": "rect",
      "left": 1447.1589073104374,
      "top": 829.913433994032,
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
      "type": "polygon",
      "path": [
        {
          "x": 1685.6142356740459,
          "y": 1003.9865897088812
        },
        {
          "x": 1686.8287017417074,
          "y": 1004.7991819321376
        },
        {
          "x": 1696.51085571938,
          "y": 991.3584402959088
        },
        {
          "x": 1692.8332464540797,
          "y": 989.464217883964
        },
        {
          "x": 1686.0228589257474,
          "y": 999.2510336790167
        },
        {
          "x": 1682.4814574110144,
          "y": 996.4097000610977
        },
        {
          "x": 1679.6894076119015,
          "y": 999.0396745329558
        }
      ],
      "fillStyle": "#4c5b58",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": true,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "id": "line01_camera_right"
    },
    {
      "type": "polygon",
      "path": [
        {
          "x": 1685.0227789380108,
          "y": 923.8221957570897
        },
        {
          "x": 1686.2372450056723,
          "y": 924.6347879803466
        },
        {
          "x": 1695.919398983345,
          "y": 911.1940463441185
        },
        {
          "x": 1692.2417897180446,
          "y": 909.2998239321732
        },
        {
          "x": 1685.4314021897123,
          "y": 919.0866397272257
        },
        {
          "x": 1681.8900006749793,
          "y": 916.245306109307
        },
        {
          "x": 1679.0979508758664,
          "y": 918.875280581165
        }
      ],
      "fillStyle": "#4c5b58",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": true,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "id": "line01_camera_left"
    },
    {
      "type": "polygon",
      "path": [
        {
          "x": 1685.0227789380108,
          "y": 964.4043927329858
        },
        {
          "x": 1686.2372450056723,
          "y": 965.2169849562424
        },
        {
          "x": 1695.919398983345,
          "y": 951.7762433200139
        },
        {
          "x": 1692.2417897180446,
          "y": 949.8820209080686
        },
        {
          "x": 1685.4314021897123,
          "y": 959.6688367031209
        },
        {
          "x": 1681.8900006749793,
          "y": 956.8275030852028
        },
        {
          "x": 1679.0979508758664,
          "y": 959.4574775570597
        }
      ],
      "fillStyle": "#4c5b58",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": true,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "id": "line01_camera_top"
    },
    {
      "type": "polygon",
      "path": [
        {
          "x": 1685.0227789380108,
          "y": 884.2632545951476
        },
        {
          "x": 1686.2372450056723,
          "y": 885.0758468184042
        },
        {
          "x": 1695.919398983345,
          "y": 871.6351051821762
        },
        {
          "x": 1692.2417897180446,
          "y": 869.7408827702307
        },
        {
          "x": 1685.4314021897123,
          "y": 879.5276985652836
        },
        {
          "x": 1681.8900006749793,
          "y": 876.6863649473648
        },
        {
          "x": 1679.0979508758664,
          "y": 879.3163394192225
        }
      ],
      "fillStyle": "#4c5b58",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": true,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "id": "line01_camera_ready"
    },
    {
      "type": "chartjs",
      "top": 832.4948123863614,
      "left": 1051.705462702214,
      "width": 357.0371761077922,
      "height": 188.37441154996145,
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
              "backgroundColor": "rgb(94, 201, 146)",
              "type": "bar",
              "borderColor": "rgb(94, 201, 146)"
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
              "fontSize": 3,
              "fontColor": "rgba(0, 0, 0, 0.5)"
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
                  "fontSize": 3,
                  "fontColor": "rgba(0, 0, 0, 0.5)"
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
                  "fontSize": 3,
                  "fontColor": "rgba(0, 0, 0, 0.5)",
                  "min": "0"
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
                  "fontSize": 3,
                  "fontColor": "rgba(0, 0, 0, 0.5)"
                },
                "scaleLabel": {
                  "display": false
                }
              }
            ]
          },
          "defaultFontSize": 3,
          "tooltips": {
            "footerFontSize": 3,
            "bodyFontSize": 3,
            "titleFontSize": 3,
            "callbacks": {}
          }
        }
      },
      "data": [
        {
          "__field1": "work_time",
          "__field2": "line01",
          "__field3": "line02"
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
      "id": "chart_load"
    },
    {
      "type": "polygon",
      "path": [
        {
          "x": 1792.3141552470527,
          "y": 1003.9865897088812
        },
        {
          "x": 1793.5286213147122,
          "y": 1004.7991819321376
        },
        {
          "x": 1803.2107752923864,
          "y": 991.3584402959088
        },
        {
          "x": 1799.5331660270867,
          "y": 989.464217883964
        },
        {
          "x": 1792.7227784987535,
          "y": 999.2510336790167
        },
        {
          "x": 1789.1813769840194,
          "y": 996.4097000610977
        },
        {
          "x": 1786.3893271849074,
          "y": 999.0396745329558
        }
      ],
      "fillStyle": "#4c5b58",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": true,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "id": "line02_camera_right"
    },
    {
      "type": "polygon",
      "path": [
        {
          "x": 1792.3141552470527,
          "y": 923.8221957570897
        },
        {
          "x": 1793.5286213147122,
          "y": 924.6347879803466
        },
        {
          "x": 1803.2107752923864,
          "y": 911.1940463441185
        },
        {
          "x": 1799.5331660270867,
          "y": 909.2998239321732
        },
        {
          "x": 1792.7227784987535,
          "y": 919.0866397272257
        },
        {
          "x": 1789.1813769840194,
          "y": 916.245306109307
        },
        {
          "x": 1786.3893271849074,
          "y": 918.875280581165
        }
      ],
      "fillStyle": "#4c5b58",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": true,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "id": "line02_camera_left"
    },
    {
      "type": "polygon",
      "path": [
        {
          "x": 1792.3141552470527,
          "y": 964.4043927329858
        },
        {
          "x": 1793.5286213147122,
          "y": 965.2169849562424
        },
        {
          "x": 1803.2107752923864,
          "y": 951.7762433200139
        },
        {
          "x": 1799.5331660270867,
          "y": 949.8820209080686
        },
        {
          "x": 1792.7227784987535,
          "y": 959.6688367031209
        },
        {
          "x": 1789.1813769840194,
          "y": 956.8275030852028
        },
        {
          "x": 1786.3893271849074,
          "y": 959.4574775570597
        }
      ],
      "fillStyle": "#4c5b58",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": true,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "id": "line02_camera_top"
    },
    {
      "type": "polygon",
      "path": [
        {
          "x": 1792.3141552470527,
          "y": 884.2632545951476
        },
        {
          "x": 1793.5286213147122,
          "y": 885.0758468184042
        },
        {
          "x": 1803.2107752923864,
          "y": 871.6351051821762
        },
        {
          "x": 1799.5331660270867,
          "y": 869.7408827702307
        },
        {
          "x": 1792.7227784987535,
          "y": 879.5276985652836
        },
        {
          "x": 1789.1813769840194,
          "y": 876.6863649473648
        },
        {
          "x": 1786.3893271849074,
          "y": 879.3163394192225
        }
      ],
      "fillStyle": "#4c5b58",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": true,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "id": "line02_camera_ready"
    },
    {
      "type": "text",
      "left": 1671.0184156419791,
      "top": 833.7558287667248,
      "width": 59.81405014583811,
      "height": 17.53287503307797,
      "text": "A라인",
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
      "left": 1520.242108713168,
      "top": 833.4045976429238,
      "width": 76.14418845505702,
      "height": 17.53287503307797,
      "text": "LIST명",
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
      "left": 1778.8015141093763,
      "top": 833.7558287667248,
      "width": 59.81405014583788,
      "height": 17.53287503307797,
      "text": "B라인",
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
      "type": "line",
      "x1": 613.8942509991806,
      "y1": 776.02878072567,
      "x2": 613.8942509991806,
      "y2": 1053.4080540803386,
      "fillStyle": "#fff",
      "strokeStyle": "#ccc",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 1,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0
    },
    {
      "type": "line",
      "x1": 1024.4207671779807,
      "y1": 776.02878072567,
      "x2": 1024.4207671779807,
      "y2": 1053.4080540803386,
      "fillStyle": "#fff",
      "strokeStyle": "#ccc",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 1,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0
    },
    {
      "type": "line",
      "x1": 1424.2894938025993,
      "y1": 776.02878072567,
      "x2": 1424.2894938025993,
      "y2": 1053.4080540803386,
      "fillStyle": "#fff",
      "strokeStyle": "#ccc",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 1,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0
    },
    {
      "type": "text",
      "left": 496.5302569932218,
      "top": 832.8901934586229,
      "width": 59.81405014583794,
      "height": 17.53287503307797,
      "text": "알람명",
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
      "left": 313.87015811436646,
      "top": 833.7147287056869,
      "width": 76.14418845505662,
      "height": 17.53287503307797,
      "text": "LIST명",
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
      "left": 70.96277218728267,
      "top": 828.8268863657756,
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
      "fontFamily": "맑은 고딕",
      "fontSize": 13,
      "rotation": 0,
      "fontColor": "#fff"
    },
    {
      "type": "rect",
      "left": 66.84703542967384,
      "top": 828.8644462792329,
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
      "fontFamily": "Arial",
      "text": ""
    },
    {
      "type": "text",
      "left": 429.49771631737696,
      "top": 829.5150245325035,
      "width": 152.05829177492427,
      "height": 24,
      "text": "알람 시간",
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
      "fontFamily": "Arial",
      "fontSize": 13,
      "rotation": 0,
      "fontColor": "#fff"
    },
    {
      "type": "text",
      "left": 279.6784369814689,
      "top": 829.5150245325035,
      "width": 149.69133316424598,
      "height": 24,
      "text": "알람명",
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
      "fontFamily": "Arial",
      "fontSize": 13,
      "rotation": 0,
      "fontColor": "#fff"
    },
    {
      "type": "text",
      "left": 67.43771772105174,
      "top": 829.2012990423073,
      "width": 212.37010771675523,
      "height": 24.313725490196134,
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
      "fontFamily": "맑은 고딕",
      "fontSize": 13,
      "rotation": 0,
      "fontColor": "#fff"
    },
    {
      "type": "table",
      "top": 858.1227140619085,
      "left": 69.70994079630668,
      "width": 511.23721842599525,
      "height": 166.4599737641688,
      "strokeStyle": "#000",
      "fillStyle": "white",
      "lineWidth": 0,
      "rows": 6,
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
        1,
        1
      ],
      "rotation": 0,
      "fontFamily": "Arial",
      "id": "alarms",
      "components": [
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 0,
          "top": 0,
          "width": 209.60725955465804,
          "height": 27.7433289606948,
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
          "height": 27.7433289606948,
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
          "width": 151.66704146637863,
          "height": 27.7433289606948,
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
          "top": 27.7433289606948,
          "width": 209.60725955465804,
          "height": 27.7433289606948,
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
          "top": 27.7433289606948,
          "width": 149.96291740495863,
          "height": 27.7433289606948,
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
          "top": 27.7433289606948,
          "width": 151.66704146637863,
          "height": 27.7433289606948,
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
          "top": 55.4866579213896,
          "width": 209.60725955465804,
          "height": 27.743328960694804,
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
          "top": 55.4866579213896,
          "width": 149.96291740495863,
          "height": 27.743328960694804,
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
          "top": 55.4866579213896,
          "width": 151.66704146637863,
          "height": 27.743328960694804,
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
          "top": 83.2299868820844,
          "width": 209.60725955465804,
          "height": 27.74332896069481,
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
          "top": 83.2299868820844,
          "width": 149.96291740495863,
          "height": 27.74332896069481,
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
          "top": 83.2299868820844,
          "width": 151.66704146637863,
          "height": 27.74332896069481,
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
          "top": 110.9733158427792,
          "width": 209.60725955465804,
          "height": 27.743328960694797,
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
          "top": 110.9733158427792,
          "width": 149.96291740495863,
          "height": 27.743328960694797,
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
          "top": 110.9733158427792,
          "width": 151.66704146637863,
          "height": 27.743328960694797,
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
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 0,
          "top": 138.716644803474,
          "width": 209.60725955465804,
          "height": 27.74332896069481,
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
          "dataIndex": 5,
          "text": "",
          "fontFamily": "맑은 고딕",
          "fontSize": 13
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 209.60725955465804,
          "top": 138.716644803474,
          "width": 149.96291740495863,
          "height": 27.74332896069481,
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
          "dataIndex": 5,
          "text": "",
          "fontFamily": "맑은 고딕",
          "fontSize": 13
        },
        {
          "type": "table-cell",
          "strokeStyle": "blue",
          "left": 359.5701769596167,
          "top": 138.716644803474,
          "width": 151.66704146637863,
          "height": 27.74332896069481,
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
          "dataIndex": 5,
          "text": "",
          "fontFamily": "맑은 고딕",
          "fontSize": 13
        }
      ]
    },
    {
      "type": "rect",
      "left": 1554.617680621937,
      "top": 164.22435527812468,
      "width": 100,
      "height": 90.00000000000011,
      "fillStyle": "#303030",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Arial",
      "fontSize": 13,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-16-unload",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-16-load",
          "property": "data"
        }
      ],
      "id": "chute-02038"
    },
    {
      "type": "line",
      "x1": 1554.6708070492803,
      "y1": 191.39650055187167,
      "x2": 1654.5046204563703,
      "y2": 191.39650055187167,
      "fillStyle": "#fff",
      "strokeStyle": "#fff",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 2,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "Arial",
      "fontSize": 13
    },
    {
      "type": "rect",
      "left": 1589.118997925699,
      "top": 196.49631744106466,
      "width": 63.330615939967174,
      "height": 23.510083785288998,
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
      "fontSize": 18,
      "fontFamily": "Arial",
      "textFormat": "#,##0",
      "textAlign": "right",
      "fontColor": "#303030",
      "paddingRight": 2,
      "textWrap": true,
      "id": "chute-16-unload"
    },
    {
      "type": "rect",
      "left": 1589.118997925699,
      "top": 227.09674395525042,
      "width": 63.330615939967174,
      "height": 23.51008378528934,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Arial",
      "fontSize": 18,
      "textAlign": "right",
      "paddingRight": 2,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-16-load"
    },
    {
      "type": "text",
      "left": 1556.8329453933563,
      "top": 196.78481132329568,
      "width": 30.28215830570025,
      "height": 23.633677991137574,
      "text": "하",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1556.8329453933563,
      "top": 164.28850408548192,
      "width": 95.83815422784755,
      "height": 26.5878877400296,
      "text": "07",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1556.5155122257995,
      "top": 226.917750761996,
      "width": 30.28215830570025,
      "height": 23.633677991137233,
      "text": "상",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "rect",
      "left": 1556.7830941557718,
      "top": 312.5506960781495,
      "width": 100,
      "height": 90.00000000000011,
      "fillStyle": "#303030",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Arial",
      "fontSize": 13,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-15-unload",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-15-load",
          "property": "data"
        }
      ],
      "id": "chute-02041"
    },
    {
      "type": "line",
      "x1": 1556.836220583115,
      "y1": 339.7228413518965,
      "x2": 1656.670033990205,
      "y2": 339.7228413518965,
      "fillStyle": "#fff",
      "strokeStyle": "#fff",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 2,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "Arial",
      "fontSize": 13
    },
    {
      "type": "rect",
      "left": 1591.2844114595337,
      "top": 344.8226582410896,
      "width": 63.330615939967174,
      "height": 23.510083785288998,
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
      "fontSize": 18,
      "fontFamily": "Arial",
      "textFormat": "#,##0",
      "textAlign": "right",
      "fontColor": "#303030",
      "paddingRight": 2,
      "textWrap": true,
      "id": "chute-15-unload"
    },
    {
      "type": "rect",
      "left": 1591.2844114595337,
      "top": 375.4230847552752,
      "width": 63.330615939967174,
      "height": 23.51008378528934,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Arial",
      "fontSize": 18,
      "textAlign": "right",
      "paddingRight": 2,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-15-load"
    },
    {
      "type": "text",
      "left": 1558.998358927191,
      "top": 345.1111521233205,
      "width": 30.28215830570025,
      "height": 23.633677991137574,
      "text": "하",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1558.998358927191,
      "top": 312.6148448855067,
      "width": 95.83815422784755,
      "height": 26.5878877400296,
      "text": "08",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1558.6809257596342,
      "top": 375.2440915620208,
      "width": 30.28215830570025,
      "height": 23.633677991137233,
      "text": "상",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "rect",
      "left": 1301.722495951798,
      "top": 312.5506960781495,
      "width": 100,
      "height": 90.00000000000011,
      "fillStyle": "#303030",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Arial",
      "fontSize": 13,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-13-unload",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-13-load",
          "property": "data"
        }
      ],
      "id": "chute-02035"
    },
    {
      "type": "line",
      "x1": 1301.7756223791412,
      "y1": 339.7228413518965,
      "x2": 1401.6094357862312,
      "y2": 339.7228413518965,
      "fillStyle": "#fff",
      "strokeStyle": "#fff",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 2,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "Arial",
      "fontSize": 13
    },
    {
      "type": "rect",
      "left": 1336.22381325556,
      "top": 344.8226582410896,
      "width": 63.330615939967174,
      "height": 23.510083785288998,
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
      "fontSize": 18,
      "fontFamily": "Arial",
      "textFormat": "#,##0",
      "textAlign": "right",
      "fontColor": "#303030",
      "paddingRight": 2,
      "textWrap": true,
      "id": "chute-13-unload"
    },
    {
      "type": "rect",
      "left": 1336.22381325556,
      "top": 375.4230847552752,
      "width": 63.330615939967174,
      "height": 23.51008378528934,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Arial",
      "fontSize": 18,
      "textAlign": "right",
      "paddingRight": 2,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-13-load"
    },
    {
      "type": "text",
      "left": 1303.9377607232173,
      "top": 345.1111521233205,
      "width": 30.28215830570025,
      "height": 23.633677991137574,
      "text": "하",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1303.9377607232173,
      "top": 312.6148448855067,
      "width": 95.83815422784755,
      "height": 26.5878877400296,
      "text": "06",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1303.6203275556604,
      "top": 375.2440915620208,
      "width": 30.28215830570025,
      "height": 23.633677991137233,
      "text": "상",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "rect",
      "left": 213.3462087365392,
      "top": 143.53667546840302,
      "width": 111.72534390654073,
      "height": 101.56849446049125,
      "fillStyle": "#010eaa",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Arial",
      "fontSize": 19,
      "mappings": [
        {
          "rule": "value",
          "target": "#line02_total_unload",
          "property": "data",
          "accessor": "unload_count"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#line02_total_load",
          "property": "data"
        }
      ],
      "data": [
        {
          "__field1": ""
        }
      ],
      "id": "line02_total"
    },
    {
      "type": "text",
      "left": 215.46656762272457,
      "top": 214.3079025451816,
      "width": 33.83284550936696,
      "height": 24.20688981025512,
      "text": "상",
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
      "fontFamily": "Arial",
      "fontSize": 19,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "line",
      "x1": 213.40556442019215,
      "y1": 174.20149643191667,
      "x2": 324.94115131440094,
      "y2": 174.20149643191667,
      "fillStyle": "#fff",
      "strokeStyle": "#fff",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 2,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "Arial",
      "fontSize": 19
    },
    {
      "type": "rect",
      "left": 251.89292414645524,
      "top": 214.4906072580759,
      "width": 70.756348457061,
      "height": 26.53204238568685,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Arial",
      "fontSize": 18,
      "text": "#{data}",
      "fontColor": "#303030",
      "textFormat": "#,##0",
      "textAlign": "right",
      "textWrap": true,
      "paddingRight": 2,
      "id": "line02_total_load"
    },
    {
      "type": "text",
      "left": 215.82122092084953,
      "top": 182.0374546014309,
      "width": 33.83284550936787,
      "height": 24.20688981025546,
      "text": "하",
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
      "fontFamily": "Arial",
      "fontSize": 19,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "rect",
      "left": 251.89292414645524,
      "top": 179.9568378036895,
      "width": 70.756348457061,
      "height": 26.53204238568742,
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
      "fontSize": 18,
      "fontFamily": "Arial",
      "fontColor": "#303030",
      "textFormat": "#,##0",
      "textAlign": "right",
      "textWrap": true,
      "paddingRight": 2,
      "id": "line02_total_unload"
    },
    {
      "type": "text",
      "left": 215.82122092085,
      "top": 147.1227103158708,
      "width": 107.07550740474471,
      "height": 24.20688981025546,
      "text": "합 계",
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
      "fontFamily": "Arial",
      "fontSize": 19,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "rect",
      "left": 692.1976484051721,
      "top": 164.22435527812468,
      "width": 100,
      "height": 90,
      "fillStyle": "#303030",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Arial",
      "fontSize": 13,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-10-unload",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-10-load",
          "property": "data"
        }
      ],
      "id": "chute-02020"
    },
    {
      "type": "line",
      "x1": 692.2507748325153,
      "y1": 191.39650055187167,
      "x2": 792.0845882396053,
      "y2": 191.39650055187167,
      "fillStyle": "#fff",
      "strokeStyle": "#fff",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 2,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "Arial",
      "fontSize": 13
    },
    {
      "type": "rect",
      "left": 726.698965708934,
      "top": 196.49631744106472,
      "width": 63.330615939967174,
      "height": 23.510083785288998,
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
      "fontSize": 18,
      "fontFamily": "Arial",
      "textFormat": "#,##0",
      "textAlign": "right",
      "fontColor": "#303030",
      "paddingRight": 2,
      "textWrap": true,
      "id": "chute-10-unload"
    },
    {
      "type": "rect",
      "left": 726.698965708934,
      "top": 227.09674395525047,
      "width": 63.330615939967174,
      "height": 23.510083785289282,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Arial",
      "fontSize": 18,
      "textAlign": "right",
      "paddingRight": 2,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-10-load"
    },
    {
      "type": "text",
      "left": 694.4129131765914,
      "top": 196.78481132329574,
      "width": 30.28215830570025,
      "height": 23.633677991137574,
      "text": "하",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 694.0954800090345,
      "top": 226.91775076199605,
      "width": 30.28215830570025,
      "height": 23.633677991137176,
      "text": "상",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 694.4129131765914,
      "top": 164.28850408548192,
      "width": 95.83815422784755,
      "height": 26.5878877400296,
      "text": "01",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "rect",
      "left": 692.1976484051721,
      "top": 312.55069607814954,
      "width": 100,
      "height": 90,
      "fillStyle": "#303030",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Arial",
      "fontSize": 13,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-02-unload",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-02-load",
          "property": "data"
        }
      ],
      "id": "chute-02023"
    },
    {
      "type": "line",
      "x1": 692.2507748325153,
      "y1": 339.72284135189653,
      "x2": 792.0845882396053,
      "y2": 339.72284135189653,
      "fillStyle": "#fff",
      "strokeStyle": "#fff",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 2,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "Arial",
      "fontSize": 13
    },
    {
      "type": "rect",
      "left": 726.698965708934,
      "top": 344.8226582410895,
      "width": 63.330615939967174,
      "height": 23.510083785288998,
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
      "fontSize": 18,
      "fontFamily": "Arial",
      "textFormat": "#,##0",
      "textAlign": "right",
      "fontColor": "#303030",
      "paddingRight": 2,
      "textWrap": true,
      "id": "chute-02-unload"
    },
    {
      "type": "rect",
      "left": 726.698965708934,
      "top": 375.4230847552754,
      "width": 63.330615939967174,
      "height": 23.51008378528934,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Arial",
      "fontSize": 18,
      "textAlign": "right",
      "paddingRight": 2,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-02-load"
    },
    {
      "type": "text",
      "left": 694.4129131765914,
      "top": 345.11115212332066,
      "width": 30.28215830570025,
      "height": 23.633677991137574,
      "text": "하",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 694.4129131765914,
      "top": 312.6148448855068,
      "width": 95.83815422784755,
      "height": 26.5878877400296,
      "text": "02",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 694.0954800090345,
      "top": 375.24409156202097,
      "width": 30.28215830570025,
      "height": 23.633677991137233,
      "text": "상",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "rect",
      "left": 1043.0489930677686,
      "top": 164.22435527812468,
      "width": 100,
      "height": 90.00000000000011,
      "fillStyle": "#303030",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Arial",
      "fontSize": 13,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-12-unload",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-12-load",
          "property": "data"
        }
      ],
      "id": "chute-02026"
    },
    {
      "type": "line",
      "x1": 1043.1021194951118,
      "y1": 191.39650055187167,
      "x2": 1142.9359329022018,
      "y2": 191.39650055187167,
      "fillStyle": "#fff",
      "strokeStyle": "#fff",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 2,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "Arial",
      "fontSize": 13
    },
    {
      "type": "rect",
      "left": 1077.5503103715305,
      "top": 196.49631744106472,
      "width": 63.330615939967174,
      "height": 23.51008378528894,
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
      "fontSize": 18,
      "fontFamily": "Arial",
      "textFormat": "#,##0",
      "textAlign": "right",
      "fontColor": "#303030",
      "paddingRight": 2,
      "textWrap": true,
      "id": "chute-12-unload"
    },
    {
      "type": "rect",
      "left": 1077.5503103715305,
      "top": 227.09674395525042,
      "width": 63.330615939967174,
      "height": 23.51008378528934,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Arial",
      "fontSize": 18,
      "textAlign": "right",
      "paddingRight": 2,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-12-load"
    },
    {
      "type": "text",
      "left": 1045.2642578391878,
      "top": 196.78481132329574,
      "width": 30.28215830570025,
      "height": 23.633677991137517,
      "text": "하",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1045.2642578391878,
      "top": 164.28850408548192,
      "width": 95.83815422784755,
      "height": 26.5878877400296,
      "text": "03",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1044.946824671631,
      "top": 226.917750761996,
      "width": 30.28215830570025,
      "height": 23.633677991137233,
      "text": "상",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "rect",
      "left": 1043.5903464512273,
      "top": 312.55069607814943,
      "width": 100,
      "height": 90.00000000000011,
      "fillStyle": "#303030",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Arial",
      "fontSize": 13,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-11-unload",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-11-load",
          "property": "data"
        }
      ],
      "id": "chute-02029"
    },
    {
      "type": "line",
      "x1": 1043.6434728785705,
      "y1": 339.7228413518964,
      "x2": 1143.4772862856605,
      "y2": 339.7228413518964,
      "fillStyle": "#fff",
      "strokeStyle": "#fff",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 2,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "Arial",
      "fontSize": 13
    },
    {
      "type": "rect",
      "left": 1078.0916637549892,
      "top": 344.8226582410895,
      "width": 63.330615939967174,
      "height": 23.510083785288998,
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
      "fontSize": 18,
      "fontFamily": "Arial",
      "textFormat": "#,##0",
      "textAlign": "right",
      "fontColor": "#303030",
      "paddingRight": 2,
      "textWrap": true,
      "id": "chute-11-unload"
    },
    {
      "type": "rect",
      "left": 1078.0916637549892,
      "top": 375.42308475527517,
      "width": 63.330615939967174,
      "height": 23.51008378528934,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Arial",
      "fontSize": 18,
      "textAlign": "right",
      "paddingRight": 2,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-11-load"
    },
    {
      "type": "text",
      "left": 1045.8056112226466,
      "top": 345.11115212332044,
      "width": 30.28215830570025,
      "height": 23.633677991137574,
      "text": "하",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1045.8056112226466,
      "top": 312.61484488550667,
      "width": 95.83815422784755,
      "height": 26.5878877400296,
      "text": "04",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1045.4881780550897,
      "top": 375.24409156202074,
      "width": 30.28215830570025,
      "height": 23.633677991137233,
      "text": "상",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "rect",
      "left": 1302.2638493352565,
      "top": 164.22435527812468,
      "width": 100,
      "height": 90.00000000000011,
      "fillStyle": "#303030",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Arial",
      "fontSize": 13,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-14-unload",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-14-load",
          "property": "data"
        }
      ],
      "id": "chute-02032"
    },
    {
      "type": "line",
      "x1": 1302.3169757625997,
      "y1": 191.39650055187167,
      "x2": 1402.1507891696897,
      "y2": 191.39650055187167,
      "fillStyle": "#fff",
      "strokeStyle": "#fff",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 2,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "Arial",
      "fontSize": 13
    },
    {
      "type": "rect",
      "left": 1336.7651666390184,
      "top": 196.49631744106472,
      "width": 63.330615939967174,
      "height": 23.51008378528894,
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
      "fontSize": 18,
      "fontFamily": "Arial",
      "textFormat": "#,##0",
      "textAlign": "right",
      "fontColor": "#303030",
      "paddingRight": 2,
      "textWrap": true,
      "id": "chute-14-unload"
    },
    {
      "type": "rect",
      "left": 1336.7651666390184,
      "top": 227.09674395525042,
      "width": 63.330615939967174,
      "height": 23.51008378528934,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Arial",
      "fontSize": 18,
      "textAlign": "right",
      "paddingRight": 2,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-14-load"
    },
    {
      "type": "text",
      "left": 1304.4791141066758,
      "top": 196.78481132329574,
      "width": 30.28215830570025,
      "height": 23.633677991137517,
      "text": "하",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1304.4791141066758,
      "top": 164.28850408548192,
      "width": 95.83815422784755,
      "height": 26.5878877400296,
      "text": "05",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1304.161680939119,
      "top": 226.917750761996,
      "width": 30.28215830570025,
      "height": 23.633677991137233,
      "text": "상",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "rect",
      "left": 1687.800112379184,
      "top": 241.25994453788428,
      "width": 100,
      "height": 90.00000000000011,
      "fillStyle": "#303030",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Arial",
      "fontSize": 13,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-09-unload",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-09-load",
          "property": "data"
        }
      ],
      "id": "chute-02017"
    },
    {
      "type": "line",
      "x1": 1687.853238806527,
      "y1": 268.4320898116313,
      "x2": 1787.687052213617,
      "y2": 268.4320898116313,
      "fillStyle": "#fff",
      "strokeStyle": "#fff",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 2,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "Arial",
      "fontSize": 13
    },
    {
      "type": "rect",
      "left": 1722.3014296829458,
      "top": 273.53190670082427,
      "width": 63.330615939967174,
      "height": 23.510083785288998,
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
      "fontSize": 18,
      "fontFamily": "Arial",
      "textFormat": "#,##0",
      "textAlign": "right",
      "fontColor": "#303030",
      "paddingRight": 2,
      "textWrap": true,
      "id": "chute-09-unload"
    },
    {
      "type": "rect",
      "left": 1722.3014296829458,
      "top": 304.13233321501,
      "width": 63.330615939967174,
      "height": 23.51008378528934,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Arial",
      "fontSize": 18,
      "textAlign": "right",
      "paddingRight": 2,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-09-load"
    },
    {
      "type": "text",
      "left": 1690.0153771506032,
      "top": 273.8204005830553,
      "width": 30.28215830570025,
      "height": 23.633677991137574,
      "text": "하",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1690.0153771506032,
      "top": 241.32409334524152,
      "width": 95.83815422784755,
      "height": 26.5878877400296,
      "text": "09",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1689.6979439830463,
      "top": 303.9533400217556,
      "width": 30.28215830570025,
      "height": 23.633677991137233,
      "text": "상",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "rect",
      "left": 1800.1562113508332,
      "top": 240.99414081158056,
      "width": 99.99999999999955,
      "height": 90,
      "fillStyle": "#621213",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Arial",
      "fontSize": 18,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#02-unload-miss-unload",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#02-unload-miss-load",
          "property": "data"
        }
      ],
      "textBaseline": "middle",
      "id": "02-unload-miss"
    },
    {
      "type": "text",
      "left": 1802.0540429546988,
      "top": 303.70463456008883,
      "width": 30.28215830570025,
      "height": 21.449762492742593,
      "text": "상",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "rect",
      "left": 1834.657528654597,
      "top": 273.2661029745211,
      "width": 63.330615939968084,
      "height": 23.510083785288998,
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
      "fontSize": 18,
      "fontFamily": "Arial",
      "textBaseline": "middle",
      "textFormat": "#,##0",
      "paddingRight": 2,
      "textAlign": "right",
      "textWrap": true,
      "fontColor": "#303030",
      "id": "02-unload-miss-unload"
    },
    {
      "type": "line",
      "x1": 1800.2093377781778,
      "y1": 268.1662860853278,
      "x2": 1900.0431511852705,
      "y2": 268.1662860853278,
      "fillStyle": "#fff",
      "strokeStyle": "#fff",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 2,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "Arial",
      "fontSize": 18,
      "textBaseline": "middle"
    },
    {
      "type": "text",
      "left": 1802.3714761222539,
      "top": 273.7519474650087,
      "width": 30.28215830570025,
      "height": 21.449762492742366,
      "text": "하",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1802.3714761222539,
      "top": 244.17173183512068,
      "width": 95.83815422784755,
      "height": 21.44976249274214,
      "text": "OverFlow",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "rect",
      "left": 1834.657528654597,
      "top": 303.8665294887071,
      "width": 63.330615939968084,
      "height": 23.510083785288998,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Arial",
      "fontSize": 18,
      "textBaseline": "middle",
      "text": "#{data}",
      "textFormat": "#,##0",
      "paddingRight": 2,
      "textAlign": "right",
      "textWrap": true,
      "fontColor": "#303030",
      "id": "02-unload-miss-load"
    },
    {
      "type": "rect",
      "left": 732.7157828680254,
      "top": 494.45072291798544,
      "width": 100,
      "height": 90.00000000000011,
      "fillStyle": "#303030",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Arial",
      "fontSize": 13,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-01-unload",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-01-load",
          "property": "data"
        }
      ],
      "id": "chute-01020"
    },
    {
      "type": "line",
      "x1": 732.7689092953685,
      "y1": 521.6228681917324,
      "x2": 832.6027227024585,
      "y2": 521.6228681917324,
      "fillStyle": "#fff",
      "strokeStyle": "#fff",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 2,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "Arial",
      "fontSize": 13
    },
    {
      "type": "rect",
      "left": 767.2171001717873,
      "top": 526.7226850809255,
      "width": 63.330615939967174,
      "height": 23.510083785288998,
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
      "fontSize": 18,
      "fontFamily": "Arial",
      "textFormat": "#,##0",
      "textAlign": "right",
      "fontColor": "#303030",
      "paddingRight": 2,
      "textWrap": true,
      "id": "chute-01-unload"
    },
    {
      "type": "rect",
      "left": 767.2171001717873,
      "top": 557.3231115951112,
      "width": 63.330615939967174,
      "height": 23.51008378528934,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Arial",
      "fontSize": 18,
      "textAlign": "right",
      "paddingRight": 2,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-01-load"
    },
    {
      "type": "text",
      "left": 734.9310476394446,
      "top": 527.0111789631565,
      "width": 30.28215830570025,
      "height": 23.633677991137574,
      "text": "하",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 734.9310476394446,
      "top": 494.5148717253427,
      "width": 95.83815422784755,
      "height": 26.5878877400296,
      "text": "01",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 734.6136144718878,
      "top": 557.1441184018568,
      "width": 30.28215830570025,
      "height": 23.633677991137233,
      "text": "상",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "rect",
      "left": 740.1184465005714,
      "top": 677.2237350566531,
      "width": 100,
      "height": 90,
      "fillStyle": "#303030",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Arial",
      "fontSize": 13,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-0202-unload",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-0202-load",
          "property": "data"
        }
      ],
      "id": "chute-01023"
    },
    {
      "type": "line",
      "x1": 740.1715729279146,
      "y1": 704.3958803304001,
      "x2": 840.0053863350046,
      "y2": 704.3958803304001,
      "fillStyle": "#fff",
      "strokeStyle": "#fff",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 2,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "Arial",
      "fontSize": 13
    },
    {
      "type": "rect",
      "left": 774.6197638043333,
      "top": 709.4956972195931,
      "width": 63.330615939967174,
      "height": 23.510083785288998,
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
      "fontSize": 18,
      "fontFamily": "Arial",
      "textFormat": "#,##0",
      "textAlign": "right",
      "fontColor": "#303030",
      "paddingRight": 2,
      "textWrap": true,
      "id": "chute-0202-unload"
    },
    {
      "type": "rect",
      "left": 774.6197638043333,
      "top": 740.096123733779,
      "width": 63.330615939967174,
      "height": 23.51008378528934,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Arial",
      "fontSize": 18,
      "textAlign": "right",
      "paddingRight": 2,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-0202-load"
    },
    {
      "type": "text",
      "left": 742.3337112719906,
      "top": 709.7841911018243,
      "width": 30.28215830570025,
      "height": 23.633677991137574,
      "text": "하",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 742.3337112719906,
      "top": 677.2878838640104,
      "width": 95.83815422784755,
      "height": 26.5878877400296,
      "text": "02",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 742.0162781044338,
      "top": 739.9171305405246,
      "width": 30.28215830570025,
      "height": 23.633677991137233,
      "text": "상",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "rect",
      "left": 1106.6273009803065,
      "top": 666.2488027648025,
      "width": 100,
      "height": 90.00000000000011,
      "fillStyle": "#303030",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Arial",
      "fontSize": 13,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-04-unload",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-04-load",
          "property": "data"
        }
      ],
      "id": "chute-01029"
    },
    {
      "type": "line",
      "x1": 1106.6804274076496,
      "y1": 693.4209480385495,
      "x2": 1206.5142408147397,
      "y2": 693.4209480385495,
      "fillStyle": "#fff",
      "strokeStyle": "#fff",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 2,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "Arial",
      "fontSize": 13
    },
    {
      "type": "rect",
      "left": 1141.1286182840684,
      "top": 698.5207649277426,
      "width": 63.330615939967174,
      "height": 23.510083785288998,
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
      "fontSize": 18,
      "fontFamily": "Arial",
      "textFormat": "#,##0",
      "textAlign": "right",
      "fontColor": "#303030",
      "paddingRight": 2,
      "textWrap": true,
      "id": "chute-04-unload"
    },
    {
      "type": "rect",
      "left": 1141.1286182840684,
      "top": 729.1211914419282,
      "width": 63.330615939967174,
      "height": 23.51008378528934,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Arial",
      "fontSize": 18,
      "textAlign": "right",
      "paddingRight": 2,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-04-load"
    },
    {
      "type": "text",
      "left": 1108.8425657517257,
      "top": 698.8092588099735,
      "width": 30.28215830570025,
      "height": 23.633677991137574,
      "text": "하",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1108.8425657517257,
      "top": 666.3129515721597,
      "width": 95.83815422784755,
      "height": 26.5878877400296,
      "text": "04",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1108.525132584169,
      "top": 728.9421982486738,
      "width": 30.28215830570025,
      "height": 23.633677991137233,
      "text": "상",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "rect",
      "left": 1373.2169877667147,
      "top": 516.7050585161401,
      "width": 100,
      "height": 90,
      "fillStyle": "#303030",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Arial",
      "fontSize": 13,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-05-unload",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-05-load",
          "property": "data"
        }
      ],
      "id": "chute-01032"
    },
    {
      "type": "line",
      "x1": 1373.270114194058,
      "y1": 543.8772037898871,
      "x2": 1473.103927601148,
      "y2": 543.8772037898871,
      "fillStyle": "#fff",
      "strokeStyle": "#fff",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 2,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "Arial",
      "fontSize": 13
    },
    {
      "type": "rect",
      "left": 1407.7183050704766,
      "top": 548.97702067908,
      "width": 63.330615939967174,
      "height": 23.510083785288998,
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
      "fontSize": 18,
      "fontFamily": "Arial",
      "textFormat": "#,##0",
      "textAlign": "right",
      "fontColor": "#303030",
      "paddingRight": 2,
      "textWrap": true,
      "id": "chute-05-unload"
    },
    {
      "type": "rect",
      "left": 1407.7183050704766,
      "top": 579.5774471932659,
      "width": 63.330615939967174,
      "height": 23.51008378528934,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Arial",
      "fontSize": 18,
      "textAlign": "right",
      "paddingRight": 2,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-05-load"
    },
    {
      "type": "text",
      "left": 1375.432252538134,
      "top": 549.2655145613112,
      "width": 30.28215830570025,
      "height": 23.633677991137574,
      "text": "하",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1375.432252538134,
      "top": 516.7692073234973,
      "width": 95.83815422784755,
      "height": 26.5878877400296,
      "text": "05",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1375.1148193705772,
      "top": 579.3984540000115,
      "width": 30.28215830570025,
      "height": 23.633677991137233,
      "text": "상",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "rect",
      "left": 1374.397315635567,
      "top": 666.2488027648025,
      "width": 100,
      "height": 90.00000000000011,
      "fillStyle": "#303030",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Arial",
      "fontSize": 13,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-06-unload",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-06-load",
          "property": "data"
        }
      ],
      "id": "chute-01035"
    },
    {
      "type": "line",
      "x1": 1374.4504420629103,
      "y1": 693.4209480385495,
      "x2": 1474.2842554700003,
      "y2": 693.4209480385495,
      "fillStyle": "#fff",
      "strokeStyle": "#fff",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 2,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "Arial",
      "fontSize": 13
    },
    {
      "type": "rect",
      "left": 1408.898632939329,
      "top": 698.5207649277426,
      "width": 63.330615939967174,
      "height": 23.510083785288998,
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
      "fontSize": 18,
      "fontFamily": "Arial",
      "textFormat": "#,##0",
      "textAlign": "right",
      "fontColor": "#303030",
      "paddingRight": 2,
      "textWrap": true,
      "id": "chute-06-unload"
    },
    {
      "type": "rect",
      "left": 1408.898632939329,
      "top": 729.1211914419282,
      "width": 63.330615939967174,
      "height": 23.51008378528934,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Arial",
      "fontSize": 18,
      "textAlign": "right",
      "paddingRight": 2,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-06-load"
    },
    {
      "type": "text",
      "left": 1376.6125804069864,
      "top": 698.8092588099735,
      "width": 30.28215830570025,
      "height": 23.633677991137574,
      "text": "하",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1376.6125804069864,
      "top": 666.3129515721597,
      "width": 95.83815422784755,
      "height": 26.5878877400296,
      "text": "06",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1376.2951472394295,
      "top": 728.9421982486738,
      "width": 30.28215830570025,
      "height": 23.633677991137233,
      "text": "상",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "rect",
      "left": 1640.6913069787388,
      "top": 516.7050585161401,
      "width": 100,
      "height": 90,
      "fillStyle": "#303030",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Arial",
      "fontSize": 13,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-0207-unload",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-0207-load",
          "property": "data"
        }
      ],
      "id": "chute-01038"
    },
    {
      "type": "line",
      "x1": 1640.744433406082,
      "y1": 543.8772037898871,
      "x2": 1740.578246813172,
      "y2": 543.8772037898871,
      "fillStyle": "#fff",
      "strokeStyle": "#fff",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 2,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "Arial",
      "fontSize": 13
    },
    {
      "type": "rect",
      "left": 1675.1926242825007,
      "top": 548.97702067908,
      "width": 63.330615939967174,
      "height": 23.510083785288998,
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
      "fontSize": 18,
      "fontFamily": "Arial",
      "textFormat": "#,##0",
      "textAlign": "right",
      "fontColor": "#303030",
      "paddingRight": 2,
      "textWrap": true,
      "id": "chute-0207-unload"
    },
    {
      "type": "rect",
      "left": 1675.1926242825007,
      "top": 579.5774471932659,
      "width": 63.330615939967174,
      "height": 23.51008378528934,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Arial",
      "fontSize": 18,
      "textAlign": "right",
      "paddingRight": 2,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-0207-load"
    },
    {
      "type": "text",
      "left": 1642.906571750158,
      "top": 549.2655145613112,
      "width": 30.28215830570025,
      "height": 23.633677991137574,
      "text": "하",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1642.906571750158,
      "top": 516.7692073234973,
      "width": 95.83815422784755,
      "height": 26.5878877400296,
      "text": "07",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1642.5891385826012,
      "top": 579.3984540000115,
      "width": 30.28215830570025,
      "height": 23.633677991137233,
      "text": "상",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "rect",
      "left": 1640.6913069787388,
      "top": 666.2488027648026,
      "width": 100,
      "height": 90,
      "fillStyle": "#303030",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Arial",
      "fontSize": 13,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-08-unload",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-08-load",
          "property": "data"
        }
      ],
      "id": "chute-01041"
    },
    {
      "type": "line",
      "x1": 1640.744433406082,
      "y1": 693.4209480385496,
      "x2": 1740.578246813172,
      "y2": 693.4209480385496,
      "fillStyle": "#fff",
      "strokeStyle": "#fff",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 2,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "Arial",
      "fontSize": 13
    },
    {
      "type": "rect",
      "left": 1675.1926242825007,
      "top": 698.5207649277426,
      "width": 63.330615939967174,
      "height": 23.510083785288998,
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
      "fontSize": 18,
      "fontFamily": "Arial",
      "textFormat": "#,##0",
      "textAlign": "right",
      "fontColor": "#303030",
      "paddingRight": 2,
      "textWrap": true,
      "id": "chute-08-unload"
    },
    {
      "type": "rect",
      "left": 1675.1926242825007,
      "top": 729.1211914419284,
      "width": 63.330615939967174,
      "height": 23.51008378528934,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Arial",
      "fontSize": 18,
      "textAlign": "right",
      "paddingRight": 2,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-08-load"
    },
    {
      "type": "text",
      "left": 1642.906571750158,
      "top": 698.8092588099737,
      "width": 30.28215830570025,
      "height": 23.633677991137574,
      "text": "하",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1642.906571750158,
      "top": 666.3129515721598,
      "width": 95.83815422784755,
      "height": 26.5878877400296,
      "text": "08",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1642.5891385826012,
      "top": 728.942198248674,
      "width": 30.28215830570025,
      "height": 23.633677991137233,
      "text": "상",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "rect",
      "left": 1773.645823096415,
      "top": 648.4013163050789,
      "width": 100,
      "height": 90.00000000000011,
      "fillStyle": "#303030",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Arial",
      "fontSize": 13,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-07-unload",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-07-load",
          "property": "data"
        }
      ],
      "id": "chute-01017"
    },
    {
      "type": "line",
      "x1": 1773.698949523758,
      "y1": 675.5734615788259,
      "x2": 1873.532762930848,
      "y2": 675.5734615788259,
      "fillStyle": "#fff",
      "strokeStyle": "#fff",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 2,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "Arial",
      "fontSize": 13
    },
    {
      "type": "rect",
      "left": 1808.1471404001768,
      "top": 680.673278468019,
      "width": 63.330615939967174,
      "height": 23.510083785288998,
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
      "fontSize": 18,
      "fontFamily": "Arial",
      "textFormat": "#,##0",
      "textAlign": "right",
      "fontColor": "#303030",
      "paddingRight": 2,
      "textWrap": true,
      "id": "chute-07-unload"
    },
    {
      "type": "rect",
      "left": 1808.1471404001768,
      "top": 711.2737049822047,
      "width": 63.330615939967174,
      "height": 23.51008378528934,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Arial",
      "fontSize": 18,
      "textAlign": "right",
      "paddingRight": 2,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-07-load"
    },
    {
      "type": "text",
      "left": 1775.8610878678342,
      "top": 680.9617723502499,
      "width": 30.28215830570025,
      "height": 23.633677991137574,
      "text": "하",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1775.8610878678342,
      "top": 648.4654651124362,
      "width": 95.83815422784755,
      "height": 26.5878877400296,
      "text": "09",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1775.5436547002773,
      "top": 711.0947117889502,
      "width": 30.28215830570025,
      "height": 23.633677991137233,
      "text": "상",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "rect",
      "left": 1773.645823096415,
      "top": 544.8849061442568,
      "width": 99.99999999999955,
      "height": 90,
      "fillStyle": "#621213",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Arial",
      "fontSize": 18,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#01-unload-miss-unload",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#01-unload-miss-load",
          "property": "data"
        }
      ],
      "textBaseline": "middle",
      "id": "01-unload-miss"
    },
    {
      "type": "text",
      "left": 1775.5436547002805,
      "top": 607.595399892765,
      "width": 30.28215830570025,
      "height": 21.449762492742593,
      "text": "상",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "rect",
      "left": 1808.1471404001786,
      "top": 577.1568683071973,
      "width": 63.330615939968084,
      "height": 23.510083785288998,
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
      "fontSize": 18,
      "fontFamily": "Arial",
      "textBaseline": "middle",
      "textFormat": "#,##0",
      "paddingRight": 2,
      "textAlign": "right",
      "textWrap": true,
      "fontColor": "#303030",
      "id": "01-unload-miss-unload"
    },
    {
      "type": "line",
      "x1": 1773.6989495237594,
      "y1": 572.057051418004,
      "x2": 1873.5327629308522,
      "y2": 572.057051418004,
      "fillStyle": "#fff",
      "strokeStyle": "#fff",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 2,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "Arial",
      "fontSize": 18,
      "textBaseline": "middle"
    },
    {
      "type": "text",
      "left": 1775.8610878678355,
      "top": 577.6427127976849,
      "width": 30.28215830570025,
      "height": 21.449762492742366,
      "text": "하",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "text",
      "left": 1775.8610878678355,
      "top": 548.0624971677969,
      "width": 95.83815422784755,
      "height": 21.44976249274214,
      "text": "OverFlow",
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
      "fontFamily": "Arial",
      "fontSize": 18,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "rect",
      "left": 1808.1471404001786,
      "top": 607.7572948213833,
      "width": 63.330615939968084,
      "height": 23.510083785288998,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Arial",
      "fontSize": 18,
      "textBaseline": "middle",
      "text": "#{data}",
      "textFormat": "#,##0",
      "paddingRight": 2,
      "textAlign": "right",
      "textWrap": true,
      "fontColor": "#303030",
      "id": "01-unload-miss-load"
    },
    {
      "type": "rect",
      "left": 600.7374997589552,
      "top": 441.6695461741209,
      "width": 111.72534390654073,
      "height": 101.56849446049137,
      "fillStyle": "#010eaa",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Arial",
      "fontSize": 19,
      "mappings": [
        {
          "rule": "value",
          "target": "#line01_total_unload",
          "property": "data",
          "accessor": "unload_count"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#line01_total_load",
          "property": "data"
        }
      ],
      "data": [
        {
          "__field1": ""
        }
      ],
      "id": "line01_total"
    },
    {
      "type": "text",
      "left": 602.8578586451406,
      "top": 512.4407732508994,
      "width": 33.83284550936696,
      "height": 24.206889810255234,
      "text": "상",
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
      "fontFamily": "Arial",
      "fontSize": 19,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "line",
      "x1": 600.7968554426081,
      "y1": 472.33436713763456,
      "x2": 712.3324423368169,
      "y2": 472.33436713763456,
      "fillStyle": "#fff",
      "strokeStyle": "#fff",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 2,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "Arial",
      "fontSize": 19
    },
    {
      "type": "rect",
      "left": 639.2842151688712,
      "top": 512.6234779637937,
      "width": 70.756348457061,
      "height": 26.532042385686964,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Arial",
      "fontSize": 18,
      "text": "#{data}",
      "fontColor": "#303030",
      "textFormat": "#,##0",
      "textAlign": "right",
      "textWrap": true,
      "paddingRight": 2,
      "id": "line01_total_load"
    },
    {
      "type": "text",
      "left": 603.2125119432656,
      "top": 480.1703253071488,
      "width": 33.83284550936787,
      "height": 24.20688981025546,
      "text": "하",
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
      "fontFamily": "Arial",
      "fontSize": 19,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "rect",
      "left": 639.2842151688712,
      "top": 478.0897085094074,
      "width": 70.756348457061,
      "height": 26.53204238568742,
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
      "fontSize": 18,
      "fontFamily": "Arial",
      "fontColor": "#303030",
      "textFormat": "#,##0",
      "textAlign": "right",
      "textWrap": true,
      "paddingRight": 2,
      "id": "line01_total_unload"
    },
    {
      "type": "text",
      "left": 603.212511943266,
      "top": 445.2555810215887,
      "width": 107.07550740474471,
      "height": 24.20688981025546,
      "text": "합 계",
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
      "fontFamily": "Arial",
      "fontSize": 19,
      "rotation": 0,
      "fontColor": "#fcfcfc"
    },
    {
      "type": "rect",
      "left": 63.12436275662742,
      "top": 802.2480487233219,
      "width": 13.84584481500329,
      "height": 5.814736216570168,
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
      "left": 84.108694966476,
      "top": 784.4667619115312,
      "width": 100.96763216587037,
      "height": 42.12428828770658,
      "text": "알람 LIST",
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
    },
    {
      "type": "text",
      "left": 656.0806129374905,
      "top": 782.4085223344141,
      "width": 302.9028964976103,
      "height": 42.12428828770635,
      "text": "하차 시간대 투입 수",
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
    },
    {
      "type": "rect",
      "left": 635.0982761793704,
      "top": 796.0778030984666,
      "width": 13.846465263638493,
      "height": 5.814736216570054,
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
      "type": "rect",
      "left": 1036.9603027436178,
      "top": 796.4319834258895,
      "width": 14.135468503221773,
      "height": 5.460555889147145,
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
      "left": 1057.942639501738,
      "top": 778.4085223344141,
      "width": 302.90289649761144,
      "height": 42.12428828770635,
      "text": "상차 시간대 투입 수",
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
    },
    {
      "type": "rect",
      "left": 1445.4869380310818,
      "top": 795.1934504981348,
      "width": 13.846465263638493,
      "height": 5.814736216570054,
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
      "left": 1467.8155098847453,
      "top": 778.1922430990796,
      "width": 279.4409671822418,
      "height": 42.12428828770635,
      "text": "CAMERA 상태",
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
}