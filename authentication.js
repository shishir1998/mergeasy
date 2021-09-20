
const test =async (z, bundle) => {
    const promise =await z.request('https://mergeasy.com/api/me',{
      method:'HEAD',
      headers:{'Authorization':'Bearer '+bundle.authData.apikey}
  });

  return promise.data;
    // return promise.then((response) => {
    //   if (response.status !== 200) {
    //     throw new Error('Invalid API Key');
    //   }
    //   z.console.log(response.data);
    //   const json = JSON.parse(response.data);
    // return {
    //   "username": json.email
    // };
       
    // });
  }



module.exports = {
  type: 'custom',
  // Define any auth fields your app requires here. The user will be prompted to enter this info when
  // they connect their account.
  fields: [
    {key: 'apikey', label: 'API Key', required: true, type: 'string'}
  ],
  test: test,
  // The test method allows Zapier to verify that the credentials a user provides are valid. We'll execute this
  // method whenver a user connects their account for the first time.
 
  // assuming "username" is a key in the json returned from testAuth
  connectionLabel:'{{apikey}}'
  
};