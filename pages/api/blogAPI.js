// // import { data } from 'autoprefixer';
// import * as fs from 'fs';

// export default async function handler(req, res){
//     let data = await fs.promises.readdir("BlogData")
//     let myFile;
//     let allBlog = [];
//     for (let index = 0; index < data.length; index++) {
//         const item = data[index];
//         myFile = await fs.promises.readFile(('BlogData/' + item), 'utf-8')
//         allBlog.push(JSON.parse(myFile))
//         // Print Console
//         // console.log(myFile)
//     }
//     res.status(200).json(allBlog)
// }