const express = require('express');
const router = express.Router();
const basoController = require('../controller/basoController');
const auth = require('../middleware/auth');

// router.get('/api', (req, res) => {
//     res.send('Selamat Datang di SMK Telkom Makassar');  
// })

// router.get('/data/:id', (req, res) => {
//     const { id } = req.params;
//     res.send(`Anda sedang melihat ${id}`)
// })

// router.get('/', (req, res) => {
//     return res.status(200).json({
//         message:'Berhasil get data'
//     })
// })

// router.post('/', (req, res) => {
//     const { informasi } = req.body;
//     return res.status(201).json({
//         message: 'berhasil post data',
//         data: informasi
//     })
// })

// router.put('/:id', (req, res) => {
//     const { informasi } = req.body;
//     const { id } = req.params;
//     return res.status(200).json({
//         message: `berhasil update data dengan id: ${id}`,
//         data : informasi
//     })
// })

// router.delete('/:id', (req, res) => {
//     const { id } = req.params;
//     return res.status(200).json({
//         message : `berhasil delete data dengan id ${id}`
//     })
// })

// Implementasi get
router.get('/', auth, basoController.tampilData)

// Implementasi post
router.post('/', auth, basoController.createData)

// Implementasi put
router.put('/:id', auth,  basoController.updateData)

// Implementasi delete
router.delete('/:id', auth, basoController.deleteData)

// Implementasi get by id
router.get('/:id', basoController.getById)

module.exports = router;                                     