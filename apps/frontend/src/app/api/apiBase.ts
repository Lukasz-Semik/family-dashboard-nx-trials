export class ApiBase {
  private basePath = 'http://localhost:3333';

  protected getApiPath(path) {
    return `${this.basePath}${path}`;
  }
}
