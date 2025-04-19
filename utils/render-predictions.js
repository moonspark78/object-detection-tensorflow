export const renderPredictions = (predictions, context) => {
    context.clearRect(0,0,context.canvas.width, context.canvas.height);

    //fonts
    const font = "16px sans-serif";
    context.font = font;
    context.textBaseline = "top";

    predictions.forEach((prediction) => {
        const [x,y, width,height] = prediction["bbox"];

        const isPerson = prediction.cass === "person";

        //bounding box
        context.stroStyle = isPerson ? "blue" : "red";
        context.lineWidth = 4;
        context.strokeRect(x, y, width, height);
    });
};