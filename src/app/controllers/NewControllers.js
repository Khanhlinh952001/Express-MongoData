class NewControllers {
    index(req,res){
    res.render('news');
    }

    slug(req,res){
        res.send("Hello")
    }
}


module.exports = NewControllers;
