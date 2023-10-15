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
               
                //

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

    async getValue(path ){
        return new Promise((resolve, reject) =>{
            path.then((val => {
                const values = Object.values(val);
                console.log(values);

                let toplam = 0;
                let yuzde = 0;
                var toplamYuzde = [];

                for(let i = 0 ;i <values.length;i++){
                    //console.log(values[i]);
                    toplam = toplam + values[i];
                    
                }
                for(let j = 0 ;j<values.length;j++){
                    yuzde = ((values[j] * 100)/toplam)
                    yuzde = Number(yuzde.toFixed(2));
                    toplamYuzde.push(yuzde);
                   
                }
                //console.log(toplamYuzde)
                    
                
   
                resolve(toplamYuzde)
            }))
        })
         
    }

}