export class AppRouter {
  constructor({ prefix, middlewares, router }) {
    this.prefix = prefix;
    this.middlewares = middlewares;
    this.router = router;
  }
}
