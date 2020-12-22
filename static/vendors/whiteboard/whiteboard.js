const STROKE_LINE_WIDTH = 3;
const STUDENT_CANVAS_LINE_COLOR = "#000";
const TEACHER_CANVAS_LINE_COLOR = "#f00";
const GRID_GOLOR = "#C0DCE8";
const GRID_WIDTH = 25;

let teacherId;
let studentId;
let myRole;
let isFreeHand = true;
var storedLines = [];

window.onload = function() {
  var myCanvas = document.getElementById("canvas");
  var ctx = myCanvas.getContext("2d");
  var lineStartX = 0;
  var lineStartY = 0;

  // Fill Window Width and Height
  myCanvas.width = window.innerWidth;
  myCanvas.height = window.innerHeight;

  // Set Background Color
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
  ctx.lineWidth = STROKE_LINE_WIDTH;

  // Mouse Event Handlers
  if (myCanvas) {
    var isDown = false;
    var canvasX, canvasY;
    ctx.lineWidth = STROKE_LINE_WIDTH;

    $(myCanvas)
      .mousedown(function(e) {
        isDown = true;

        var rect = myCanvas.getBoundingClientRect();
        (scaleX = myCanvas.width / rect.width), // relationship bitmap vs. element for X
          (scaleY = myCanvas.height / rect.height); // relationship bitmap vs. element for Y
        canvasX = (e.clientX - rect.left) * scaleX;
        canvasY = (e.clientY - rect.top) * scaleY;
        ctx.lineWidth = STROKE_LINE_WIDTH;
        ctx.strokeStyle = myRole == "TEACHER" ? TEACHER_CANVAS_LINE_COLOR : STUDENT_CANVAS_LINE_COLOR;

        if (isFreeHand) {
          ctx.beginPath();
          ctx.moveTo(canvasX, canvasY);

          // socket.emit("CANVAS_STROKE", {
          //   data: teacherId || studentId,
          //   canvas: {
          //     event: "down",
          //     x1: lineStartX,
          //     y1: lineStartY,
          //     x2: canvasX,
          //     y2: canvasY,
          //     width: myCanvas.width,
          //     height: myCanvas.height
          //   }
          // });

          lineStartX = canvasX;
          lineStartY = canvasY;
        } else {
          lineStartX = canvasX;
          lineStartY = canvasY;

          // socket.emit("CANVAS_STROKE", {
          //   data: teacherId || studentId,
          //   canvas: { event: "linedown", x: canvasX, y: canvasY, width: myCanvas.width, height: myCanvas.height }
          // });
        }
      })
      .mousemove(function(e) {
        if (isDown !== false) {
          var rect = myCanvas.getBoundingClientRect();
          (scaleX = myCanvas.width / rect.width), // relationship bitmap vs. element for X
            (scaleY = myCanvas.height / rect.height); // relationship bitmap vs. element for Y
          canvasX = (e.clientX - rect.left) * scaleX;
          canvasY = (e.clientY - rect.top) * scaleY;

          ctx.lineWidth = STROKE_LINE_WIDTH;
          ctx.strokeStyle = myRole == "TEACHER" ? TEACHER_CANVAS_LINE_COLOR : STUDENT_CANVAS_LINE_COLOR;

          if (isFreeHand) {
            ctx.lineTo(canvasX, canvasY);
            ctx.stroke();

            storedLines.push({
              role: myRole,
              x1: lineStartX,
              y1: lineStartY,
              x2: canvasX,
              y2: canvasY
            });

            socket.emit("CANVAS_STROKE", {
              data: teacherId || studentId,
              canvas: {
                event: "move",
                x1: lineStartX,
                y1: lineStartY,
                x2: canvasX,
                y2: canvasY,
                width: myCanvas.width,
                height: myCanvas.height
              }
            });

            lineStartX = canvasX;
            lineStartY = canvasY;
          } else {
            redrawStoredLines(myCanvas, ctx);
            // draw the current line
            drawLine(ctx, lineStartX, lineStartY, canvasX, canvasY);

            // socket.emit("CANVAS_STROKE", {
            //   data: teacherId || studentId,
            //   canvas: { event: "linemove", x: canvasX, y: canvasY, width: myCanvas.width, height: myCanvas.height }
            // });
          }
        }
      })
      .mouseup(function(e) {
        isDown = false;

        var rect = myCanvas.getBoundingClientRect();
        (scaleX = myCanvas.width / rect.width), // relationship bitmap vs. element for X
          (scaleY = myCanvas.height / rect.height); // relationship bitmap vs. element for Y
        canvasX = (e.clientX - rect.left) * scaleX;
        canvasY = (e.clientY - rect.top) * scaleY;

        ctx.lineWidth = STROKE_LINE_WIDTH;
        ctx.strokeStyle = myRole == "TEACHER" ? TEACHER_CANVAS_LINE_COLOR : STUDENT_CANVAS_LINE_COLOR;

        if (isFreeHand) {
          ctx.closePath();

          socket.emit("CANVAS_STROKE", {
            data: teacherId || studentId,
            canvas: { event: "up", x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 }
          });
        } else {
          storedLines.push({
            role: myRole,
            x1: lineStartX,
            y1: lineStartY,
            x2: canvasX,
            y2: canvasY
          });
          redrawStoredLines(myCanvas, ctx);

          socket.emit("CANVAS_STROKE", {
            data: teacherId || studentId,
            canvas: {
              event: "lineup",
              x1: lineStartX,
              y1: lineStartY,
              x2: canvasX,
              y2: canvasY,
              width: myCanvas.width,
              height: myCanvas.height
            }
          });
        }
      });
  }

  // Touch Events Handlers
  draw = {
    started: false,
    start: function(evt) {
      ctx.beginPath();
      ctx.moveTo(evt.touches[0].pageX, evt.touches[0].pageY);

      this.started = true;
    },
    move: function(evt) {
      if (this.started) {
        ctx.lineTo(evt.touches[0].pageX, evt.touches[0].pageY);

        ctx.strokeStyle = "#000";
        ctx.lineWidth = STROKE_LINE_WIDTH;
        ctx.stroke();
      }
    },
    end: function(evt) {
      this.started = false;
    }
  };

  // Touch Events
  myCanvas.addEventListener("touchstart", draw.start, false);
  myCanvas.addEventListener("touchend", draw.end, false);
  myCanvas.addEventListener("touchmove", draw.move, false);

  // Disable Page Move
  document.body.addEventListener(
    "touchmove",
    function(evt) {
      evt.preventDefault();
    },
    false
  );

  socket.on("CANVAS_STROKE" + "_" + this.sessionStorage.userId, data => {
    console.log("CANVAS_STROKE: " + JSON.stringify(data.canvas));
    let remoteCanvas = data.canvas;

    var remoteCtx = myCanvas.getContext("2d");
    var locCanvasX1, locCanvasY1, locCanvasX2, locCanvasY2;
    let remoteScaleX, remoteScaleY;
    remoteCtx.lineWidth = STROKE_LINE_WIDTH;
    remoteCtx.strokeStyle = myRole != "TEACHER" ? TEACHER_CANVAS_LINE_COLOR : STUDENT_CANVAS_LINE_COLOR;

    switch (remoteCanvas.event) {
      case "down":
        remoteScaleX = myCanvas.width / remoteCanvas.width;
        remoteScaleY = myCanvas.height / remoteCanvas.height;
        // locCanvasX = remoteCanvas.x * remoteScaleX;
        // locCanvasY = remoteCanvas.y * remoteScaleY;
        // remoteCtx.beginPath();
        // remoteCtx.moveTo(locCanvasX, locCanvasY);

        locCanvasX1 = remoteCanvas.x1 * remoteScaleX;
        locCanvasY1 = remoteCanvas.y1 * remoteScaleY;
        locCanvasX2 = remoteCanvas.x2 * remoteScaleX;
        locCanvasY2 = remoteCanvas.y2 * remoteScaleY;

        storedLines.push({
          role: myRole != "TEACHER" ? "TEACHER" : "STUDENT",
          x1: locCanvasX1,
          y1: locCanvasY1,
          x2: locCanvasX2,
          y2: locCanvasY2
        });
        break;
      case "move":
        remoteScaleX = myCanvas.width / remoteCanvas.width;
        remoteScaleY = myCanvas.height / remoteCanvas.height;
        // locCanvasX = remoteCanvas.x * remoteScaleX;
        // locCanvasY = remoteCanvas.y * remoteScaleY;
        // remoteCtx.lineTo(locCanvasX, locCanvasY);
        // remoteCtx.stroke();

        locCanvasX1 = remoteCanvas.x1 * remoteScaleX;
        locCanvasY1 = remoteCanvas.y1 * remoteScaleY;
        locCanvasX2 = remoteCanvas.x2 * remoteScaleX;
        locCanvasY2 = remoteCanvas.y2 * remoteScaleY;

        storedLines.push({
          role: myRole != "TEACHER" ? "TEACHER" : "STUDENT",
          x1: locCanvasX1,
          y1: locCanvasY1,
          x2: locCanvasX2,
          y2: locCanvasY2
        });
        break;
      case "up":
        remoteCtx.closePath();
        break;
      case "lineup":
        remoteScaleX = myCanvas.width / remoteCanvas.width;
        remoteScaleY = myCanvas.height / remoteCanvas.height;
        locCanvasX1 = remoteCanvas.x1 * remoteScaleX;
        locCanvasY1 = remoteCanvas.y1 * remoteScaleY;
        locCanvasX2 = remoteCanvas.x2 * remoteScaleX;
        locCanvasY2 = remoteCanvas.y2 * remoteScaleY;

        storedLines.push({
          role: myRole != "TEACHER" ? "TEACHER" : "STUDENT",
          x1: locCanvasX1,
          y1: locCanvasY1,
          x2: locCanvasX2,
          y2: locCanvasY2
        });

        //this.drawLine(remoteCtx, locCanvasX1, locCanvasY1, locCanvasX2, locCanvasY2);
        break;
      case "clear":
        this.storedLines = [];
        break;
    }
    redrawStoredLines(myCanvas, remoteCtx);
  });

  // //Draw Line
  // $("#myCanvas").on("click", function(e) {
  //   var offset = $(this).offset();
  //   var x = e.pageX - offset.left;
  //   var y = e.pageY - offset.top;
  //   drawLine(ctx, x, y);
  //   console.log("line");
  // });

  onLoad();
  drawBoard();
};

function clearCanvas(isClearStroke) {
  var myCanvas = document.getElementById("myCanvas");
  var ctx = myCanvas.getContext("2d");

  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  // Set Background Color
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
  ctx.lineWidth = STROKE_LINE_WIDTH;

  drawBoard();

  if (isClearStroke) {
    storedLines = [];
    socket.emit("CANVAS_STROKE", {
      data: teacherId || studentId,
      canvas: { event: "clear" }
    });
  }
}

// Grid Lines
function drawBoard() {
  var p = 10;
  var myCanvas = document.getElementById("myCanvas");
  var ctx = myCanvas.getContext("2d");

  ctx.beginPath();

  for (var x = 0; x <= myCanvas.width; x += GRID_WIDTH) {
    ctx.moveTo(0.5 + x + p, p);
    ctx.lineTo(0.5 + x + p, myCanvas.height + p);
  }

  for (var x = 0; x <= myCanvas.height; x += GRID_WIDTH) {
    ctx.moveTo(p, 0.5 + x + p);
    ctx.lineTo(myCanvas.width + p, 0.5 + x + p);
  }
  ctx.strokeStyle = GRID_GOLOR;
  ctx.lineWidth = STROKE_LINE_WIDTH;
  ctx.stroke();
  //ctx.closePath();
}

// Draw Line
function drawLine(ctx, startX, startY, endX, endY) {
  ctx.lineWidth = STROKE_LINE_WIDTH;
  //ctx.strokeStyle = myRole == "TEACHER" ? TEACHER_CANVAS_LINE_COLOR : STUDENT_CANVAS_LINE_COLOR;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
  //ctx.closePath();
}

function redrawStoredLines(canvas, ctx) {
  ctx.lineWidth = STROKE_LINE_WIDTH;

  clearCanvas(false);
  if (storedLines.length == 0) {
    return;
  }
  // redraw each stored line
  for (var i = 0; i < storedLines.length; i++) {
    ctx.strokeStyle = storedLines[i].role == "TEACHER" ? TEACHER_CANVAS_LINE_COLOR : STUDENT_CANVAS_LINE_COLOR;
    drawLine(ctx, storedLines[i].x1, storedLines[i].y1, storedLines[i].x2, storedLines[i].y2);
  }
}

function selectFreehand(e, selection) {
  isFreeHand = !isFreeHand;

  if (isFreeHand) {
    $("#freehandBtn").removeClass("btn-outline-dark");
    $("#freehandBtn").addClass("btn-dark");
    $("#lineBtn").addClass("btn-outline-dark");
    $("#lineBtn").removeClass("btn-dark");
  } else {
    $("#freehandBtn").addClass("btn-outline-dark");
    $("#freehandBtn").removeClass("btn-dark");
    $("#lineBtn").removeClass("btn-outline-dark");
    $("#lineBtn").addClass("btn-dark");
  }
}
