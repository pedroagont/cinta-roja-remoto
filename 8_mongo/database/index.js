const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://pedro:abc123def@cintaroja-bbobj.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Database connected'))
  .catch(() => console.log('Error connecting'))
