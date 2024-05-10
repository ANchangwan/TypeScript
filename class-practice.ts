type Words ={
    [key:string]:string;
}

interface Data{
    term:string,
    definition:string
}

class Dict {
    public words:Words;
    constructor(){
        this.words ={}
    }
    add(word:Word){

        return this.words[word.term] = word.def;
    }
    get(word:string){
        return this.words[word];
    }
    delete(word:string){
        return delete this.words[word];
    }
    count(){
        return Object.keys(this.words).length;
    }
    showAll(){
        Object.keys(this.words).forEach(word =>{
            console.log(word);
        })
        return;
    }
    update(before:string, after:string){
        if(!this.words[before]) return "Don't exist word";
        this.words[after] = this.words[before];
        delete this.words[before];
        return this.words;
    }
    exist(word:string){
        if(Object.keys(this.words).includes(word)) return "Exist";
        return "Don't Exist";
    }
    bulkAdd(word:Data[]) {
        word.map(v =>this.words[v.term] = v.definition);
        return this.words;
    }
    bulkDelete(word:string[]){
        word.map(v => delete this.words[v]);
        return;
    }
    upsert(word:Word){
        if(!this.words[word.term]) this.words[word.term] = word.term;
        this.words[word.term] = word.def;
        return;
    }
}


class Word{
    constructor(
        public term:string,
        public def:string
    ){}
}

const word = new Word("깍두기","한국의 음식");
const word2 = new Word("김민주", "바보");
const dict = new Dict();

dict.add(word);
dict.add(word2);
// dict.showAll();
// dict.showAll();
// console.log(dict.words);

const data:Data[] = [{term:"김치", definition:"대박이네~"}, {term:"아파트", definition:"비싸네~"}];
const deletData = ["김치", "아파트"];

dict.bulkAdd(data);

dict.bulkDelete(deletData);

const word3 = new Word("맥북", "애플");
const word4 = new Word("김민주", "천재");
dict.upsert(word3);
dict.upsert(word4);

console.log(dict.words);




