exports.model = {
  "left": 0,
  "top": 0,
  "width": 1920,
  "height": 1080,
  "links": [],
  "type": "model-layer",
  "translate": {
    "x": 94.82983834355682,
    "y": 49.860424458408865
  },
  "scale": {
    "x": 0.46759259259259256,
    "y": 0.46759259259259256
  },
  "fillStyle": "#efefef",
  "data": [
    {}
  ],
  "id": null,
  "startAngle": 2.3736477827122884,
  "mappings": [],
  "text": null,
  "fontSize": 18,
  "components": [
    {
      "type": "conveyor-join",
      "cx": 1463.362511109672,
      "cy": 711.7271391287987,
      "rx": 30,
      "ry": 30,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7868348899157449,
      "ratio": 0.33392473120397753,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -3.9269908169872423,
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
      "fontFamily": "NanumBarunGothic",
      "id": "02062"
    },
    {
      "type": "conveyor-join",
      "cx": 1548.3086157004605,
      "cy": 635.9524646045045,
      "rx": -30,
      "ry": 30,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7868348899157449,
      "ratio": 0.33392473120397753,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -0.7853981633974483,
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
      "fontFamily": "NanumBarunGothic",
      "id": "02059"
    },
    {
      "type": "conveyor-join",
      "cx": 1825.2244750614886,
      "cy": 539.8103155431681,
      "rx": 30,
      "ry": 30,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7868348899157449,
      "ratio": 0.33392473120397753,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -5.497787143782139,
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
      "fontFamily": "NanumBarunGothic",
      "id": "02054"
    },
    {
      "type": "conveyor-join",
      "cx": 1825.3849728594128,
      "cy": 457.2146412346508,
      "rx": -30,
      "ry": 30,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7868348899157449,
      "ratio": 0.33392473120397753,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -3.9269908169872414,
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
      "fontFamily": "NanumBarunGothic",
      "id": "02052"
    },
    {
      "type": "conveyor-join",
      "cx": 1745.4096177476372,
      "cy": 251.4165809078537,
      "rx": 55,
      "ry": 55,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7853981633974483,
      "ratio": 50.82399239492321,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0.7853981633974483,
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
      "fontFamily": "NanumBarunGothic",
      "id": "02016"
    },
    {
      "type": "conveyor-join",
      "cx": 1347.582436310631,
      "cy": 246.04543372904573,
      "rx": 55,
      "ry": 55,
      "startAngle": -0.2617993877991494,
      "endAngle": 0.5235987755982988,
      "ratio": 50.82399239492321,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -0.5235987755982988,
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
      "fontFamily": "NanumBarunGothic",
      "id": "03033"
    },
    {
      "type": "conveyor-join",
      "cx": 1099.0621625493238,
      "cy": 232.34291261969452,
      "rx": 55,
      "ry": 55,
      "startAngle": 0,
      "endAngle": 0.7853981633974483,
      "ratio": 50.82399239492321,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
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
      "fontFamily": "NanumBarunGothic",
      "id": "03012"
    },
    {
      "type": "conveyor-join",
      "cx": 1053.4523904969117,
      "cy": 261.10592136231367,
      "rx": 55,
      "ry": 55,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7853981633974483,
      "ratio": 50.82399239492321,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0.7853981633974483,
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
      "fontFamily": "NanumBarunGothic",
      "id": "03007"
    },
    {
      "type": "conveyor",
      "top": 200.200395400443,
      "left": 1020.1556835393519,
      "width": 27.161055828121107,
      "height": 30.00000000000003,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -0.7853981633974483,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "03009"
    },
    {
      "type": "conveyor-join",
      "cx": 1032.8011169915828,
      "cy": 303.4037743068601,
      "rx": 55,
      "ry": 55,
      "startAngle": -0.2617993877991494,
      "endAngle": 0,
      "ratio": 50.82399239492321,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 2.617993877991494,
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
      "fontFamily": "NanumBarunGothic",
      "id": "03016"
    },
    {
      "type": "conveyor-join",
      "cx": 142.03959486346645,
      "cy": 377.0534676809174,
      "rx": 30,
      "ry": 30,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7868348899157449,
      "ratio": 0.33392473120397753,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -3.9269908169872423,
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
      "id": "01081",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor-join",
      "cx": 298.19791761176737,
      "cy": 300.048463820067,
      "rx": -30,
      "ry": 30,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7868348899157449,
      "ratio": 0.33392473120397753,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -0.7853981633974483,
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
      "id": "01075",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor-join",
      "cx": 519.4054918439283,
      "cy": 493.62007514095296,
      "rx": 30,
      "ry": 30,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7868348899157449,
      "ratio": 0.33392473120397753,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -3.9269908169872423,
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
      "fontFamily": "NanumBarunGothic",
      "id": "01069"
    },
    {
      "type": "conveyor-join",
      "cx": 1548.2975363322091,
      "cy": 712.2930295375376,
      "rx": -30,
      "ry": 30,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7868348899157449,
      "ratio": 0.33392473120397753,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.9269908169872414,
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
      "fontFamily": "NanumBarunGothic",
      "id": "02056"
    },
    {
      "type": "conveyor-join",
      "cx": 1745.918568597447,
      "cy": 632.1847168958564,
      "rx": 55,
      "ry": 55,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7853981633974483,
      "ratio": 50.82399239492321,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 2.356194490192345,
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
      "fontFamily": "NanumBarunGothic",
      "id": "02022"
    },
    {
      "type": "conveyor-join",
      "cx": 1242.7497111537828,
      "cy": 273.5501052228775,
      "rx": 55,
      "ry": 55,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7853981633974483,
      "ratio": 50.82399239492321,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -0.7853981633974483,
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
      "fontFamily": "NanumBarunGothic",
      "id": "03029"
    },
    {
      "type": "conveyor",
      "top": 220.62556052078128,
      "left": 1117.2887072809465,
      "width": 87.4897541918267,
      "height": 29.99999999999983,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0.7853981633974483,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "03013"
    },
    {
      "type": "conveyor-join",
      "cx": 1075.148319771978,
      "cy": 232.70116566093657,
      "rx": 55,
      "ry": 55,
      "startAngle": 0,
      "endAngle": 0.7853981633974483,
      "ratio": 50.82399239492321,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -0.7853981633974483,
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
      "fontFamily": "NanumBarunGothic",
      "id": "03010"
    },
    {
      "type": "conveyor-join",
      "cx": 1200.0962966505906,
      "cy": 230.88613675920243,
      "rx": 55,
      "ry": 55,
      "startAngle": 0,
      "endAngle": 0.7853981633974483,
      "ratio": 50.82399239492321,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -0.7853981633974483,
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
      "fontFamily": "NanumBarunGothic",
      "id": "03020"
    },
    {
      "type": "conveyor-join",
      "cx": 1071.6790985667797,
      "cy": 377.40909105740775,
      "rx": 55,
      "ry": 55,
      "startAngle": -0.7853981633974483,
      "endAngle": 0,
      "ratio": 50.82399239492321,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -0.5235987755982988,
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
      "fontFamily": "NanumBarunGothic",
      "id": "03015"
    },
    {
      "type": "conveyor-join",
      "cx": 519.5173924713278,
      "cy": 417.1923675986551,
      "rx": -30,
      "ry": 30,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7868348899157449,
      "ratio": 0.33392473120397753,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -5.497787143782138,
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
      "fontFamily": "NanumBarunGothic",
      "id": "01071"
    },
    {
      "type": "conveyor-join",
      "cx": 142.15149549086584,
      "cy": 300.6257601386195,
      "rx": -30,
      "ry": 30,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7868348899157449,
      "ratio": 0.33392473120397753,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -5.497787143782138,
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
      "id": "01083",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor-join",
      "cx": 1030.4523904969117,
      "cy": 261.10592136231367,
      "rx": 55,
      "ry": 55,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7853981633974483,
      "ratio": 50.82399239492321,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -0.7853981633974483,
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
      "fontFamily": "NanumBarunGothic",
      "id": "03005"
    },
    {
      "type": "conveyor-join",
      "cx": 477.0202167302249,
      "cy": 414.21061268947113,
      "rx": 55,
      "ry": 55,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7853981633974483,
      "ratio": 50.82399239492321,
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
      "fontFamily": "NanumBarunGothic",
      "id": "01020"
    },
    {
      "type": "conveyor-join",
      "cx": 947.5005918840393,
      "cy": 414.14441507135194,
      "rx": 55,
      "ry": 55,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7853981633974483,
      "ratio": 50.82399239492321,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 2.356194490192345,
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
      "fontFamily": "NanumBarunGothic",
      "id": "03001"
    },
    {
      "type": "conveyor-join",
      "cx": 393.81677977132847,
      "cy": 380.6380255605818,
      "rx": 55,
      "ry": 55,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7853981633974483,
      "ratio": 50.82399239492321,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0.7853981633974483,
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
      "fontFamily": "NanumBarunGothic",
      "id": "01022"
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
      "text": "",
      "fontFamily": "NanumBarunGothic"
    },
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
      "fontSize": 14,
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "half-roundrect",
      "left": 24.16861826697891,
      "top": 825.7606658835464,
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
      "left": 607.8543848725665,
      "top": 857.5630783100178,
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
      "top": 865.7669741281966,
      "left": 631.226945752909,
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
      "fontSize": 10
    },
    {
      "type": "chartjs",
      "top": 868.3725229822376,
      "left": 1038.7382854593257,
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
      "x1": 613.8942509991806,
      "y1": 824.8311196848431,
      "x2": 613.8942509991806,
      "y2": 1062.4080540803386,
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
      "x1": 1024.4207671779807,
      "y1": 825.3098768333938,
      "x2": 1024.4207671779807,
      "y2": 1062.4080540803386,
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
      "x1": 1424.2894938025993,
      "y1": 824.8123123998088,
      "x2": 1424.2894938025993,
      "y2": 1062.4080540803386,
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
      "left": 70.96277218728267,
      "top": 866.8268863657756,
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
      "left": 66.84703542967384,
      "top": 866.8644462792329,
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
      "left": 429.49771631737696,
      "top": 867.2632692667062,
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
      "left": 279.6784369814689,
      "top": 868.2726150610987,
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
      "left": 67.43771772105174,
      "top": 867.2012990423073,
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
      "top": 898.8290951214933,
      "left": 69.70994079630668,
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
      "left": 1357.220080259568,
      "top": 14.230899530511806,
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
      "left": 1357.220080259568,
      "top": 44.30232636880871,
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
      "left": 1468.1408683293598,
      "top": 2.0193535923472155,
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
      "left": 1479.303764256962,
      "top": 47.08270200863683,
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
      "x1": 1602.6747424225482,
      "y1": 20.84514544755085,
      "x2": 1612.5179437292043,
      "y2": 35.84514544755085,
      "x3": 1592.5179437292043,
      "y3": 35.84514544755085,
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
      "x1": 1602.6812757014382,
      "y1": 65.90849386384039,
      "x2": 1592.838074394782,
      "y2": 80.90849386384039,
      "x3": 1612.838074394782,
      "y3": 80.90849386384039,
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
      "x1": 1336.6555509158115,
      "y1": 0.725814055389975,
      "x2": 1336.6555509158115,
      "y2": 95.43845065508243,
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
      "x1": 1457.1377378781585,
      "y1": 48.0915728102538,
      "x2": 1623.9685157170902,
      "y2": 48.09157281025378,
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
      "left": 1649.0759495017671,
      "top": 14.230899530511806,
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
      "left": 1649.0759495017671,
      "top": 44.30232636880871,
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
      "left": 1759.9967375715592,
      "top": 2.0193535923472155,
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
      "left": 1771.1596334991611,
      "top": 47.08270200863683,
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
      "x1": 1894.5306116647473,
      "y1": 20.845145447550834,
      "x2": 1904.3738129714034,
      "y2": 35.845145447550834,
      "x3": 1884.3738129714034,
      "y3": 35.845145447550834,
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
      "x1": 1894.5371449436373,
      "y1": 65.90849386384039,
      "x2": 1884.6939436369812,
      "y2": 80.90849386384039,
      "x3": 1904.6939436369812,
      "y3": 80.90849386384039,
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
      "x1": 1628.5114201580107,
      "y1": 0.725814055389975,
      "x2": 1628.5114201580107,
      "y2": 95.43845065508243,
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
      "x1": 1464.9936071203576,
      "y1": 48.0915728102538,
      "x2": 1631.8243849592893,
      "y2": 48.09157281025378,
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
      "type": "rect",
      "left": 63.12436275662742,
      "top": 843.9947059710835,
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
      "left": 84.108694966476,
      "top": 827.4325618272302,
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
      "left": 656.0806129374905,
      "top": 825.4325618272304,
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
      "left": 635.0982761793704,
      "top": 841.9947059710836,
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
      "left": 1036.9603027436178,
      "top": 841.9947059710836,
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
      "left": 1057.942639501738,
      "top": 825.4325618272304,
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
      "src": "$base_url/download/707d7659-9cfc-4ca0-9241-80ba5aea19e3",
      "fontFamily": "NanumBarunGothic"
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
      "fontFamily": "NanumBarunGothic",
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
      "text": "서브터미널 - 마포",
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
      "rotation": 0,
      "fontFamily": "NanumBarunGothic"
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
      "src": "$base_url/download/5370315a-1555-4443-9d0c-1b9e216065e7",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 338.9379235480157,
      "left": 321.4469918294412,
      "width": 7.1791176130995495,
      "height": 15,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01027",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 323.9022187331111,
      "left": 321.8561870183753,
      "width": 6.998687516306859,
      "height": 15,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01028",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 323.9242200493594,
      "left": 301.2334262386973,
      "width": 17.333010801381135,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01029",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor-join",
      "cx": 298.19791761176737,
      "cy": 377.048463820067,
      "rx": -30,
      "ry": 30,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7868348899157449,
      "ratio": 0.33392473120397753,
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
      "id": "01073",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "wheel-sorter",
      "top": 324.4041798102484,
      "left": 268.2333897026334,
      "width": 30,
      "height": 30,
      "lineWidth": 0,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 0,
      "tilt": 1,
      "rotation": 1.5707963267948966,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 3;\nif(data.chute_full == 'Y')\n    return 2;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "wheelSize": 1.5,
      "id": "01038",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 377.2249232751293,
      "left": 301.69343550528504,
      "width": 17.46847835198554,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01074",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 297.48085894706367,
      "left": 292.0347894912362,
      "width": -17.393585805918065,
      "height": 30,
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
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01050",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 270.2211941139428,
      "left": 319.1153310520914,
      "width": -17.27582100079718,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01076",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 350.48085894706367,
      "left": 292.0347894912362,
      "width": -17.393585805918065,
      "height": 30,
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
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01049",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 324.11139509268696,
      "left": 248.1155795580935,
      "width": 17.11784668060386,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01030",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor-join",
      "cx": 215.17346489028705,
      "cy": 300.40543338471446,
      "rx": -30,
      "ry": 30,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7868348899157449,
      "ratio": 0.33392473120397753,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -5.497787143782138,
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
      "id": "01079",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor-join",
      "cx": 215.4258621768214,
      "cy": 377.0518610086348,
      "rx": 30,
      "ry": 30,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7868348899157449,
      "ratio": 0.33392473120397753,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -3.9269908169872423,
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
      "id": "01077",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "wheel-sorter",
      "top": 324.25330364965106,
      "left": 215.1580472146622,
      "width": 30.00000000000017,
      "height": 30,
      "lineWidth": 0,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 0,
      "tilt": 1,
      "rotation": -1.5707963267948966,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 3;\nif(data.chute_full == 'Y')\n    return 2;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "wheelSize": 1.5,
      "id": "01039",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 270.40582149111185,
      "left": 194.81169563069756,
      "width": 17.20038226655106,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01080",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 350.49623457873696,
      "left": 238.97411879991876,
      "width": -17.393585805918065,
      "height": 30,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -4.71238898038469,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01051",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 377.4780949785692,
      "left": 211.77545273431952,
      "width": -17.285199288398303,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01078",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 297.71902050671855,
      "left": 238.8097395094785,
      "width": -17.393585805918065,
      "height": 30,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -4.71238898038469,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01052",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 324.2494861442603,
      "left": 194.97378505013836,
      "width": 17.42654202838588,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01031",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 324.2494861442603,
      "left": 174.47449839457278,
      "width": 17.499286655565555,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01032",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 270.2186464477843,
      "left": 122.2160262200693,
      "width": 17.432646855221634,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01084",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 297.5084878657604,
      "left": 165.83702167295877,
      "width": -17.393585805918065,
      "height": 30,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -4.71238898038469,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01054",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "wheel-sorter",
      "top": 324.2679455516194,
      "left": 142.10033394825552,
      "width": 30,
      "height": 30,
      "lineWidth": 0,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 0,
      "tilt": 1,
      "rotation": -1.5707963267948966,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 3;\nif(data.chute_full == 'Y')\n    return 2;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "wheelSize": 1.5,
      "id": "01040",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 350.46016254021754,
      "left": 165.63462783296296,
      "width": -17.393585805918065,
      "height": 30,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -4.71238898038469,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01053",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 377.5803222772556,
      "left": 139.11260871175594,
      "width": -17.080318456300517,
      "height": 30.000000000000114,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01082",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 324.2494861442603,
      "left": 102.23919811470134,
      "width": 17.205921967696383,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01085",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 324.2494861442603,
      "left": 122.4451200823977,
      "width": 16.908742884294156,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01033",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "rect",
      "left": 1808.6748217464915,
      "top": 114.89500247085283,
      "width": 100,
      "height": 230.61867704280155,
      "fillStyle": "",
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
      "left": 1861.676382347723,
      "top": 197.74494871212886,
      "width": 50,
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
      "fontFamily": "NanumBarunGothic",
      "fontSize": 17,
      "rotation": 0,
      "fontColor": "#585858"
    },
    {
      "type": "rect",
      "left": 1823.769733112927,
      "top": 164.64508531199547,
      "width": 25,
      "height": 12,
      "fillStyle": "#ffba00",
      "strokeStyle": "#666",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "text",
      "left": 1861.676382347723,
      "top": 162.86945156503702,
      "width": 50,
      "height": 18.818176330158906,
      "text": "만재",
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
      "fontFamily": "NanumBarunGothic",
      "fontSize": 17,
      "rotation": 0,
      "fontColor": "#585858"
    },
    {
      "type": "rect",
      "left": 1823.769733112927,
      "top": 130.19701243227087,
      "width": 25,
      "height": 12,
      "fillStyle": "#afd0f1",
      "strokeStyle": "#666",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "text",
      "left": 1861.6763823477238,
      "top": 128.7879242671914,
      "width": 50,
      "height": 19,
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
      "fontFamily": "NanumBarunGothic",
      "fontSize": 17,
      "rotation": 0,
      "fontColor": "#585858"
    },
    {
      "type": "text",
      "left": 1861.6763823477231,
      "top": 229.62044585922064,
      "width": 50,
      "height": 18.818176330158906,
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
      "fontFamily": "NanumBarunGothic",
      "fontSize": 17,
      "rotation": 0,
      "fontColor": "#585858"
    },
    {
      "type": "rect",
      "left": 1824.5606205458212,
      "top": 198.6463579517166,
      "width": 25,
      "height": 12,
      "fillStyle": "#e8736a",
      "strokeStyle": "#666",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "text": "",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "rect",
      "left": 1824.5606205458212,
      "top": 232.64763059143775,
      "width": 25,
      "height": 12,
      "fillStyle": "#aaa",
      "strokeStyle": "#666",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "text": "",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "triangle",
      "x1": 1837.2174192391653,
      "y1": 315.61744670348065,
      "x2": 1847.0606205458212,
      "y2": 327.61744670348065,
      "x3": 1827.0606205458212,
      "y3": 327.61744670348065,
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
      "x1": 1836.9038218524774,
      "y1": 282.9726239135445,
      "x2": 1827.0606205458212,
      "y2": 294.9726239135445,
      "x3": 1847.0606205458212,
      "y3": 294.9726239135445,
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
      "type": "text",
      "left": 1861.6763823477231,
      "top": 312.93951200708057,
      "width": 50,
      "height": 18.818176330158906,
      "text": "하차",
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
      "fontFamily": "NanumBarunGothic",
      "fontSize": 17,
      "rotation": 0,
      "fontColor": "#585858"
    },
    {
      "type": "text",
      "left": 1861.6763823477231,
      "top": 281.57375325221676,
      "width": 50,
      "height": 18.818176330158906,
      "text": "상차",
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
      "fontFamily": "NanumBarunGothic",
      "fontSize": 17,
      "rotation": 0,
      "fontColor": "#585858"
    },
    {
      "type": "line",
      "x1": 1816.402264719834,
      "y1": 264.05064449419916,
      "x2": 1902.022293103341,
      "y2": 264.05064449419916,
      "fillStyle": "#fff",
      "strokeStyle": "#ccc",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 1,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "text": "",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "wheel-sorter",
      "top": 324.4041798102484,
      "left": 332.2333897026334,
      "width": 30,
      "height": 30,
      "lineWidth": 0,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 0,
      "tilt": 1,
      "rotation": 1.5707963267948966,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 3;\nif(data.chute_full == 'Y')\n    return 2;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "wheelSize": 1.5,
      "fontFamily": "NanumBarunGothic",
      "id": "01026"
    },
    {
      "type": "conveyor",
      "top": 338.9379235480157,
      "left": 383.44699182944106,
      "width": 7,
      "height": 15,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "01023"
    },
    {
      "type": "conveyor",
      "top": 323.9022187331111,
      "left": 383.8561870183753,
      "width": 7,
      "height": 15,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "01024"
    },
    {
      "type": "conveyor",
      "top": 323.9242200493594,
      "left": 364.23342623869735,
      "width": 17.24471198063975,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "01025"
    },
    {
      "type": "conveyor",
      "top": 390.98709772959864,
      "left": 1738.75350328587,
      "width": 97.07242497878451,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -1.5707963267948966,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "02018",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 285.55950863460544,
      "left": 1733.4542007020334,
      "width": 107.67103014645772,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -1.5707963267948966,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "02017",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 381.86986334003797,
      "left": 421.6789028088308,
      "width": 27.546428905590233,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -1.5707963267948966,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "01021"
    },
    {
      "type": "conveyor",
      "top": 386.92525909319716,
      "left": 499.00621931241824,
      "width": 17.375822672562208,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "01072"
    },
    {
      "type": "conveyor",
      "top": 414.075095325796,
      "left": 543.2029186534207,
      "width": -17.393585805918065,
      "height": 30,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -4.71238898038469,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "01048"
    },
    {
      "type": "wheel-sorter",
      "top": 440.834553011655,
      "left": 519.4662309287174,
      "width": 30,
      "height": 30,
      "lineWidth": 0,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 0,
      "tilt": 1,
      "rotation": -1.5707963267948966,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 3;\nif(data.chute_full == 'Y')\n    return 2;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "wheelSize": 1.5,
      "fontFamily": "NanumBarunGothic",
      "id": "01037"
    },
    {
      "type": "conveyor",
      "top": 467.0267700002531,
      "left": 543.0005248134248,
      "width": -17.393585805918065,
      "height": 30,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -4.71238898038469,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "01047"
    },
    {
      "type": "conveyor",
      "top": 494.1469297372912,
      "left": 516.0297135860593,
      "width": -17.16762019291616,
      "height": 30.000000000000114,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "01070"
    },
    {
      "type": "conveyor",
      "top": 440.8160936042959,
      "left": 479.8110170628596,
      "width": 16.84332022658623,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "01019"
    },
    {
      "type": "conveyor",
      "top": 440.8160936042959,
      "left": 498.8110170628596,
      "width": 17.459317774854753,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "01018"
    },
    {
      "type": "conveyor-join",
      "cx": 593.539361870749,
      "cy": 416.97204084475004,
      "rx": -30,
      "ry": 30,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7868348899157449,
      "ratio": 0.33392473120397753,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -5.497787143782138,
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
      "fontFamily": "NanumBarunGothic",
      "id": "01067"
    },
    {
      "type": "conveyor-join",
      "cx": 593.7917591572832,
      "cy": 493.61846846867036,
      "rx": 30,
      "ry": 30,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7868348899157449,
      "ratio": 0.33392473120397753,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -3.9269908169872423,
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
      "fontFamily": "NanumBarunGothic",
      "id": "01065"
    },
    {
      "type": "wheel-sorter",
      "top": 440.81991110968664,
      "left": 593.5239441951242,
      "width": 30.000000000000227,
      "height": 30,
      "lineWidth": 0,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 0,
      "tilt": 1,
      "rotation": -1.5707963267948966,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 3;\nif(data.chute_full == 'Y')\n    return 2;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "wheelSize": 1.5,
      "fontFamily": "NanumBarunGothic",
      "id": "01036"
    },
    {
      "type": "conveyor",
      "top": 386.97242895114744,
      "left": 573.5322090352611,
      "width": 16.845765842449396,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "01068"
    },
    {
      "type": "conveyor",
      "top": 467.06284203877254,
      "left": 617.3400157803806,
      "width": -17.393585805918065,
      "height": 29.999999999999943,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -4.71238898038469,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "01045"
    },
    {
      "type": "conveyor",
      "top": 494.04470243860476,
      "left": 590.1413497147814,
      "width": -16.609140679520237,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "01066"
    },
    {
      "type": "conveyor",
      "top": 414.28562796675413,
      "left": 617.1756364899404,
      "width": -17.393585805918065,
      "height": 30,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -4.71238898038469,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "01046"
    },
    {
      "type": "conveyor",
      "top": 440.8160936042959,
      "left": 573.3396820306003,
      "width": 16.76586845323061,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "01016"
    },
    {
      "type": "conveyor",
      "top": 440.8160936042959,
      "left": 552.966171299412,
      "width": 17.373510731188162,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "01017"
    },
    {
      "type": "conveyor-join",
      "cx": 666.539361870749,
      "cy": 416.97204084475004,
      "rx": -30,
      "ry": 30,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7868348899157449,
      "ratio": 0.33392473120397753,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -5.497787143782138,
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
      "fontFamily": "NanumBarunGothic",
      "id": "01063"
    },
    {
      "type": "conveyor-join",
      "cx": 666.7917591572832,
      "cy": 493.61846846867036,
      "rx": 30,
      "ry": 30,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7868348899157449,
      "ratio": 0.33392473120397753,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -3.9269908169872423,
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
      "fontFamily": "NanumBarunGothic",
      "id": "01061"
    },
    {
      "type": "wheel-sorter",
      "top": 440.81991110968664,
      "left": 666.5239441951244,
      "width": 30.000000000000227,
      "height": 30,
      "lineWidth": 0,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 0,
      "tilt": 1,
      "rotation": -1.5707963267948966,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 3;\nif(data.chute_full == 'Y')\n    return 2;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "wheelSize": 1.5,
      "fontFamily": "NanumBarunGothic",
      "id": "01035"
    },
    {
      "type": "conveyor",
      "top": 386.97242895114744,
      "left": 646.1463633094913,
      "width": 17,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "01064"
    },
    {
      "type": "conveyor",
      "top": 467.06284203877254,
      "left": 690.3400157803806,
      "width": -17.393585805918065,
      "height": 29.999999999999943,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -4.71238898038469,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "01043"
    },
    {
      "type": "conveyor",
      "top": 494.04470243860476,
      "left": 663.1153996044095,
      "width": -17,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "01062"
    },
    {
      "type": "conveyor",
      "top": 414.28562796675413,
      "left": 690.1756364899404,
      "width": -17.393585805918065,
      "height": 30,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -4.71238898038469,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "01044"
    },
    {
      "type": "conveyor",
      "top": 440.8160936042959,
      "left": 646.3396820306002,
      "width": 17,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "01014"
    },
    {
      "type": "conveyor",
      "top": 440.8160936042959,
      "left": 626.3396820306002,
      "width": 17,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "01015"
    },
    {
      "type": "conveyor-join",
      "cx": 751.2266557698297,
      "cy": 417.0680967273869,
      "rx": -30,
      "ry": 30,
      "startAngle": 2.356194490192345,
      "endAngle": -2.356194490192345,
      "ratio": 0,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 2.356194490192344,
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
      "id": "01058",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor-join",
      "cx": 750.8335135496716,
      "cy": 493.4983401185866,
      "rx": -30,
      "ry": 30,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7868348899157449,
      "ratio": 0.33392473120397753,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.9269908169872414,
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
      "id": "01055",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 455.7770962211114,
      "left": 926.3629888390576,
      "width": 7,
      "height": 15,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01002",
      "fontFamily": "NanumBarunGothic",
      "fontSize": 16
    },
    {
      "type": "conveyor",
      "top": 440.8153722010554,
      "left": 936.6042725869734,
      "width": 7,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01001",
      "fontFamily": "NanumBarunGothic",
      "fontSize": 16
    },
    {
      "type": "conveyor",
      "top": 440.7829059622252,
      "left": 916.1242962949857,
      "width": 7,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01004",
      "fontFamily": "NanumBarunGothic",
      "fontSize": 16
    },
    {
      "type": "conveyor",
      "top": 440.8008796992551,
      "left": 926.5899236184098,
      "width": 7,
      "height": 15,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01003",
      "fontFamily": "NanumBarunGothic",
      "fontSize": 16
    },
    {
      "type": "conveyor",
      "top": 440.83137235008166,
      "left": 906.4051254339474,
      "width": 7,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01005",
      "fontFamily": "NanumBarunGothic",
      "fontSize": 16
    },
    {
      "type": "conveyor",
      "top": 440.802017062759,
      "left": 896.1607141380991,
      "width": 7,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01006",
      "fontFamily": "NanumBarunGothic",
      "fontSize": 16
    },
    {
      "type": "conveyor",
      "top": 440.8339651844867,
      "left": 886.2196163040121,
      "width": 7,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01007",
      "fontFamily": "NanumBarunGothic",
      "fontSize": 16
    },
    {
      "type": "conveyor-belt",
      "top": 440.89820176133185,
      "left": 808.9700295723376,
      "width": 73.65796377763309,
      "height": 30,
      "strokeStyle": "black",
      "lineWidth": 1,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 13,
      "rotation": 0,
      "conveyorType": 1,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "id": "01008",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "scanner",
      "top": 428.9782659174167,
      "left": 833.9969914937894,
      "width": 29.302824678978595,
      "height": 55.873798298007614,
      "lineWidth": 1,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 1,
      "rollWidth": 3,
      "rotation": 0,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\n\nif((data.camera_ready && data.camera_ready == 'ER')\n|| (data.camera_top_error && data.camera_top_error == 'ER')\n|| (data.camera_left_error && data.camera_left_error == 'ER')\n|| (data.camera_right_error && data.camera_right_error == 'ER')\n|| (data.its_comm_state && data.its_comm_state == 'ER')\n)\n    return 3;\n\nreturn 1;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "line01_its",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "wheel-sorter",
      "top": 440.9405491973837,
      "left": 775.0492942241287,
      "width": 30,
      "height": 30,
      "lineWidth": 0,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 0,
      "tilt": 1,
      "rotation": 4.71238898038469,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 3;\nif(data.chute_full == 'Y')\n    return 2;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "wheelSize": 1.5,
      "id": "01009",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 440.88199843788175,
      "left": 764.7554737495784,
      "width": 7,
      "height": 15,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01011",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 455.81444089741876,
      "left": 764.6662942606861,
      "width": 7,
      "height": 15,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01010",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 440.7965105406022,
      "left": 754.3252603613649,
      "width": 7,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01012",
      "text": "",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "wheel-sorter",
      "top": 440.7397253350862,
      "left": 720.9699680943374,
      "width": 30,
      "height": 30,
      "lineWidth": 0,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 0,
      "tilt": 1,
      "rotation": -1.5707963267948966,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 3;\nif(data.chute_full == 'Y')\n    return 2;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "wheelSize": 1.5,
      "id": "01034",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 466.5879376090987,
      "left": 744.1426761671889,
      "width": -16.67872571694079,
      "height": 29.999999999999943,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 4.71238898038469,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01041",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 493.33385400057955,
      "left": 754.2205673599251,
      "width": 37.51065380300747,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01056",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 493.2478523699242,
      "left": 793.9499879192922,
      "width": 127.90365514313658,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01057",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 387.06582959678633,
      "left": 791.3704913029644,
      "width": -37.16079126440104,
      "height": 30,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01059",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 414.188169420124,
      "left": 727.5614021012877,
      "width": 17.082310100013274,
      "height": 30,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 4.71238898038469,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01042",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 387.05635258382597,
      "left": 794.4491384633097,
      "width": 127.9036551431368,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01060",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 440.8793085237396,
      "left": 699.456938653102,
      "width": 17.381186975170067,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "01013",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 372.8160302596978,
      "left": 965.4040598892004,
      "width": 47.37570556046785,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -1.5707963267948966,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "03002"
    },
    {
      "type": "conveyor",
      "top": 322.783928615158,
      "left": 965.3719582446606,
      "width": 47.439908849547464,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -1.5707963267948966,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "03003"
    },
    {
      "type": "conveyor",
      "top": 272.783928615158,
      "left": 965.3719582446606,
      "width": 47.439908849547464,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -1.5707963267948966,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "03004"
    },
    {
      "type": "conveyor",
      "top": 204.57963725927112,
      "left": 1033.3296812802853,
      "width": 17.268982180815783,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "text": "",
      "fontFamily": "NanumBarunGothic",
      "id": "03006"
    },
    {
      "type": "conveyor",
      "top": 298.5696110006383,
      "left": 1057.8583124062181,
      "width": 47.439908849547464,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -0.7853981633974483,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "03017"
    },
    {
      "type": "conveyor",
      "top": 243.97233788404333,
      "left": 1094.558962344866,
      "width": 37.36389348398097,
      "height": 30.00000000000017,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -0.7853981633974483,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "03018"
    },
    {
      "type": "conveyor",
      "top": 208.7912648435727,
      "left": 1119.873299447035,
      "width": 57.242681327982154,
      "height": 30.00000000000003,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -0.7853981633974483,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "03019"
    },
    {
      "type": "conveyor",
      "top": 173.81717572409434,
      "left": 1203.1082093018922,
      "width": 17.39385416443247,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "text": "",
      "fontFamily": "NanumBarunGothic",
      "id": "03021"
    },
    {
      "type": "conveyor-join",
      "cx": 1224.0101394279363,
      "cy": 230.52788371796032,
      "rx": 55,
      "ry": 55,
      "startAngle": 0,
      "endAngle": 0.7853981633974483,
      "ratio": 50.82399239492321,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
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
      "fontFamily": "NanumBarunGothic",
      "id": "03022"
    },
    {
      "type": "conveyor",
      "top": 197.48111576248021,
      "left": 1251.0716174848449,
      "width": 27.161055828121107,
      "height": 29.999999999999943,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0.7853981633974483,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "03023"
    },
    {
      "type": "conveyor",
      "top": 175.95256516476346,
      "left": 1078.2242573938943,
      "width": 17.39385416443247,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "text": "",
      "fontFamily": "NanumBarunGothic",
      "id": "03011"
    },
    {
      "type": "conveyor",
      "top": 259.24628935958214,
      "left": 1191.2319203016395,
      "width": 17.214624846082188,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -2.356194490192345,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "03014"
    },
    {
      "type": "conveyor-join",
      "cx": 1141.3428180650758,
      "cy": 302.8232623332845,
      "rx": 55,
      "ry": 55,
      "startAngle": -0.2617993877991494,
      "endAngle": 0,
      "ratio": 50.82399239492321,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 2.617993877991494,
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
      "fontFamily": "NanumBarunGothic",
      "id": "03025"
    },
    {
      "type": "conveyor-join",
      "cx": 1180.2207996402726,
      "cy": 376.82857908383215,
      "rx": 55,
      "ry": 55,
      "startAngle": -0.7853981633974483,
      "endAngle": 0,
      "ratio": 50.82399239492321,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -0.5235987755982988,
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
      "fontFamily": "NanumBarunGothic",
      "id": "03024"
    },
    {
      "type": "conveyor",
      "top": 297.9890990270627,
      "left": 1166.400013479711,
      "width": 47.439908849547464,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -0.7853981633974483,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "03026"
    },
    {
      "type": "conveyor",
      "top": 215.8651926699407,
      "left": 1246.1485698256508,
      "width": 17,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "text": "",
      "fontFamily": "NanumBarunGothic",
      "id": "03030"
    },
    {
      "type": "conveyor",
      "top": 215.89220023205812,
      "left": 1265.8442846257942,
      "width": 17.21096076818708,
      "height": 30.00000000000003,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "text": "",
      "fontFamily": "NanumBarunGothic",
      "id": "03031"
    },
    {
      "type": "conveyor-join",
      "cx": 1285.8510109144481,
      "cy": 189.50339679264118,
      "rx": 55,
      "ry": 55,
      "startAngle": -0.7853981633974483,
      "endAngle": 0,
      "ratio": 50.82399239492321,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
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
      "fontFamily": "NanumBarunGothic",
      "id": "03032"
    },
    {
      "type": "conveyor-join",
      "cx": 1702.5592779670221,
      "cy": 239.73340903795315,
      "rx": -30,
      "ry": 30,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7868348899157449,
      "ratio": 0.33392473120397753,
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
      "id": "02050",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor-join",
      "cx": 1620.5121997574363,
      "cy": 240.082864587446,
      "rx": -30,
      "ry": 30,
      "startAngle": 2.356194490192345,
      "endAngle": -2.356194490192345,
      "ratio": 0,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 5.497787143782138,
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
      "id": "02047",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 187.99832032885908,
      "left": 1371.1147366404225,
      "width": 17.418399061475384,
      "height": 15,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "02003",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 188.0018170844315,
      "left": 1351.4103868468098,
      "width": 17.239457664409656,
      "height": 30.00000000000003,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "02001",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 187.96137609969068,
      "left": 1390.4404218572397,
      "width": 17,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "02004",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 203.0231584081142,
      "left": 1371.057121460623,
      "width": 17.120673157703777,
      "height": 15.000000000000028,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "02002",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 187.91290971183443,
      "left": 1410.159592718278,
      "width": 17,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "02005",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 187.94226499915712,
      "left": 1429.4040040141265,
      "width": 17,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "02006",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 187.91031687742938,
      "left": 1449.3478513867474,
      "width": 16.997250461465683,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "02007",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor-belt",
      "top": 187.66294311069245,
      "left": 1469.229716716729,
      "width": 76.21273317647388,
      "height": 30,
      "strokeStyle": "black",
      "lineWidth": 1,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 13,
      "rotation": 3.141592653589793,
      "conveyorType": 1,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "property": "value",
          "target": "(self)"
        }
      ],
      "id": "02008",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "scanner",
      "top": 175.17778848818827,
      "left": 1492.3681652785192,
      "width": 29.302824678978595,
      "height": 55.87379829800764,
      "lineWidth": 1,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 1,
      "rollWidth": 3,
      "rotation": 3.141592653589793,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\n\nif((data.camera_ready && data.camera_ready == 'ER')\n|| (data.camera_top_error && data.camera_top_error == 'ER')\n|| (data.camera_left_error && data.camera_left_error == 'ER')\n|| (data.camera_right_error && data.camera_right_error == 'ER')\n|| (data.its_comm_state && data.its_comm_state == 'ER')\n)\n    return 3;\n\nreturn 1;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "line02_its",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "wheel-sorter",
      "top": 187.80642703439864,
      "left": 1547.891600439095,
      "width": 30,
      "height": 30,
      "lineWidth": 0,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 0,
      "tilt": 1,
      "rotation": 1.5707963267948966,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 3;\nif(data.chute_full == 'Y')\n    return 2;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "wheelSize": 1.5,
      "id": "02009",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 202.8223464656647,
      "left": 1580.366368152202,
      "width": 17.257326134756113,
      "height": 15,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "02010",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 187.83243826898044,
      "left": 1580.4239833320012,
      "width": 17.445332969967012,
      "height": 15,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "02011",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 187.77519393094528,
      "left": 1600.180797600665,
      "width": 17.437847977106685,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "02012",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "wheel-sorter",
      "top": 187.84175901805665,
      "left": 1620.5947500578882,
      "width": 30,
      "height": 30,
      "lineWidth": 0,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 0,
      "tilt": 1,
      "rotation": 1.5707963267948966,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 3;\nif(data.chute_full == 'Y')\n    return 2;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "wheelSize": 1.5,
      "id": "02033",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 240.14332377634923,
      "left": 1617.3550181136613,
      "width": -17.349099252804763,
      "height": 30,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "02048",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 213.77318299254333,
      "left": 1627.0155168861884,
      "width": 17.064216724435028,
      "height": 29.99999999999997,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 1.5707963267948966,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "02039",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 240.15280078930982,
      "left": 1529.850243797172,
      "width": 67.26533589174437,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "02049",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 187.77519393094528,
      "left": 1653.1807976006646,
      "width": 17.18463989359998,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "02013",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "wheel-sorter",
      "top": 187.72189220340633,
      "left": 1672.5947500578882,
      "width": 30,
      "height": 30,
      "lineWidth": 0,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 0,
      "tilt": 1,
      "rotation": 1.5707963267948966,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 3;\nif(data.chute_full == 'Y')\n    return 2;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "wheelSize": 1.5,
      "id": "02034",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 239.72519100579666,
      "left": 1705.0060828235523,
      "width": 17.321186818621754,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "02051",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 213.16580416494978,
      "left": 1696.002564040573,
      "width": -17,
      "height": 30.00000000000003,
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
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "02040",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 187.86021842541592,
      "left": 1705.2616870283487,
      "width": 17.2552769296949,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "id": "02014",
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "conveyor",
      "top": 187.86021842541592,
      "left": 1725.2616870283487,
      "width": 17.2552769296949,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "02015"
    },
    {
      "type": "wheel-sorter",
      "top": 457.1327908139952,
      "left": 1772.3607953365781,
      "width": 30,
      "height": 29.999999999999943,
      "lineWidth": 0,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 0,
      "tilt": 1,
      "rotation": 3.141592653589793,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 3;\nif(data.chute_full == 'Y')\n    return 2;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "wheelSize": 1.5,
      "fontFamily": "NanumBarunGothic",
      "id": "02035"
    },
    {
      "type": "conveyor",
      "top": 431.1072429688097,
      "left": 1831.7161614179454,
      "width": 17.321186818621754,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -1.5707963267948966,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "02053"
    },
    {
      "type": "conveyor",
      "top": 457.2713551611,
      "left": 1822.3173679864094,
      "width": -17,
      "height": 30,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -3.141592653589793,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "02041"
    },
    {
      "type": "conveyor",
      "top": 483.37218912622507,
      "left": 1795.8364933507853,
      "width": -17,
      "height": 30,
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
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "02019"
    },
    {
      "type": "wheel-sorter",
      "top": 509.7495764583791,
      "left": 1772.4389529321907,
      "width": 30,
      "height": 30,
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
      "wheelSize": 1.5,
      "fontFamily": "NanumBarunGothic",
      "id": "02036"
    },
    {
      "type": "conveyor",
      "top": 509.91207547663066,
      "left": 1822.327962823748,
      "width": -17.393585805918065,
      "height": 30,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "02042"
    },
    {
      "type": "conveyor",
      "top": 536.7699038974952,
      "left": 1849.3351397542851,
      "width": -17.167620192916274,
      "height": 30.000000000000114,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -1.5707963267948966,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "02055"
    },
    {
      "type": "conveyor",
      "top": 555.9565550076894,
      "left": 1758.8492265263162,
      "width": 56.8809784978921,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -1.5707963267948966,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "02020"
    },
    {
      "type": "conveyor",
      "top": 600.6869327835025,
      "left": 1773.8870488919538,
      "width": 26.719893646360106,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -1.5707963267948966,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "02021"
    },
    {
      "type": "conveyor",
      "top": 674.0002526170638,
      "left": 1725.3836848190858,
      "width": 17.120673157703777,
      "height": 15,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "02023"
    },
    {
      "type": "conveyor",
      "top": 658.9754145378087,
      "left": 1725.4412999988854,
      "width": 17.418399061475384,
      "height": 15,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "02024"
    },
    {
      "type": "conveyor",
      "top": 658.9789112933811,
      "left": 1675.7819486983742,
      "width": 47.19445917130838,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "02025"
    },
    {
      "type": "conveyor",
      "top": 658.9789112933811,
      "left": 1625.7819486983742,
      "width": 47.19445917130838,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "02026"
    },
    {
      "type": "wheel-sorter",
      "top": 658.9541771978953,
      "left": 1592.269531057322,
      "width": 30,
      "height": 30,
      "lineWidth": 0,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 0,
      "tilt": 1,
      "rotation": 1.5707963267948966,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 3;\nif(data.chute_full == 'Y')\n    return 2;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "wheelSize": 1.5,
      "fontFamily": "NanumBarunGothic",
      "id": "02027"
    },
    {
      "type": "conveyor",
      "top": 658.7177968092768,
      "left": 1571.7099980598273,
      "width": 17.418399061475384,
      "height": 15,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "02029"
    },
    {
      "type": "conveyor",
      "top": 673.7426348885319,
      "left": 1571.6523828800277,
      "width": 17.120673157703777,
      "height": 15,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "02028"
    },
    {
      "type": "conveyor",
      "top": 658.7015463962516,
      "left": 1551.2850656385194,
      "width": 17.48052523202591,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "02030"
    },
    {
      "type": "wheel-sorter",
      "top": 658.9541771978953,
      "left": 1518.269531057322,
      "width": 30,
      "height": 30,
      "lineWidth": 0,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 0,
      "tilt": 1,
      "rotation": 1.5707963267948966,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 3;\nif(data.chute_full == 'Y')\n    return 2;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "wheelSize": 1.5,
      "fontFamily": "NanumBarunGothic",
      "id": "02037"
    },
    {
      "type": "conveyor",
      "top": 685.3826270280496,
      "left": 1541.6066989497265,
      "width": -16.67872571694079,
      "height": 29.999999999999886,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 4.71238898038469,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "02043"
    },
    {
      "type": "conveyor",
      "top": 712.1285434195305,
      "left": 1551.6845901424626,
      "width": 37.51065380300747,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "02057"
    },
    {
      "type": "conveyor",
      "top": 712.0425417888752,
      "left": 1591.4140107018297,
      "width": 77.36146436742274,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "02058"
    },
    {
      "type": "conveyor",
      "top": 632.3826270280496,
      "left": 1541.6066989497265,
      "width": -16.67872571694079,
      "height": 29.999999999999886,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 4.71238898038469,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "02044"
    },
    {
      "type": "conveyor",
      "top": 605.8353549540259,
      "left": 1591.4140107018297,
      "width": 77.36146436742274,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "02061"
    },
    {
      "type": "conveyor",
      "top": 605.9213565846812,
      "left": 1551.6845901424626,
      "width": 37.51065380300747,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "02060"
    },
    {
      "type": "conveyor",
      "top": 658.7620387145837,
      "left": 1496.9814417651257,
      "width": 17.381186975170067,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "02031"
    },
    {
      "type": "conveyor-join",
      "cx": 1463.4744117370715,
      "cy": 635.2994315865009,
      "rx": -30,
      "ry": 30,
      "startAngle": -0.7853981633974483,
      "endAngle": 0.7868348899157449,
      "ratio": 0.33392473120397753,
      "lineWidth": 0,
      "strokeStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -5.497787143782138,
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
      "fontFamily": "NanumBarunGothic",
      "id": "02064"
    },
    {
      "type": "conveyor",
      "top": 604.8923178956657,
      "left": 1443.5389424662749,
      "width": 17.43264685522172,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "02065"
    },
    {
      "type": "conveyor",
      "top": 632.1821593136417,
      "left": 1487.1599379191643,
      "width": -17.393585805918065,
      "height": 30,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -4.71238898038469,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "02046"
    },
    {
      "type": "wheel-sorter",
      "top": 658.9416169995008,
      "left": 1463.4232501944612,
      "width": 30,
      "height": 30,
      "lineWidth": 0,
      "strokeStyle": "#999",
      "fillStyle": "transparent",
      "value": 0,
      "tilt": 1,
      "rotation": -1.5707963267948966,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 3;\nif(data.chute_full == 'Y')\n    return 2;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "wheelSize": 1.5,
      "fontFamily": "NanumBarunGothic",
      "id": "02038"
    },
    {
      "type": "conveyor",
      "top": 685.1338339880989,
      "left": 1486.9575440791684,
      "width": -17.393585805918065,
      "height": 30,
      "strokeStyle": "black",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -4.71238898038469,
      "animated": false,
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "02045"
    },
    {
      "type": "conveyor",
      "top": 712.253993725137,
      "left": 1460.4355249579614,
      "width": -17.080318456300574,
      "height": 30.000000000000114,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": 0,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "02063"
    },
    {
      "type": "conveyor",
      "top": 658.9231575921417,
      "left": 1423.562114360907,
      "width": 17.20592196769644,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "02066"
    },
    {
      "type": "conveyor",
      "top": 658.9231575921417,
      "left": 1443.7680363286033,
      "width": 16.90874288429427,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -3.141592653589793,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "02032"
    },
    {
      "type": "conveyor",
      "top": 292.73207890834317,
      "left": 1051.4238079514755,
      "width": 87.33620943591768,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -1.5707963267948966,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "03008"
    },
    {
      "type": "conveyor",
      "top": 294.5577033298537,
      "left": 1167.3450225268102,
      "width": 67.23170633923928,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -1.5707963267948966,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "03028"
    },
    {
      "type": "conveyor",
      "top": 344.3570579705174,
      "left": 1187.168450761528,
      "width": 27.35563389388244,
      "height": 30,
      "strokeStyle": "rgb(255, 255, 255)",
      "lineWidth": 0,
      "lineStyle": "black",
      "value": 0,
      "rollWidth": 5,
      "rotation": -1.5707963267948966,
      "data": [
        {}
      ],
      "fillStyle": "",
      "mappings": [
        {
          "rule": "eval",
          "param": "var data = this.data||{};\nif(data.error_code && data.error_code !== '0000')\n    return 4;\nif(data.chute_full == 'Y')\n    return 3;\nif(data.equip_use_yn == 'Y')\n    return 1;\n\nreturn 0;\n",
          "target": "(self)",
          "property": "value"
        }
      ],
      "fontFamily": "NanumBarunGothic",
      "id": "03027"
    },
    {
      "type": "rect",
      "left": 845.5332022212142,
      "top": 300.37540147663816,
      "width": 76.19281874775265,
      "height": 68.57353687297734,
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 7,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-01-unload-line1",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-01-load-line1",
          "property": "data"
        }
      ],
      "id": "chute-01060"
    },
    {
      "type": "rect",
      "left": 848.9409678791117,
      "top": 320.4824652569595,
      "width": 70.37121372844172,
      "height": 20.641526753704454,
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
      "paddingRight": 5,
      "textWrap": true,
      "id": "chute-01-unload-line1"
    },
    {
      "type": "rect",
      "left": 848.9914193919658,
      "top": 344.7973221040273,
      "width": 70.09739324793236,
      "height": 20.572061061893237,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "textAlign": "right",
      "paddingRight": 5,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-01-load-line1"
    },
    {
      "type": "text",
      "left": 847.2210748932844,
      "top": 300.4242782611567,
      "width": 73.02179114201545,
      "height": 20.25806111461668,
      "text": "1-01",
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "rotation": 0,
      "fontColor": "rgb(97, 203, 244)"
    },
    {
      "type": "triangle",
      "x1": 859.2371848643006,
      "y1": 351.7955967216469,
      "x2": 853.6123254663828,
      "y2": 359.41487859642217,
      "x3": 865.0412482785457,
      "y3": 359.41487859642217,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "triangle",
      "x1": 859.4163888806281,
      "y1": 327.348140254629,
      "x2": 865.0412482785453,
      "y2": 334.9674221294043,
      "x3": 853.6123254663826,
      "y3": 334.96742212940427,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "rect",
      "left": 845.415713480819,
      "top": 540.6185196224983,
      "width": 76.19281874775265,
      "height": 68.57353687297734,
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 7,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-02-unload-line1",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-02-load-line1",
          "property": "data"
        }
      ],
      "id": "chute-01057"
    },
    {
      "type": "rect",
      "left": 848.8234791387163,
      "top": 560.7255834028197,
      "width": 70.37121372844194,
      "height": 20.64152675370451,
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
      "paddingRight": 5,
      "textWrap": true,
      "id": "chute-02-unload-line1"
    },
    {
      "type": "rect",
      "left": 848.8739306515706,
      "top": 585.0404402498874,
      "width": 70.09739324793236,
      "height": 20.572061061893237,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "textAlign": "right",
      "paddingRight": 5,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-02-load-line1"
    },
    {
      "type": "text",
      "left": 847.1035861528892,
      "top": 540.6673964070169,
      "width": 73.02179114201545,
      "height": 20.25806111461668,
      "text": "1-02",
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "rotation": 0,
      "fontColor": "rgb(97, 203, 244)"
    },
    {
      "type": "triangle",
      "x1": 859.1196961239052,
      "y1": 592.038714867507,
      "x2": 853.4948367259874,
      "y2": 599.6579967422822,
      "x3": 864.9237595381503,
      "y3": 599.6579967422822,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "triangle",
      "x1": 859.2989001402325,
      "y1": 567.5912584004891,
      "x2": 864.9237595381501,
      "y2": 575.2105402752644,
      "x3": 853.4948367259872,
      "y3": 575.2105402752643,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "rect",
      "left": 655.0352435190314,
      "top": 300.3894222598497,
      "width": 76.19281874775265,
      "height": 68.57353687297734,
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 7,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-03-unload-line1",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-03-load-line1",
          "property": "data"
        }
      ],
      "id": "chute-01064"
    },
    {
      "type": "rect",
      "left": 658.4430091769284,
      "top": 320.49648604017113,
      "width": 70.37121372844172,
      "height": 20.641526753704454,
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
      "paddingRight": 5,
      "textWrap": true,
      "id": "chute-03-unload-line1"
    },
    {
      "type": "rect",
      "left": 658.4934606897828,
      "top": 344.8113428872388,
      "width": 70.09739324793236,
      "height": 20.572061061893237,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "textAlign": "right",
      "paddingRight": 5,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-03-load-line1"
    },
    {
      "type": "text",
      "left": 656.7231161911013,
      "top": 300.43829904436825,
      "width": 73.02179114201545,
      "height": 20.25806111461668,
      "text": "1-03",
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "rotation": 0,
      "fontColor": "rgb(97, 203, 244)"
    },
    {
      "type": "triangle",
      "x1": 668.7392261621176,
      "y1": 351.80961750485835,
      "x2": 663.1143667641998,
      "y2": 359.4288993796336,
      "x3": 674.5432895763627,
      "y3": 359.4288993796336,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "triangle",
      "x1": 668.9184301784453,
      "y1": 327.36216103784056,
      "x2": 674.5432895763624,
      "y2": 334.9814429126159,
      "x3": 663.1143667641998,
      "y3": 334.9814429126158,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "rect",
      "left": 655.2122845273566,
      "top": 540.7342002332803,
      "width": 76.19281874775243,
      "height": 68.57353687297734,
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 7,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-04-unload-line1",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-04-load-line1",
          "property": "data"
        }
      ],
      "id": "chute-01062"
    },
    {
      "type": "rect",
      "left": 658.6200501852541,
      "top": 560.8412640136019,
      "width": 70.37121372844194,
      "height": 20.64152675370451,
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
      "paddingRight": 5,
      "textWrap": true,
      "id": "chute-04-unload-line1"
    },
    {
      "type": "rect",
      "left": 658.6705016981082,
      "top": 585.1561208606695,
      "width": 70.09739324793236,
      "height": 20.572061061893237,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "textAlign": "right",
      "paddingRight": 5,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-04-load-line1"
    },
    {
      "type": "text",
      "left": 656.900157199427,
      "top": 540.7830770177989,
      "width": 73.02179114201545,
      "height": 20.25806111461668,
      "text": "1-04",
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "rotation": 0,
      "fontColor": "rgb(97, 203, 244)"
    },
    {
      "type": "triangle",
      "x1": 668.916267170443,
      "y1": 592.154395478289,
      "x2": 663.2914077725252,
      "y2": 599.7736773530642,
      "x3": 674.7203305846881,
      "y3": 599.7736773530642,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "triangle",
      "x1": 669.0954711867703,
      "y1": 567.7069390112713,
      "x2": 674.7203305846879,
      "y2": 575.3262208860466,
      "x3": 663.291407772525,
      "y3": 575.3262208860465,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "rect",
      "left": 555.747546717918,
      "top": 300.5158619615769,
      "width": 76.19281874775243,
      "height": 68.57353687297734,
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 7,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-05-unload-line1",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-05-load-line1",
          "property": "data"
        }
      ],
      "id": "chute-01068"
    },
    {
      "type": "rect",
      "left": 559.1553123758155,
      "top": 320.62292574189837,
      "width": 70.37121372844194,
      "height": 20.641526753704454,
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
      "paddingRight": 5,
      "textWrap": true,
      "id": "chute-05-unload-line1"
    },
    {
      "type": "rect",
      "left": 559.2057638886696,
      "top": 344.937782588966,
      "width": 70.09739324793236,
      "height": 20.572061061893237,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "textAlign": "right",
      "paddingRight": 5,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-05-load-line1"
    },
    {
      "type": "text",
      "left": 557.4354193899884,
      "top": 300.56473874609543,
      "width": 73.02179114201545,
      "height": 20.25806111461668,
      "text": "1-05",
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "rotation": 0,
      "fontColor": "rgb(97, 203, 244)"
    },
    {
      "type": "triangle",
      "x1": 569.4515293610044,
      "y1": 351.9360572065855,
      "x2": 563.8266699630866,
      "y2": 359.5553390813607,
      "x3": 575.2555927752495,
      "y3": 359.5553390813607,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "triangle",
      "x1": 569.6307333773317,
      "y1": 327.48860073956774,
      "x2": 575.2555927752493,
      "y2": 335.10788261434305,
      "x3": 563.8266699630864,
      "y3": 335.107882614343,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "rect",
      "left": 555.7549980951958,
      "top": 540.7342002332803,
      "width": 76.19281874775243,
      "height": 68.57353687297734,
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 7,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-06-unload-line1",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-06-load-line1",
          "property": "data"
        }
      ],
      "id": "chute-01066"
    },
    {
      "type": "rect",
      "left": 559.1627637530933,
      "top": 560.8412640136019,
      "width": 70.37121372844194,
      "height": 20.64152675370451,
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
      "paddingRight": 5,
      "textWrap": true,
      "id": "chute-06-unload-line1"
    },
    {
      "type": "rect",
      "left": 559.2132152659474,
      "top": 585.1561208606695,
      "width": 70.09739324793236,
      "height": 20.572061061893237,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "textAlign": "right",
      "paddingRight": 5,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-06-load-line1"
    },
    {
      "type": "text",
      "left": 557.4428707672662,
      "top": 540.7830770177989,
      "width": 73.02179114201545,
      "height": 20.25806111461668,
      "text": "1-06",
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "rotation": 0,
      "fontColor": "rgb(97, 203, 244)"
    },
    {
      "type": "triangle",
      "x1": 569.4589807382822,
      "y1": 592.154395478289,
      "x2": 563.8341213403644,
      "y2": 599.7736773530642,
      "x3": 575.2630441525273,
      "y3": 599.7736773530642,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "triangle",
      "x1": 569.6381847546095,
      "y1": 567.7069390112713,
      "x2": 575.2630441525271,
      "y2": 575.3262208860466,
      "x3": 563.8341213403642,
      "y3": 575.3262208860465,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "rect",
      "left": 456.747546717918,
      "top": 300.5158619615769,
      "width": 76.19281874775243,
      "height": 68.57353687297734,
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 7,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-07-unload-line1",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-07-load-line1",
          "property": "data"
        }
      ],
      "id": "chute-01072"
    },
    {
      "type": "rect",
      "left": 460.15531237581547,
      "top": 320.62292574189837,
      "width": 70.37121372844194,
      "height": 20.641526753704454,
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
      "paddingRight": 5,
      "textWrap": true,
      "id": "chute-07-unload-line1"
    },
    {
      "type": "rect",
      "left": 460.2057638886696,
      "top": 344.937782588966,
      "width": 70.09739324793236,
      "height": 20.572061061893237,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "textAlign": "right",
      "paddingRight": 5,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-07-load-line1"
    },
    {
      "type": "text",
      "left": 458.4354193899884,
      "top": 300.56473874609543,
      "width": 73.02179114201545,
      "height": 20.25806111461668,
      "text": "1-07",
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "rotation": 0,
      "fontColor": "rgb(97, 203, 244)"
    },
    {
      "type": "triangle",
      "x1": 470.4515293610044,
      "y1": 351.9360572065855,
      "x2": 464.8266699630866,
      "y2": 359.5553390813607,
      "x3": 476.2555927752495,
      "y3": 359.5553390813607,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "triangle",
      "x1": 470.6307333773317,
      "y1": 327.48860073956774,
      "x2": 476.2555927752493,
      "y2": 335.10788261434305,
      "x3": 464.8266699630864,
      "y3": 335.107882614343,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "rect",
      "left": 456.9027132917952,
      "top": 540.7342002332803,
      "width": 76.19281874775243,
      "height": 68.57353687297734,
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 7,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-08-unload-line1",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-08-load-line1",
          "property": "data"
        }
      ],
      "id": "chute-01070"
    },
    {
      "type": "rect",
      "left": 460.31047894969265,
      "top": 560.8412640136019,
      "width": 70.37121372844194,
      "height": 20.64152675370451,
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
      "paddingRight": 5,
      "textWrap": true,
      "id": "chute-08-unload-line1"
    },
    {
      "type": "rect",
      "left": 460.3609304625468,
      "top": 585.1561208606695,
      "width": 70.09739324793236,
      "height": 20.572061061893237,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "textAlign": "right",
      "paddingRight": 5,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-08-load-line1"
    },
    {
      "type": "text",
      "left": 458.5905859638656,
      "top": 540.7830770177989,
      "width": 73.02179114201545,
      "height": 20.25806111461668,
      "text": "1-08",
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "rotation": 0,
      "fontColor": "rgb(97, 203, 244)"
    },
    {
      "type": "triangle",
      "x1": 470.6066959348816,
      "y1": 592.154395478289,
      "x2": 464.9818365369638,
      "y2": 599.7736773530642,
      "x3": 476.4107593491267,
      "y3": 599.7736773530642,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "triangle",
      "x1": 470.7858999512089,
      "y1": 567.7069390112713,
      "x2": 476.41075934912647,
      "y2": 575.3262208860466,
      "x3": 464.98183653696356,
      "y3": 575.3262208860465,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "rect",
      "left": 279.4171296286704,
      "top": 183.14010373400058,
      "width": 76.19281874775265,
      "height": 68.57353687297737,
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 7,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-09-unload-line1",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-09-load-line1",
          "property": "data"
        }
      ],
      "id": "chute-01076"
    },
    {
      "type": "rect",
      "left": 282.8248952865674,
      "top": 203.247167514322,
      "width": 70.37121372844172,
      "height": 20.641526753704483,
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
      "paddingRight": 5,
      "textWrap": true,
      "id": "chute-09-unload-line1"
    },
    {
      "type": "rect",
      "left": 282.8753467994218,
      "top": 227.56202436138972,
      "width": 70.09739324793236,
      "height": 20.572061061893237,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "textAlign": "right",
      "paddingRight": 5,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-09-load-line1"
    },
    {
      "type": "text",
      "left": 281.10500230074035,
      "top": 183.18898051851912,
      "width": 73.02179114201545,
      "height": 20.25806111461668,
      "text": "1-09",
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "rotation": 0,
      "fontColor": "rgb(97, 203, 244)",
      "data": [
        {}
      ]
    },
    {
      "type": "triangle",
      "x1": 293.1211122717566,
      "y1": 234.5602989790092,
      "x2": 287.4962528738388,
      "y2": 242.1795808537845,
      "x3": 298.9251756860017,
      "y3": 242.1795808537845,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "triangle",
      "x1": 293.30031628808433,
      "y1": 210.11284251199146,
      "x2": 298.92517568600147,
      "y2": 217.73212438676677,
      "x3": 287.4962528738388,
      "y3": 217.7321243867667,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "rect",
      "left": 180.12943282755703,
      "top": 183.26654343572775,
      "width": 76.19281874775243,
      "height": 68.57353687297731,
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 7,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-11-unload-line1",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-11-load-line1",
          "property": "data"
        }
      ],
      "id": "chute-01080"
    },
    {
      "type": "rect",
      "left": 183.5371984854545,
      "top": 203.37360721604924,
      "width": 70.37121372844194,
      "height": 20.641526753704483,
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
      "paddingRight": 5,
      "textWrap": true,
      "id": "chute-11-unload-line1"
    },
    {
      "type": "rect",
      "left": 183.58764999830862,
      "top": 227.68846406311684,
      "width": 70.09739324793236,
      "height": 20.572061061893237,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "textAlign": "right",
      "paddingRight": 5,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-11-load-line1"
    },
    {
      "type": "text",
      "left": 181.81730549962742,
      "top": 183.3154202202463,
      "width": 73.02179114201545,
      "height": 20.25806111461668,
      "text": "1-11",
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "rotation": 0,
      "fontColor": "rgb(97, 203, 244)",
      "data": [
        {}
      ]
    },
    {
      "type": "triangle",
      "x1": 193.83341547064344,
      "y1": 234.6867386807363,
      "x2": 188.20855607272563,
      "y2": 242.30602055551162,
      "x3": 199.63747888488854,
      "y3": 242.30602055551162,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "triangle",
      "x1": 194.01261948697072,
      "y1": 210.2392822137186,
      "x2": 199.6374788848883,
      "y2": 217.85856408849392,
      "x3": 188.2085560727254,
      "y3": 217.85856408849386,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "rect",
      "left": 81.12943282755703,
      "top": 183.26654343572775,
      "width": 76.19281874775243,
      "height": 68.57353687297731,
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 7,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-13-unload-line1",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-13-load-line1",
          "property": "data"
        }
      ],
      "id": "chute-01084"
    },
    {
      "type": "rect",
      "left": 84.5371984854545,
      "top": 203.37360721604924,
      "width": 70.37121372844194,
      "height": 20.641526753704483,
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
      "paddingRight": 5,
      "textWrap": true,
      "id": "chute-13-unload-line1"
    },
    {
      "type": "rect",
      "left": 84.58764999830862,
      "top": 227.68846406311684,
      "width": 70.09739324793236,
      "height": 20.572061061893237,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "textAlign": "right",
      "paddingRight": 5,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-13-load-line1"
    },
    {
      "type": "text",
      "left": 82.81730549962742,
      "top": 183.3154202202463,
      "width": 73.02179114201545,
      "height": 20.25806111461668,
      "text": "1-13",
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "rotation": 0,
      "fontColor": "rgb(97, 203, 244)",
      "data": [
        {}
      ]
    },
    {
      "type": "triangle",
      "x1": 94.83341547064344,
      "y1": 234.6867386807363,
      "x2": 89.20855607272563,
      "y2": 242.30602055551162,
      "x3": 100.63747888488854,
      "y3": 242.30602055551162,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "triangle",
      "x1": 95.01261948697072,
      "y1": 210.2392822137186,
      "x2": 100.63747888488831,
      "y2": 217.85856408849392,
      "x3": 89.2085560727254,
      "y3": 217.85856408849386,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "rect",
      "left": 279.03522717074804,
      "top": 428.15065908614804,
      "width": 76.19281874775243,
      "height": 68.57353687297734,
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 7,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-10-unload-line1",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-10-load-line1",
          "property": "data"
        }
      ],
      "id": "chute-01074"
    },
    {
      "type": "rect",
      "left": 282.4429928286455,
      "top": 448.25772286646963,
      "width": 70.37121372844194,
      "height": 20.64152675370451,
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
      "paddingRight": 5,
      "textWrap": true,
      "id": "chute-10-unload-line1"
    },
    {
      "type": "rect",
      "left": 282.49344434149964,
      "top": 472.57257971353727,
      "width": 70.09739324793236,
      "height": 20.572061061893237,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "textAlign": "right",
      "paddingRight": 5,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-10-load-line1"
    },
    {
      "type": "text",
      "left": 280.72309984281844,
      "top": 428.19953587066664,
      "width": 73.02179114201545,
      "height": 20.25806111461668,
      "text": "1-10",
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "rotation": 0,
      "fontColor": "rgb(97, 203, 244)",
      "data": [
        {}
      ]
    },
    {
      "type": "triangle",
      "x1": 292.73920981383446,
      "y1": 479.57085433115674,
      "x2": 287.11435041591665,
      "y2": 487.19013620593194,
      "x3": 298.54327322807956,
      "y3": 487.19013620593194,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "triangle",
      "x1": 292.91841383016174,
      "y1": 455.12339786413906,
      "x2": 298.54327322807933,
      "y2": 462.7426797389144,
      "x3": 287.1143504159164,
      "y3": 462.74267973891426,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "rect",
      "left": 179.57794073858724,
      "top": 428.15065908614804,
      "width": 76.19281874775243,
      "height": 68.57353687297734,
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 7,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-12-unload-line1",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-12-load-line1",
          "property": "data"
        }
      ],
      "id": "chute-01078"
    },
    {
      "type": "rect",
      "left": 182.98570639648472,
      "top": 448.25772286646963,
      "width": 70.37121372844194,
      "height": 20.64152675370451,
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
      "paddingRight": 5,
      "textWrap": true,
      "id": "chute-12-unload-line1"
    },
    {
      "type": "rect",
      "left": 183.03615790933884,
      "top": 472.57257971353727,
      "width": 70.09739324793236,
      "height": 20.572061061893237,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "textAlign": "right",
      "paddingRight": 5,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-12-load-line1"
    },
    {
      "type": "text",
      "left": 181.26581341065764,
      "top": 428.19953587066664,
      "width": 73.02179114201545,
      "height": 20.25806111461668,
      "text": "1-12",
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "rotation": 0,
      "fontColor": "rgb(97, 203, 244)",
      "data": [
        {}
      ]
    },
    {
      "type": "triangle",
      "x1": 193.28192338167366,
      "y1": 479.57085433115674,
      "x2": 187.65706398375585,
      "y2": 487.19013620593194,
      "x3": 199.08598679591876,
      "y3": 487.19013620593194,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "triangle",
      "x1": 193.46112739800094,
      "y1": 455.12339786413906,
      "x2": 199.08598679591853,
      "y2": 462.7426797389144,
      "x3": 187.65706398375562,
      "y3": 462.74267973891426,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "rect",
      "left": 80.72565593518664,
      "top": 428.15065908614804,
      "width": 76.19281874775243,
      "height": 68.57353687297734,
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 7,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-14-unload-line1",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-14-load-line1",
          "property": "data"
        }
      ],
      "id": "chute-01082"
    },
    {
      "type": "rect",
      "left": 84.13342159308411,
      "top": 448.25772286646963,
      "width": 70.37121372844194,
      "height": 20.64152675370451,
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
      "paddingRight": 5,
      "textWrap": true,
      "id": "chute-14-unload-line1"
    },
    {
      "type": "rect",
      "left": 84.18387310593823,
      "top": 472.57257971353727,
      "width": 70.09739324793236,
      "height": 20.572061061893237,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "textAlign": "right",
      "paddingRight": 5,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-14-load-line1"
    },
    {
      "type": "text",
      "left": 82.41352860725704,
      "top": 428.19953587066664,
      "width": 73.02179114201545,
      "height": 20.25806111461668,
      "text": "1-14",
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "rotation": 0,
      "fontColor": "rgb(97, 203, 244)",
      "data": [
        {}
      ]
    },
    {
      "type": "triangle",
      "x1": 94.42963857827306,
      "y1": 479.57085433115674,
      "x2": 88.80477918035524,
      "y2": 487.19013620593194,
      "x3": 100.23370199251815,
      "y3": 487.19013620593194,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "triangle",
      "x1": 94.60884259460033,
      "y1": 455.12339786413906,
      "x2": 100.23370199251792,
      "y2": 462.7426797389144,
      "x3": 88.80477918035501,
      "y3": 462.74267973891426,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "rect",
      "left": 20.95573478252787,
      "top": 265.2074636311614,
      "width": 76.19281874775243,
      "height": 68.57353687297734,
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 7,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-15-unload-line1",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-15-load-line1",
          "property": "data"
        }
      ],
      "id": "chute-01085"
    },
    {
      "type": "rect",
      "left": 24.36350044042534,
      "top": 285.31452741148297,
      "width": 70.37121372844194,
      "height": 20.64152675370451,
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
      "paddingRight": 5,
      "textWrap": true,
      "id": "chute-15-unload-line1"
    },
    {
      "type": "rect",
      "left": 24.413951953279465,
      "top": 309.6293842585506,
      "width": 70.09739324793236,
      "height": 20.572061061893237,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "textAlign": "right",
      "paddingRight": 5,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-15-load-line1"
    },
    {
      "type": "text",
      "left": 22.643607454598268,
      "top": 265.25634041568,
      "width": 73.02179114201545,
      "height": 20.25806111461668,
      "text": "1-15",
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "rotation": 0,
      "fontColor": "rgb(97, 203, 244)",
      "data": [
        {}
      ]
    },
    {
      "type": "triangle",
      "x1": 34.65971742561429,
      "y1": 316.6276588761701,
      "x2": 29.034858027696473,
      "y2": 324.24694075094527,
      "x3": 40.46378083985938,
      "y3": 324.24694075094527,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "triangle",
      "x1": 34.838921441941565,
      "y1": 292.1802024091524,
      "x2": 40.463780839859155,
      "y2": 299.7994842839277,
      "x3": 29.034858027696245,
      "y3": 299.7994842839276,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "rect",
      "left": 21.024803349867597,
      "top": 343.36995124720374,
      "width": 76.16397722256374,
      "height": 68.54757950030779,
      "fillStyle": "rgb(178, 88, 85)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 12,
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
      "type": "rect",
      "left": 24.071362438770137,
      "top": 363.3939587823312,
      "width": 70.07085904475912,
      "height": 20.56427385009232,
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
      "textBaseline": "middle",
      "textFormat": "#,##0",
      "paddingRight": 5,
      "textAlign": "right",
      "textWrap": true,
      "fontColor": "#303030",
      "id": "01-unload-miss-unload"
    },
    {
      "type": "text",
      "left": 22.712037105791495,
      "top": 345.7901309505991,
      "width": 72.99414995662369,
      "height": 16.33699221926622,
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
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 12,
      "rotation": 0,
      "fontColor": "rgb(253, 245, 209)"
    },
    {
      "type": "rect",
      "left": 24.071362438770137,
      "top": 387.83936125658573,
      "width": 70.07085904475912,
      "height": 20.564273850092377,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "textBaseline": "middle",
      "text": "#{data}",
      "textFormat": "#,##0",
      "paddingRight": 5,
      "textAlign": "right",
      "textWrap": true,
      "fontColor": "#303030",
      "id": "01-unload-miss-load"
    },
    {
      "type": "triangle",
      "x1": 34.93046419595791,
      "y1": 370.3676761371339,
      "x2": 40.55319439683714,
      "y2": 377.9840738593904,
      "x3": 29.128597813452615,
      "y3": 377.98407385939026,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "triangle",
      "x1": 34.7513280143323,
      "y1": 394.80587842583043,
      "x2": 29.128597813452615,
      "y2": 402.4222761480869,
      "x3": 40.55319439683714,
      "y3": 402.4222761480869,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "rect",
      "left": 1646.226444478066,
      "top": 280.17885952907807,
      "width": 76.19281874775243,
      "height": 68.5735368729774,
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 7,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-03-unload-line2",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-03-load-line2",
          "property": "data"
        }
      ],
      "id": "chute-02051"
    },
    {
      "type": "rect",
      "left": 1649.6342101359635,
      "top": 300.2859233093995,
      "width": 70.37121372844194,
      "height": 20.641526753704397,
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
      "paddingRight": 5,
      "textWrap": true,
      "id": "chute-03-unload-line2"
    },
    {
      "type": "rect",
      "left": 1649.6846616488176,
      "top": 324.6007801564672,
      "width": 70.09739324793236,
      "height": 20.572061061893237,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "textAlign": "right",
      "paddingRight": 5,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-03-load-line2"
    },
    {
      "type": "text",
      "left": 1647.9143171501364,
      "top": 280.22773631359655,
      "width": 73.02179114201545,
      "height": 20.258061114616623,
      "text": "2-03",
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "rotation": 0,
      "fontColor": "rgb(97, 203, 244)",
      "data": [
        {}
      ]
    },
    {
      "type": "triangle",
      "x1": 1659.9304271211524,
      "y1": 331.5990547740866,
      "x2": 1654.3055677232346,
      "y2": 339.2183366488619,
      "x3": 1665.7344905353975,
      "y3": 339.2183366488619,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "triangle",
      "x1": 1660.1096311374797,
      "y1": 307.1515983070688,
      "x2": 1665.7344905353973,
      "y2": 314.7708801818441,
      "x3": 1654.3055677232344,
      "y3": 314.770880181844,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "rect",
      "left": 1529.9127784879395,
      "top": 280.14296525474606,
      "width": 76.19281874775243,
      "height": 68.57353687297734,
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 7,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-01-unload-line2",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-01-load-line2",
          "property": "data"
        }
      ],
      "id": "chute-02049"
    },
    {
      "type": "rect",
      "left": 1533.320544145837,
      "top": 300.2500290350673,
      "width": 70.37121372844194,
      "height": 20.641526753704454,
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
      "paddingRight": 5,
      "textWrap": true,
      "id": "chute-01-unload-line2"
    },
    {
      "type": "rect",
      "left": 1533.370995658691,
      "top": 324.5648858821352,
      "width": 70.09739324793236,
      "height": 20.572061061893237,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "textAlign": "right",
      "paddingRight": 5,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-01-load-line2"
    },
    {
      "type": "text",
      "left": 1531.6006511600099,
      "top": 280.1918420392646,
      "width": 73.02179114201545,
      "height": 20.25806111461668,
      "text": "2-01",
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "rotation": 0,
      "fontColor": "rgb(97, 203, 244)",
      "data": [
        {}
      ]
    },
    {
      "type": "triangle",
      "x1": 1543.616761131026,
      "y1": 331.5631604997549,
      "x2": 1537.991901733108,
      "y2": 339.1824423745301,
      "x3": 1549.420824545271,
      "y3": 339.1824423745301,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "triangle",
      "x1": 1543.7959651473532,
      "y1": 307.1157040327369,
      "x2": 1549.4208245452708,
      "y2": 314.7349859075122,
      "x3": 1537.9919017331079,
      "y3": 314.73498590751217,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "rect",
      "left": 1825.0529022290743,
      "top": 357.7969665010113,
      "width": 76.19281874775243,
      "height": 68.57353687297723,
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 7,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-06-unload-line2",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-06-load-line2",
          "property": "data"
        }
      ],
      "id": "chute-02053"
    },
    {
      "type": "rect",
      "left": 1828.4606678869718,
      "top": 377.90403028133267,
      "width": 70.37121372844194,
      "height": 20.64152675370451,
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
      "paddingRight": 5,
      "textWrap": true,
      "id": "chute-06-unload-line2"
    },
    {
      "type": "rect",
      "left": 1828.511119399826,
      "top": 402.2188871284003,
      "width": 70.09739324793236,
      "height": 20.572061061893237,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "textAlign": "right",
      "paddingRight": 5,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-06-load-line2"
    },
    {
      "type": "text",
      "left": 1826.7407749011447,
      "top": 357.8458432855298,
      "width": 73.02179114201545,
      "height": 20.25806111461668,
      "text": "2-06",
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "rotation": 0,
      "fontColor": "rgb(97, 203, 244)",
      "data": [
        {}
      ]
    },
    {
      "type": "triangle",
      "x1": 1838.7568848721608,
      "y1": 409.2171617460199,
      "x2": 1833.132025474243,
      "y2": 416.8364436207952,
      "x3": 1844.5609482864058,
      "y3": 416.8364436207952,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "triangle",
      "x1": 1838.936088888488,
      "y1": 384.7697052790021,
      "x2": 1844.5609482864056,
      "y2": 392.3889871537774,
      "x3": 1833.1320254742427,
      "y3": 392.3889871537773,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "rect",
      "left": 1825.2776584359653,
      "top": 572.2384661903116,
      "width": 76.19281874775243,
      "height": 68.57353687297734,
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 7,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-08-unload-line2",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-08-load-line2",
          "property": "data"
        }
      ],
      "id": "chute-02055"
    },
    {
      "type": "rect",
      "left": 1828.6854240938628,
      "top": 592.3455299706329,
      "width": 70.37121372844194,
      "height": 20.64152675370451,
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
      "paddingRight": 5,
      "textWrap": true,
      "id": "chute-08-unload-line2"
    },
    {
      "type": "rect",
      "left": 1828.735875606717,
      "top": 616.6603868177006,
      "width": 70.09739324793236,
      "height": 20.572061061893123,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "textAlign": "right",
      "paddingRight": 5,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-08-load-line2"
    },
    {
      "type": "text",
      "left": 1826.9655311080357,
      "top": 572.2873429748299,
      "width": 73.02179114201545,
      "height": 20.25806111461668,
      "text": "2-08",
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "rotation": 0,
      "fontColor": "rgb(97, 203, 244)",
      "data": [
        {}
      ]
    },
    {
      "type": "triangle",
      "x1": 1838.9816410790518,
      "y1": 623.6586614353203,
      "x2": 1833.356781681134,
      "y2": 631.2779433100955,
      "x3": 1844.7857044932969,
      "y3": 631.2779433100955,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "triangle",
      "x1": 1839.160845095379,
      "y1": 599.2112049683024,
      "x2": 1844.7857044932966,
      "y2": 606.8304868430777,
      "x3": 1833.3567816811337,
      "y3": 606.8304868430776,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "rect",
      "left": 1592.3827688685715,
      "top": 524.552693890291,
      "width": 76.19281874775243,
      "height": 68.57353687297734,
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 7,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-09-unload-line2",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-09-load-line2",
          "property": "data"
        }
      ],
      "id": "chute-02061"
    },
    {
      "type": "rect",
      "left": 1595.790534526469,
      "top": 544.6597576706124,
      "width": 70.37121372844194,
      "height": 20.64152675370451,
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
      "paddingRight": 5,
      "textWrap": true,
      "id": "chute-09-unload-line2"
    },
    {
      "type": "rect",
      "left": 1595.840986039323,
      "top": 568.97461451768,
      "width": 70.09739324793236,
      "height": 20.572061061893123,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "textAlign": "right",
      "paddingRight": 5,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-09-load-line2"
    },
    {
      "type": "text",
      "left": 1594.0706415406419,
      "top": 524.6015706748094,
      "width": 73.02179114201545,
      "height": 20.25806111461668,
      "text": "2-09",
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "rotation": 0,
      "fontColor": "rgb(97, 203, 244)",
      "data": [
        {}
      ]
    },
    {
      "type": "triangle",
      "x1": 1606.086751511658,
      "y1": 575.9728891352997,
      "x2": 1600.46189211374,
      "y2": 583.5921710100749,
      "x3": 1611.890814925903,
      "y3": 583.5921710100749,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "triangle",
      "x1": 1606.2659555279852,
      "y1": 551.5254326682818,
      "x2": 1611.8908149259028,
      "y2": 559.1447145430571,
      "x3": 1600.4618921137399,
      "y3": 559.144714543057,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "rect",
      "left": 1592.8742081132527,
      "top": 754.612717538842,
      "width": 76.19281874775243,
      "height": 68.57353687297723,
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 7,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-10-unload-line2",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-10-load-line2",
          "property": "data"
        }
      ],
      "id": "chute-02058"
    },
    {
      "type": "rect",
      "left": 1596.2819737711502,
      "top": 774.7197813191634,
      "width": 70.37121372844194,
      "height": 20.64152675370451,
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
      "paddingRight": 5,
      "textWrap": true,
      "id": "chute-10-unload-line2"
    },
    {
      "type": "rect",
      "left": 1596.3324252840043,
      "top": 799.034638166231,
      "width": 70.09739324793236,
      "height": 20.572061061893237,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "textAlign": "right",
      "paddingRight": 5,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-10-load-line2"
    },
    {
      "type": "text",
      "left": 1594.5620807853231,
      "top": 754.6615943233605,
      "width": 73.02179114201545,
      "height": 20.25806111461668,
      "text": "2-10",
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "rotation": 0,
      "fontColor": "rgb(97, 203, 244)",
      "data": [
        {}
      ]
    },
    {
      "type": "triangle",
      "x1": 1606.5781907563392,
      "y1": 806.0329127838506,
      "x2": 1600.9533313584213,
      "y2": 813.652194658626,
      "x3": 1612.3822541705842,
      "y3": 813.652194658626,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "triangle",
      "x1": 1606.7573947726664,
      "y1": 781.5854563168327,
      "x2": 1612.382254170584,
      "y2": 789.204738191608,
      "x3": 1600.953331358421,
      "y3": 789.2047381916079,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "rect",
      "left": 1416.3827688685715,
      "top": 524.552693890291,
      "width": 76.19281874775243,
      "height": 68.57353687297734,
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 7,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-11-unload-line2",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-11-load-line2",
          "property": "data"
        }
      ],
      "id": "chute-02065"
    },
    {
      "type": "rect",
      "left": 1419.790534526469,
      "top": 544.6597576706124,
      "width": 70.37121372844194,
      "height": 20.64152675370451,
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
      "paddingRight": 5,
      "textWrap": true,
      "id": "chute-11-unload-line2"
    },
    {
      "type": "rect",
      "left": 1419.840986039323,
      "top": 568.97461451768,
      "width": 70.09739324793236,
      "height": 20.572061061893123,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "textAlign": "right",
      "paddingRight": 5,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-11-load-line2"
    },
    {
      "type": "text",
      "left": 1418.0706415406419,
      "top": 524.6015706748094,
      "width": 73.02179114201545,
      "height": 20.25806111461668,
      "text": "2-11",
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "rotation": 0,
      "fontColor": "rgb(97, 203, 244)",
      "data": [
        {}
      ]
    },
    {
      "type": "triangle",
      "x1": 1430.086751511658,
      "y1": 575.9728891352997,
      "x2": 1424.46189211374,
      "y2": 583.5921710100749,
      "x3": 1435.890814925903,
      "y3": 583.5921710100749,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "triangle",
      "x1": 1430.2659555279852,
      "y1": 551.5254326682818,
      "x2": 1435.8908149259028,
      "y2": 559.1447145430571,
      "x3": 1424.4618921137399,
      "y3": 559.144714543057,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "rect",
      "left": 1416.8742081132527,
      "top": 754.612717538842,
      "width": 76.19281874775243,
      "height": 68.57353687297723,
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 7,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-12-unload-line2",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-12-load-line2",
          "property": "data"
        }
      ],
      "id": "chute-02063"
    },
    {
      "type": "rect",
      "left": 1420.2819737711502,
      "top": 774.7197813191634,
      "width": 70.37121372844194,
      "height": 20.64152675370451,
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
      "paddingRight": 5,
      "textWrap": true,
      "id": "chute-12-unload-line2"
    },
    {
      "type": "rect",
      "left": 1420.3324252840043,
      "top": 799.034638166231,
      "width": 70.09739324793236,
      "height": 20.572061061893237,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "textAlign": "right",
      "paddingRight": 5,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-12-load-line2"
    },
    {
      "type": "text",
      "left": 1418.5620807853231,
      "top": 754.6615943233605,
      "width": 73.02179114201545,
      "height": 20.25806111461668,
      "text": "2-12",
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "rotation": 0,
      "fontColor": "rgb(97, 203, 244)",
      "data": [
        {}
      ]
    },
    {
      "type": "triangle",
      "x1": 1430.5781907563392,
      "y1": 806.0329127838506,
      "x2": 1424.9533313584213,
      "y2": 813.652194658626,
      "x3": 1436.3822541705842,
      "y3": 813.652194658626,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "triangle",
      "x1": 1430.7573947726664,
      "y1": 781.5854563168327,
      "x2": 1436.382254170584,
      "y2": 789.204738191608,
      "x3": 1424.953331358421,
      "y3": 789.2047381916079,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "rect",
      "left": 1337.1041236038423,
      "top": 679.7103710968128,
      "width": 76.16397722256374,
      "height": 68.54757950030773,
      "fillStyle": "rgb(178, 88, 85)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 12,
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
      "type": "rect",
      "left": 1340.1506826927443,
      "top": 699.7343786319402,
      "width": 70.07085904475912,
      "height": 20.564273850092263,
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
      "textBaseline": "middle",
      "textFormat": "#,##0",
      "paddingRight": 5,
      "textAlign": "right",
      "textWrap": true,
      "fontColor": "#303030",
      "id": "02-unload-miss-unload"
    },
    {
      "type": "text",
      "left": 1338.7913573597657,
      "top": 682.1305508002082,
      "width": 72.99414995662369,
      "height": 16.336992219266335,
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
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 12,
      "rotation": 0,
      "fontColor": "rgb(253, 245, 209)"
    },
    {
      "type": "rect",
      "left": 1340.1506826927443,
      "top": 724.1797811061947,
      "width": 70.07085904475912,
      "height": 20.564273850092377,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "textBaseline": "middle",
      "text": "#{data}",
      "textFormat": "#,##0",
      "paddingRight": 5,
      "textAlign": "right",
      "textWrap": true,
      "fontColor": "#303030",
      "id": "02-unload-miss-load"
    },
    {
      "type": "triangle",
      "x1": 1351.0097844499326,
      "y1": 706.708095986743,
      "x2": 1356.6325146508118,
      "y2": 714.3244937089995,
      "x3": 1345.2079180674273,
      "y3": 714.3244937089994,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "triangle",
      "x1": 1350.830648268307,
      "y1": 731.1462982754393,
      "x2": 1345.2079180674273,
      "y2": 738.7626959976958,
      "x3": 1356.6325146508118,
      "y3": 738.7626959976958,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "rect",
      "left": 1336.90630053944,
      "top": 600.7115622114993,
      "width": 76.19281874775243,
      "height": 68.57353687297723,
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 8.332136809597337,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 7,
      "mappings": [
        {
          "rule": "value",
          "accessor": "unload_count",
          "target": "#chute-13-unload-line2",
          "property": "data"
        },
        {
          "rule": "value",
          "accessor": "load_count",
          "target": "#chute-13-load-line2",
          "property": "data"
        }
      ],
      "id": "chute-02066"
    },
    {
      "type": "rect",
      "left": 1340.3140661973375,
      "top": 620.8186259918207,
      "width": 70.37121372844194,
      "height": 20.64152675370451,
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
      "paddingRight": 5,
      "textWrap": true,
      "id": "chute-13-unload-line2"
    },
    {
      "type": "rect",
      "left": 1340.3645177101916,
      "top": 645.1334828388883,
      "width": 70.09739324793236,
      "height": 20.572061061893237,
      "fillStyle": "#fcfcfc",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "round": 11.878751288743588,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "textAlign": "right",
      "paddingRight": 5,
      "textFormat": "#,##0",
      "text": "#{data}",
      "fontColor": "#303030",
      "textWrap": true,
      "id": "chute-13-load-line2"
    },
    {
      "type": "text",
      "left": 1338.5941732115105,
      "top": 600.7604389960177,
      "width": 73.02179114201545,
      "height": 20.25806111461668,
      "text": "2-13",
      "fillStyle": "rgb(104, 111, 133)",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 5,
      "lineDash": "solid",
      "lineCap": "butt",
      "textAlign": "center",
      "textBaseline": "middle",
      "textWrap": true,
      "fontFamily": "Yantramanav-Regular",
      "fontSize": 16,
      "rotation": 0,
      "fontColor": "rgb(97, 203, 244)",
      "data": [
        {}
      ]
    },
    {
      "type": "triangle",
      "x1": 1350.6102831825265,
      "y1": 652.1317574565078,
      "x2": 1344.9854237846087,
      "y2": 659.7510393312831,
      "x3": 1356.4143465967716,
      "y3": 659.7510393312831,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 0,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "triangle",
      "x1": 1350.7894871988537,
      "y1": 627.6843009894899,
      "x2": 1356.4143465967713,
      "y2": 635.3035828642652,
      "x3": 1344.9854237846084,
      "y3": 635.3035828642651,
      "fillStyle": "#6599cd",
      "strokeStyle": "#000",
      "alpha": 1,
      "hidden": false,
      "lineWidth": 0,
      "lineDash": "solid",
      "lineCap": "butt",
      "rotation": 3.141592653589793,
      "fontSize": 9,
      "fontFamily": "Yantramanav-Regular"
    },
    {
      "type": "text",
      "left": 135.99431109606803,
      "top": 628.254671272523,
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
          "x": 251.77960624131015,
          "y": 649.8667905373829
        },
        {
          "x": 255.3569104410792,
          "y": 670.2222701886807
        },
        {
          "x": 106.07884766496136,
          "y": 669.8487129644667
        },
        {
          "x": 75.7418576441712,
          "y": 701.2275693103232
        },
        {
          "x": 304.663105448172,
          "y": 701.2275693103232
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
      "rotation": 6.283185307179586,
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
          "x": 128.62535685103308,
          "y": 649.5190904287266
        },
        {
          "x": 125.04805265126424,
          "y": 669.8745700800248
        },
        {
          "x": 274.3261154273821,
          "y": 669.5010128558099
        },
        {
          "x": 304.663105448172,
          "y": 700.8798692016669
        },
        {
          "x": 75.7418576441712,
          "y": 700.8798692016669
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
      "rotation": 6.283185307179586,
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
      "left": 134.17926993890205,
      "top": 672.7055842275419,
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
      "left": 207.11778467818863,
      "top": 680.5272394871358,
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
    },
    {
      "type": "text",
      "left": 1077.8311491802287,
      "top": 448.034956873169,
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
      "type": "text",
      "left": 1485.8189775480232,
      "top": 392.7391126214503,
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
          "x": 1480.7309820246928,
          "y": 411.68281936941537
        },
        {
          "x": 1477.1536778249238,
          "y": 432.03829902071345
        },
        {
          "x": 1626.4317406010416,
          "y": 431.66474179649924
        },
        {
          "x": 1656.768730621832,
          "y": 463.0435981423558
        },
        {
          "x": 1427.847482817831,
          "y": 463.0435981423558
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
      "rotation": 6.283185307179586,
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
          "x": 1603.88523141497,
          "y": 411.68281936941537
        },
        {
          "x": 1607.4625356147387,
          "y": 432.03829902071345
        },
        {
          "x": 1458.1844728386209,
          "y": 431.66474179649924
        },
        {
          "x": 1427.847482817831,
          "y": 463.0435981423558
        },
        {
          "x": 1656.768730621832,
          "y": 463.0435981423558
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
      "rotation": 6.283185307179586,
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
      "left": 1486.2848951125618,
      "top": 434.86931316823063,
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
      "left": 1559.2234098518486,
      "top": 442.9962148507182,
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
    },
    {
      "type": "table",
      "top": 895.8899881422241,
      "left": 1449.5136970207723,
      "width": 397.367061209344,
      "height": 150.02052012094725,
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
        1.09,
        1.09,
        1.09
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
          "width": 132.45568706978133,
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
          "left": 132.45568706978133,
          "top": 0,
          "width": 132.45568706978133,
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
          "left": 264.91137413956267,
          "top": 0,
          "width": 132.45568706978133,
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
          "width": 132.45568706978133,
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
          "left": 132.45568706978133,
          "top": 37.505130030236785,
          "width": 132.45568706978133,
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
          "left": 264.91137413956267,
          "top": 37.505130030236785,
          "width": 132.45568706978133,
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
          "width": 132.45568706978133,
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
          "left": 132.45568706978133,
          "top": 75.01026006047357,
          "width": 132.45568706978133,
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
          "left": 264.91137413956267,
          "top": 75.01026006047357,
          "width": 132.45568706978133,
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
          "width": 132.45568706978133,
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
          "left": 132.45568706978133,
          "top": 112.51539009071035,
          "width": 132.45568706978133,
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
          "left": 264.91137413956267,
          "top": 112.51539009071035,
          "width": 132.45568706978133,
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
      "type": "ellipse",
      "rx": 5,
      "ry": 5,
      "cx": 1651.311468099653,
      "cy": 914.6369912205936,
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
      "cx": 1651.311468099653,
      "cy": 952.4995442731564,
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
      "cx": 1651.311468099653,
      "cy": 990.3620973257192,
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
      "cx": 1651.311468099653,
      "cy": 1028.2246503782821,
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
      "cx": 1783.7566955179745,
      "cy": 914.6369912205936,
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
      "id": "line02_camera_ready",
      "textAlign": "center",
      "textBaseline": "middle"
    },
    {
      "type": "ellipse",
      "rx": 5,
      "ry": 5,
      "cx": 1783.7566955179745,
      "cy": 952.4995442731564,
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
      "id": "line02_camera_left",
      "textAlign": "center",
      "textBaseline": "middle"
    },
    {
      "type": "ellipse",
      "rx": 5,
      "ry": 5,
      "cx": 1783.7566955179745,
      "cy": 1028.2246503782821,
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
      "cx": 1783.7566955179745,
      "cy": 990.3620973257192,
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
      "id": "line02_camera_top",
      "textAlign": "center",
      "textBaseline": "middle"
    },
    {
      "type": "rect",
      "left": 1445.8147584681758,
      "top": 844.3225264081775,
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
      "left": 1468.1433303218394,
      "top": 827.7603822643243,
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
      "fontSize": 20,
      "rotation": 0,
      "fontColor": "rgb(72, 82, 88)",
      "bold": true
    },
    {
      "type": "rect",
      "left": 1447.4867277475314,
      "top": 866.4603939725752,
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
      "data": [
        {}
      ],
      "fontFamily": "NanumBarunGothic"
    },
    {
      "type": "text",
      "left": 1635.121831253622,
      "top": 871.833889223737,
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
      "left": 1498.569929150262,
      "top": 871.951557621467,
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
      "fontColor": "#fff"
    },
    {
      "type": "text",
      "left": 1763.5510180193974,
      "top": 871.833889223737,
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
      "fontFamily": "NanumBarunGothic",
      "fontSize": 13,
      "rotation": 0,
      "fontColor": "#fff",
      "data": [
        {}
      ]
    }
  ]
}
