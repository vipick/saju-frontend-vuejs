import axios from "axios";

console.log(process.env.NODE_ENV);
export default process.env.NODE_ENV == "production"
  ? axios.create({
      //production 환경 (AWS EC2)
      // baseURL: "http://54.180.54.32:3000",
      // baseURL: "http://saju-alb-0925-8234669.ap-northeast-2.elb.amazonaws.com",
      baseURL: "https://api.saju.day",
    })
  : axios.create({
      //development 환경
      baseURL: "http://localhost:3000",
    });
