 
export const logfn = (message: string) => {
    console.log(message);
    
}

export class TestClass {
    constructor(){
        this.value = '1'
    }
    value: string

    get getValue(){
        return this.value
    }

    set setValue(value: string){
         this.value = value;
    }
}