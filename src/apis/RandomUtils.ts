/**
 * A이상 B미만 정수를 반환
 * B를 입력하지 않을 경우 0이상 A미만 반환
 * @param {number} numA 
 * @param {number} numB 
 * @returns {number}
 */
export const RandomNumber = (numA: number, numB?: number): number => {
    if (numB === undefined)
        return Math.floor(Math.random() * (numA + 1));
    else
        return Math.floor(Math.random() * (numB - numA + 1)) + numA;
}

export const RandomColor = () => {
    const r: number = Math.floor(Math.random() * 256);
    const g: number = Math.floor(Math.random() * 256);
    const b: number = Math.floor(Math.random() * 256);
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}
export const RandomColorA = () => {
    const r: number = Math.floor(Math.random() * 256);
    const g: number = Math.floor(Math.random() * 256);
    const b: number = Math.floor(Math.random() * 256);
    const a: number = Math.random();
    return `rgba(${r},${g},${b},${a})`;
}

/**
 * 무작위의 Boolean 값을 리턴합니다.
 * 0~100 사이의 True 가중치를 입력할 수 있습니다.
 * 0 입력시 전부 false, 100 입력시 전부 True
 * 범위 외의 숫자를 입력시 50으로 간주합니다.
 * @param value 가중치
 * @returns 
 */
export const RandomBoolean = (value?: number) => {
    if (value && (value > 100 || value < 0)) {
        value = 50;
    }
    return RandomNumber(100) < (value || 50);
}

export const TimeDiff = (date: number): string => {
    const now: Date = new Date();
    const diff = now.getTime() - new Date(date).getTime();

    let num = Math.floor(diff / 1000);
    if (num < 10)
        return '방금 전';

    if (num < 60)
        return `${num}초 전`;

    num = Math.floor(diff / (1000 * 60));
    if (num < 60)
        return `${num}분 전`;

    num = Math.floor(diff / (1000 * 60 * 60));
    if (num < 24)
        return `${num}시간 전`;

    num = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (num < 30)
        return `${num}일 전`;
        

    num = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    return `${num}달 전`;
}

export const RandomKorStr = (min:number, max:number):string =>{
    const strData="우리모두힘차게앞으로나아가며지금의노력이미래의성과가될것입니다모든어려움을이겨내고모든목표를달성할수있을것입니다우리는함께협력하고성공을이뤄낼것이며더나은세상을만들것입니다";
    let strLength = RandomNumber(min,max);
    let result:string = "";
    
    for(let i=0;i<strLength;i++){
        const charPos = Math.floor(Math.random()*strData.length);
        result += strData.charAt(charPos);
    }

    return result;
}