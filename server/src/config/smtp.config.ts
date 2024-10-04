import { createTransport } from "nodemailer";

const transporter = createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "mamullapranay360@gmail.com",
    pass: "Pranay@360",
  },
  secure: true,
});

export default transporter;
