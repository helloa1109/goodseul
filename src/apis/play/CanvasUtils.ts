export class PlayState {
    private _useOutline: boolean = false;        //외곽선 사용여부
    private _outcolor: string = 'white';         //외곽선 색
    public lineWidth: number = 1;                //선 두께
    public textAlign: CanvasTextAlign = 'start';
    public textBaseline: CanvasTextBaseline = 'top';
    constructor(
        private ctx: CanvasRenderingContext2D,
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


    draw(
        text: string
    ) {
        let ctx = this.ctx;
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
            ctx.clearRect(0, 0, e.width, e.height);
        }
    }
    else {
        let cv = e.canvas;
        e.clearRect(0, 0, cv.width, cv.height);
    }
}