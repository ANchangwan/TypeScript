interface Config {
  url: string;
}
type num<T> = T

declare module "myPackage" {
  function init(config: Config): boolean;
  function exit(code: number): number;
}
