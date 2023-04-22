window.addEventListener("load", solve);

function solve() {

    // Get the input values
    const title = document.querySelector('#task-title');
    const category = document.querySelector('#task-category');
    const content = document.querySelector('#task-content');
    const ulReviewList = document.querySelector('#review-list');
    const ulPublishedList = document.querySelector('#published-list');

    const btnPublish = document.querySelector('#publish-btn');
    // Task 1 _________ start
    btnPublish.addEventListener("click", () => {
        if (title.value === '' || category.value === '' || content.value === '') {
            return;
        }
        ulPublishedList.innerHTML = '';
        ulReviewList.innerHTML =
        `<li class="rpost">
            <article>
                <h4>${title.value}</h4>
                <p>Category: <span>${category.value}</span></p>
                <p>Content: <span>${content.value}</span></p>
            </article>
            <button type="button" class="action-btn edit">Edit</button>
            <button type="button" class="action-btn post">Post</button>
        </li>`;
        title.value = ''; category.value = ''; content.value = '';
        
        // Task 2 ________ start
        const btnEdit = document.getElementsByClassName('action-btn edit')[0];
        btnEdit.addEventListener("click", () => {
            title.value = document.querySelector('#review-list h4').innerHTML;
            category.value = document.querySelector('#review-list p:nth-of-type(1) span').innerHTML;
            content.value = document.querySelector('#review-list p:nth-of-type(2) span').innerHTML;
            ulReviewList.innerHTML = '';
        })

        // Task 3 ________ start
        const btnPost = document.getElementsByClassName('action-btn post')[0];
        btnPost.addEventListener("click", () => {
            ulPublishedList.innerHTML =
            `<li class="rpost">
                <article>
                    <h4>${document.querySelector('#review-list h4').innerHTML}</h4>
                    <p>${document.querySelector('#review-list p:nth-of-type(1)').innerHTML}</p>
                    <p>${document.querySelector('#review-list p:nth-of-type(2)').innerHTML}</p>
                </article>
            </li>`;
            ulReviewList.innerHTML = '';
        })
    })
}