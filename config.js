const DEV_API_SERVER = 'http://192.168.0.148:8000';
const API_SERVER = 'http://api.lookids.co.kr';


export const apiEndPoint = (process.env.NODE_ENV ||'development') == 'development' ? DEV_API_SERVER :API_SERVER;
export const s3Url = 'https://s3.ap-northeast-2.amazonaws.com/demo-lookids';
