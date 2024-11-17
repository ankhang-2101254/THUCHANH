const AboutController = {
    index: (req, res) => {
        res.render('about', { title: 'About Page' });
    }
};

export  {
    
    AboutController
};