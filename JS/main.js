AOS.init({
    anchorPlacement: 'top-left',
    duration: 500
});
document.getElementById('email').addEventListener('blur', validateEmail)

function validateEmail() {
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.[a-zA-Z]{2,5}$/

    if (!re.test(email.value)) {
        email.classList.add('is-invalid')
        email.classList.remove('is-valid')
    } else {
        email.classList.add('is-valid')
        email.classList.remove('is-invalid')
    }
}


var currage = document.getElementById('currage');
var date = new Date();
var year = parseInt(date.getFullYear());
var month = date.getMonth();

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
}

const handleSubmit = (event) => {
    event.preventDefault()
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
            "form-name": event.target.getAttribute("name"),
            ...name
        })
    }).then(() => navigate("/thank-you/")).catch(error => alert(error))
}