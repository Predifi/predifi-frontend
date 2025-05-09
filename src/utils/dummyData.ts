interface Transaction {
  id: number;
  url: string;
  message: string;
  keyword: string;
  timestamp: string;
  addressFrom: string;
  amount: string;
  addressTo: string;
  success: boolean;
  reward: string | null;
}

const dummyData: Transaction[] = [
  {
    id: 1,
    url: "https://media.giphy.com/media/l4KibWpBGWchSqCRy/giphy.gif",
    message: "Up",
    keyword: "ETH",
    timestamp: "2025-04-23T12:33:21Z",
    addressFrom: "0xCF8e569A97C423952DdFf902375C7C76549A6A90",
    amount: "100",
    addressTo: "0x8aa395Ab97837576aF9cd6946C79024ef1acfdbE",
    success: true,
    reward: "14.3"
  },
  {
    id: 2,
    url: "https://media.giphy.com/media/3og0IPxMM0erATueVW/giphy.gif",
    message: "Down",
    keyword: "BTC",
    timestamp: "2025-04-22T18:45:10Z",
    addressFrom: "0xCF8e569A97C423952DdFf902375C7C76549A6A90",
    amount: "50",
    addressTo: "0x8aa395Ab97837576aF9cd6946C79024ef1acfdbE",
    success: false,
    reward: null
  },
  {
    id: 4,
    url: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
    message: "Down",
    keyword: "SOL",
    timestamp: "2025-04-20T22:15:37Z",
    addressFrom: "0xCF8e569A97C423952DdFf902375C7C76549A6A90",
    amount: "80",
    addressTo: "0x8aa395Ab97837576aF9cd6946C79024ef1acfdbE",
    success: false,
    reward: null
  },
  {
    id: 5,
    url: "https://media.giphy.com/media/xT5LMqkTQ4gYccxSYg/giphy.gif",
    message: "Up",
    keyword: "OP",
    timestamp: "2025-04-19T13:09:22Z",
    addressFrom: "0xDfB1239A85e443951CdFf999365C7C76999A6C91",
    amount: "200",
    addressTo: "0x8aa395Ab97837576aF9cd6946C79024ef1acfdbE",
    success: true,
    reward: "33.5"
  },
  {
    id: 6,
    url: "https://media.giphy.com/media/111ebonMs90YLu/giphy.gif", 
    message: "Up",
    keyword: "ETH",
    timestamp: "2025-04-23T12:33:21Z",
    addressFrom: "0xCF8e569A97C423952DdFf902375C7C76549A6A90",
    amount: "100",
    addressTo: "0x8aa395Ab97837576aF9cd6946C79024ef1acfdbE",
    success: true,
    reward: "14.3"
  },
  {
    id: 7,
    url: "https://media.giphy.com/media/l2JehQ2GitHGdVG9y/giphy.gif", 
    message: "Down",
    keyword: "BTC",
    timestamp: "2025-04-22T18:45:10Z",
    addressFrom: "0xCF8e569A97C423952DdFf902375C7C76549A6A90",
    amount: "50",
    addressTo: "0x8aa395Ab97837576aF9cd6946C79024ef1acfdbE",
    success: false,
    reward: null
  },
  {
    id: 8,
    url: "https://media.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif", 
    message: "Up",
    keyword: "ARB",
    timestamp: "2025-04-21T10:12:44Z",
    addressFrom: "0xA1e569B97C412962CdDfF902376D7C16549A6B91",
    amount: "120",
    addressTo: "0x1cc3129B98733419Ac14a84190eD94D142fE320F",
    success: true,
    reward: "22.7"
  },
  {
    id: 9,
    url: "https://media.giphy.com/media/l2JJKs3I69qfaQleE/giphy.gif", 
    message: "Down",
    keyword: "SOL",
    timestamp: "2025-04-20T22:15:37Z",
    addressFrom: "0xCF8e569A97C423952DdFf902375C7C76549A6A90",
    amount: "80",
    addressTo: "0x8aa395Ab97837576aF9cd6946C79024ef1acfdbE",
    success: false,
    reward: null
  },
];

export default dummyData; 