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
interface Error{
    code:string,
    message:string
}

type SSuccess = (pos:Pos) => void;
type ErrorFn = () => string;

const error = {
    code:"400",
    message:"에러가 발생했습니다."
}



class GGeolocation{
    constructor(public pos:Pos){
        this.pos = pos;
    }
   
    watchPosition(success:Pos):void;
    watchPosition(success:Pos,error:Error):void;
    watchPosition(success:Pos,error:Error,option:Options):void;

    watchPosition(success:Pos, error?:Error, option?:Options):Watch{
        const crd = this.pos;
        if(error !== undefined) return `Error ${error.code}, ${error.message}`;
        if(option !== undefined) {
            console.log(`${option.timeout} ${option.maximumAge} ${option.enableHighAccuracy}`);
        }
        if(success.latitude === crd.latitude && success.longitude === crd.longitude){
            console.log("Congratulations, you reached the target");
        }

    }

    getCurrentPosition(successFn:SSuccess): GetPosition;
    getCurrentPosition(successFn: SSuccess,errorFn:ErrorFn): GetPosition;
    getCurrentPosition(successFn: SSuccess,errorFn:ErrorFn, options:Options): GetPosition;

    getCurrentPosition(successFn:SSuccess, errorFn?:ErrorFn, options?:Options): GetPosition{
        if(errorFn !== undefined) {
            errorFn();
        };
        if(options !== undefined){
           console.log(`${options.timeout} ${options.maximumAge} ${options.enableHighAccuracy}`);
        };
        successFn(this.pos);
       
    };

    successFn(pos:Pos):void{
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


