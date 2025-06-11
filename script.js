const btn_submit_formtodo = document.querySelector('#btn_submit_formtodo');
const container_todo_list = document.querySelector('#container_todo_list')
const form_todo = [];

btn_submit_formtodo.addEventListener('click', function () {

    const todo_name = document.querySelector('#todo_name').value.trim()
    const todo_status = document.querySelector('#todo_status').value.trim()
    const todo_date = document.querySelector('#todo_date').value.trim()
    
    if (!todo_name || !todo_status || !todo_date) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Check all data, make sure there is no empty data.!",
        });
        return
    }

    
    form_todo.push(todo_name, todo_status, todo_date)
    console.log(form_todo);
    

    if (form_todo.length > 2) {
        const create_taks =  create_taks_list(form_todo)
        if (create_taks > 0) {
            Swal.fire({
                title: "Good job!",
                text: "Todo data successfully created!",
                icon: "success"
            });
            form_todo.length = 0
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        }
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Check all data, make sure there is no empty data.!",
        });
        return
    }
    
})



function create_taks_list(fotm_todo) {
    
    
     //  buat element pembungkus yaitu card dengan class card
    const card = document.createElement('div')
    card.classList.add('card', 'todo_border_gray', 'bg-transparent', 'w-100', 'mb-4')

    // buat element card body
    const card_body = document.createElement('div')
    card_body.classList.add('card-body', 'text-white')
    
    
    // buat element untuk membungkus content card
    const content_card = document.createElement('div')
    content_card.classList.add('d-flex', 'justify-content-between', 'align-items-center')
    

    // buat div konten kiri
    const content_card_left = document.createElement('div')
    content_card_left.classList.add('todo_left_content')
    
    // buat div konten kanan
    const content_card_right = document.createElement('div')
    content_card_right.classList.add('todo_right_content')

    // buat element html untuk div kiri
    var class_badge_status = "";
    var text_badge_status  = "Unknown";
    if (form_todo[1] == "1") {
        class_badge_status = "bg-danger"
        text_badge_status  = "Urgent"
    }
    if (form_todo[1] == "2") {
        class_badge_status = "bg-success",
        text_badge_status  = "No Urgent"
    }
    content_card_left.innerHTML = `
        <div>
            Todo Name : <b>${form_todo[0]}</b>
        </div>
        <div>
            Status : <span class="badge ${class_badge_status}">${text_badge_status}</span>
        </div>
        <div>
            Todo Date : <b>${form_todo[2]}</b>
        </div>
    `
    // buat element html untuk div kanan
    content_card_right.innerHTML = `
        <div class="badge bg-danger">o</div>
    `

    // rangkai struktur html
    // content card left dan rigjt di masukan ke dalam content card
    content_card.appendChild(content_card_left)
    content_card.appendChild(content_card_right)

    // content card di masukan ke card body
    card_body.appendChild(content_card)

    // card body di masukan ke dalam card
    card.appendChild(card_body)
    
    // card di masukan ke tampilan todo list
    container_todo_list.appendChild(card)

    return 1;
}