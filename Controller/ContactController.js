const ContactController = {
    index: (req, res) => {
        res.render('contact', { title: 'Contact Page' });
    }
};

export  {
    
    ContactController
}