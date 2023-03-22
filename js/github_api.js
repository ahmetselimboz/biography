class githubApi{
    constructor(){
        this.baseURL = 'https://api.github.com';
        this.axiosObject = axios.create({
            baseURL : this.baseURL,
        });
    }


    async getGithubInfo(){
        try{
            const githubResponse = await this.axiosObject.get('/users/ahmetselimboz/repos');
            //console.log(githubResponse.data);
            //console.log(githubResponse.data)
            return githubResponse.data;
        }catch(err){
            console.log(err);
        }
    }

    async getRepoLang(dizi){

        return new Promise((resolve , reject) => {

            try{
               
                

                githubInfo.then((value) => {
                    
                    const langPath = this.axiosObject.get(dizi);
                    
                     langPath.then((val) => {
    
                        const dataLang = Promise.resolve(val.data)
                        resolve(dataLang);
                     })
    
    
    
                    
                    
                    // langPath.then((val => {
                    //     const keys = Object.keys(val.data);
                    //     const vals = Object.values(val.data);
    
                    //     //console.log(keys[0] + ' ' + vals[0]);
                    // }))
                })
            }catch(err){
                console.log(err);
            }


        })

        
    }


    async getKeys(path ){
        return new Promise((resolve, reject) =>{
            path.then((val => {
                const keys = Object.keys(val);
               
   
                resolve(keys)
            }))
        })
         
    }

}