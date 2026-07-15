const db = require('../config/db');

const tampilData = async (req, res, next) => {
    try{
        const query = 'SELECT * FROM product';
        const [rows] = await db.query(query);
        await res.status(200).json({
            status: 'succes',
            message: 'berhasil get data',
            data: rows
        }) 
    } catch(error){
        throw error 
    }
}

const createData = async (req, res) => {
    try{
        const data = {
            nama: req.body.nama,
            harga: req.body.harga
        }

         if (!req.body.nama || !req.body.harga) {
            return res.status(400).json ({
                message: 'nama dan harga wajib diisi'
            });
        }

        if (isNaN(req.body.harga)) {
            return res.status(400).json({
                message: 'harga harus berupa angka'
            })
        }
        
        const query = 'INSERT INTO product (nama, harga) VALUES (?, ?)';
        await db.execute(query, [data.nama,
            data.harga
        ]);
        return res.status(201).json({
            message: 'berhasil menambahkan'
        })
    } catch(error) {
        throw error
    }
}

const updateData = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = {
            nama: req.body.nama,
            harga: req.body.harga
        }

        if (!req.body.nama || !req.body.harga) {
            return res.status(400).json ({
                message: 'nama dan harga wajib diisi'
            });
        }

        if (isNaN(req.body.harga)) {
            return res.status(400).json({
                message: 'harga harus berupa angka'
            })
        }

        const query = 'UPDATE product SET nama = ?, harga = ? WHERE id = ?';
        await db.execute(query, [data.nama, data.harga, id]);
        return res.status(200).json({
            status: 'succes',
            message: 'berhasil memperbarui data'
        })


     } catch(error){
        throw(error)
     }
}  

const deleteData = async (req, res, next) => {
    try {
        const { id } = req.params;
        const query = 'DELETE FROM product WHERE id = ?';
        await db.query(query, id);
        return res.status(201).json({
            status: 'succes',
            message: 'Berhasil delete data'
        })
     } catch(error) {
        throw error
     }
}

const getById = async (req, res, next) => {
    try{
        const { id } = req.params;
        const query = 'SELECT * FROM product WHERE id = ?';
        const [rows] = await db.query(query, id);
        if (rows.length === 0) {
            return res.status(404).json({
                status:'error',
                message: 'data tidak ditemukan'
            })
        }
        await res.status(200).json({  
            status: 'succes',
            message: 'Berhasil get data',
            data: rows
        })
    } catch(error) {
        throw error
    }
}

module.exports = {
    tampilData,
    createData,
    updateData,
    deleteData,
    getById
}

