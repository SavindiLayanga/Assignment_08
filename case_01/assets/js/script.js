let round = 1;


const changeLetters = () => {



    switch (round) {

        case 1: {
            $(".letter>h2").eq(0).text("F");
            $(".letter>h2").eq(1).text("A");
            $(".letter>h2").eq(2).text("B");
            $(".letter>h2").eq(3).text("C");
            $(".letter>h2").eq(4).text("D");
            $(".letter>h2").eq(5).text("E");
            round++;
            break
        }
        case 2 : {

            $(".letter>h2").eq(0).text("E");
            $(".letter>h2").eq(1).text("F");
            $(".letter>h2").eq(2).text("A");
            $(".letter>h2").eq(3).text("B");
            $(".letter>h2").eq(4).text("C");
            $(".letter>h2").eq(5).text("D");
            round++;
            break
        }

        case 3 : {

            $(".letter>h2").eq(0).text("D");
            $(".letter>h2").eq(1).text("E");
            $(".letter>h2").eq(2).text("F");
            $(".letter>h2").eq(3).text("A");
            $(".letter>h2").eq(4).text("B");
            $(".letter>h2").eq(5).text("C");
            round++;
            break
        }

        case 4 :{

            $(".letter>h2").eq(0).text("C");
            $(".letter>h2").eq(1).text("D");
            $(".letter>h2").eq(2).text("E");
            $(".letter>h2").eq(3).text("F");
            $(".letter>h2").eq(4).text("A");
            $(".letter>h2").eq(5).text("B");
            round++;
            break

        }case 5 :{

            $(".letter>h2").eq(0).text("B");
            $(".letter>h2").eq(1).text("C");
            $(".letter>h2").eq(2).text("D");
            $(".letter>h2").eq(3).text("E");
            $(".letter>h2").eq(4).text("F");
            $(".letter>h2").eq(5).text("A");
            round++;
            break

        }case 6 :{

            $(".letter>h2").eq(0).text("A");
            $(".letter>h2").eq(1).text("B");
            $(".letter>h2").eq(2).text("C");
            $(".letter>h2").eq(3).text("D");
            $(".letter>h2").eq(4).text("E");
            $(".letter>h2").eq(5).text("F");
            round = 1;
            break

        }
    }

}

setInterval(changeLetters, 1000);