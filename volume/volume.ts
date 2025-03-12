export function calculateVolumeOfaPrism(
    width:number,
    length:number,
    hight:number) { 
        if (length < 0){
            throw new Error("Length should be possitive");
        }
        if (hight < 0){
            throw new Error("Hight should be possitive");
        }
    return width * length * hight
}