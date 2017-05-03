export class Movie  {

  private id: number;
  private title: string;
  private author: string;
  private descr: string;
  private favorite: boolean;
  private image: string;

constructor(obj:any, id?:number, t?:string, a?:string, d?:string, f?:boolean, i?:string) {

  this.id = id;
  this.title = t;
  this.author = a;
  this.descr = d;
  this.favorite = f;
  this.image = i;

  if (obj != null){
    this.toMovie(obj)
  }

}

  public toString(): string {
   return this.title
  }

  public getId() {
    return this.id
  }

  public getImage() {
    return this.image;
  }

  public getTitle() {
    return this.title;
  }

  public getAuthor() {
    return this.image;
  }

  public getDescr() {
    return this.descr;
  }

  public getFavorite() {
    return this.favorite
  }

  public invertFavorite() {
    this.favorite = !this.favorite
  }

  public toMovie(obj: any){
    this.id = obj['id'];
    this.title = obj['title'];
    this.author = obj['author'];
    this.descr = obj['descr'];
    this.favorite = obj['favorite'];
    this.image = obj['image'];

  }
}
