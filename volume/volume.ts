export function calculateVolumeOfaPrism(
    width:number,
    length:number,
    hight:number) { 
        if (length < 0){
            throw new Error("Length should be possitive");
        }
        if (length == 0){
            throw new Error("Length should not be zero");
        }
        if (hight < 0){
            throw new Error("Hight should be possitive");
        }
        if (hight == 0){
            throw new Error("Hight should not be zero");
        }
        if (width < 0){
            throw new Error("Width should be possitive");
        }
        if (width == 0){
            throw new Error("Width should not be zero");
        }
    return width * length * hight
}