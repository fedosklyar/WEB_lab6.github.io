// let counter = 1;

// function CreateElement(block)
// {
    
//     var CollapseName = document.forms["Create_Colapse_objects"]["CollapseName"].value;
//     var CollapseContent = document.forms["Create_Colapse_objects"]["CollapseContent"].value;

//     if(CollapseName && CollapseContent)
//     {
//         SetElement(block, CollapseName, CollapseContent);
//         ++counter;
//     }
// }



// function SetElement(block, CollapseName, CollapseContent)
// {
//     var buttonId = "CollapseButton" + counter;
//     var strButtonId = buttonId.toString(); 
        
//     block.innerHTML += `
//     <button class='btn btn-primary' type='submit' 
//         data-bs-toggle='collapse' id='${buttonId}'
//         name='${buttonId}'
//         data-bs-target='#collapseExample${counter}' 
//         aria-expanded='false' onclick='CollapseAction("${buttonId}")' 
//         aria-controls='collapseExample${counter}'>${CollapseName}</button>
//     <div class='collapse' id='collapseExample${counter}'>
//         <div class='card card-body'>
//             ${CollapseContent}
//         </div>
//     </div>`;
// }


function CollapseAction(buttonId)
{
    var button = document.getElementById(buttonId);
    button.addEventListener('click', collapseclick)
    function collapseclick()
    {
        var closed = button.getAttribute('aria-expanded');
        var collapse = document.getElementById(button.getAttribute('data-bs-target').substring(1));
        
        if(collapse.style.display === 'block')
           collapse.style.display = 'none';
        else
           collapse.style.display = 'block';
    }
}


let activefile = "";

async function fetchObject()
{
    const objectName = "File.txt";
    let url = `/readfile.php?objectname=${objectName}`;

    const response = await fetch(url);
    console.log("From 2nd_script:\n" + response);

    const object = await response.text();
    document.getElementById("CreatedContent").innerHTML = object;

    activefile = objectName;

}

document.getElementById("Fetch").onclick = fetchObject;

async function checkUpdates()
{
    const objectName = "File.txt";

    let url = `/readfile.php?objectname=${activefile}`;
    const response = await fetch(url);
    console.log(response);

    const object = await response.text();

    if(object !== document.getElementById("CreatedContent").innerHTML)
        document.getElementById("CreatedContent").innerHTML = object;
    
}

setInterval(checkUpdates, 10*1000);