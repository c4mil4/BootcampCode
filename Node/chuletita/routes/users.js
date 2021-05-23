const express = require("espress");
const router = express.Router();

router.get("/", (req, res) => {
    //Similiar al find de Mongo. Si el filtro está vacio,
    //me vuelve todos losd documentos.
    User.find({}).exec((error, users) => {
        if(error) {
            res.status(400).json({ok: false, error});
        }else {
            res.status(200).json({ok: true, users});
        }
    })
});

router.get("/:id", (req, res) => {
    let id= req.params.id;
    res.json({message: `Petición GET con parametro: ${id}`});
});

router.post("/", (req, res) => {
    let body = req.body;

    const user = new User({
        username: body.username,
        email: body.email,
        password: body.password
    });

    user.save((error, savedUser) => {
        if(error) {
            res.status(400).json({ok: false,error});
        } else { 
            res.status(200).json({ok: true, savedUser});   
        }
    });

   /*  if(body.username){
        res.status(200)({message: `Recibido username: ${body.username}`});
    }else{
        res.status(400).json({ok: false, message:"El username es obligatorio"});
    } */ 
});


module.exports = router;