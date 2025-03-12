export function calculateVolumeOfaPrism(
    width:number,
    length:number,
    height:number) { 
        if (length < 0){
            throw new Error("Length should be possitive");
        }
        if (length == 0){
            throw new Error("Length should not be zero");
        }
        if (height < 0){
            throw new Error("Hight should be possitive");
        }
        if (height == 0){
            throw new Error("Hight should not be zero");
        }
        if (width < 0){
            throw new Error("Width should be possitive");
        }
        if (width == 0){
            throw new Error("Width should not be zero");
        }
  
    return width * length * height
}