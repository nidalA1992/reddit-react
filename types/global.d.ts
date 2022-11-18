interface Window {
  __token__: string;
}

type Token = string;

declare var process : {
  env: {
    REACT_APP_CLIENT_SECRET: string;
    REACT_APP_CLIENT_ID: string;
    NODE_ENV: string;
    CLIENT_ID: string;
    CLIENT_SECRET: string;
  }
}

declare function require(id: string): any;
