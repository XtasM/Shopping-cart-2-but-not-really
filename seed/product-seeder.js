var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://Vursusikl:IloveGore_666@ds237848.mlab.com:37848/shopping-cart');

mongoose.Promise = global.Promise;

var products = [
    new Product({
        imagePath: 'http://78.media.tumblr.com/5eaf47f578d1bd43de0119869465c67e/tumblr_n4q77f4Ooj1qhzw8jo3_1280.jpg',
        title: 'Final Fantasy X',
        description: 'Preddy bud tbh 3/10 -IGN',
        price: 59
    }),
    new Product({
        imagePath: 'https://2.bp.blogspot.com/-o9OSfjqaD9s/V_PX6uJeEbI/AAAAAAAAElc/0tQaHVUwe9A1kUJfuUMW2sP7cDCDCEzwgCLcB/s1600/dj-luigi-meme-origen-zheard-compunetsi.jpg',
        title: 'Guitar Hero 29',
        description: 'All Toasters Toast Toast.',
        price: 30
    }),
    new Product({
        imagePath: 'https://yt3.ggpht.com/a-/AK162_6SyH0Qja-SnCyao0HKR39VpW8_Gj7_jgIsVg=s900-mo-c-c0xffffffff-rj-k-no',
        title: 'Zelda: Breath of the Wind',
        description: 'Nice.',
        price: 69
    }),
    new Product({
        imagePath: 'http://junkee.com/wp-content/uploads/2017/09/smash-mouth.jpeg',
        title: 'Undertale',
        description: 'eh',
        price: 15
    }),
    new Product({
        imagePath: 'https://vignette.wikia.nocookie.net/le-miiverse-resource/images/9/99/SanicMeme.png/revision/latest?cb=20160717025448',
        title: 'Sonic: The Hedgehog 5: Revengeance',
        description: 'Gotta Go Fast!',
        price: 40
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Tommy-Wiseau-3.jpg/1200px-Tommy-Wiseau-3.jpg',
        title: 'The Darkness 3',
        description: 'Everybody betrayed me! Im fed up with this world!',
        price: 37
    }),
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
