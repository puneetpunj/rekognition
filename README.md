# rekognition

Experiment to use AWS Rekognition service to get features of an images

sample response

```json
{
  "FaceDetails": [
    {
      "BoundingBox": {
        "Width": 0.1364622414112091,
        "Height": 0.21034817397594452,
        "Left": 0.22666200995445251,
        "Top": 0.2459493726491928
      },
      "AgeRange": {
        "Low": 0,
        "High": 3
      },
      "Smile": {
        "Value": false,
        "Confidence": 99.76602172851562
      },
      "Eyeglasses": {
        "Value": false,
        "Confidence": 97.43115997314453
      },
      "Sunglasses": {
        "Value": false,
        "Confidence": 99.23480987548828
      },
      "Gender": {
        "Value": "Female",
        "Confidence": 86.6338882446289
      },
      "Beard": {
        "Value": false,
        "Confidence": 94.18325805664062
      },
      "Mustache": {
        "Value": false,
        "Confidence": 98.47380065917969
      },
      "EyesOpen": {
        "Value": true,
        "Confidence": 77.19986724853516
      },
      "MouthOpen": {
        "Value": false,
        "Confidence": 93.54881286621094
      },
      "Emotions": [
        {
          "Type": "HAPPY",
          "Confidence": 0.06028348580002785
        },
        {
          "Type": "CALM",
          "Confidence": 71.8030776977539
        },
        {
          "Type": "DISGUSTED",
          "Confidence": 0.23122702538967133
        },
        {
          "Type": "CONFUSED",
          "Confidence": 1.822581171989441
        },
        {
          "Type": "FEAR",
          "Confidence": 0.15855108201503754
        },
        {
          "Type": "ANGRY",
          "Confidence": 0.2786957919597626
        },
        {
          "Type": "SURPRISED",
          "Confidence": 2.089421272277832
        },
        {
          "Type": "SAD",
          "Confidence": 23.556163787841797
        }
      ],
      "Landmarks": [
        {
          "Type": "eyeLeft",
          "X": 0.2566729485988617,
          "Y": 0.3375113308429718
        },
        {
          "Type": "eyeRight",
          "X": 0.3155208230018616,
          "Y": 0.33513665199279785
        },
        {
          "Type": "mouthLeft",
          "X": 0.26255571842193604,
          "Y": 0.41950708627700806
        },
        {
          "Type": "mouthRight",
          "X": 0.3112450838088989,
          "Y": 0.41750621795654297
        },
        {
          "Type": "nose",
          "X": 0.27972790598869324,
          "Y": 0.3754637539386749
        },
        {
          "Type": "leftEyeBrowLeft",
          "X": 0.23665523529052734,
          "Y": 0.31991466879844666
        },
        {
          "Type": "leftEyeBrowRight",
          "X": 0.26583483815193176,
          "Y": 0.31080055236816406
        },
        {
          "Type": "leftEyeBrowUp",
          "X": 0.25038859248161316,
          "Y": 0.3076377809047699
        },
        {
          "Type": "rightEyeBrowLeft",
          "X": 0.3004051446914673,
          "Y": 0.30914074182510376
        },
        {
          "Type": "rightEyeBrowRight",
          "X": 0.34104788303375244,
          "Y": 0.3166687488555908
        },
        {
          "Type": "rightEyeBrowUp",
          "X": 0.3193035125732422,
          "Y": 0.30508705973625183
        },
        {
          "Type": "leftEyeLeft",
          "X": 0.2482658326625824,
          "Y": 0.3371109366416931
        },
        {
          "Type": "leftEyeRight",
          "X": 0.2688296139240265,
          "Y": 0.3368587791919708
        },
        {
          "Type": "leftEyeUp",
          "X": 0.2568807601928711,
          "Y": 0.3324374854564667
        },
        {
          "Type": "leftEyeDown",
          "X": 0.2576390206813812,
          "Y": 0.3399869203567505
        },
        {
          "Type": "rightEyeLeft",
          "X": 0.30365484952926636,
          "Y": 0.3354582190513611
        },
        {
          "Type": "rightEyeRight",
          "X": 0.3261668086051941,
          "Y": 0.3341824412345886
        },
        {
          "Type": "rightEyeUp",
          "X": 0.3146546185016632,
          "Y": 0.330234557390213
        },
        {
          "Type": "rightEyeDown",
          "X": 0.3145793080329895,
          "Y": 0.33788320422172546
        },
        {
          "Type": "noseLeft",
          "X": 0.2725619971752167,
          "Y": 0.38810333609580994
        },
        {
          "Type": "noseRight",
          "X": 0.29520973563194275,
          "Y": 0.38657987117767334
        },
        {
          "Type": "mouthUp",
          "X": 0.28365135192871094,
          "Y": 0.4062964916229248
        },
        {
          "Type": "mouthDown",
          "X": 0.2851318120956421,
          "Y": 0.431404173374176
        },
        {
          "Type": "leftPupil",
          "X": 0.2566729485988617,
          "Y": 0.3375113308429718
        },
        {
          "Type": "rightPupil",
          "X": 0.3155208230018616,
          "Y": 0.33513665199279785
        },
        {
          "Type": "upperJawlineLeft",
          "X": 0.2340719848871231,
          "Y": 0.34646934270858765
        },
        {
          "Type": "midJawlineLeft",
          "X": 0.2460276484489441,
          "Y": 0.43418440222740173
        },
        {
          "Type": "chinBottom",
          "X": 0.2891808748245239,
          "Y": 0.47636356949806213
        },
        {
          "Type": "midJawlineRight",
          "X": 0.3513231873512268,
          "Y": 0.43046504259109497
        },
        {
          "Type": "upperJawlineRight",
          "X": 0.3652054965496063,
          "Y": 0.3417198061943054
        }
      ],
      "Pose": {
        "Roll": -3.844341278076172,
        "Yaw": -11.256307601928711,
        "Pitch": 3.1675992012023926
      },
      "Quality": {
        "Brightness": 97.62100219726562,
        "Sharpness": 89.85481262207031
      },
      "Confidence": 100
    },
    {
      "BoundingBox": {
        "Width": 0.12220759689807892,
        "Height": 0.21977388858795166,
        "Left": 0.6712421178817749,
        "Top": 0.2655746638774872
      },
      "AgeRange": {
        "Low": 0,
        "High": 4
      },
      "Smile": {
        "Value": false,
        "Confidence": 99.57994842529297
      },
      "Eyeglasses": {
        "Value": false,
        "Confidence": 99.0808334350586
      },
      "Sunglasses": {
        "Value": false,
        "Confidence": 99.60472106933594
      },
      "Gender": {
        "Value": "Female",
        "Confidence": 93.78821563720703
      },
      "Beard": {
        "Value": false,
        "Confidence": 97.86090087890625
      },
      "Mustache": {
        "Value": false,
        "Confidence": 99.60750579833984
      },
      "EyesOpen": {
        "Value": true,
        "Confidence": 78.09880828857422
      },
      "MouthOpen": {
        "Value": false,
        "Confidence": 94.30077362060547
      },
      "Emotions": [
        {
          "Type": "FEAR",
          "Confidence": 0.0008673917618580163
        },
        {
          "Type": "ANGRY",
          "Confidence": 0.0017236624844372272
        },
        {
          "Type": "DISGUSTED",
          "Confidence": 0.005030010361224413
        },
        {
          "Type": "HAPPY",
          "Confidence": 0.052378006279468536
        },
        {
          "Type": "SAD",
          "Confidence": 0.037772491574287415
        },
        {
          "Type": "CALM",
          "Confidence": 99.83794403076172
        },
        {
          "Type": "SURPRISED",
          "Confidence": 0.04998873174190521
        },
        {
          "Type": "CONFUSED",
          "Confidence": 0.014290871098637581
        }
      ],
      "Landmarks": [
        {
          "Type": "eyeLeft",
          "X": 0.7101019024848938,
          "Y": 0.3642258048057556
        },
        {
          "Type": "eyeRight",
          "X": 0.7644888162612915,
          "Y": 0.36793190240859985
        },
        {
          "Type": "mouthLeft",
          "X": 0.7112892866134644,
          "Y": 0.4403105676174164
        },
        {
          "Type": "mouthRight",
          "X": 0.7561361193656921,
          "Y": 0.4433284401893616
        },
        {
          "Type": "nose",
          "X": 0.733651340007782,
          "Y": 0.3979828357696533
        },
        {
          "Type": "leftEyeBrowLeft",
          "X": 0.6906530261039734,
          "Y": 0.3470908999443054
        },
        {
          "Type": "leftEyeBrowRight",
          "X": 0.7216008305549622,
          "Y": 0.33909109234809875
        },
        {
          "Type": "leftEyeBrowUp",
          "X": 0.7062815427780151,
          "Y": 0.3353513181209564
        },
        {
          "Type": "rightEyeBrowLeft",
          "X": 0.7536271214485168,
          "Y": 0.34119805693626404
        },
        {
          "Type": "rightEyeBrowRight",
          "X": 0.7874771952629089,
          "Y": 0.3546239137649536
        },
        {
          "Type": "rightEyeBrowUp",
          "X": 0.7704532146453857,
          "Y": 0.34003350138664246
        },
        {
          "Type": "leftEyeLeft",
          "X": 0.7012820839881897,
          "Y": 0.36353763937950134
        },
        {
          "Type": "leftEyeRight",
          "X": 0.7209030389785767,
          "Y": 0.36480650305747986
        },
        {
          "Type": "leftEyeUp",
          "X": 0.7103755474090576,
          "Y": 0.3594121038913727
        },
        {
          "Type": "leftEyeDown",
          "X": 0.7105309963226318,
          "Y": 0.3665618598461151
        },
        {
          "Type": "rightEyeLeft",
          "X": 0.7531512379646301,
          "Y": 0.36699092388153076
        },
        {
          "Type": "rightEyeRight",
          "X": 0.773367166519165,
          "Y": 0.36848506331443787
        },
        {
          "Type": "rightEyeUp",
          "X": 0.7638372778892517,
          "Y": 0.3630736172199249
        },
        {
          "Type": "rightEyeDown",
          "X": 0.7632022500038147,
          "Y": 0.3701905310153961
        },
        {
          "Type": "noseLeft",
          "X": 0.7238919138908386,
          "Y": 0.41082140803337097
        },
        {
          "Type": "noseRight",
          "X": 0.7443138957023621,
          "Y": 0.4120216965675354
        },
        {
          "Type": "mouthUp",
          "X": 0.7332016825675964,
          "Y": 0.42859771847724915
        },
        {
          "Type": "mouthDown",
          "X": 0.732509195804596,
          "Y": 0.4523826241493225
        },
        {
          "Type": "leftPupil",
          "X": 0.7101019024848938,
          "Y": 0.3642258048057556
        },
        {
          "Type": "rightPupil",
          "X": 0.7644888162612915,
          "Y": 0.36793190240859985
        },
        {
          "Type": "upperJawlineLeft",
          "X": 0.679689347743988,
          "Y": 0.37667718529701233
        },
        {
          "Type": "midJawlineLeft",
          "X": 0.6874892115592957,
          "Y": 0.4578203856945038
        },
        {
          "Type": "chinBottom",
          "X": 0.731678307056427,
          "Y": 0.49595266580581665
        },
        {
          "Type": "midJawlineRight",
          "X": 0.7850416302680969,
          "Y": 0.46460092067718506
        },
        {
          "Type": "upperJawlineRight",
          "X": 0.8012038469314575,
          "Y": 0.38507500290870667
        }
      ],
      "Pose": {
        "Roll": 1.7127342224121094,
        "Yaw": -0.21491368114948273,
        "Pitch": 21.842519760131836
      },
      "Quality": {
        "Brightness": 97.38494110107422,
        "Sharpness": 95.51618957519531
      },
      "Confidence": 100
    }
  ]
}
```
