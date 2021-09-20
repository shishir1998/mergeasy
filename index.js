const authentication = require('./authentication');
const SendDocument = require ("./sendDocument")

const addApiKeyToHeader = (request, z, bundle) => {
  request.headers['Authorization'] = "Bearer "+bundle.authData.apikey;
  return request;
};

const handleHTTPError = (response, z, bundle) => {
  
 if(response.status >= 400) throw new Error(`Unexpected status code ${response.status}`);

  return response;
};


const docOptions = async(z,bundle)=>{

  const url='https://mergeasy.com/api/uploaded_files'
 
  var a;
  var map_data=[]

  return  z.request(url,{
        method:'GET'
    }).then(response =>{
      
      // z.console.log(response.data);
      a=response.data;
      // a= z.JSON.parse(response.data)
      // console.log(a);
      map_data=a.map(data=>{
        return {id:data.s3_doc_id,label:data.name}
      })
      // var doc_id=a.s3_doc_id;
      return map_data
    // return doc_id
})
    

    
    }


module.exports = {
  // This is just shorthand to reference the installed dependencies you have.
  // Zapier will need to know these before we can upload.
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  authentication: authentication,

  beforeRequest: [addApiKeyToHeader],

  afterResponse: [handleHTTPError],

  // If you want your trigger to show up, you better include it here!
  triggers: {},

  // If you want your searches to show up, you better include it here!
  searches: {},

  // If you want your creates to show up, you better include it here!
  creates: {
    [SendDocument.key]: SendDocument
  },

  resources: { 
    orderfields: {
    key: "docfields",
    noun: "docfields",
    list: {
      display: { label: "docfields", description: "Availale Documents" },
      operation: { perform:docOptions  },
    },
  }
},
};
