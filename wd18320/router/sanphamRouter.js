var express = require('express');   
var sanpham = require('../model/sanpham');
var danhmuc = require('../model/danhmuc');  
var upload = require('../router/upload')
var app = express.Router();
//thêm ảnh
app.post('/sanpham/upload', upload.single('image'), (req, res) => {
    
})
// them sanpham
//get all sanpham
app.get('/sanpham',async function(req, res, next) {
    const sp = await(sanpham.find({}))
  try {
    res.send(sp);
  } catch (error) {
    res.status(500).json({message: error.message});
  }  
});

//add sanpham
app.post('/sanpham',async function(req, res, next) {
    const sp =  new sanpham(req.body);
    try {
        await sp.save();
        res.json(sp);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})
//create sanpham
app.post('/create',async function(req, res, next) {
    const name = req.body.name;
    const price = req.body.price;
    const image = req.body.image;
    const description = req.body.description;
    const quality = req.body.quality;
    const id_danhmuc = req.body.id_danhmuc;
    const data = {name, price, image, description,quality, id_danhmuc};
      console.log(data);
    const sp =  new sanpham(data);
    try {
        await sp.save();
        res.send(sp);
    } catch {
      res.status(500).json({message: error.message});
    }
})
//xoa sanpham
app.delete('/sanpham/:id', async (req, res) => {
    try{
        const sp = await sanpham.findByIdAndDelete(req.params.id,req.body);
        if(!sp){
            return res.status(404).send();
        }
        res.send("xoa thanh cong");
    }catch(error){
     res.status(500).send(error);   
    }
    }
)
//sửa sanpham
app.put('/sanpham/:id', async (req, res) => {
    try{
        const sp = await sanpham.findByIdAndUpdate(req.params.id,req.body);
        if(!sp){
            return res.status(404).send();
        }
        res.send('cap nhat thanh cong');
    }catch(error){
        res.status(500).send(error);
    }
})

//get danhmucsp
app.get('/dmsp',async function(req, res, next) {
  const dms = await(danhmuc.find({}));
  const sps = await(sanpham.find({}));
  const dmsp = dms.map(dm => {
    const sp_dm = sps.filter(sp => sp.id_danhmuc == dm._id);
    return {_id:dm,name:dm.name,sanpham:sp_dm};
  })
  try {
    res.json(dmsp);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

//lay 1 sp
app.get('/sanpham/:id',async function(req, res, next) {
  const sp = await(sanpham.findById(req.params.id,res.body));
  try {
    res.send(sp);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})
//find sanpham by id danh muc
app.get('/sanpham/danhmuc/:id',async function(req, res, next) {
  let id_danhmuc = req.params.id;
  const danhsach = await(sanpham.find({}));
  const sp = danhsach.filter(sp => sp.id_danhmuc == id_danhmuc);
  try {
    // res.send(sp);
    res.json(sp);
  } catch (error) {
   res.status(500).json({message: error.message});
  }
})
module.exports = app;
