  const mongoose=require('mongoose');

     //upload lll

       const LOCALURI="mongodb://localhost:27017/shop";

    const CLOUDURI="mongodb+srv://souravssc077:p2TP87TnsnWJ4KWg@atlastest.rzzcoyn.mongodb.net/?retryWrites=true&w=majority&appName=atlastest"


       // ghjy


           mongoose.connect(CLOUDURI);

           const ProductSchema= new mongoose.Schema({
            name: String,
            company: String,
            price: Number,
            colors: [String],
            image: String,
            category: String,
            isFeatured: Boolean
           })

           const productmodel= new mongoose.model("product",ProductSchema);

             //crud operations 
            

                 const main= async ()=>{
                       try{
                          // insert single document in mongoose , mongoose does not support insertone method
                            //   if you want multiple documents you can use insertMany method
                          const newdata1 = new productmodel({
                
                            name: "Designer Handbag2",
                            company: "64c23350e32f4a51b19b923a",
                            price: 2466,
                            colors: ["#000000", "#cc6600", "#663300"],
                            image: "/images/product-handbag.png",
                            category: "64c2342de32f4a51b19b9250",
                            isFeatured: true
                          
                     })
                           await newdata1.save();
                        //? update documents for one you can use findOneAndUpdate()  ,
                        //* for multiple updateMany()
                            // await productmodel.findOneAndUpdate({name: "Designer Handbag2", price: 2466 },{$set: { price: 2499 }})
                            // delete document for single findOneAndDelet()/ deleteOne()  multiple- deleteMany();
                                    //  await productmodel.deleteMany({ name: "Designer Handbag2", price: 2499 })
                           const info= await productmodel.aggregate([{$match:{price:{$eq:2466}}}])
                                console.log("DATABASE IS CONNECTED")
                               console.log('insert new data cheack',info)
                       }catch(error){
                        console.log(error);
                       }finally {
                           mongoose.connection.close();
  }
                 }

                    main();