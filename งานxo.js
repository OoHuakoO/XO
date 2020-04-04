var x = document.querySelectorAll(".vert");
for(let i=0;i<x.length;i++)
{
    x[i].status = "empty";
}
for(let i=0;i<x.length;i++)
{
    x[i].addEventListener("click",function()
    {
        if(x[i].status === "empty")
        {
            x[i].status = "x";
            let y =  document.querySelectorAll(".pic");
            y[i].src = 'https://cdn.pixabay.com/photo/2012/04/12/20/12/x-30465_960_720.png';
            checkwinX(i);    
        }
        let a = (Math.floor((Math.random() * 9)));
        if(x[a].status === "empty")
        {
        x[a].status = "y";
        let y =  document.querySelectorAll(".pic");
        y[a].src = 'https://pngimage.net/wp-content/uploads/2018/06/o-png-8.png';
        checkwinO(a);    
        }
        else if(x[a].status === "x" || x[a].status === "y")
        {
        for(i=0;i<30;i++)
        {
            let a = (Math.floor(Math.random() * 9));
            if(x[a].status === "empty")
            {
                x[a].status = "y";
                let y =  document.querySelectorAll(".pic");
                y[a].src = 'https://pngimage.net/wp-content/uploads/2018/06/o-png-8.png';
                checkwinO(a);    
                break;
            }     
            }
        }
    });
}
var topX = 0;
var center=0,under=0,left=0,centercollum=0,right=0,thayangright=0,thayangleft=0;
function checkwinX(cell)
{
    if(cell === 0 || cell === 1 || cell === 2)
    {
        if(cell === 0)
        topX++;
        if(cell ===  1)
        topX++;
        if(cell === 2)
        topX++;
        if(topX === 3)
        document.querySelector("#win").textContent = "Player 1 Winner";
}
    if(cell === 3 || cell === 4 || cell === 5)
    {
        if(cell === 3)
         center++;
        if(cell === 4)
        center++;
        if(cell === 5)
        center++;
        if(center === 3)
        document.querySelector("#win").textContent = "Player 1 Winner";
    }
    if(cell === 6 || cell === 7 || cell === 8)
    {
        if(cell === 6 )
        under++;
        if(cell ===  7)
        under++;
        if(cell === 8)
        under++;
        if(under === 3)
        document.querySelector("#win").textContent = "Player 1 Winner";
    }
    if(cell === 0 || cell === 3 || cell === 6)
    {
        if(cell === 0)
        left++;
        if(cell === 3)
        left++;
        if(cell === 6)
        left++;
        if(left === 3)
        document.querySelector("#win").textContent = "Player 1 Winner";
    }
    if(cell === 1 || cell === 4 || cell === 7)
    {
        if(cell === 1)
        centercollum++;
        if(cell === 4)
        centercollum++;
        if(cell === 7)
        centercollum++;
        if(centercollum === 3)
        document.querySelector("#win").textContent = "Player 1 Winner";
    }
    if(cell === 2 || cell === 5 || cell === 8)
    {
        if(cell === 2)
        right++;
        if(cell === 5)
        right++;
        if(cell === 8)
        right++;
        if(right === 3)
        document.querySelector("#win").textContent = "Player 1 Winner";
    }
    if(cell === 0 || cell === 4 || cell === 8)
    {
        if(cell === 0)
        thayangright++;
        if(cell === 4)
        thayangright++;
        if(cell === 8)
        thayangright++;
        if(thayangright === 3)
        document.querySelector("#win").textContent = "Player 1 Winner";
    }
    if(cell === 2 || cell === 4 || cell === 6)
    {
        if(cell === 2)
        thayangleft++;
        if(cell === 4)
        thayangleft++;
        if(cell === 6)
        thayangleft++;
        if(thayangleft=== 3)
        document.querySelector("#win").textContent = "Player 1 Winner";
    }
}
var topO=0,centerO = 0;
var underO = 0 ;
var leftO=0,centercollumO=0,rightO=0,thayangrightO=0,thayangleftO=0;


function checkwinO(cell)
{ 
    if(cell === 0 || cell === 1 || cell === 2)
    {
        if(cell === 0)
        topO++;
        if(cell === 1)
        topO++;
        if(cell === 2)
        topO++;
        if(topO === 3)
        document.querySelector("#win").textContent = "Computer Winner";
    }
    if(cell === 3 || cell === 4 || cell === 5)
    {
        if(cell === 3)
        centerO++;
        if(cell === 4)
        centerO++;
        if(cell === 5)
        centerO++;
        if(centerO === 3)
        document.querySelector("#win").textContent = "Computer Winner";
    }
    if(cell === 6 || cell === 7 || cell === 8)
    {
        if(cell === 6)
        underO++;
        if(cell === 7)
        underO++;
        if(cell === 8)
        underO++;
        if(underO === 3)
        document.querySelector("#win").textContent = "Computer Winner";
    }
    if(cell === 0 || cell === 3 || cell === 6)
    {
        if(cell === 0)
        leftO++;
        if(cell === 3)
        leftO++;
        if(cell === 6)
        leftO++;
        if(leftO === 3)
        document.querySelector("#win").textContent = "Computer Winner";
    }
    if(cell === 1 || cell === 3 || cell === 7)
    {
        if(cell === 1)
        centercollumO++;
        if(cell ===  3)
        centercollumO++;
        if(cell === 7)
        centercollumO++;
        if(centercollumO === 3)
        document.querySelector("#win").textContent = "Computer Winner";
    }
    if(cell === 2 || cell === 5 || cell === 8)
    {
        if(cell === 2)
        rightO++;
        if(cell === 5)
        rightO++;
        if(cell === 8)
        rightO++;
        if(rightO === 3)
        document.querySelector("#win").textContent = "Computer Winner";
    }
    if(cell === 0 || cell === 4 || cell === 8)
    {
        if(cell === 0)
        thayangrightO++;
        if(cell === 4)
        thayangrightO++;
        if(cell === 8)
        thayangrightO++;
        if(thayangrightO === 3)
        document.querySelector("#win").textContent = "Computer Winner";
    }
    if(cell === 2 || cell === 4 || cell === 6)
    {
        if(cell === 2)
        thayangleftO++;
        if(cell === 4)
        thayangleftO++;
        if(cell === 6)
        thayangleftO++;
        if(thayangleftO=== 3)
        document.querySelector("#win").textContent = "Computer Winner";
    }
}


     


