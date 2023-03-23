class UI {
    constructor() {
        this.altTextChange = document.querySelector(".alt-title-word");
        this.displayNav = document.querySelector('.navbar');
        this.logo = document.querySelector("#logo");
        this.githubCard = document.querySelector(".github-container");
        this.cardLang = document.querySelector(".card-langu");
        //this.socialCard = document.querySelector('.header-social');
        //this.socialCard.addEventListener('mouseover', this.socialCardHover.bind(this))
    }






    textChange() {
        const text = ['"Sic Parvis Magna"', '"Büyük olaylar, küçük başlangıçlardan doğar"', '"Greatness from small beginnings"']
        let counter = 0;

        (function loop() {
            this.altTextChange.classList.add('fade');

            setTimeout(function () {
                this.altTextChange.innerText = text[counter];
                this.altTextChange.classList.remove('fade');

                setTimeout(function () {
                    counter = ++counter % text.length;
                    setTimeout(loop.bind(this), 1000);
                }.bind(this), 3000)
            }.bind(this), 1000)
        }).bind(this)();

    }

    navShow() {
        $(".navbar").css('display', 'none');
        $(document).ready(function () {
            $(".nav-logo").click(function () {
                $(".navbar").animate({
                    width: "toggle"

                }, function () {
                    $(".logo").toggleClass('rotate-logo');
                    $("li").css('visibility', "visible");


                });
                $("li").css('visibility', "hidden");
                $(".navbar").css('display', 'flex');

            });
        });
    }


    socialCardHover(e) {
        if (e.target.id === 'social-1') {
            this.socialCard.children[0].children[1].style.cssText = `                padding-right: 1.5rem;
    display:block
            `;

        }
    }

    gitCard() {



        const gitApi = new githubApi();

        const githubInfo = gitApi.getGithubInfo();

        githubInfo.then((value) => {

            for (let j = 0; j < value.length; j++) {



                const lang = gitApi.getRepoLang(value[j].languages_url);
                const ver = gitApi.getKeys(lang);

                ver.then((val) => {
                    console.log(val);
                    


                    for(let i = 0; i<15;i++){
                        var p = document.createElement("p");
                    p.innerText = `${val[i]}: 32.4%`;
                    var divLangu = document.createElement('div');
                    divLangu.classList.add('langu');
                    divLangu.appendChild(p);
                    }
                    // const p = document.createElement("p");
                    // p.innerText = "Javacript: 32.4%";
                    // const divLangu = document.createElement('div');
                    // divLangu.classList.add('langu');
                    // divLangu.appendChild(p);
                    const divCardLangu = document.createElement('div');
                    divCardLangu.classList.add('card-langu');
                    divCardLangu.appendChild(divLangu);
                    
                    const divGithubCards = document.createElement('div');
                    divGithubCards.classList.add('github-cards');
                    divGithubCards.appendChild(divCardLangu);
                    const h4 = document.createElement('h4');
                    h4.innerText = 'Proje Adi';
                    divGithubCards.appendChild(h4);
                    const divGithubCol = document.createElement('div');
                    divGithubCol.classList.add('github-col');
                    divGithubCol.appendChild(divGithubCards);


                    this.githubCard.appendChild(divGithubCol);



                //         this.githubCard.innerHTML += `
                //     <div class="github-col">
                //     <div class="github-cards">
                //         <h4>Proje Adi</h4>
                //         <div class="card-langu">
                //         <div class="langu">
                //         <p>javascript 32.4%</p>
                //     </div>
                //     </div>
                //         <div class="github-card-btn">
                //             <a class="card-btn" href="#">View</a>
                //         </div>
            
                //     </div>
            
                // </div>`
                        
                    







                })



            }



        });

    }
    // ` +
    // for(let i = 0; i < value.length; i++){

    //     
    // }
    //    +
    // `

}