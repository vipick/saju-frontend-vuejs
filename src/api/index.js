import axios from "axios";

console.log(process.env.NODE_ENV);
export default process.env.NODE_ENV == "production"
  ? axios.create({
      //production 환경 (AWS EC2)
      baseURL: "https://api.saju.day",
    })
  : axios.create({
      //development 환경
      baseURL: "http://localhost:3000",
    });
