class NewsController{
    index(req,res){
        res.render('news');
    }
    show(req,res){
        res.send('this is news');
    }

}

module.exports=new NewsController;