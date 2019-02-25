

let testTf = function() {
  const shape = [2, 3]; // 2 rows, 3 columns
  const a = tf.tensor([1.0, 2.0, 3.0, 10.0, 20.0, 30.0], shape);
  a.print();
  return a;
}


let preprocess = function(imgElement) {

  const startTime = performance.now();
  let w = imgElement.width
  let h = imgElement.height
  if (w < h) {
    imgElement.width = IMAGE_SIZE
    imgElement.height = Math.floor(IMAGE_SIZE*h/w)
  } else {
    imgElement.height = IMAGE_SIZE
    imgElement.width = Math.floor(IMAGE_SIZE*w/h)
  }

  console.log("img wxh: " + w + ", " + h + " => " + imgElement.width + ", " + imgElement.height)

  let img = tf.fromPixels(imgElement).toFloat();

  let normalized = img.div(tf.scalar(255));

  let meanImg = normalized.mean(2)
  let hOffset = Math.floor(img.shape[1]/2 - IMAGE_SIZE/2)
  let wOffset = Math.floor(img.shape[0]/2 - IMAGE_SIZE/2)

  let cropImg = meanImg.slice([wOffset,hOffset],[IMAGE_SIZE,IMAGE_SIZE])

  console.log("Prepared input image " + Math.floor(performance.now() - startTime) + "ms");
  
  return cropImg;
}
