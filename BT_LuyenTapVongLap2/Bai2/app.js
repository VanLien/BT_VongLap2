function abc() {
    let a=document.getElementById('number').value;
    let factorial=1;
    for (let i=1;i<=a;i++){
        factorial*=i;
    } document.getElementById('Result').innerHTML= factorial;
}