// GET Dashboard
exports.homepage = async (req, res) => {
    const locals = {
        title: "Dashboard",
        description: "Free Notes App",
    };
    res.render('dashboard', {
        locals,
        layout: '../views/layouts/dashboard'
    });
}


// GET AboutPage
exports.about = async (req, res) => {
    const locals = {
        title: "About Notes",
        description: "Free Notes App",
    };
    res.render('about', locals);
}