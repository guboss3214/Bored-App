
const button = document.querySelector('#button');
const text_block = document.querySelector('.bored_text');
const link_text = document.querySelector('.link_text');


async function bored(){
    const response = await fetch('http://www.boredapi.com/api/activity/');

    const data = response.json();

   return data;
}

async function handleActivity(){
    const activity = await bored();

    try{
        text_block.innerHTML = activity.activity;
        link_text.innerHTML = activity.link;
        link_text.href = activity.link;
    }
    catch{
        console.log(error);
    }
}

button.addEventListener('click', () => {
    handleActivity();
});
