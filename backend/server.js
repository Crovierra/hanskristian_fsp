import express from "express"
import cors from "cors"
import nodemailer from "nodemailer"
import "dotenv/config"
import { sendEmailLimit } from "./middleware/rateLimiting"

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "DELETE", "PATCH", "PUT"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}))

app.post("/send-mail", sendEmailLimit, (req, res) => {
    const {name, email, message} = req.body

    const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',    // Gmail SMTP host
          port: 587,                 // Use port 587 for STARTTLS
          secure: false,             // Set to false for non-SSL (STARTTLS)
          auth: {
            user: process.env.EMAIL, // Your email address
            pass: process.env.PASSWORD, // Your App Password
          },
    });
    
    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `Message from ${name} - ${email}`,
        text: message,
        replyTo: email,
    }

    console.log("Data :", transporter, mailOptions)
    

    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error :", error)
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent successfully');
  });
})

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})