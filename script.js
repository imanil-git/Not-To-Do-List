// const dataFrom = {};

// const inputData = () => {
//   document.querySelectorAll(".form-control").forEach((input) => {
//     input.addEventListener("input", (event) => {
//       //   console.log(event);
//       const task = event.target.value;
//       dataFrom[task] = event.target.value;
//       // console.log(dataFrom);
//     });
//   });
// };

// const getData = () => {
//   document.getElementById("button").addEventListener("click", () => {
//     dataList.push({...dataFrom});
//     console.log(dataList);
//   });
// };
// const dataList = [];

// inputData();
// getData();

// const dataList = [];
// let taskCount = 1;

// const getInput = () => {
//   document.querySelector("#button").addEventListener("click", () => {
//     const task = document.querySelector('input[name="task"]').value;
//     const hr = document.querySelector('input[name="hr"]').value;

//     if (task && hr) {
//       dataList.push({ task, hr });
//       // console.log(dataList);

//       insertData(task, hr);
//       taskCount++;

//       document.querySelector('input[name="task"]').value= "";
//       document.querySelector('input[name="hr"]').value = "";
//     }
//   });
// };

// const insertData = (task, hr) => {
//   // getting the table body if the Entry List
//   const newElm = document.querySelector(".table tbody");

//   // creating new row
//   const newRow = document.createElement("tr");

//   // create the index cell
//   const indexCell = document.createElement('th');
//   indexCell.textContent = taskCount;
//   newRow.appendChild(indexCell);

//   // creating table data for task
//   const forTask = document.createElement("td");
//   forTask.textContent = task;
//   newRow.appendChild(forTask);

//   // creating table data for hr
//   const forHr = document.createElement("td");
//   forHr.textContent = `${hr}hr`;
//   newRow.appendChild(forHr);

//   // Creating and append the Delete button cell
//   const actionCell = document.createElement("td");
//   actionCell.classList.add("text-end");

//   // Creating button
//   const deleteBtn = document.createElement("button");
//   deleteBtn.classList.add("btn", "btn-danger");
//   deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
//   deleteBtn.setAttribute("type", "button");
//   deleteBtn.addEventListener("click", () => {
//     newElm.removeChild(newRow); //Remove the when delete button clicked
//   });
//   actionCell.appendChild(deleteBtn);
//   // Creating sideArrow
//   const sideArrow = document.createElement("button");
//   sideArrow.classList.add("btn", "btn-success");
//   sideArrow.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
//   sideArrow.setAttribute("type", "button");
//   actionCell.appendChild(sideArrow);

//   newRow.appendChild(actionCell);

//   //Append the new row to the table
//   newElm.appendChild(newRow);
// };
// getInput();

let dataList = [];

const handleSubmit = (e) => {
  // const elm = document.getElementById("task");

  const newForm = new FormData(e);

  const task = newForm.get("task");
  const hr = newForm.get("hr");

  const obj = {
    task,
    hr,
    id: randomIdGenerator(),
  };

  dataList.push(obj);

  displayEntryList();
};

const displayEntryList = () => {
  console.log(dataList);
  console.log("first");

  let str = "";

  const entryElm = document.getElementById("entryList");

  dataList.map((item, i) => {
    str += `<tr>
    <th>${i + 1}</th>
    <td>${item.task}</td>
    <td>${item.hr}</td>
    <td class="text-end">
        <button class="btn btn-danger" type="button" aria-label="Delete task"><i
                class="fa-solid fa-trash"></i></button>
        <button class="btn btn-success" type="button" aria-label="Edit task"><i
                class="fa-solid fa-arrow-right"></i></button>
    </td>
  </tr>`;
  });

  entryElm.innerHTML = str;
};

const randomIdGenerator = (length = 6) => {
  const str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";

  let id = "";

  for (i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * str.length);
    id += str[randomIndex];
  }

  return id;
};
