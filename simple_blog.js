import dayjs from  'https://unpkg.com/dayjs@1.11.10/esm/index.js'

let no_of_posts= Number(prompt("How many posts u want?"));
function format_date(date){
  return dayjs(date).format('MMM DD, YYYY');
}
let new_content='';
for(let i=1; i<=no_of_posts; i++){
  let needed_date= dayjs().subtract((no_of_posts-i),'days');
  new_content += `
    <div class="col-xs-12 col-md-4 col-xl-3 col-sm-6 col-xxl-2 mb-3">
      <div class="card">
        <div class="row">
          <div class="col-6 col-sm-12 d-xs-flex align-content-center">
            <img src="https://picsum.photos/id/${i}/300/200" alt="" class="img-fluid rounded  ">
          </div>
          <div class="col-6 col-sm-12">
            <div class="card-body">
              <h2 class="mb-3">Post title ${i}</h2>
              <p>Date: ${format_date(needed_date)} </p>
              <p>This is the comment of post ${i}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
document.querySelector('.js-content-render').innerHTML=new_content;