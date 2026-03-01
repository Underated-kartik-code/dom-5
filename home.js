let postbtn = document.querySelector('.post-btn')

postbtn.addEventListener('click',function(event){
    event.preventDefault();

    let title =  document.querySelector('#title')
    let descreption = document.querySelector('#descreption')

    let div = document.createElement('div')
    div.classList.add('post-card')
    let inhead = document.createElement('div')
    inhead.classList.add('post-header')
    let h4 = document.createElement('h4')


    let removebtn = document.createElement('button')
    removebtn.classList.add('delete-btn')
    removebtn.classList.add('ri-delete-bin-line')

    removebtn.addEventListener('click', function () {
    div.remove();
    });


    let p = document.createElement('p')

    h4.textContent = title.value;
    p.textContent = descreption.value

    inhead.appendChild(h4)
    inhead.appendChild(removebtn)

    div.appendChild(inhead);
    div.appendChild(p);

    document.querySelector('.posts-container').appendChild(div);

    let form = document.querySelector('.post-form')
    form.reset();
})







