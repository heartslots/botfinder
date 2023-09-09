botfinder();

function botfinder(){
    let mx = 0;
    let my = 0;

    $(document).on('mousemove', function(mouse){
        let movex = mouse.clientX;
        let movey = mouse.clientY;

        mx = movex;
        my = movey;

        console.log(mx, my);
    });
    $(document).on('click', function(){
        console.log('click');
    });
}