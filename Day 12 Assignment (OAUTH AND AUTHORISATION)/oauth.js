router.patch(
  '/:id',
  authenticate,
  authorise(['admin', 'seller']),
  async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      return res.status(200).send(product);
    } catch (err) {
      return res.status(400).send({ message: err.message });
    }
  }
);

// permittedRoles = ["seller", "admin"]

const authorise = (permittedRoles) => {
     
    return (req,res,next) => {
        // getting the user;
        const user = req.user
        let isPermitted = false;


        // checking if he has permitted role
        permittedRoles.map(role => {
            if(user.role.includes(role)){
                isPermitted = true;
            }
        })

        // if permitted, he can go ahead
          if(isPermitted){
              return next()
          }
          else{
              return res.status(401).send({message : "You are not authorised to perform this operation"})
          }
      }

}


module.exports = authorise