<template>
  <div class="content-wrapper">
    <div class="d-flex flex-column flex-md-row align-items-center w-100 p-2">
      <div class="wrapper d-flex align-items-center">
        <button
          type="button"
          id="freehandBtn"
          class="btn btn-icons btn-outline-dark d-lg-block btn-sm mr-2"
          title="Freehand"
          @click="selectFreehand(this, true)"
        >
          <i class="mdi mdi-pencil"></i> Freehand
        </button>
        <button
          type="button"
          id="lineBtn"
          class="btn btn-icons btn-outline-dark d-lg-block btn-sm"
          title="Straight Line"
          @click="selectFreehand(this, false)"
        >
          <i class="mdi mdi-vector-line"></i> Line
        </button>
      </div>
      <div
        class="wrapper ml-md-auto d-flex flex-column flex-md-row kanban-toolbar ml-n2 ml-md-0 mt-4 mt-md-0"
      >
        <div class="d-flex">
          <button type="button" class="btn btn-icons btn-outline-dark d-lg-block btn-sm">
            <i class="mdi mdi-undo btn-icon-prepend"></i> Undo
          </button>
          <button
            type="button"
            class="btn btn-icons btn-outline-dark d-lg-block btn-sm"
            @click="clearCanvas(true)"
          >
            <i class="mdi mdi-refresh btn-icon-prepend"></i> Clear
          </button>
          <button type="button" class="btn btn-icons btn-outline-dark d-lg-block btn-sm">
            <i class="mdi mdi-download btn-icon-prepend"></i> Download
          </button>
          <button
            type="button"
            class="btn btn-icons btn-outline-dark d-lg-block btn-sm"
            v-on:click="closeWhiteboard"
          >
            <i class="mdi mdi-exit-to-app btn-icon-prepend"></i> Close
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 stretch-card">
        <canvas
          @mousedown="startPainting"
          @mouseup="finishedPainting"
          @mousemove="draw"
          id="myCanvas"
        >Sorry, your browser does not support HTML5 canvas technology.</canvas>
        <!--   <div id="mydiv">
          <div id="mydivheader" class="bg-gradient-primary">Waiting for Student</div>
          <video id="player_user" class="video-over-box-user" autoplay></video>
        </div>-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      message: 'Hello Vue!',
      vueCanvas: null,
      painting: false,
      canvas: null,
      ctx: null,
      isFreehand: true,
      lineStartX: 0,
      lineStartY: 0
    }
  },
  methods: {
    startPainting(e) {
      const STROKE_LINE_WIDTH = 3
      this.painting = true
      console.log(this.painting)
      this.draw(e)
      var rect = myCanvas.getBoundingClientRect()
      ;(this.scaleX = myCanvas.width / rect.width), // relationship bitmap vs. element for X
        (this.scaleY = myCanvas.height / rect.height) // relationship bitmap vs. element for Y
      this.canvasX = (e.clientX - rect.left) * this.scaleX
      this.canvasY = (e.clientY - rect.top) * this.scaleY
      this.ctx.lineWidth = STROKE_LINE_WIDTH
    },
    finishedPainting() {
      this.painting = false
      console.log(this.painting)
      this.ctx.beginPath()
    },
    draw(e) {
      if (!this.painting) return

      var rect = myCanvas.getBoundingClientRect()
      ;(this.scaleX = myCanvas.width / rect.width), // relationship bitmap vs. element for X
        (this.scaleY = myCanvas.height / rect.height) // relationship bitmap vs. element for Y
      this.canvasX = (e.clientX - rect.left) * this.scaleX
      this.canvasY = (e.clientY - rect.top) * this.scaleY

      this.ctx.lineWidth = 10
      this.ctx.lineCap = 'round'

      this.ctx.lineTo(this.canvasX, this.canvasY)
      this.ctx.stroke()

      this.ctx.beginPath()
      this.ctx.moveTo(this.canvasX, this.canvasY)
    },
    clearCanvas() {
      this.myCanvas = document.getElementById('myCanvas')
      this.ctx = myCanvas.getContext('2d')

      this.ctx.clearRect(0, 0, myCanvas.width, myCanvas.height)
      // Set Background Color
      this.ctx.fillStyle = '#fff'
      this.ctx.fillRect(0, 0, myCanvas.width, myCanvas.height)
    },
    // Draw Line
    drawLine(ctx, startX, startY, endX, endY) {
      ctx.lineWidth = STROKE_LINE_WIDTH
      ctx.beginPath()
      ctx.moveTo(startX, startY)
      ctx.lineTo(endX, endY)
      ctx.stroke()
      //ctx.closePath();
    },
    closeWhiteboard() {
      this.$emit('closeWhiteboard')
    },
    selectFreehand(e, freehandSelected) {
      this.isFreehand = freehandSelected
      return false
    },
    startDrawLine(e) {
      var rect = myCanvas.getBoundingClientRect()
      ;(this.scaleX = myCanvas.width / rect.width), // relationship bitmap vs. element for X
        (this.scaleY = myCanvas.height / rect.height) // relationship bitmap vs. element for Y
      this.canvasX = (e.clientX - rect.left) * this.scaleX
      this.canvasY = (e.clientY - rect.top) * this.scaleY

      this.lineStartX = canvasX
      this.lineStartY = canvasY
    }
  },
  mounted: function() {
    const STROKE_LINE_WIDTH = 3
    this.canvas = document.getElementById('myCanvas')
    this.ctx = this.canvas.getContext('2d')
    var lineStartX = 0
    var lineStartY = 0
    var canvasX
    var canvasY
    // Resize canvas
    myCanvas.width = window.innerWidth
    myCanvas.height = window.innerHeight
    // Set Background Color
    this.ctx.fillStyle = '#fff'
    this.ctx.fillRect(0, 0, myCanvas.width, myCanvas.height)
  }
}
</script>
<style scoped>
#myCanvas {
  cursor: crosshair;
  width: 100%;
  min-height: 420px;
}
#mydiv {
  position: absolute;
  z-index: 9;
  background-color: #5a5757;
  text-align: center;
  resize: both;
  overflow: auto;
  cursor: pointer;
  min-width: 300px;
  min-height: 200px;
  max-width: 1000px;
  max-height: 600px;
  box-shadow: #d4d4d4 0 0 16px;
  border-radius: 3px;
}

#screensharediv {
  position: absolute;
  z-index: 10;
  background-color: #5a5757;
  text-align: center;
  resize: both;
  overflow: auto;
  cursor: pointer;
  width: 400px;
  height: 250px;
  min-width: 300px;
  min-height: 200px;
  max-width: 1000px;
  max-height: 600px;
  box-shadow: #d4d4d4 0 0 16px;
  border-radius: 3px;
  right: 0px;
}

#mydivheader,
#screensharedivheader {
  padding: 10px;
  cursor: move;
  z-index: 11;
  color: #fff;
}

#player_user,
#screen_share_user {
  width: 300px;
  height: 200px;
}
.thumbnail-graph {
  max-width: 50px;
  border-style: solid;
  border-width: 1px;
}
.thumbnail-graph:hover {
  transform: scale(5);
}
.class-exit {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.class-exit button:last-child {
  margin-left: 10px;
}
.class-exit button:first-child {
  margin-right: 10px;
}
.class-exit button:nth-child(2) {
  margin-right: 10px;
}
.class-exit button:nth-child(3) {
  margin-right: 10px;
}
</style>