export class Routes {
  constructor(public name: string, public prefix?: string) {}

  private generatePath() {
    return `${this.prefix ? `${this.prefix}/` : ''}${this.name}`;
  }

  public get path() {
    return `/${this.generatePath()}`;
  }

  public get fullPath() {
    return `/api/${this.generatePath()}`;
  }
}
