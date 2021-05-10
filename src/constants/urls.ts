const APP_BASE = '';

class Route<T> {
  public base: string;
  public children: T;

  constructor(base: string, children: T) {
    this.base = base;
    this.children = children;
  }

  private linkFactory = (key?: keyof T, id = '') =>
    key && `${this.children[key]}`.replace('//', '').replace(':id', id);

  public getLink = (key?: keyof T, id = '') =>
    `${APP_BASE}/${this.base}/${this.linkFactory(key, id)}`;
}

export const ROUTES = {
  app: new Route('/', {
    root: '/',
    books: 'books',
  }),
  signIn: new Route('sign-in', {
    signIn: '/',
  }),
} as const;
