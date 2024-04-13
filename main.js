Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function (pic) {
        document.getElementById("result").innerHTML = '<img id="capture_img" src="' + pic + '" >';
    });
}

img_model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/C4y536HRr/model.json", model_loaded);

function model_loaded() {
    console.log("model loaded successfully!");
}

function check(){
    cam_pic = document.getElementById("capture_img");
    img_model.classify(cam_pic , get_result);
}

function get_result(e , r){
 if(e){
    console.error(e);
    
 } 
 else{
    console.log(r);
    document.getElementById("result_object_name").innerHTML = r[0].label;

    document.getElementById("result_object_accuracy").innerHTML = r[0].confidence.toFixed(2);
 }
}
