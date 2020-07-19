window.onload = function() {


    var btn = document.getElementById("click_me");
    var left = document.getElementById("left");
    let ee = document.getElementById("eeImage");
    const projects = 1;
    let project_counter = 0;


    btn.addEventListener("click",change);
    left.addEventListener("click",lefted);



    function lefted() {

        let ee = document.createElement("img");
        ee.setAttribute('src','res/EE2.JPG')

        if (project_counter ==1){

            document.EEE.src = ee.src;


            project_counter -= 1;
            if (project_counter <0)
            {
                project_counter = 0;
            }
        }
        console.log(project_counter);
        if (project_counter ==1){
        }

    }

    function change() {


            let hg = document.createElement("img");
            hg.setAttribute('src','res/HiroGlifx.JPG');


            if (project_counter < 1) {

                hg.width = 200;
                document.EEE.src = hg.src;
                project_counter += 1;
                if (project_counter > 1);
                    project_counter =1;

            }

        console.log(project_counter,hg.src);

    }


}