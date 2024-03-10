function preload(){
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();
}

function draw(){
    image(video, 0, 0, 640, 480);
    shape(create_shape);
}

function take_snapshot(){
    save('student_name.png');
}

function create_shape(){
    draw_shape = document.getElementById("shape_name").value;
}