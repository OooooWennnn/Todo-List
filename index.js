import express from "express";

const app = express();
const port = 3000;

var list = ["Breathe", "Sleep", "Eat"];
var done = ["Study", "Shower"];

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    var today = new Date();
    var month = today.toLocaleString("default", { month: "short" });
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var day = days[today.getDay()];

    var data = {
        month: month,
        day: day,
        list: list
    };
    res.render("index.ejs", data);
})

app.get("/done", (req, res) => {
    res.render("done.ejs", {done: done});
});

app.post("/delete", (req, res) => {
    const deletedItem = req.body.deletedItem;
    const itemIndex = req.body.itemIndex;

    if(deletedItem){
        done.splice(itemIndex, 1);
    }
    res.redirect("/done");
})

app.post("/deleteAll", (req, res) => {
    done = [];
    res.redirect("/done");
})

app.post("/add", (req, res) => {
    const newItem = req.body.newItem;
    if (newItem) {
        list.push(newItem);
    }
    res.redirect("/");
})

app.post("/moveToDone", (req, res) => {
    var doneItem = req.body.doneItem;
    var itemIndex = req.body.itemIndex;

    if(doneItem){
        list.splice(itemIndex, 1);
        done.push(doneItem);
    }
    res.redirect("/");
})

app.listen(port, () => {
    console.log("Server is running on port " + port);
});