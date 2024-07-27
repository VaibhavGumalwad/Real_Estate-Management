function validate() {
    const correctusername = 'vaibhav';
    const correctpassword = '07172005';
    const correct_username = 'Arjun';
    const correct_password = '12082004';
    const correct__username = 'Kapil';
    const correct__password = '23072004';
    
    const inputname = document.querySelector('#name').value;
    const inputpass = document.querySelector('#password').value;
    if (inputname == correctusername || inputname==correct_username || inputname==correct__username && inputpass == correctpassword || inputpass==correct_password || inputpass==correct__password) {
        window.open('Buy Now.html');
    } else {
        alert('wrong password/username');
    }
}