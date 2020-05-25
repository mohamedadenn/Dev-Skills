$(document).ready(function() {
    memo()
    const $removeSkill = $(".remove-skill")
    const $submitSkill = $(".submit-skill")

    /*--------------------
       Add a skill memo 
       ----------------------*/
    function memo() {
        if ($("table tr").length == 0) {
            $("h2").css("display", "block")
        } else {
            $("h2").css("display", "none")
        }
    }

    /*--------------------
    Adding a new skill if 
    theres input in the form 
    ----------------------*/

    $submitSkill.click(function() {
        //grabs text
        var newSkill = $("input").val()
            //adds text and button to table
        var addSkill = `<tr> <td><button class="remove-skill" type="button">Remove</button></td>
       <td>${newSkill}</td></tr>`;
        if (newSkill !== "") { //checks to make sure theres actual text 
            $("table").append(addSkill)
            memo()
        }
    });

    /*--------------
    Removing skill by 
    clicking button 
    ----------------*/
    $('table').on('click', 'button', function() {
        //fades it
        $(this).closest('tr').fadeOut(500, function() {
            //removes from the DOM
            $(this).remove();
            memo()
        });
    });
});