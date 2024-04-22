window.onload = function() {
    // HTML 파일에서 Canvas 요소 가져오기
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // 별 그리는 함수 정의
    function drawStar(x, y, radius, numPoints, innerRadius, fillColor, outlineColor) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        for (let i = 1; i <= numPoints * 2; i++) {
            const angle = Math.PI / numPoints * i;
            const r = i % 2 === 0 ? radius : innerRadius;
            ctx.lineTo(x + Math.cos(angle) * r, y + Math.sin(angle) * r);
        }
        ctx.closePath();
        ctx.fillStyle = fillColor;
        ctx.fill();
        ctx.strokeStyle = outlineColor;
        ctx.lineWidth = 3; // 아웃라인 두께
        ctx.stroke();
    }

    // 하트 그리는 함수 정의
    function drawHeart(x, y, radius, fillColor, outlineColor) {
        ctx.beginPath();
  ctx.moveTo(x, y + radius / 2);
  ctx.bezierCurveTo(x - radius / 2, y - radius / 2, x - radius, y, x, y + radius * 2);
  ctx.bezierCurveTo(x + radius, y, x + radius / 2, y - radius / 2, x, y + radius / 2);
  ctx.closePath();
  ctx.fillStyle = fillColor;
  ctx.fill();
    }

    // F5를 누를 때마다 랜덤한 위치에 하트 그리기
    function drawRandomHeart() {
        const randomX = Math.random() * (canvas.width - 100); // canvas 너비 내에서 랜덤한 x 좌표 생성
        const randomY = Math.random() * (canvas.height - 100); // canvas 높이 내에서 랜덤한 y 좌표 생성
        drawHeart(randomX, randomY, 30, 'red', 'black'); // 반지름 30인 하트 그리기
    }

    // 중앙 좌표 (240, 150), 반지름 50인 별 그리기
    drawStar(canvas.width / 2, canvas.height / 2, 50, 5, 20, 'rgb(255, 201, 14)', 'black');

    // 랜덤한 위치에 하트 그리기
    drawRandomHeart();

    // F5를 누를 때마다 랜덤한 위치에 하트 그리기
    document.addEventListener('keydown', function(event) {
        if (event.keyCode === 116) { // F5 키 누를 때마다
            ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스 지우기
            drawStar(canvas.width / 2, canvas.height / 2, 50, 5, 20, 'rgb(255, 201, 14)', 'black'); // 별 다시 그리기
            drawRandomHeart(); // 랜덤한 위치에 하트 그리기
        }
    });
};  