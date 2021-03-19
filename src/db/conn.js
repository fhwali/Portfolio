const mongoose = require ('mongoose')
mongoose.connect('mongodb://localhost:27017/portfolio-messages', {
    useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log('Connection setup is complete');
}).catch((e) => {
    console.log('Connection Error');
})