
const mailchimp = require("@mailchimp/mailchimp_marketing");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.listen(process.env.PORT||3000,function () {
 console.log("Server is running at port 3000");
});
app.get("/", function (req, res) {
 res.sendFile(__dirname + "/signup.html");
});
mailchimp.setConfig({

 apiKey: "60c8d64e3f680ae39fec51118611f34f-us9",
 server: "us9"
});
app.post("/", function (req,res) {
const firstName = req.body.fName;
const secondName = req.body.lName;
const email = req.body.email;
const listId = "1e37c9d2771";
const subscribingUser = {
 firstName: firstName,
 lastName: secondName,
 email: email
};

app.post("/failure", function(req, res){
    res.redirect("/")
});
 async function run() {
const response = await mailchimp.lists.addListMember(listId, {
 email_address: subscribingUser.email,
 status: "subscribed",
 merge_fields: {
 FNAME: subscribingUser.firstName,
 LNAME: subscribingUser.lastName
}
});
 res.sendFile(__dirname + "/success.html")
 console.log(
`Successfully added contact as an audience member. The contact's id is ${
 response.id
 }.`
);
}
 run().catch(e => res.sendFile(__dirname + "/failure.html"));
});


// apikey
// 60c8d64e3f680ae39fec51118611f34f-us9


// listid
// e37c9d2771