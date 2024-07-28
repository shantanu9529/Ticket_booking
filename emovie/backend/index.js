const express = require('express');
const bodyParser = require('body-parser'); //to read data in request
const mongoose = require('mongoose');
const cors = require('cors');  //cross connenction react<->nodejs
const multer = require('multer'); //file upload
const path = require('path');
const XLSX = require('xlsx'); //xl file create
const { stringify } = require('querystring');

const app = express();
const PORT = 5000;

app.use(bodyParser.json({limit:'50mb'}));

app.use(bodyParser.json({reviver:(key,value)=> typeof value === 'string' ? value.trim():value})); //trim used to remove white spaces

const moviePhotoStorage = multer.diskStorage({
    destination:(req,file,cb)=>
        {
            cb(null,'../public/assets/movies/photos');
        },
        filename : (req,file,cb)=>
        {
            const ext = path.extname(file.originalname);
            cb(null,`${Date.now()}${ext}`); 
        }
});

const moviePhotoUpload = multer({storage : moviePhotoStorage});

mongoose.connect('mongodb://localhost:27017/emovie',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

app.use(cors());
app.use(bodyParser.json());


const Users = mongoose.model('Users',{
    full_name:String,
    gender:String,
    user_name:String,
    password:String
});

const Admin = mongoose.model('Admin',{
    full_name:String,
    user_name:String,
    password:String  
});


app.post('/add_user',async (req,res)=>{
    try{
    //    console.log(req.body);
    const{
        full_name,
        gender,
        user_name,
        password
    } = req.body;

    const newUser = new Users(
        {
            full_name,
            gender,
            user_name,
            password
        });
        await newUser.save();

        res.status(200).json({success:true,message:"user added successfully"});
    }
    catch(error)
    {
       res.status(500).json({success:false,message:"error adding user"});
    }
})



app.post('/user_login',async (req,res)=>{
    
    //    console.log(req.body);
    const{
        user_name,
        password
    } = req.body;

    try{
        const user = await Users.find({$and:[{user_name:user_name},{password:password}]})
        if(user==""){
           res.status(200).json({success:true,message:"1"});
            //console.log("message")
        }else{
            res.status(200).json({success:true,message:"0",user_id:user[0]._id});
            //console.log("error")
        }
        //console.log(user);  
    }

    catch(error)
    {
       res.status(500).json({success:false,message:"error while login"});
    }
})



app.post('/admin_login',async (req,res)=>{
    try{
    //     console.log(req.body);
    const{
        user_name,
        password
    } = req.body;

     const admin = await Admin.find({$and:[{user_name:user_name},{password:password}]})
     if(admin==""){
         res.status(200).json({success:true,message:"1"});
        //console.log("message")
    }else{
        res.status(200).json({success:true,message:"0",admin_id:admin[0]._id});
        //console.log("error")
     }

    } 
    catch(error)
    {
       res.status(500).json({success:false,message:"error while login"});
    }
})



const Movie = mongoose.model('Movie',{
    movie_name:String,
    price:String,
    quantity:String,
    start:String,
    end:String,
    movie_poster:String
});

app.post('/movie_data',moviePhotoUpload.single('movie_poster'), async (req,res)=>{
    try{
      // console.log(req.body);
    const{
        movie_name,
        price,
        quantity,
        start,
        end
    } = req.body;

    const movie_poster = req.file.filename;
    const Movies = new Movie(
        {
            movie_name,
            price,
            quantity,
            start,
            end,
            movie_poster
        });
        await Movies.save();

        res.status(200).json({success:true,message:"movie data added successfully"});
    }
    catch(error)
    {
       res.status(500).json({success:false,message:"error adding data"});
    }
})


app.get('/fetch_user_data_profile/:id', async(req,res)=>
{
    const {id} = req.params;    //get=>params, post=>bodyParser data to receive
    //console.log(id);
    try{
        const user = await Users.findById(id);
        if(!user)
            {
                return res.status(404).json({error: 'User not Found'});
            }
            res.json(user);
    }
    catch(error)
    {
        console.log("Error in fetching User profile data", error);
        res.status(500).json({error:"An error occured while fetching user data"});
    }
})

app.put('/update_user/:id', async(req,res)=>
{
    try{
        const user_id = req.params.id;
           //console.log(req.body);
        const{
            full_name,
            gender,
            user_name,
            password
        } = req.body;
    
        const updateUser = await Users.findByIdAndUpdate(user_id,
            {
                full_name,
                gender,
                user_name,
                password
            },{new:true});
    
            res.status(200).json({success:true,message:"user updated successfully"});
        }
        catch(error)
        {
           res.status(500).json({success:false,message:"error updating user"});
        } 
})


app.get('/fetch_admin_data_profile/:id', async(req,res)=>
    {
        const {id} = req.params;    //get=>params, post=>bodyParser data to receive
        //console.log(id);
        try{
            const admin = await Admin.findById(id);
            if(!admin)
                {
                    return res.status(404).json({error: 'Admin not Found'});
                }
                res.json(admin);
        }
        catch(error)
        {
            console.log("Error in fetching Admin profile data", error);
            res.status(500).json({error:"An error occured while fetching admin data"});
        }
    })
    
    app.put('/update_admin/:id', async(req,res)=>
    {
        try{
            const admin_id = req.params.id;
               //console.log(req.body);
            const{
                full_name,
                user_name,
                password
            } = req.body;
        
            const updateAdmin = await Admin.findByIdAndUpdate(admin_id,
                {
                    full_name,
                    user_name,
                    password
                },{new:true});
        
                res.status(200).json({success:true,message:"user updated successfully"});
            }
            catch(error)
            {
               res.status(500).json({success:false,message:"error updating user"});
            } 
    })


    app.get('/fetch_user_data', async(req,res)=>
        {
            try{
                const info = await Users.find();
                //console.log(info);
                res.json(info);
            }
            catch(error)
            {
                console.error("Error in fetching User", error);
                res.status(500).json({error:"An error occured while fetching User"});
            }
        })


    app.get('/fetch_movies', async(req,res)=>
   {
    try{
        const mdata = await Movie.find();
        //console.log(mdata);
        res.json(mdata);
    }
    catch(error)
    {
        console.error("Error in Movie Data", error);
        res.status(500).json({error:"An error occured while fetching Movie Data"});
    }
   })


   const Backend = mongoose.model('Backend',{
    movie_id:String,
    movie_name:String,  
    quantity:String,
    t_quantity:String,
    price:String,
    total:String,
    start:String,
    end:String
});

app.post('/admin_data',async (req,res)=>{
    try{
        console.log(req.body);
    const{
        movie_id,
        movie_name,  
        quantity,
        t_quantity,
        price,
        total,
        start,
        end
    } = req.body;
    console.log(req.body);

    const newBackend = new Backend(
        {
            movie_id,
            movie_name,  
            quantity,
            t_quantity,
            price,
            total,
            start,
            end
        });
        await newBackend.save();

        res.status(200).json({success:true,message:"ticket added successfully"});
    }
    catch(error)
    {
       res.status(500).json({success:false,message:"error adding ticket"});
    }
})

app.get('/fetch_movie_name/:id', async(req,res)=>
    {
        const {id} = req.params;   
        //console.log(id);
     try{
           const mdata = await Movie.findById(id);
           //console.log(mdata);
           res.json(mdata);
     }
     catch(error)
     {
         console.error("Error in Movie Data", error);
         res.status(500).json({error:"An error occured while fetching Movie Data"});
     }
    })

    app.get('/fetch_user_booking', async(req,res)=>
        {
            try{
                const book = await Backend.find();
                console.log(book);
                res.json(book);
            }
            catch(error)
            {
                console.error("Error in fetching User", error);
                res.status(500).json({error:"An error occured while fetching User"});
            }
        })



app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})