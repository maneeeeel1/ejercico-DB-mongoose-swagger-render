module.exports={
    components:{
        schemas:{
            Task:{
                type: "object",
                properties:{
                    _id:{type: "string"},
                    title:{type: "string"},
                    completed:{type: "boolean"},
                    createAt:{type: "string"},
                    updateAt:{type: "string"},
                }
            }
        }
    }
};