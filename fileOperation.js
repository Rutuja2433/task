// const fs=require("fs")
// function fileOperation(){
//     // write read
//     fs.readFile("file1.txt","utf-8",(err,data)=>{
//         if(err){
//             console.log("error whilereading file:"+err);

//         }
//         console.log(data);
//     })
//     const filedata=fs.readFileSync("file2.txt");
//     console.log(filedata.toString());
    // non blocking io
    // fs.writeFile("file1.txt","writing data from node js",()=>{
    //     console.log("data written successfully");
    // })
    // blocking io
    // fs.writeFileSync("file2.txt","data writing to file2")
    // console.log("data written");

//     console.log("next operation");
// }
// module.exports=fileOperation;


const fs = require("fs");

function fileOperation(){

    // READ (Async)
    fs.readFile("file1.txt","utf-8",(err,data)=>{
        if(err){
            console.log("error while reading file:" + err);
            return;
        }
        console.log("File1 Data:", data);
    });

    // READ (Sync)
    const filedata = fs.readFileSync("file2.txt");
    console.log("File2 Data:", filedata.toString());

    // ✅ UPDATE (Append new data to file1.txt)
    fs.appendFile("file1.txt", "\nNew updated content added.", (err)=>{
        if(err){
            console.log("Error while updating file:", err);
            return;
        }
        console.log("File updated successfully");
    });

    // ✅ DELETE (Delete file2.txt)
    fs.unlink("file2.txt", (err)=>{
        if(err){
            console.log("Error while deleting file:", err);
            return;
        }
        console.log("File deleted successfully");
    });

    console.log("Next operation");
}

module.exports = fileOperation;