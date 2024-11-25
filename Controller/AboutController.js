const AboutController = {
    index: (req, res) => {
        res.render('home', { title: 'About Page' });
    }
};

export default {
    
    AboutController
};