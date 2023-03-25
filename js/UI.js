class UI {
    constructor() {
        this.altTextChange = document.querySelector(".alt-title-word");
        this.displayNav = document.querySelector('.navbar');
        this.logo = document.querySelector("#logo");
        this.githubCard = document.querySelector(".github-container");
        this.cardLang = document.querySelector(".langu");
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
            this.socialCard.children[0].children[1].style.cssText = `                
            padding-right: 1.5rem;
    display:block
            `;

        }
    }

    gitCard() {
        const gitApi = new githubApi();

        const githubInfo = gitApi.getGithubInfo();

        githubInfo.then((value) => {

            console.log(value)

            for (let j = 0; j < 4; j++) {



                const lang = gitApi.getRepoLang(value[j].languages_url);
                //var htmlUrl = gitApi.getRepoLang(value[j].url);
                const keys = gitApi.getKeys(lang);
                const contains = gitApi.getValue(lang);
                var yuzdeler = [];



                keys.then((key) => {
                    contains.then((val) => {



                        for (let k = 0; k < value.length; k++) {

                            yuzdeler[k] = `<p>` + key[k] + `: ` + val[k] + `%</p>`
                        }

                        var istak = [];
                        yuzdeler.forEach((element) => {
                            if (element !== '<p>undefined: undefined%</p>') {
                                istak.push(element);

                            }
                        });
                        console.log(this.cardLang);
                        var texc;
                        //console.log(istak)
                        this.githubCard.innerHTML += `
                                <div class="github-col">
                                <div class="github-cards">
                                    <h4>${value[j].name}</h4>
                                    <div class="card-langu">
                                    <div class="langu">
                                    ${istak}
                                    </div></div>
                                    <div class="github-card-btn">
                                        <a class="card-btn" target="_blank" href="https://github.com/ahmetselimboz/${value[j].name}">View</a>
                                    </div>
                        
                                </div>
                        
                            </div>`

                    })
                })
            }
        });
    }

}