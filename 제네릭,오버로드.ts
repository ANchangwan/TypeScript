interface SStorage<T>{
  [key:string]:T
};
interface Options {
    enableHighAccuracy: boolean,
    timeout: number,
    maximumAge: number,
};

type GetPosition = string | void;
type Watch = string | void;


interface Pos{
    longitude:number,
    latitude:number

};
type SSuccess = (pos:Pos) => void


class GGeolocation{
    constructor(public pos:Pos){
        this.pos = pos;
    }
   

    watchPosition(success:Pos):void;
    watchPosition(success:Pos,error:string):void;
    watchPosition(success:Pos,error:string,option:Options):void;

    watchPosition(success:Pos, error?:string, option?:Options):Watch{
        const crd = this.pos;
        if(error !== undefined) return "에러가 발생했습니다";
        if(option !== undefined) {
            console.log(option);
        }
        if(success.latitude === crd.latitude && success.longitude === crd.longitude){
            console.log("Congratulations, you reached the target");
        }

    }

    getCurrentPosition(successFn:SSuccess): GetPosition;
    getCurrentPosition(successFn: SSuccess,errorFn:() => string): GetPosition;
    getCurrentPosition(successFn: SSuccess,errorFn:() => string, options:Options): GetPosition;

    getCurrentPosition(successFn:SSuccess, errorFn?:() => string, options?:Options): GetPosition{
        if(errorFn !== undefined) {
            errorFn();
        };
        if(options !== undefined){
           
            console.log( `${options}`);
        };
        successFn(this.pos);
       
    };

    successFn(pos:Pos){
        const crd = pos;
        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
    }
    errorFn():string {
        return "에러가 발생했습니다.";
    }


}

class LocalStorage<T>{
    private storage:SStorage<T> = {};
    set(key:string, value:T){
        if(this.storage[key]) return "Exist the value in storage";
        return this.storage[key] = value;
    }
    get(key:string){
        if(!this.storage[key]) {
            return "Don't Exist storage value";
        };
        return this.storage[key];
    }
    clearItem(key:string){
         if(!this.storage[key]) return "Can't found storage value";
         return delete this.storage[key];
    }
    clear(){
        Object.keys(this.storage).forEach(key => delete this.storage[key]);
        return;
    }
}


