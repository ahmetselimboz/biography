const altText = new UI();
const gitApi = new githubApi();



const githubInfo = gitApi.getGithubInfo();



// githubInfo.then((value) => {
//     let num = 2;
//     const lang = gitApi.getRepoLang(value[num].languages_url);
//     const ver = gitApi.getKeys(lang);

//     ver.then((val)=> {
//         console.log(val);

        
//     })
    
// });


altText.gitCard();
altText.myProjectCard();





altText.navShow();
altText.textChange();
//const key = gitApi.getRepoLang(githubInfo);

//gitApi.getKeys(key);

