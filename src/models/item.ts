export class Item {
  constructor(public readonly id: number) {}

  log() {
    console.log(this.id);
  }
}
