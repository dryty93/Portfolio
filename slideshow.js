window.onload = function() {

    const colors =
        [
            'red',
            'blue',
            'green'
        ];


    var btn = document.getElementById("click_me");
    var left = document.getElementById("left");
    let ee = document.getElementById("eeImage");
    let eee = document.getElementById('EEE');
    const projects = 1;
    let project_counter = 0;
    let proj_state = false;
    let proj_name = document.getElementById("proj_name");




    btn.addEventListener("click", change);
    left.addEventListener("click", lefted);
    ee.addEventListener("mouseenter", description);

    ///  document.EEE.onmouseenter(alert("hi"));

    function description() {
        let describe = document.createElement("p");
        var text = document.createTextNode("This is blah blah");
        text.innerText = "he";
        text.color = "black";


        document.body.appendChild(describe);


    }


    function lefted() {

        let ee = document.createElement("img");
        ee.setAttribute('src', 'res/EE2.JPG');
        proj_name.innerText = "Even Exchange";


        if (project_counter == 1) {

            document.EEE.src = ee.src;


            project_counter -= 1;
            if (project_counter < 0) {
                project_counter = 0;
            }
        }
        console.log(project_counter);
        if (project_counter === 0 && proj_state) {
            let hg = document.createElement("img");
            hg.setAttribute('src', 'res/HiroGlifx.JPG');
            document.EEE.src = hg.src
        }

    }

    function change() {

        proj_name.innerText = "HiroGlifx";


        let hg = document.createElement("img");
        hg.setAttribute('src', 'res/HiroGlifx.JPG');


        if (project_counter < 1) {

            hg.width = ee.width;
            document.EEE.src = hg.src;
            project_counter += 1;
            if (project_counter > 1) ;
            project_counter = 1;

        }

        console.log(project_counter, hg.src);

    }
}

