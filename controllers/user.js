import response from "express";



const userGet = (req, res) => {

  const query = req.query;

  res.json({
    msg: "get API - controller",
    query
  });
};

const userPost = (req, res) => {
  
  //const body = req.body; SE PUEDE HACER MEJOR DESESTRUCTURANDO EL OBJETO body
  const { name, age} = req.body;

  res.json({
    msg: "post API - controller",
    name,
    age
  });
};

const userPut = (req, res) => {
    
  const id = req.params.id;

  res.json({
    msg: "put API - controller",
    id
  });
};

const userPatch = (req, res) => {
  res.json({
    msg: "patch API - controller",
  });
};

const userDelete = (req, res) => {
  res.json({
    msg: "delete API - controller",
  });
};

export { userPut, userPost, userPatch, userGet, userDelete };
