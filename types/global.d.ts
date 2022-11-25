interface Window {
  __token__: string;
}

type Token = string;

declare var process : {
  env: {
    NODE_ENV: string;
    CLIENT_ID: string;
    SECRET: string;
    REDIRECT: string;
  }
}

declare function require(id: string): any;
