export class ApiBase {
  private basePath = 'http://localhost:3333';
  protected accessToken: string;

  protected getApiPath(path) {
    return `${this.basePath}${path}`;
  }
}
