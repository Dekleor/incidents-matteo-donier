export class Incident {
  get id(): number {
    return this.$id;
  }

  set id(value: number) {
    this.$id = value;
  }

  get titre(): string {
    return this.$titre;
  }

  set titre(value: string) {
    this.$titre = value;
  }

  get email(): string {
    return this.$email;
  }

  set email(value: string) {
    this.$email = value;
  }

  get description(): string {
    return this.$description;
  }

  set description(value: string) {
    this.$description = value;
  }

  get level(): string {
    return this.$level;
  }

  set level(value: string) {
    this.$level = value;
  }

  get type(): string {
    return this.$type;
  }

  set type(value: string) {
    this.$type = value;
  }

  get progress(): number {
    return this.$progress;
  }

  set progress(value: number) {
    this.$progress = value;
  }

  get dateCreation(): Date {
    return this.$dateCreation;
  }

  set dateCreation(value: Date) {
    this.$dateCreation = value;
  }

  get dateModification(): Date {
    return this.$dateModification;
  }

  set dateModification(value: Date) {
    this.$dateModification = value;
  }

  get open(): boolean {
    return this.$open;
  }

  set open(value: boolean) {
    this.$open = value;
  }

  constructor( private $id: number,
               private $titre: string,
               private $email: string,
               private $description: string,
               private $level: string,
               private $type: string,
               private $progress: number,
               private $dateCreation: Date,
               private $dateModification: Date,
               private $open = true) {
  }
}
