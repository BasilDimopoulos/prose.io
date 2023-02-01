export default class Prose {
    public proseText: string;
    public source: string;
    public tags: string[];

    constructor(proseText: string, source: string, tags: string[]){
        this.proseText = proseText;
        this.source = source;
        this.tags = tags;
    }
}