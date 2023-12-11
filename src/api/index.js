import axios from "axios";

console.log(process.env.NODE_ENV);
export default process.env.NODE_ENV == "production"
  ? axios.create({
      //production 환경 (AWS EC2)
      // baseURL: "http://52.78.202.194:3000",
      // baseURL: "http://saju-alb-prod-1547440915.ap-northeast-2.elb.amazonaws.com",
      baseURL: "https://api.saju.day",
    })
  : axios.create({
      //development 환경
      baseURL: "http://localhost:3000",
    });
