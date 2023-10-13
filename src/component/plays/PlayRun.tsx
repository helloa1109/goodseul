/*
    사용 스프라이트
    배경 및 지형 : Freedom Planet 2
    캐릭터 : Momodora Reverie Under the Moonlight
    가시 : SuperMarioMaker (from wiki)
    코인 : -
    점프 안내 : Bing Image Creator (DALL-E-3) (Jump 버튼, 픽셀아트)
*/

//clip path maker -> search google

import React, { useEffect, useRef, useState } from 'react';
import { ClearCanvas, PlayState } from '../../apis/play/CanvasUtils';
import { RandomBoolean, RandomNumber } from '../../apis/RandomUtils';

type bgImg = {
    src: string,    //배경 경로
    order: number,  //배경 레이어 순서. 낮을수록 아래에 깔림
    speedx?: number,//배경 x이동속도
    speedy?: number,//배경 y이동속도
    x?: number,     //배경 x위치
    xmin?: number,  //배경 최소x위치
    xmax?: number,  //배경 최대x위치
    y?: number,
    ymin?: number,
    ymax?: number,
}

const PlayRun = () => {
    //dopeboyzclub.ddns.net.7733
    //192.168.0.102.8000
    const imgPreifx = 'http://dopeboyzclub.ddns.net:7733/testimg/';
    const cvRef = useRef<HTMLCanvasElement | null>(null);
    const [player, setPlayer] = useState<Player | null>(null);
    const [game, setGame] = useState<Game>();
    const [bgs, setBgs] = useState<Background[]>([]);
    const [platform, setPlatform] = useState<Platform>();
    const [loadingState, setLoadingState] = useState(false);
    const [objs, setObjs] = useState<Objects>();
    const imgs = [
        "run_bg.png",   //배경 그라디언트
        "run_l1a.png",  //배경 구름
        "run_l2.png",   //배경 산
        "mmdr.png",     //캐릭터 스프라이트 시트
        "gl.png",       //지형 Left
        "gc.png",       //지형 Center
        "gr.png",       //지형 Right
        "run_obj0.png", //함정
        "run_obj1.png", //코인
        "run_obj2.png", //보너스
        "howtoplay.png",//플레이 방법
        "btnStart.png", //시작버튼
        "btnRanking.png",//랭킹버튼
        "jump.png",     //점프안내
        // "something.ext",
    ]
    const bgImgs: bgImg[] = [
        {
            src: `run_bg.png`,
            order: 0,
            speedx: 0,
        },
        {
            src: `run_l1a.png`,
            order: 1,
            speedx: -0.1,
        },
        {
            src: `run_l2.png`,
            order: 2,
            speedx: -0.2,
        },
    ];
    // useEffect(() => {
    //     // console.log('blank');
    // }, []);

    useEffect(() => {
        //캔버스가 할당되면 이미지를 로드
        if (cvRef.current)
            loadImage(imgs, imgPreifx);
    }, [cvRef]);

    useEffect(() => {
        //이미지 로딩을 성공하면
        if (loadingState) {
            if (cvRef.current) {
                let cv = cvRef.current;
                cv.width = 345;
                cv.height = 590;
                cv.style.border = '1px solid';
                cv.style.backgroundColor = '#2066df';
                cv.style.backgroundSize = "cover";

                setBgImg();

                let game = new Game(cv)
                setGame(game);

                let pf = new Platform(cv);
                setPlatform(pf);

                let objs = new Objects(cv, pf, game);
                setObjs(objs);


                let img = new Image();
                img.src = `${imgPreifx}mmdr.png`;

                img.onload = (e) => {
                    let p = new Player(cv, img, pf, objs, game, bgs);
                    //게임에 각종 요소를 로드해야 하는데
                    //잘못 된 설계같음.

                    p.draw(0);
                    setPlayer(p);
                }
            }
        }
    }, [loadingState]);

    //배경이미지를 셋팅하는 함수
    //이렇게 하는게 맞는걸까?
    const setBgImg = async () => {
        const bgInit = (data: bgImg) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => {
                    if (cvRef.current) {
                        data.y = cvRef.current.height - img.height - 60;
                        const item = new Background(img, cvRef.current, data);
                        bgs.push(item);
                    }
                    resolve(img);
                };
                img.onerror = () => reject(img);
                img.src = `${imgPreifx}${data.src}`;
            });
        }

        try {
            const p = bgImgs.map((data) => bgInit(data));
            await Promise.allSettled(p);
            setBgs([...bgs].sort((a, b) => a.order - b.order));
        } catch {
            console.log('load failed something');
        }
    }

    //각종 이미지 리소스를 선로딩함.
    //이렇게 리소스를 선로딩 해두면 리소스를 바로 끌어 쓸 수 있음.
    const loadImage = async (data: string[], prefix: string) => {
        const s = (src: string) => new Promise((r, j) => {
            const img = new Image();
            img.onload = () => r(img);
            img.onerror = () => j(img);
            img.src = src;
        });

        try {
            const p = data.map(v => s(`${prefix}${v}`));
            await Promise.all(p);
            setLoadingState(true);
        } catch {
            alert('리소스를 불러오는데 실패했습니다.');
            setLoadingState(false);
        }
    }

    useEffect(() => {
        //이미지 로딩이 완료되고
        //게임 준비가 완료되면
        if (player) {
            requestAnimationFrame(animate);
            assignKeyInput();
        }
    }, [player]);

    let rotateState = 0;
    const assignKeyInput = () => {
        //타입스크립트의 undefined 여부 체크로 인해
        //계단이 불필요하게 늘어짐......
        if (cvRef.current) {
            cvRef.current.addEventListener("touchstart", (e) => {
                e.preventDefault();
                if (game) {
                    switch (game.screenState) {
                        case screenState.MAIN:
                            break;
                        case screenState.HOWTOPLAY:
                            break;
                        case screenState.RESULT:
                            break;
                        case screenState.INGAME:
                            //인게임은 터치 원버튼으로 진행되기에
                            //다른동작은 필요없음.
                            if (player)
                                player.lastInput = 'ArrowUp Down';
                            break;
                        default:
                            break;
                    }
                }
            });

            cvRef.current.addEventListener('touchend', e => {
                e.preventDefault();

                //캔버스 클릭한 좌표를 따와야 함.
                //화면 터치좌표 - 캔버스 위치좌표
                let cvRect: DOMRect = new DOMRect();
                if (cvRef.current)
                    cvRect = cvRef.current.getBoundingClientRect();

                if (game) {
                    let pos = { x: e.changedTouches[0].clientX - cvRect.x, y: e.changedTouches[0].clientY - cvRect.y };
                    let cv = cvRef.current;

                    let cvPos: { w: number, h: number } = { w: 0, h: 0 };
                    if (cv) cvPos = { w: cv.width, h: cv.height };

                    switch (game.screenState) {
                        case screenState.MAIN:
                            if (
                                (pos.x >= cvPos.w / 2 - 112 && pos.x <= cvPos.w / 2 - 112 + game.btnStart.width) &&
                                (pos.y >= cvPos.h / 2 + 32 && pos.y <= cvPos.h / 2 + 32 + game.btnStart.height)
                            ) {
                                //게임 시작 버튼 클릭
                                game.screenState = screenState.HOWTOPLAY;
                            } else if (
                                (pos.x >= cvPos.w / 2 + 48 && pos.x <= cvPos.w / 2 + 48 + game.btnRanking.width) &&
                                (pos.y >= cvPos.h / 2 + 32 && pos.y <= cvPos.h / 2 + 32 + game.btnRanking.height)
                            ) {
                                //랭킹 버튼 클릭
                                game.screenState = screenState.RANKING;
                            }
                            requestAnimationFrame(animate);
                            break;
                        case screenState.HOWTOPLAY:
                            //게임의 초기화가 완료되면 인겜으로 넘김.
                            if (player && player.init()) {
                                game.screenState = screenState.INGAME;
                            }
                            requestAnimationFrame(animate);
                            break;
                        case screenState.INGAME:
                            if (player)
                                player.lastInput = 'ArrowUp Up';
                            break;
                        case screenState.RESULT:
                            // game.init();
                            if (player?.lastInput === 'ArrowUp Up') {
                                player.lastInput = '';
                                requestAnimationFrame(animate);
                                break;
                            }
                            game.screenState = screenState.MAIN;
                            requestAnimationFrame(animate);
                            break;
                        case screenState.RANKING:
                            game.screenState = screenState.MAIN;
                            requestAnimationFrame(animate);
                            break;
                    }
                }
            });
        }

        // window.addEventListener("keydown", (e) => {
        //     switch (e.key) {
        //         case "r":
        //             //화면 회전
        //             //완성은 모바일게임 '놈'처럼 화면을 돌려가야 함.
        //             if (player)
        //                 player.rotate();
        //             // let cv = cvRef.current;
        //             // if (cv) {

        //             //     rotateState++;
        //             //     cv.style.animation = `canvasRotate${rotateState % 4} 1.5s ease-in-out both`;

        //             //     cv.width = rotateState % 2 === 1 ? 590 : 345;
        //             //     cv.height = rotateState % 2 === 1 ? 345 : 590;

        //             //     if (rotateState % 4 === 0) {
        //             //         rotateState = 0;
        //             //     }

        //             //     bgs.forEach(v => {
        //             //         if (cv) {
        //             //             v.y = cv.height - v.imgHeight - 60;
        //             //         }
        //             //     });

        //             //     if (platform) {
        //             //         platform.height = cv.height - 35;
        //             //     }
        //             //     if (objs) {
        //             //         objs.minHeight = cv.height - 35;
        //             //     }

        //             // }
        //             break;
        //         default:
        //             break;
        //     }
        // });
    }


    let lastTime: number = 0;
    // let times: number = 0;
    let animateId: number = 0;
    const animate = (timeStamp: number) => {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        // times += deltaTime;
        let cv = cvRef.current;
        if (cv) {
            ClearCanvas(cv);
            if (game) {
                game.draw();
                let p = new PlayState(cv);
                if (game.screenState === screenState.INGAME) {
                    if (player) {
                        bgs.forEach(v => {
                            v.draw();
                            v.move();
                        });

                        platform?.draw();
                        platform?.move();

                        objs?.draw(deltaTime);
                        objs?.move();
                        player.update();
                        // if (input)
                        //     player.update(input);
                        player.draw(deltaTime);

                        p.nextLine();
                        p.draw(`Life : ${game?.gameState.life}`);
                        p.nextLine();
                        p.draw(`Score : ${game?.gameState.score}`);
                        p.nextLine();
                        p.draw(`Stage : ${player.rotateState + 1}`);
                    }
                    //화면이 인게임중일때만 프레임 다시그림.
                    animateId = requestAnimationFrame(animate);
                }
            }
        }
    }


    return (
        <div style={{ alignItems: 'center', height: '600px' }}>
            <canvas ref={cvRef} id='gameCanvas' />
        </div>
    );
};

const screenState = {
    MAIN: 1,
    HOWTOPLAY: 2,
    INGAME: 3,
    PAUSE: 4,
    RESULT: 5,
    RANKING: 6,
}

class Game {
    public cv!: HTMLCanvasElement;
    public rotateState: number = 0;
    public scoreMultiflier: number = 1;
    // public rad: number = 0;
    public gameState = { life: 3, score: 0, };
    public btnStart: HTMLImageElement;
    public btnRanking: HTMLImageElement;
    public imgHTP: HTMLImageElement;

    public screenState: number = screenState.MAIN;
    // public animateID: number = 0;

    // private gameOverScreen
    // private gameOverScreen:HTMLImageElement = new Image();

    constructor(ctx: HTMLCanvasElement) {
        this.cv = ctx;

        let imgPath = 'http://dopeboyzclub.ddns.net:7733/testimg/';

        let btnStart = new Image();
        let btnRanking = new Image();
        let imgHTP = new Image();

        btnStart.src = `${imgPath}btnStart.png`;
        btnRanking.src = `${imgPath}btnRanking.png`;
        imgHTP.src = `${imgPath}howtoplay.png`

        this.btnStart = btnStart;
        this.btnRanking = btnRanking;
        this.imgHTP = imgHTP;

        // this.gameOverScreen.crossOrigin = 'anonymous';
    }


    init() {
        this.gameState = {
            life: 3,
            score: 0,
        }
        this.scoreMultiflier = 1;
    }

    setGameOverScreen(src: string) {
        console.log(src);
        // this.gameOverScreen.src = src;
    }

    draw() {


        switch (this.screenState) {
            case screenState.MAIN:
                this.showMain();
                break;
            case screenState.HOWTOPLAY:
                this.showHowToPlay();
                break;
            case screenState.INGAME:
                this.showInGame();
                break;
            case screenState.PAUSE:
                this.showPause();
                break;
            case screenState.RESULT:
                this.showResult();
                break;
            case screenState.RANKING:
                this.showRanking();
                break;

            default:
                break;
        }
    }

    showMain() {
        let ctx = this.cv.getContext('2d');
        if (ctx) {
            ctx.drawImage(this.btnStart, this.cv.width / 2 - 112, this.cv.height / 2 + 32);
            ctx.drawImage(this.btnRanking, this.cv.width / 2 + 48, this.cv.height / 2 + 32);
        }
    }

    showHowToPlay() {
        let ctx = this.cv.getContext('2d');
        if (ctx) {
            ctx.drawImage(this.imgHTP, 0, this.cv.height / 2 - this.imgHTP.height / 2);

            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            ctx.font = `25px "Noto Sans KR"`;
            ctx.fillStyle = 'black';
            ctx.fillText(
                "조작법 : 점프 -> 화면 터치",
                this.cv.width / 2,
                this.cv.height - 75
            );

            ctx.font = `20px "Noto Sans KR"`;
            // ctx.fillStyle = 'red';
            ctx.fillText(
                "스마트폰 '자동회전' 옵션을 꺼주세요.",
                this.cv.width / 2,
                this.cv.height - 40
            );

            ctx.fillText(
                "터치하여 시작합니다.",
                this.cv.width / 2,
                this.cv.height - 15
            );
            // ctx.drawImage
        }
    }

    showInGame() {

    }

    showPause() {

    }

    showResult() {
        let ctx = this.cv.getContext('2d');
        if (ctx) {
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            ctx.font = `25px "Noto Sans KR"`;
            ctx.fillStyle = 'black';
            ctx.fillText('결과', 200, 250);
            ctx.fillText(`획득점수 : ${this.gameState.score}`, 200, 300);
        }
    }

    showRanking() {
        let ctx = this.cv.getContext('2d');
        if (ctx) {
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            ctx.font = `25px "Noto Sans KR"`;
            ctx.fillStyle = 'black';
            ctx.fillText('랭킹', 50, 50);
        }
    }
}

class Player {
    public states = [
        new IdleState(this),
        new RunState(this),
        new JumpUpState(this),
        new JumpDownState(this),
        new FallDownState(this),
        new HurtState(this),
        new DeathState(this),
        new FallUpState(this),
    ];
    // public charStates: boolean[] = [];
    public currentState = this.states[1];
    public width = 48;
    public height = 48;
    public x = 0;
    public y = 0;
    public cv!: HTMLCanvasElement;
    // public sx: number = 0;
    // public sy: number = 0;
    // public sw: number = 0;
    // public sh: number = 0;
    public frameX: number = 0;
    public frameY: number = 1;
    public maxFrame: number = maxFrame.IDLE;
    public startFrame: number = startFrame.IDLE;
    public speed: number = 0;
    public vy: number = 0;
    public gf: number = 0.5;

    public fps = 18;
    public frameTimer = 0;
    public frameInterval = 1000 / this.fps;

    public ground: Platform;
    public objs: Objects;
    public game: Game;
    public bgs: Background[];
    public speedX: number = 0.1;
    public isInvincible: boolean = false;
    private showCharacter: boolean = true;

    public invinTimer = 0;
    private invinInterval = 1000 / this.fps;
    public invinTick = 0;
    private invinTime = 10;

    public lastInput: string = '';
    public rotateState: number = 0;

    constructor(
        cv: HTMLCanvasElement,
        public img: HTMLImageElement,
        pf: Platform,
        objs: Objects,
        game: Game,
        bgs: Background[],
    ) {
        this.cv = cv;
        this.ground = pf;
        this.x = this.width;
        this.y = this.cv.height - this.height - 35;
        this.objs = objs;
        this.game = game;
        this.bgs = bgs;

        // console.log(this.ground.height);
    }
    init() {
        if (this.game.screenState !== screenState.INGAME) {
            this.game.init();
            this.ground.init();
            this.objs.init();

            this.rotateState = 0;
            this.cv.style.animation = '';
            this.cv.width = 345;
            this.cv.height = 590;
            this.bgs.forEach(v => {
                v.y = this.cv.height - v.imgHeight - 60;
            });

            if (this.ground) {
                this.ground.height = this.cv.height - 35;
            }
            if (this.objs) {
                this.objs.minHeight = this.cv.height - 35;
            }
        }


        this.currentState = this.states[3];
        this.x = 0;
        this.y = this.cv.height / 2;
        this.frameX = 0;
        this.frameY = 3;
        this.maxFrame = maxFrame.JUMP_DOWN;
        this.startFrame = startFrame.JUMP_DOWN;
        this.speed = 0;
        this.vy = 0;
        this.gf = 0.5;
        this.isInvincible = false;
        this.showCharacter = true;
        this.frameTimer = 0;
        this.invinTick = 0;
        this.invinTimer = 0;
        this.lastInput = '';







        return true;
    }
    rotate() {
        //화면 회전
        //완성은 모바일게임 '놈'처럼 화면을 돌려가야 함.
        this.rotateState++;
        this.cv.style.animation = `canvasRotate${this.rotateState % 4} 1.5s ease-in-out both`;

        this.cv.width = this.rotateState % 2 === 1 ? 590 : 345;
        this.cv.height = this.rotateState % 2 === 1 ? 345 : 590;

        // if (this.rotateState % 4 === 0) {
        //     this.rotateState = 0;
        // }


        this.bgs.forEach(v => {
            v.y = this.cv.height - v.imgHeight - 60;
            // v.speedx += this.rotateState * -0.01;
        });

        if (this.ground) {
            this.ground.height = this.cv.height - 35;
            this.ground.speed = 3 + this.rotateState * 0.1;
        }
        if (this.objs) {
            this.objs.minHeight = this.cv.height - 35;
            this.objs.speed = 3 + this.rotateState * 0.1;
        }

        this.game.scoreMultiflier = 1 + this.rotateState * 0.1;

        this.ground.createPlatform();
        this.objs.createNewObjs();


        this.init();
    }

    draw(deltaTime: number) {
        let ctx = this.cv.getContext('2d');
        if (ctx) {

            if (this.frameTimer > this.frameInterval) {
                if (this.frameX < this.maxFrame) this.frameX++;
                else this.frameX = this.startFrame;
                this.frameTimer = 0;
            } else {
                this.frameTimer += deltaTime;
            }

            if (this.isInvincible) {
                if (this.invinTimer > this.invinInterval) {
                    if (this.invinTick < this.invinTime) {
                        this.showCharacter = !this.showCharacter;
                        this.invinTick++;
                    }
                    else {
                        this.invinTick = 0;
                        this.isInvincible = false;
                        this.showCharacter = true;
                    }
                    this.invinTimer = 0;
                } else {
                    this.invinTimer += deltaTime;
                }
            }

            if (this.showCharacter)
                ctx.drawImage(this.img,
                    this.width * this.frameX + this.frameX + 1,
                    this.height * this.frameY + this.frameY + 1,
                    this.width,
                    this.height,
                    this.x,
                    this.y,
                    this.width,
                    this.height
                );
            // ctx.strokeStyle = 'red';
            // // ctx.strokeRect(this.x,this.y,24,24);
            // ctx.strokeRect(this.x + this.width / 3, this.y + this.height - 40, this.width / 3, 40);
        }
    }

    update() {
        this.currentState.handleInput(this.lastInput);

        if (this.currentState.state !== 'Hurt' && this.ground.speed === 0) {
            this.objs.speed = 0;
            this.speed = 3 + this.rotateState * 0.1;
        }

        if (!this.isInvincible) {
            let ck = this.objs.checkCollision({
                xmin: this.x + this.width / 3,
                xmax: this.x + this.width / 3 + this.width / 3,
                ymin: this.y + this.height - 40,
                ymax: this.y + this.height,
            });

            if (ck) {
                //오브젝트에 부딪혔을 경우
                if (ck.type === 0) {
                    this.setState(states.HURT);
                }
                this.objs.processCollision(ck);
            }
        }

        //장애물에 부딪혔을때 넉백효과 이후
        //원상태로 복구
        if (this.currentState.state === 'Hurt') {
            if (this.ground.speed === 0) {
                this.speed += this.speedX;
            } else if (this.speed === 0) {
                this.ground.speed += this.speedX;
                this.objs.speed += this.speedX;
            }
        }

        //x move
        this.x += this.speed;

        //화면보다 뒤에 위치할수는 없음
        if (this.x <= 0) {
            this.x = 0;
        }
        else if (this.x >= this.cv.width - this.width + 12) {
            //벽에 도달했을때
            if (this.currentState.state === 'JumpUp' || this.currentState.state === 'JumpDown') {
                //점프상태면 회전시킴
                //점프 높이에 따라 추가점수 부여
                this.game.gameState.score += Math.floor((this.cv.height - this.height - 35 - this.y) * this.game.scoreMultiflier);
                this.rotate();
            } else {
                //벽에 박으면 아파요..
                this.game.gameState.life--;
                this.setState(states.HURT);
            }
        }

        //y move
        this.y += this.vy;



        if (this.isOnGround()) {
            //땅 위면 하강속도 초기화
            this.vy = 0;
        }
        else {
            //아니면 하강속도 증가
            this.vy += this.gf;
        }




        //플랫폼위에 없는데 상승중이지 않으면 추락상태로 변경
        if (!this.ground.isOnPlatformX(this.x + this.width / 2) &&
            this.vy >= 0 &&
            this.currentState.state !== 'JumpDown' &&
            this.currentState.state !== 'JumpUp' &&
            this.currentState.state !== 'Fall' &&
            true
        ) {
            this.setState(states.FALL);
        }

        //깔쌈하게 슛하면 추락상태로 변경
        if (this.y > this.cv.height - this.height - 35 &&
            !this.ground.isOnPlatformX(this.x + this.width / 2) &&
            this.currentState.state === 'JumpDown') {
            this.setState(states.FALL);
        }

        //캐릭터 위치보정
        //발판보다 밑에 위치하는걸 방지
        if (this.y > this.cv.height - this.height - 35 &&
            this.currentState.state !== 'Fall' &&
            this.currentState.state !== 'FallUp') {
            this.y = this.cv.height - this.height - 35;
        }

        //추락 중
        //화면 바깥으로 떨어지면 위치 초기화
        if (this.y > this.cv.height) {
            // this.y = this.cv.height - this.height - 35;
            // this.setState(states.JUMP_UP);
            this.vy = -10;

        }


        //체력 다 까이면 죽어야죠...
        if (this.game.gameState.life <= 0) {
            this.rotateState = 0;
            this.cv.style.animation = '';
            this.cv.width = 345;
            this.cv.height = 590;
            this.game.screenState = screenState.RESULT;
        }

    }

    setState(state: number) {
        this.currentState = this.states[state];
        this.currentState.enter();
    }

    isOnGround(): boolean {
        return this.ground.isOnPlatformX(this.x + this.width / 2) &&
            this.y >= (this.cv.height - this.height - 35) &&
            this.currentState.state !== 'Fall' &&
            this.currentState.state !== 'FallUp';
        //렉걸리면 지하로 사라져요... 해결해야함.
        //해결했을수도...?
        // return this.y >= this.cv.height - this.height;
    }
}

class Background {
    private img: HTMLImageElement[] = [];
    private cv!: HTMLCanvasElement;
    private gap: number = 0;
    public speedx: number = 0;
    private speedy: number = 0;
    private posX: number = 0;
    private xmin: number = 0;
    private xmax: number = 0;
    private posY: number = 0;
    private ymin: number = 0;
    private ymax: number = 0;
    private objPerScreen: number = 1;
    private orderNum: number;
    public imgHeight: number;
    public imgWidth: number;
    constructor(
        img: HTMLImageElement,
        cv: HTMLCanvasElement,
        private data: bgImg,
    ) {

        this.cv = cv;
        this.imgWidth = img.width;
        this.imgHeight = img.height;


        this.img.push(img);
        this.img.push(img);
        this.speedx = data.speedx ?? 0;
        this.speedy = data.speedy ?? 0;
        this.posX = data.x ?? 0;
        this.xmin = data.xmin ?? 0;
        this.xmax = data.xmax ?? 0;
        this.posY = data.y ?? 0;
        this.ymin = data.ymin ?? 0;
        this.ymax = data.ymax ?? 0;

        this.gap = RandomNumber(this.xmin, this.xmax);

        this.orderNum = data.order;
    }
    get order() { return this.orderNum; }
    set order(number) { this.orderNum = number; }
    set y(value: number) { this.posY = value; }


    draw() {
        let ctx = this.cv.getContext('2d');
        if (ctx) {
            ctx.drawImage(this.img[0], this.posX, this.posY);
            ctx.drawImage(this.img[1], this.posX + this.img[1].width, this.posY);
        }
    }

    move() {
        this.posX += this.speedx;
        if (this.posX < -this.img[0].width)
            this.posX = 0;
    }



}


type objs = {
    type: number,
    size: { width: number, height: number },
    pos: { x: number, y: number },
    color: string,
    frame?: number,
}

class Objects {
    private cv!: HTMLCanvasElement;
    private objArray: objs[] = [];
    public gap: number = 0;
    private gmin: number = 100;
    private gmax: number = 250;
    public minHeight: number = 35;
    public speed: number = 3;
    public imgs: HTMLImageElement[] = [];
    private pf: Platform;
    private game: Game;

    public fps = 30;
    public frameTimer = 0;
    public frameInterval = 1000 / this.fps;
    private fx: number = 0;

    constructor(cv: HTMLCanvasElement, pf: Platform, game: Game) {

        this.cv = cv;
        this.objArray = [];
        this.pf = pf;
        this.game = game;
        this.createNewObjs();
        this.minHeight = this.cv.height - 35;

        const imgPreifx = 'http://dopeboyzclub.ddns.net:7733/testimg/';

        let img0 = new Image(24, 24);
        img0.src = `${imgPreifx}run_obj0.png`;
        let img1 = new Image(24, 24);
        img1.src = `${imgPreifx}run_obj1.png`;
        let img2 = new Image(24, 24);
        img2.src = `${imgPreifx}run_obj2.png`;
        let img3 = new Image();
        img3.src = `${imgPreifx}jump.png`;

        this.imgs.push(img0, img1, img2, img3);

    }

    init() {
        this.speed = 3;
        this.createNewObjs();
    }

    draw(deltaTime: number) {
        if (this.frameTimer > this.frameInterval) {
            if (this.fx < 5) this.fx++;
            else this.fx = 0;
            this.frameTimer = 0;
        } else {
            this.frameTimer += deltaTime;
        }

        let ctx = this.cv.getContext('2d');
        this.objArray.forEach(v => {
            if (ctx) {
                ctx.save();

                if (v.type !== 1)
                    ctx.drawImage(this.imgs[v.type], v.pos.x, this.minHeight - v.size.height * v.pos.y, v.size.width, v.size.height);
                else {
                    ctx.drawImage(
                        this.imgs[v.type],
                        170 * this.fx,
                        0,
                        170,
                        170,
                        v.pos.x,
                        this.minHeight - v.size.height * v.pos.y,
                        v.size.width,
                        v.size.height
                    );
                }

                ctx.restore();
            }
        });


    }

    move() {
        if (this.objArray.length > 0) {
            //오브젝트들 좌로 쪼~금 이동
            this.objArray.forEach(v => {
                v.pos.x -= 0.8 * this.speed;
            });


            //화면을 벗어나는 오브젝트는 삭제
            if (this.objArray[0].pos.x + this.objArray[0].size.width < 0)
                this.objArray.shift();
        }
    }

    createNewObjs() {
        this.objArray = [];

        let lastObj: objs | undefined;// = this.objArray[this.objArray.length - 1];
        outerLoop: do {
            let t = RandomNumber(1, 100);
            let size = { width: 24, height: 24 };
            let pos = {
                x: this.cv.width + this.gap,
                y: 1
            };
            let color: string;

            if (lastObj) {
                pos.x = lastObj.pos.x + this.gap;
            }

            while (!this.pf.isOnStablePlatform(pos.x)) {
                pos.x += 10;
                if (pos.x > this.pf.totalLength) {
                    t = objType.JUMP;
                    pos.x = this.pf.totalLength - 96;
                    pos.y = 2;
                    size = { width: 48, height: 48 }
                    color = 'black';
                    this.objArray.push(
                        {
                            type: t,
                            size,
                            pos,
                            color
                        }
                    )

                    break outerLoop;
                }
            }

            let isAir = RandomBoolean();

            if (isAir) {
                pos.y = 4;
            }

            if (t < 50) {
                color = '#F00';
                t = objType.OBSTACLE;

                this.objArray.push({
                    type: objType.POINT,
                    size: { width: 24, height: 24 },
                    pos: {
                        x: pos.x,
                        y: !isAir
                            ? RandomNumber(3, 4)
                            : 1
                    },
                    color: '#0F0',
                    frame: 0,
                });

            } else if (t < 99) {
                color = '#0F0';
                t = objType.POINT;

            } else {
                color = '#00F';
                t = objType.EXTRALIFE;
            }

            let data: objs;

            if (t === 1) {
                data = {
                    type: t,
                    size,
                    pos,
                    color,
                    frame: 0,
                }
            }
            else {
                data = {
                    type: t,
                    size,
                    pos,
                    color,
                }
            }

            this.gap = RandomNumber(this.gmin, this.gmax);

            this.objArray.push(data);

            lastObj = this.objArray[this.objArray.length - 1];
            // console.log(lastObj.pos.x, this.pf.isOnStablePlatform(lastObj.pos.x));
        } while (true);
    }

    checkCollision(d: { xmin: number, xmax: number, ymin: number, ymax: number }) {
        for (const v of this.objArray) {
            let vpy = this.minHeight - v.size.height * v.pos.y;
            if (
                (v.pos.x <= d.xmax && v.pos.x + v.size.width >= d.xmin) &&
                (vpy <= d.ymax && vpy + v.size.height >= d.ymin)
            ) {

                return v;
            }
        }

        return undefined;
    }
    processCollision(v: objs) {
        let index = this.objArray.indexOf(v);
        if (v.type !== objType.JUMP)
            this.objArray.splice(index, 1);

        switch (v.type) {
            case objType.OBSTACLE:
                this.game.gameState.life--;
                break;
            case objType.POINT:

                this.game.gameState.score += 10 * this.game.scoreMultiflier;
                break;
            case objType.EXTRALIFE:
                if (this.game.gameState.life < 5)
                    this.game.gameState.life++;
                else
                    this.game.gameState.score += 100;
                break;
            default:
                break;
        }

        // if (this.game.gameState.life <= 0) {
        //     cancelAnimationFrame(this.game.animateID);
        //     this.game.showResult();
        // }
        // console.log(v);
        // console.log(this.game.gameState);
    }
}

const objType = {
    OBSTACLE: 0,
    POINT: 1,
    EXTRALIFE: 2,
    JUMP: 3,
}

class Platform {
    private cv!: HTMLCanvasElement;
    private gl: HTMLImageElement;
    private gc: HTMLImageElement;
    private gr: HTMLImageElement;
    public speed = 3;
    private gap = 32;
    public height;
    private platforms: {
        x: number,
        length: number,
    }[] = [];
    public totalLength = 0;
    private imgPath = 'http://dopeboyzclub.ddns.net:7733/testimg/';
    constructor(
        cv: HTMLCanvasElement,
    ) {
        this.cv = cv;
        let gl = new Image();
        let gc = new Image();
        let gr = new Image();


        let imgSrc = [
            `${this.imgPath}gl.png`,
            `${this.imgPath}gc.png`,
            `${this.imgPath}gr.png`,
        ];

        gl.src = imgSrc[0];
        gc.src = imgSrc[1];
        gr.src = imgSrc[2];

        gl.width = 61;
        gc.width = 128;
        gr.width = 61;

        this.gl = gl;
        this.gc = gc;
        this.gr = gr;

        this.height = this.cv.height - 35;

        this.createPlatform();
    }

    init() {
        // if(this.game.)
        this.speed = 3;

        this.createPlatform();
    }
    // get Platform() { return this.platforms; }

    loadImage() {

        let imgSrc = [
            `${this.imgPath}gl.png`,
            `${this.imgPath}gr.png`,
            `${this.imgPath}gc.png`
        ];

        const loadImg = (src: string) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = () => resolve(img);
            });
        }

        const loadAllImg = async () => {
            const p = imgSrc.map(v => loadImg(v));
            let m = await Promise.allSettled(p);
        }

        loadAllImg();

    }

    createPlatform() {
        // let lastX: number = this.cv.width;
        this.platforms = [];

        let lastX: number = 0;
        this.platforms.push({ x: lastX, length: 5 });
        lastX += this.gl.width + this.gc.width * 5 + this.gr.width + this.gap
        for (let i = 0; i < 10; i++) {
            let length = RandomNumber(1, 5);
            let data = { x: lastX, length: length };
            this.platforms.push(data);
            // console.log(length, lastX);
            lastX += this.gl.width + this.gc.width * length + this.gr.width + this.gap;
        }
        this.platforms.push({ x: lastX, length: 5 });

        // jumpImg.width = 32;
        // jumpImg.height = 32;

        lastX += this.gl.width + this.gc.width * 5 + this.gr.width + this.gap;
        this.totalLength = lastX;
    }

    draw() {
        let ctx = this.cv.getContext('2d');

        this.platforms.forEach(v => {
            if (ctx) {
                ctx.drawImage(this.gl, v.x, this.height);

                for (let i = 0; i < v.length; i++) {
                    ctx.drawImage(this.gc, v.x + this.gl.width + this.gc.width * i, this.height);
                }

                ctx.drawImage(this.gr, v.x + this.gl.width + this.gc.width * v.length, this.height - 2);

            }
        });

        if (ctx) {
            ctx.fillStyle = 'red';
            let max = this.getBoundary(this.platforms[this.platforms.length - 1]).xmax - this.cv.width;
            let per = this.totalLength - this.cv.width;
            // console.log(max/per);
            // console.log(1-max/per);
            let pt = (1 - max / per) * 100 * (this.cv.width / 100);

            ctx.fillRect(0, 0, pt, 10);
        }
    }

    move() {
        this.platforms.forEach(v => {
            v.x += -0.8 * this.speed;
        });

        // if (this.getBoundary(this.platforms[0]).xmax < 0) {
        //     this.platforms.shift();
        // }

        if (this.getBoundary(this.platforms[this.platforms.length - 1]).xmax <= this.cv.width) {
            this.speed = 0;
        }
    }

    getBoundary(p: { x: number, length: number }) {
        let xmin = p.x;
        let xmax = p.x + this.gl.width + this.gc.width * p.length + this.gr.width;
        let ymin = this.height;
        let ymax = this.height + this.gl.height;
        return { xmin, xmax, ymin, ymax };
    }

    isOnPlatformX(x: number) {
        for (const v of this.platforms) {
            let b = this.getBoundary(v);
            if (b.xmin <= x && b.xmax >= x) {
                // console.log(x,b.xmin,b.xmax);
                return true;
            }
        }
        return false;
    }

    isOnStablePlatform(x: number) {
        for (const v of this.platforms) {
            let b = this.getBoundary(v);
            if (b.xmin + this.gl.width <= x && b.xmax - this.gr.width >= x) {
                return true;
            }
        }
        return false;
    }



}

// class InputHandler {

//     public lastKey: string = '';
//     constructor() {
//         this.lastKey = '';

//         // window.addEventListener('keydown', (e) => {
//         //     this.lastKey = `${e.key} Down`;
//         //     // console.log(this.lastKey);
//         // });

//         // window.addEventListener('keyup', (e) => {
//         //     this.lastKey = `${e.key} Up`;
//         //     // console.log(this.lastKey);
//         // });


//         // let cv = document.getElementById('gameCanvas');
//         // if (cv) {
//         //     cv.addEventListener('touchstart', e => {
//         //         this.lastKey = `ArrowUp Down`;
//         //         console.log(this.lastKey);
//         //     }); 
//         // }
//         window.addEventListener('touchstart', e => {
//             e.preventDefault();
//             this.lastKey = `ArrowUp Down`;
//             console.log(this.lastKey);
//         });

//         // document.getElementById('gameCanvas')?.addEventListener('touchstart',e=>{
//         //     this.lastKey = 'ArrowUp Down';
//         //     console.log(this.lastKey);
//         // });


//     }
// }


const states = {
    IDLE: 0,
    RUN: 1,
    JUMP_UP: 2,
    JUMP_DOWN: 3,
    FALL: 4,
    HURT: 5,
    DEATH: 6,
    FALLUP: 7,
    DASH_START: 8,
    DASH: 9,
    DASH_END: 10,
}
const maxFrame = {
    // IDLE: 5,
    IDLE: 9,
    RUN: 9,
    JUMP_UP: 2,
    JUMP_DOWN: 4,
    DASH_START: 2,
    DASH: 0,
    DASH_END: 2,
    HURT: 0,
    DEATH: 23,
}
const startFrame = {
    // IDLE: 0,
    IDLE: 2,
    RUN: 2,
    JUMP_UP: 0,
    JUMP_DOWN: 1,
    DASH_START: 0,
    DASH: 0,
    DASH_END: 0,
    HURT: 0,
    DEATH: 0,
}

class State {
    constructor(public state: string, public player: Player) { }
    enter() { this.player.frameX = 0; }
    handleInput(input: string) { }
}
class FallDownState extends State {
    constructor(public player: Player) {
        super('Fall', player);
    }
    enter(): void {
        super.enter();
        this.player.frameY = 3;
        this.player.maxFrame = maxFrame.JUMP_DOWN;
        this.player.startFrame = startFrame.JUMP_DOWN;
    }
    handleInput(input: string): void {
        //this.vy = -10;
        // if(this.player.vy >= 0) this.player.setState(states.JUMP_DOWN);
        if (this.player.y > this.player.cv.height) this.player.setState(states.FALLUP);
    }
}
class FallUpState extends State {
    constructor(public player: Player) {
        super('FallUp', player);
    }
    enter(): void {
        super.enter();
        this.player.frameY = 2;
        this.player.maxFrame = maxFrame.JUMP_UP;
        this.player.startFrame = startFrame.JUMP_UP;
        this.player.game.gameState.life--;
        this.player.vy = -10;
        this.player.isInvincible = true;
    }
    handleInput(input: string): void {
        if (this.player.vy >= 0) {
            this.player.setState(states.JUMP_DOWN);
        }
    }
}
class IdleState extends State {
    constructor(public player: Player) {
        super('Idle', player);
    }
    enter() {
        super.enter();
        this.player.frameY = 1;
        this.player.speed = 0;
        this.player.maxFrame = maxFrame.IDLE;
        this.player.startFrame = startFrame.IDLE;
        // this.player.setState(states.RUN);
    }
    handleInput(input: string) {
        if (input === "ArrowRight Down") this.player.setState(states.RUN);
        else if (input === "ArrowUp Down") this.player.setState(states.JUMP_UP);
    }
}
class RunState extends State {
    constructor(public player: Player) {
        super('Run', player);
    }
    enter() {
        super.enter();
        this.player.frameY = 1;
        this.player.speed = 0;
        //계속해서 달리므로 X좌표를 움직일 필요가 없다.
        // this.player.speed = 2;
        this.player.maxFrame = maxFrame.RUN;
        this.player.startFrame = startFrame.RUN;
    }
    handleInput(input: string) {
        if (input === "ArrowRight Up") this.player.setState(states.IDLE);
        else if (input === "ArrowUp Down") this.player.setState(states.JUMP_UP);

    }
}
class JumpUpState extends State {
    constructor(public player: Player) {
        super('JumpUp', player);
    }
    enter() {
        super.enter();
        this.player.frameY = 2;
        this.player.vy = -8;
        this.player.maxFrame = maxFrame.JUMP_UP;
        this.player.startFrame = startFrame.JUMP_UP;
    }
    handleInput(input: string) {
        if (this.player.vy >= 0) this.player.setState(states.JUMP_DOWN);
    }
}
class JumpDownState extends State {
    constructor(public player: Player) {
        super('JumpDown', player);
    }
    enter() {
        super.enter();
        this.player.frameY = 3;
        this.player.maxFrame = maxFrame.JUMP_DOWN;
        this.player.startFrame = startFrame.JUMP_DOWN;
    }
    handleInput(input: string) {
        if (this.player.isOnGround()) this.player.setState(states.IDLE);
    }
}
class HurtState extends State {
    constructor(public player: Player) {
        super('Hurt', player);
    }
    enter(): void {
        super.enter();
        this.player.frameY = 7;
        this.player.maxFrame = maxFrame.HURT;
        this.player.startFrame = startFrame.HURT;
        this.player.vy = -3;
        this.player.invinTick = 0;
        this.player.invinTimer = 0;
        this.player.isInvincible = false;
        // console.log("inHurt", this.player.speed, this.player.ground.speed, this.player.rotateState);
        if (this.player.ground.speed === 0) {
            this.player.speed = -3;// + this.player.rotateState * -0.1;
        }
        else {
            this.player.ground.speed = -3;// + this.player.rotateState * -0.1;
            this.player.objs.speed = -3;// + this.player.rotateState * -0.1;
        }
    }
    handleInput(input: string): void {
        // console.log("outHurt", this.player.rotateState)
        if (this.player.ground.speed === 0 && this.player.speed >= 0) {
            this.player.setState(states.IDLE);
            this.player.speed = 3 + this.player.rotateState * 0.1;
            this.player.ground.speed = 0;
            this.player.objs.speed = 0;
            this.player.isInvincible = true;
        } else if (this.player.speed === 0 && this.player.ground.speed >= 0) {
            this.player.setState(states.IDLE);
            this.player.speed = 0;
            this.player.ground.speed = 3 + this.player.rotateState * 0.1;
            this.player.objs.speed = 3 + this.player.rotateState * 0.1;
            this.player.isInvincible = true;
        }
        // if ((this.player.ground.speed === 0 && this.player.speed >= 0) ||
        //     (this.player.speed === 0 && this.player.ground.speed >= 0)) {
        //     this.player.setState(states.IDLE);
        // }

        // if (this.player.speed >= 0) this.player.setState(states.IDLE);
    }
}
class DeathState extends State {
    constructor(public player: Player) {
        super('Death', player);
    }
    enter(): void {
        super.enter();
        this.player.frameY = 8;
        this.player.vy = 0;
        this.player.speed = 0;
        this.player.ground.speed = 0;
        this.player.objs.speed = 0;
        this.player.maxFrame = maxFrame.DEATH;
        this.player.startFrame = startFrame.DEATH;
    }

    handleInput(input: string): void {

    }
}

export default PlayRun;