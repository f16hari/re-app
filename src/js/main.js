var trash = '<i class="fa fa-trash" aria-hidden="true"></i>';
var tick = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
var redo = '<i class="fa fa-repeat" aria-hidden="true"></i>';

var count=document.getElementById('notDone').childElementCount;
var empty = document.getElementById('empty');

if(count==0){
    empty.innerHTML='Good !! Enter New Activity';
}

function check()
{
    var count=document.getElementById('notDone').childElementCount;
    console.log(count);
    if(count==0){
        
        empty.innerHTML='Good !! Enter New Activity';
    
    }
    else
    empty.innerHTML='';

}


document.getElementById('add').onclick=function print(){

    var value = document.getElementById('newActivity').value;
    count=document.getElementById('notDone').childElementCount;
    if(count!=0){empty.innerHTML='';}
    
    if(value){ 
        addActivity(value);
        document.getElementById('newActivity').value='';

    }
}

function removeItem()
{
    var Item = this.parentNode.parentNode;
    var parent = Item.parentNode;
    parent.removeChild(Item);
    check();
}

function adCompleted()
{
    var par= this.parentNode.parentNode;
    var compData = par.querySelector('p').innerHTML;

    par.parentNode.removeChild(par);
    check();

    var list = document.getElementById('Done');
    var item = document.createElement('li');

    var data = document.createElement('p');
    data.classList.add('Activity');
    data.innerHTML = compData;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var button1 = document.createElement('button');
    button1.classList.add('delete');
    button1.innerHTML = trash;

    button1.addEventListener('click',removeItem);

    var button2 = document.createElement('button');
    button2.classList.add('redo');
    button2.innerHTML = redo;

    button2.addEventListener('click',reDo);

    list.insertBefore(item, list.childNodes[0]);
    item.appendChild(data);
    item.appendChild(buttons);
    buttons.appendChild(button1);
    buttons.appendChild(button2);


}

function addActivity(text)
{
    var list = document.getElementById('notDone');

    var item = document.createElement('li');

    var data = document.createElement('p');
    data.classList.add('Activity');
    data.innerHTML = text;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var button1 = document.createElement('button');
    button1.classList.add('delete');
    button1.innerHTML = trash;

    button1.addEventListener('click',removeItem);

    var button2 = document.createElement('button');
    button2.classList.add('completed');
    button2.innerHTML = tick;

    button2.addEventListener('click',adCompleted);

    list.insertBefore(item, list.childNodes[0]);
    item.appendChild(data);
    item.appendChild(buttons);
    buttons.appendChild(button1);
    buttons.appendChild(button2);
    check();


}

function reDo()
{

    var par= this.parentNode.parentNode;
    var compData = par.querySelector('p').innerHTML;

    par.parentNode.removeChild(par);

    var list = document.getElementById('notDone');
    var item = document.createElement('li');

    var data = document.createElement('p');
    data.classList.add('Activity');
    data.innerHTML = compData;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var button1 = document.createElement('button');
    button1.classList.add('delete');
    button1.innerHTML = trash;

    button1.addEventListener('click',removeItem);

    var button2 = document.createElement('button');
    button2.classList.add('completed');
    button2.innerHTML = tick;

    button2.addEventListener('click',adCompleted);

    list.insertBefore(item, list.childNodes[0]);
    item.appendChild(data);
    item.appendChild(buttons);
    buttons.appendChild(button1);
    buttons.appendChild(button2); 

    check();


}