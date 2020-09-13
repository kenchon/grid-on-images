var file = document.getElementById('file');
var imgCanvas = document.getElementById('img-canvas');
var gridCanvas = document.getElementById('grid-canvas');

var canvasWidth = 1600;
var canvasHeight = 1600;

var uploadImgSrc;

// Canvasの準備
imgCanvas.width = canvasWidth;
imgCanvas.height = canvasHeight;

gridCanvas.width = canvasWidth;
gridCanvas.height = canvasHeight;

var ctx = imgCanvas.getContext('2d');
var gridCtx = gridCanvas.getContext('2d');

function loadLocalImage(e) {
    // ファイル情報を取得
    var fileData = e.target.files[0];

    // 画像ファイル以外は処理を止める
    if(!fileData.type.match('image.*')) {
        alert('画像を選択してください');
        return;
    }

    // FileReaderオブジェクトを使ってファイル読み込み
    var reader = new FileReader();
    // ファイル読み込みに成功したときの処理
    reader.onload = function() {
        // Canvas上に表示する
        uploadImgSrc = reader.result;
        canvasDraw();
    }
    // ファイル読み込みを実行
    reader.readAsDataURL(fileData);
}

// ファイルが指定された時にloadLocalImage()を実行
file.addEventListener('change', loadLocalImage, false);

// Canvas上に画像を表示する
function canvasDraw() {
    // canvas内の要素をクリアする
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    gridCtx.clearRect(0, 0, canvasWidth, canvasHeight);
  
    // Canvas上に画像を表示
    var img = new Image();
    img.src = uploadImgSrc;
    img.onload = function() {
        ctx.drawImage(img, 0, 0, canvasWidth, this.height * (canvasWidth / this.width));
    }
  
    drawGrid();
}

function drawGrid() {
    const checkbox = document.getElementsByClassName("switch__input");
    if (!checkbox[0].checked) {
      gridCtx.clearRect(0, 0, canvasWidth, canvasHeight);
    } else {
      const gridLength = 100;
      for (let i=0; i<=canvasHeight/gridLength; i++) {
        gridCtx.beginPath();
        gridCtx.moveTo(0, i*gridLength);
        gridCtx.lineTo(canvasWidth, i*gridLength);
        gridCtx.stroke();
      }
      for (let j=0; j<=canvasWidth/gridLength; j++) {
        gridCtx.beginPath();
        gridCtx.moveTo(j*gridLength, 0);
        gridCtx.lineTo(j*gridLength, canvasHeight);
        gridCtx.stroke();
      }
    }
}

function makeBorderColorWhite() {
    const checkbox = document.getElementsByClassName("switch__input");
    gridCtx.clearRect(0, 0, canvasWidth, canvasHeight);
    gridCtx.strokeStyle = 'white';
  
    if (!checkbox[0].checked) {
      gridCtx.clearRect(0, 0, canvasWidth, canvasHeight);
    } else {
      const gridLength = 100;
      for (let i=0; i<=canvasHeight/gridLength; i++) {
        gridCtx.beginPath();
        gridCtx.moveTo(0, i*gridLength);
        gridCtx.lineTo(canvasWidth, i*gridLength);
        gridCtx.stroke();
      }
      for (let j=0; j<=canvasWidth/gridLength; j++) {
        gridCtx.beginPath();
        gridCtx.moveTo(j*gridLength, 0);
        gridCtx.lineTo(j*gridLength, canvasHeight);
        gridCtx.stroke();
      }
    }
}

function makeBorderColorBlack() {
    const checkbox = document.getElementsByClassName("switch__input");
    gridCtx.clearRect(0, 0, canvasWidth, canvasHeight);
    gridCtx.strokeStyle = 'black';
  
    if (!checkbox[0].checked) {
      gridCtx.clearRect(0, 0, canvasWidth, canvasHeight);
    } else {
      const gridLength = 100;
      for (let i=0; i<=canvasHeight/gridLength; i++) {
        gridCtx.beginPath();
        gridCtx.moveTo(0, i*gridLength);
        gridCtx.lineTo(canvasWidth, i*gridLength);
        gridCtx.stroke();
      }
      for (let j=0; j<=canvasWidth/gridLength; j++) {
        gridCtx.beginPath();
        gridCtx.moveTo(j*gridLength, 0);
        gridCtx.lineTo(j*gridLength, canvasHeight);
        gridCtx.stroke();
      }
    }
}