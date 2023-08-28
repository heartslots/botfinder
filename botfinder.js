botfinder();

function botfinder(){
    let mx = 0;
    let my = 0;
    let cx = 1;
    let cy = 1;

    $(document).on('mousemove', function(mouse){
        let movex = mouse.clientX;
        let movey = mouse.clientY;

        mx = movex;
        my = movey;

        console.log(mx, my, cx, cy);
    });
    $(document).on('click', function(mouse){
        let clickx = mouse.clientX;
        let clicky = mouse.clientY;
        cx = clickx;
        cy = clicky;
    });
}