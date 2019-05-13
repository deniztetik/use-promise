interface IUsePromise {
  loading: boolean;
  result: any;
  error: Error | null;
  refresh: Function;
}
