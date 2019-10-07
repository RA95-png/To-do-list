  console.log("test");
  document.getElementById("add").addEventListener( "click" ,Addtext) ;

   let ToDoList=[]
    let input= document.getElementById("input-text").value;
    let add= document.getElementById("add");
    let list=document.getElementsByTagName("UL");

    // let Clear_Completed = document.querySelector(".clear");
    // let complete_all=document.querySelector(".complete-all");
    // let Completed=document.querySelector(".Completed");
    // let all_task=document.querySelector(".all-T");
    // let uncomplete=document.querySelector(".Uncompletet");
    
function Addtext(){

    let node= document.createElement("li");
    let textnode=document.createTextNode(input);
    node.appendChild(textnode);
    document.getElementById("input-text").appendChild(node);
     node.appendChild(textnode);
     node.setAttribute("class","list_2");
     document.getElementById("todolist-1").appendChild(node);
     document.getElementById("input-text").value=" ";
     let li = document.getElementsByTagName("li");
     let i;

     for (i = li.length-1; i < li.length; i++) {
         let image = document.createElement("IMG");
         image.setAttribute("src","panorama_fish_eye-24px%20(1).png");
         image.setAttribute("class", "image2");
         image.setAttribute("id", "imageId1");
         image.setAttribute("alt", "");
         li[i].appendChild(image);
       }

       for (i = li.length-1; i < li.length; i++) {
        let image = document.createElement("IMG");
        image.setAttribute("src","highlight_off-24px.png");
        image.setAttribute("class", "image3");
        image.setAttribute("id", "imageId2");
        image.setAttribute("alt", "");
        li[i].appendChild(image);
      }
}