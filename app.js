// initial command to start app
let direct = "";

// function to allow content to be generated in a div with the class of entry. This content changes the html with interpolated data and three <p> tags. A variable called htmlStrng creates an empty string for use with created content.
const laser = function() {
    let htmlStrng = '';
    for (let i = 0; i < employeeList.length; i++) {
        htmlStrng += `<div class="entry"><p> ${employeeList[i].name}</p><p> ${employeeList[i].officeNum}</p><p> ${employeeList[i].phoneNum}</p></div>`;
    }
    render(htmlStrng);
};

// render function established
const render = function(htmlStrng) {
    $("#directory").html(htmlStrng);
};

// this function clears the directory and causes input forms to hide while running the above 'laser' function
const setSight = function() {
    $("directory").empty();
    direct = '';
    $('form').hide();
    laser();
};

// ADD FUNCTION
// set up add function
const addSetup = function() {
    $('#directory').empty();
    console.log("I work");
    direct = 'add';
    $('form').show();
    $('.extra-inputs').show();
};

// allows data to be captured and pushed to the array
const add = function () {
    const mployName = $('#empName').val();
    const mployOffice = $('#empOffice').val();
    const mployPhone = $('#empPhone').val();
    console.log("push");
    employeeList.push ({
        name: mployName,
        officeNum: mployOffice,
        phoneNum: mployPhone
    });
    laser();
};

// direct the flow from click event
const flowDirect = function() {
    console.log("flowDirect");
    event.preventDefault();
    switch (direct) {
        case 'add':
            add ();
            break;
        case 'verify':
            vrfy();
            break;
        case 'update':
            updt();
            break;
        case 'delete':
            remove();
            break;
    }
};




// VERIFY FUNCTION
const setVfy = function() {
    $("#directory").empty();
    direct = 'vrfy';
    $("form").show();
    $('.extra-inputs').hide();
    console.log("setvfy is communicating with click event");
}

const vrfy = function() {
    const mployName = $('#empName').val();
    let htmlStrng = 'no';
    for (let i = 0; i < employeeList.length; i++){
        if (employeeList[i].name === mployName) {
            htmlStrng = 'yes';
            return;
            
        }
    }
    console.log(verified);
    render(htmlStrng);
};

// UPDATE FUNCTION
const setUp = function() {
    $("#directory").empty();
    direct = 'updt';
    $("form").show();
    $('.extra-inputs').show();
    console.log("this is a setup");
}


const updt = function() {
    const mployName = $('#empName').val();
    const mployOffice = $('#empOffice').val();
    const mployPhone = $('#empPhone').val();
    for (let i = 0; i < employeeList.length; i++){
        if (employeeList[i].name === mployName) {
            employeeList[i].officeNum = mployOffice;
            employeeList[i].phoneNum = mployPhone;
    
        }
    }
    console.log("clicky");
    laser();
};

// DELETE
const setRemove = function () {
    $("#directory").empty();
    direct = 'remove';
    $("form").show();
    $('.extra-inputs').hide();
    console.log('jack skellington');

}

const remove = function() {
    console.log("no soup for you");
    const mployName = $('#empName').val();
    for (let i = 0; i < employeeList.length; i++){
        if (employeeList[i].name === mployName) {
            employeeList.splice(i, 1);
        }
        return;
}
};



// EVENT LISTENERS
$('#view').on('click',setSight);
$('#add').on('click', addSetup);
$('#verify').on('click', setVfy);
$('#update').on('click', setUp);
$('#delete').on('click', setRemove);
$('#submit').on('click',flowDirect);