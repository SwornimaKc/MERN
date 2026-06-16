export const categoryDto={
  send:(data)=>{
    return 
    {
      category_name: data.categoryName 
      category_image: data.categoryImage
    };
  },
  getCategories: (data)=>{ },
  update:(data)=>{ },
};


const send = (data)=>{

};

//add category
const data ={categoryName:"", categoryImage:""};
send(data);