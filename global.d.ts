
interface Window {
  ethereum?: {
    isMetaMask?: true;
    request: (...args: any[]) => Promise<any>;
    on?: (event: string, listener: (...args: any[]) => void) => void;
    removeListener?: (
      event: string,
      listener: (...args: any[]) => void
    ) => void;
  };
  web3?: Web3;
}
