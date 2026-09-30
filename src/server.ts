import express from 'express';
const app=express();
const PORT:number=3000;
app.get('/',(req,res)=>{
    res.send('pong')

});
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`press Ctrl+C to stop the server`);
});