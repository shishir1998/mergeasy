const GetSearchRequest = (z, bundle)=>{
	
	
//     var statuses  = bundle.inputData.statuses;
//     var toAssignedDateTime = bundle.inputData.toAssignedDateTime;
//     var fromDueDate  = bundle.inputData.fromDueDate;
//     var toDueDate = bundle.inputData.toDueDate;
//     var fromAssignedDateTime  = bundle.inputData.fromAssignedDateTime;
//     // var doc_id=bundle.inputData.doc_id;
//     var data = statuses.toString();
//     var url=`http://az-s-evo-iis-2.eastus2.cloudapp.azure.com/EVO/api/Vendor/Search/Services?statuses=${data}&fromAssignedDateTime=${fromAssignedDateTime}&toAssignedDateTime=${toAssignedDateTime}&fromDueDate=${fromDueDate}&toDueDate=${toDueDate}`
//     // var url='https://mergecall.com/api/uploaded_files'
//  return z.request(url,{
//     method:'GET'
// }).then(response =>{return z.JSON.parse(response.content)});
    return {key:bundle.inputData.s3_doc_id}
        
};

const docFields = async (z, bundle) => {
    // var a=[];
       var s3_doc_id= bundle.inputData.s3_doc_id;
        var delivery_method= bundle.inputData.delivery_method;
        var total_recipients=bundle.inputData.total_recipients;
    if(s3_doc_id != undefined && delivery_method != undefined && total_recipients!= undefined ) 
    {
    
        const promise = await z.request(`https://mergeasy.com/api/merge_fields?id=${s3_doc_id}&delivery_method=${delivery_method}&total_recipients=${total_recipients}`,{
        method:'GET',
       
}).then(response=>{ 
   var a=[];
// a=response.content;
a= z.JSON.parse(response.content)
    
// var b=[]
    // for(i=0;i<a.length;i++)
    // {
    //     b.push({key:a[i].key.toString(),label:a[i].value.toString()})
    // }

return a
});
    }
    //  z.console.log(a);
    //     // json is is [{"key":"field_1"},{"key":"field_2"}]
    // var arr=[];
    
    //     if(s3_doc_id !=null && total_recipients!=null){
      
    //       arr= [
    //      { 
    //       key: '$doc_name',
        
    //       label: 'DOCUMENT NAME',
    
    //       required:true
    //       },
    //       { 
    //         key: '$anonymize',
          
    //         label: 'ANONYMIZE',
      
    //     }
        
    //     ]
      
      
    //       var arr1=[]
          
    //       if(total_recipients>0)
    //       {  
      
    //       for(var i=1;i<=total_recipients;i++){
    //       arr1.push({key:`recipient${i}_name`,label:`RECEPIENT ${i} NAME`})
    //       }
      
      
    //       }
    //       var arr2=[]
    //             if(total_recipients>0)
    //       {  
          
    //       for(var i=1;i<=total_recipients;i++){
    //       arr2.push({key:`recipient${i}_email`,label:`RECEPIENT ${i} EMAIL`})
    //       }
    //       return arr.concat(arr1).concat(arr2)
        
    //       }
          
    //   }

     

 // console.log(a);
// map_data=a.map(data=>{
//   return {key:data.key,label:data.value}
// })
// var doc_id=a.s3_doc_id;

// return z.JSON.parse(response.content)
    
 };


  


module.exports={
 

key:'SendDocument',
noun:'Send Document',
display:{
    label:'Mergeasy File',
    description:'Send Documents and PDF',
    important:true
},

operation:{
    inputFields: [
        { key: 's3_doc_id',
    required: true,
    label: 'DOCUMENT ID',
    helpText: 'Enter the document ID',
    dynamic: "docfieldsList.id.label",
    // altersDynamicFields: true
    },

       
    {
        'key':'total_recipients',
        'label':'TOTAL RECEPIENTS',
       
        
    },
  
    {
    key:'delivery_method',
    required:true,
    label:"DELIVERY METHOD",
    helpText:"Select a Method",
        
        choices:{ podio: 'Podio', docusign: 'Docusign', email: 'Email' }
        
    
    },
    docFields
    
    ],
 
    sample:{'Status':'Success'},                
    perform:GetSearchRequest
}

};

















// docFields,
    
// {
//     key:'method',
//     required:true,
//     label:"Method",
//     helpText:"Select a Method",
        
//         choices:{ podio: 'Podio', docusign: 'Docusign', email: 'Email' }
        
    
// }



// +++++++++++++++++++++++++++++
// const recenameFields = (z, bundle) => {
//     var arr=[]
//       if(bundle.inputData.recepient>0)
//    {  
  
//   for(var i=1;i<=bundle.inputData.recepient;i++){
//   arr.push({key:`recipient${i}_name`,label:`Recepient ${i} name`})
//   }
//   return arr
  
//    }
//     };
  
//     const receemailFields = (z, bundle) => {
//       var arr=[]
//         if(bundle.inputData.recepient>0)
//      {  
    
//     for(var i=1;i<=bundle.inputData.recepient;i++){
//     arr.push({key:`recipient${i}_email`,label:`Recepient ${i} email`})
//     }
//     return arr
    
//      }
//       };


    // const response = z.request('http://example.com/api/v2/fields.json');

 // params: {

                //                 id: bundle.inputData.s3_doc_id,
                //                delivery_method:bundle.inputData.delivery_method,
                //                total_recipient:bundle.inputData.total_recipients
                               
                //               },