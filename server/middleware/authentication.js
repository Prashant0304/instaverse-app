import jwt from 'jsonwebtoken';

const authentication = async(req, res, next) =>{
    
    try{
        const token = req.headers.authorization.split(' ')[1];

        if(token){
            let decodedData = jwt.verify(token, "1234");
            
            req.userId = decodedData?.id;
        }
        
        next();

    }catch(error){
        console.log(error);
    }
};

export default authentication;