import * as fs from 'fs';

export default async function handler(req, res){
    if (req.method === 'POST') {
        let data = await fs.promises.readdir('contectdata');
        console.log(data)
        fs.writeFile(`contectdata/${data.length+1}.json`, JSON.stringify(req.body), ()=>{} )
        console.log(req.body)
        res.status(200).json(req)
    } else{
        res.status(200).json(["allBlog"])
    }
}