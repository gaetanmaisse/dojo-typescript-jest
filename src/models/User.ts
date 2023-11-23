export class User {
  constructor(
    private lastName: string,
    private firstName: string,
  ) {}

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public getSlug() {
    return `${this.firstName.toLowerCase()}-${this.lastName.toLowerCase()}`;
  }
}
