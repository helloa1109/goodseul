import React, { useEffect, useRef, useState } from 'react';
import { ClearCanvas, PlayState } from '../../apis/play/CanvasUtils';
import { RandomBoolean, RandomColor, RandomNumber } from '../../apis/RandomUtils';
import PlayRanking from './PlayRanking';


const PlayBall = () => {
    const cvRef = useRef<HTMLCanvasElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [ballGame, setBallGame] = useState<Game | null>(null);

    //캔버스 랜더링완료시
    useEffect(() => {
        let cv: HTMLCanvasElement;
        if (cvRef.current) {
            cv = cvRef.current;
            cv.width = 345;
            cv.height = 590;
            cv.style.border = '1px solid';
        }
    }, [cvRef]);

    useEffect(() => {
        let cv = cvRef.current;

        if (cv && ballGame) {
            // cv.addEventListener("click", handleClickCanvas);
            cv.addEventListener("touchstart", handleClickCanvas);
            // cv.addEventListener("touchend", handleClickCanvas);
            cv.addEventListener("touchend", handleTouchEnd);
        }
        return () => {
            if (!cv) return;
            cv.removeEventListener("click", handleClickCanvas);
            cv.removeEventListener("touchstart", handleClickCanvas);
        }
    }, [cvRef, ballGame]);

    const handleTouchEnd = (e: TouchEvent) => {
        e.preventDefault();
        if (ballGame && ballGame.balls.length === 0) {
            // console.log(ballGame);
            setIsPlaying(false);
            // alert(elapsedTime);
        }
    }

    useEffect(() => {
        if (isPlaying) {
            animateFrame(0);
        }
    }, [isPlaying]);

    let lastTime: number = 0;
    let elapsedTime: number = 0;
    const animateFrame = (deltaTime: number) => {
        if (!lastTime)
            lastTime = deltaTime;

        let td = deltaTime - lastTime;
        elapsedTime += td / 100;
        lastTime = deltaTime;
        if (cvRef.current) {
            ClearCanvas(cvRef.current);
            if (ballGame) {
                ballGame.balls.forEach((v) => {
                    v.move();
                });
                let cv = cvRef.current;
                let ctx = cv.getContext('2d');
                if (ctx) {
                    let test = new PlayState(ctx);
                    test.setFontSize(20);
                    test.useOutline(true);
                    test.draw(`찾을 숫자 : ${ballGame.balls.length}`);
                    test.y += 20;
                    test.draw(`경과 시간 : ${(Math.round(elapsedTime) / 10).toFixed(1)}`);
                }
                if (ballGame.balls.length > 0) {
                    requestAnimationFrame(animateFrame);
                }else{
                    //TODO : call submit score
                    alert(`경과 시간 : ${(Math.round(elapsedTime) / 10).toFixed(1)}`);
                    setIsPlaying(false);
                }
            }
        }


    }

    const handleClickCanvas = (e: MouseEvent | TouchEvent) => {
        // e.preventDefault();
        if (ballGame) {
            setIsPlaying(ballGame.process(e));

        }
    }

    const handleStart = () => {
        if (cvRef.current) {
            if (!ballGame) {
                let g: Game = new Game(cvRef.current, 25);
                g.init();
                setBallGame(g);
            }else{
                ballGame.init();
            }
            elapsedTime = 0;
            lastTime = 0;
        }
        setIsPlaying(true);
    }

    const handleOpen = () => {
        let r = document.getElementsByClassName('gameRanking')[0] as HTMLDivElement;
        r.style.transform = 'translate(0%,0px)';
        r = document.getElementsByClassName('gameInformation')[0] as HTMLDivElement;
        r.style.transform = 'translate(-120%,0px)';
    }

    return (
        <div style={{
            position: 'relative',
            overflow: 'hidden',
            height: '600px',
            width: '355px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <canvas ref={cvRef} />
            {!isPlaying ? <div className='gameInformation'>
                <div className='gameTitle'>게임 제목</div>
                <div className='btnGame btnStart' onClick={handleStart}>게임 시작</div>
                <div className='btnGame btnRanking' onClick={handleOpen}>랭킹 보기</div>
            </div> : null}
            <PlayRanking gameID={5} />

        </div>
    );
};

class Ball {
    dx: number = 1;
    dy: number = 1;
    lineWidth: number = 5;
    public x: number = 0;
    public y: number = 0;
    public r: number = 30;
    public color: string = RandomColor();
    public speed: number = RandomNumber(0, 10);
    ctx!: CanvasRenderingContext2D;
    constructor(
        public num: number,
        ctx: CanvasRenderingContext2D,
    ) {
        this.ctx = ctx;
        this.init();
    }
    init() {
        this.speed = RandomNumber(1, 10) / 25;
        let pos = this.r + this.lineWidth;
        this.x = RandomNumber(pos, this.ctx.canvas.width - (pos));
        this.y = RandomNumber(pos, this.ctx.canvas.height - (pos));

        this.dx = this.speed * RandomNumber(1, 10) * (RandomBoolean() ? 1 : -1);
        this.dy = this.speed * RandomNumber(1, 10) * (RandomBoolean() ? 1 : -1);
    }

    draw() {
        let c = this.ctx;
        c.save();

        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        c.lineWidth = 2;
        c.strokeStyle = 'black';
        c.fillStyle = this.color;
        c.stroke();
        c.fill();
        c.closePath();

        c.textAlign = 'center';
        c.textBaseline = 'middle';
        c.strokeStyle = 'white';
        c.lineWidth = this.lineWidth;
        c.fillStyle = 'black';
        c.font = '30px "Noto Sans KR"';
        c.strokeText(this.num.toString(), this.x, this.y);
        c.fillText(this.num.toString(), this.x, this.y);

        c.restore();
    }

    move() {
        let cv = this.ctx.canvas;
        let w = cv.width;
        let h = cv.height;
        if (this.x + this.r > w || this.x - this.r < 0)
            this.dx *= -1;
        if (this.y + this.r > h || this.y - this.r < 0)
            this.dy *= -1;

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

class Game {
    balls: Ball[] = [];
    constructor(
        public cv: HTMLCanvasElement,
        public difficulty: number,
    ) {
        this.init();
    }
    init() {
        this.balls.splice(0, this.balls.length);

        for (let i = 1; i <= this.difficulty; i++) {
            let ctx = this.cv.getContext('2d');
            if (ctx)
                this.balls.push(new Ball(i, ctx));
        }
    }

    private isCorrectClick(e: MouseEvent | TouchEvent): boolean {
        const target = this.balls[this.balls.length - 1];
        const cvRect = this.cv.getBoundingClientRect();


        let dist;
        if (e instanceof MouseEvent) {
            dist = Math.sqrt((e.x - cvRect.x - target.x) ** 2 + ((e.y - cvRect.y - target.y) ** 2));
        }
        else {
            const tx = e.changedTouches[0].clientX - cvRect.x;// e.touches[0].clientX - cvRect.x;
            const ty = e.changedTouches[0].clientY - cvRect.y;//e.touches[0].clientY - cvRect.y;
            dist = Math.sqrt((tx - target.x) ** 2 + ((ty - target.y) ** 2));

        }
        return dist < target.r;
    }

    process(e: MouseEvent | TouchEvent): boolean {
        if (this.balls.length > 0) {
            if (this.isCorrectClick(e)) {
                this.balls.pop();
            }
            return true;
        } else {
            return false;
        }

    }

}



export default PlayBall;