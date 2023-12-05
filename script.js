// document.getElementById('saveButton').addEventListener('click', function() {
//     var formData = new FormData(document.forms["Create_Colapse_objects"]);

//     formData.append

//     fetch("save_data.php", {
//         mtheod: "POST",
//         body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Обробка відповіді, якщо потрібно
//         console.log("Data saved successfully");
//     })
//     .catch(error => console.error("Error:", error));
// });


async function readObjects()
{
        alert("Hey");
        counter = 1;
        let formData = new FormData();
        //while(true)
        //{
            const ObjectName = "File.txt";
            const ObjectContent = document.getElementById("CreatedContent").innerHTML;
            if(ObjectName !== null && ObjectContent!== null)
            {
                console.log(ObjectName);
                console.log(ObjectContent);
                formData.append("objectName", ObjectName);
                formData.append("objectContent", ObjectContent);
            }
                
           // else
               // break;
           // ++counter;            
        //}

        const response = await fetch("writefile.php", {
            method: "POST",
            body: formData,
        });

        console.log(response);
        //let formData = new FormData();
        
    
}

document.getElementById("Submit").onclick = readObjects;