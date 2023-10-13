export class PlayState {
    private _useOutline: boolean = false;        //외곽선 사용여부
    private _outcolor: string = 'white';         //외곽선 색
    public lineWidth: number = 1;                //선 두께
    public textAlign: CanvasTextAlign = 'start';
    public textBaseline: CanvasTextBaseline = 'top';
    constructor(
        private ctx: CanvasRenderingContext2D | HTMLCanvasElement,
        public x: number = 0,
        public y: number = 0,
        private size: number = 25,
        private color: string = 'black',
        private font: string = 'Noto Sans KR',
    ) {

    }
    useOutline(e: boolean) {
        this._useOutline = e;
    }
    setOutColor(e: string) {
        this._outcolor = e;
    }
    setFontSize(e: number) {
        this.size = e;
    }
    setFontFace(e: string) {
        this.font = e;
    }
    
    nextLine(){
        this.y += this.size*1.4;
    }


    draw(
        text: string
    ) {
        let ctx: CanvasRenderingContext2D;
        if (this.ctx instanceof CanvasRenderingContext2D) {
            ctx = this.ctx;
        }
        else {
            ctx = this.ctx.getContext('2d') as CanvasRenderingContext2D;
        }
        ctx.save();

        ctx.textAlign = this.textAlign;
        ctx.textBaseline = this.textBaseline;
        ctx.fillStyle = this.color;
        ctx.font = `${this.size}px "${this.font}"`;
        if (this._useOutline) {
            ctx.strokeStyle = this._outcolor;
            ctx.lineWidth = this.lineWidth;
            ctx.strokeText(text, this.x, this.y);
        }
        ctx.fillText(text, this.x, this.y);

        ctx.restore();
    }

}

export const ClearCanvas = (e: HTMLCanvasElement | CanvasRenderingContext2D) => {
    if (e instanceof HTMLCanvasElement) {
        let ctx = e.getContext('2d');
        if (ctx) {
            let num = e.width>e.height ? e.width : e.height;
            ctx.clearRect(0, 0, num,num);
        }
    }
    else {
        let cv = e.canvas;
        let num = cv.width>cv.height ? cv.width : cv.height;
        e.clearRect(0, 0, num,num);
    }
}