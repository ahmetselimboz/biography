class UI {
    constructor() {
        this.altTextChange = document.querySelector(".alt-title-word");
        this.displayNav = document.querySelector('.navbar');
        this.logo = document.querySelector("#logo");
        this.githubCard = document.querySelector(".github-container");
        this.projectNames = document.querySelectorAll("#projectName");
        this.language = document.querySelectorAll('#languUl')
        this.cardBtn = document.querySelectorAll('.card-btn')
       
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
                    $(".navbar li").css('visibility', "visible");


                });
                $(".navbar li").css('visibility', "hidden");
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

            value.sort(function compare(a,b) {
                var dateA = new Date(a.updated_at);
                var dateB = new Date(b.updated_at);
                return dateB - dateA;
            });

        //    value.forEach((element) =>{
        //     console.log(element.updated_at)
        //    })
           

            for (let j = 0; j < 4; j++) {

                

                const lang = gitApi.getRepoLang(value[j].languages_url);
                //var htmlUrl = gitApi.getRepoLang(value[j].url);
                const keys = gitApi.getKeys(lang);
                const contains = gitApi.getValue(lang);
                var yuzdeler = [];



                keys.then((key) => {
                    contains.then((val) => {
                        //console.log(this.projectNames)

                        for (let k = 0; k < value.length; k++) {

                            yuzdeler[k] = `<li>` + key[k] + `:`+'  ' + val[k] + `%</li>`
                        }

                        var istak = [];
                        yuzdeler.forEach((element) => {
                            if (element !== '<p>undefined: undefined%</p>') {
                                istak.push(element);

                            }
                        });



                        this.projectNames[j].innerText += value[j].name;
                        //console.log(this.projectNames[j].innerHTML)

                        for (let i = 0; i < val.length; i++) {
                            this.language[j].innerHTML += `${istak[i]}`
                            //console.log(istak[i])

                        }
                        this.cardBtn[j].href = `https://github.com/ahmetselimboz/${value[j].name}`

                    })
                })
            }
        });
    }

}