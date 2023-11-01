let round = 1;


const lightsWork = () => {

    switch (round) {

        case 1: {

            $(".middle_box").eq(0).css("background", "green");
            $(".middle_box").eq(1).css("background", "blue");
            $(".middle_box").eq(2).css("background", "yellow");
            $(".middle_box").eq(3).css("background", "lightpink");
            $(".middle_box").eq(4).css("background", "plum");
            $(".middle_box").eq(5).css("background", "red");
            round++;
            break

        }

        case 2: {

            $(".middle_box").eq(1).css("background", "green");
            $(".middle_box").eq(2).css("background", "blue");
            $(".middle_box").eq(3).css("background", "yellow");
            $(".middle_box").eq(4).css("background", "lightpink");
            $(".middle_box").eq(5).css("background", "plum");
            $(".middle_box").eq(0).css("background", "red");
            round++;
            break

        }

        case 3: {

            $(".middle_box").eq(2).css("background", "green");
            $(".middle_box").eq(3).css("background", "blue");
            $(".middle_box").eq(4).css("background", "yellow");
            $(".middle_box").eq(5).css("background", "lightpink");
            $(".middle_box").eq(0).css("background", "plum");
            $(".middle_box").eq(1).css("background", "red");
            round++;
            break

        }
        case 4: {

            $(".middle_box").eq(3).css("background", "green");
            $(".middle_box").eq(4).css("background", "blue");
            $(".middle_box").eq(5).css("background", "yellow");
            $(".middle_box").eq(0).css("background", "lightpink");
            $(".middle_box").eq(1).css("background", "plum");
            $(".middle_box").eq(2).css("background", "red");
            round++;
            break

        }
        case 5: {

            $(".middle_box").eq(4).css("background", "green");
            $(".middle_box").eq(5).css("background", "blue");
            $(".middle_box").eq(0).css("background", "yellow");
            $(".middle_box").eq(1).css("background", "lightpink");
            $(".middle_box").eq(2).css("background", "plum");
            $(".middle_box").eq(3).css("background", "red");
            round++;
            break

        }

 case 6: {

            $(".middle_box").eq(5).css("background", "green");
            $(".middle_box").eq(0).css("background", "blue");
            $(".middle_box").eq(1).css("background", "yellow");
            $(".middle_box").eq(2).css("background", "lightpink");
            $(".middle_box").eq(3).css("background", "plum");
            $(".middle_box").eq(4).css("background", "red");
            round=1;
            break

        }


    }


}

setInterval(lightsWork, 600);