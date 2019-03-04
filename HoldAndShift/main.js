/** pseudo CODE:-
 * 1. select all the checkboxes and assigned into a variable
 * 2. to confirm that all checkboxes are selected or not 
 *  console.log(allCheckboxes);
 * 3. declare a varible for secondchecked
 * 4. add eventlistener on all checkboxes
 * 5. add function for checkhandler
 * 6. if an events occurs with shiftkey && checkbox checked 
 * 7. iterate for loop for each checkbox and checked -> checkbox === event.target or checkbox === secondchecked
 * 8. if true then leftlist = !leftlist;
 * 9. another if for changing checked properties of secondckecked -> checkbox.checked = true;
 * 10. second checked = event.target
 * 
 */

const allCheckbox = document.querySelectorAll('.list input[type="checkbox"]');

console.log( allCheckbox);
let secondChecked ;
function checkList(event){
  let leftlist = false;
  if(event.shiftKey && event.target.checked) {
    allCheckbox.forEach(checkbox => {
      if (checkbox === event.target || checkbox === secondChecked) {
        leftlist = !leftlist;
      }
      if (leftlist) {
        checkbox.checked = true;
      }
    });
  }
  secondChecked =event.target;
}
allCheckbox.forEach(checkbox => checkbox.addEventListener('click', checkList));
