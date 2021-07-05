var canvas = new fabric.Canvas('myCanvas');
block_y = 1;
block_x = 1;

block_image_width = 350;
block_image_height = 430;

var block_image_object = "";

function newImg(getimg) {
    fabric.Image.fromURL(getimg, function(Img) {
        block_img_object = Img
        block_img_object.scaleToWidth(block_image_width)
        block_img_object.scaleToHeight(block_image_height)
        block_img_object.set({
            top: block_y,
            left: block_x,
        })
        canvas.add(block_img_object)
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == '82') {
        newImg("rr1.png");
        console.log("r");
    }
    if (keyPressed == '71') {
        block_x = 200;
        newImg("gr.png");
        console.log("g");
    }

    if (keyPressed == '89') {
        block_x = 350;
        newImg("yr.png");
        console.log("y");
    }
    if (keyPressed == '80') {
        block_x = 600;
        newImg("pr.png");
        console.log("p");
    }
    if (keyPressed == '66') {
        block_x = 700;
        newImg("br.png");
        console.log("b");
    }

}