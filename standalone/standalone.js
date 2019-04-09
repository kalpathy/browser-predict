

// async function loadMobileNetModel() {
//   const startTime = performance.now();
//   //let downloadStatus = setInterval(display_size_data, 100);
//   const MODEL_PATH = 'https://mlmed.github.io/tools/xray/models/chestxnet2';
//   let mobilenet = await tf.loadFrozenModel(MODEL_PATH + "/tensorflowjs_model.pb", MODEL_PATH + "/weights_manifest.json");
//   console.log("First Model loaded " + Math.floor(performance.now() - startTime) + "ms");
//
//   return mobilenet;
// }

const preprocess = require("./preprocess.js")

const LABELS = ['Atelectasis', 'Cardiomegaly', 'Effusion', 'Infiltration', 'Mass', 'Nodule', 'Pneumonia',
  'Pneumothorax', 'Consolidation', 'Edema', 'Emphysema', 'Fibrosis', 'Pleural_Thickening', 'Hernia'
];

const OP_POINT = [0.45879191, 0.20330566, 0.34361544, 0.30163303, 0.50299263,
  0.36888129, 0.29530331, 0.6088959, 0.46361208, 0.17098247,
  0.31575406, 0.51793754, 0.49182123, 0.59332716
];

const IMAGE_SIZE = 224;
const RECSCORE_THRESH = 0.5;
const OODSCORE_THRESH = 1000;

let bub = preprocess.testTf();
