import mongoose from "mongoose";
// mongo
const mongoConnect = () => {
    const Uri = `mongodb+srv://divyansh:amapirate@testcluster.ywjkt.mongodb.net/suprbio?retryWrites=true&w=majority`
    
    mongoose.connect(Uri, { useNewUrlParser: true });
    var conn = mongoose.connection;
    conn.on('disconnected', function () {
        console.log('database is disconnected successfully');
    })
    conn.on('connected', function () {
        console.log('database is connected successfully');
    });
    conn.on('error', console.error.bind(console, 'connection error:'));
    //
}
export default  mongoConnect;