const HomeController = {
    index: (req, res) => {
        res.render('main', { title: 'Home Page' });
    }
};

export  {
    
    HomeController
};
