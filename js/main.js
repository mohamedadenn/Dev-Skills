$(document).ready(function() {
    let $removeSkill = $(".remove-skill")
        //Removing a skill via button
    $removeSkill.click(function() {

        this.closest("tr").remove();
        alert("Your skill has been removed")
    });

    //Adding a new skill

    $(".submit-skill").click(function() {
        let newSkill = $("input").val()
        let addSkill = `<tr> <td><button class="remove-skill" type="button">Remove</button></td>
       <td>${newSkill}</td>
     </tr>`;
        $("table").append(addSkill)
    });

});