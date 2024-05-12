function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}


$(document).ready(function() {
    // Validacija forme
    $("#forma").validate({
        rules: {
            username: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            username: "Please enter your username",
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            password: {
                required: "Please enter your password",
                minlength: "Your password must be at least 8 characters long"
            }
        }
    });

    // Provjera jačine lozinke
    $('#password').keyup(function() {
        var password = $(this).val();
        var strength = 0;

        if (password.match(/[a-z]+/)) {
            strength += 1;
        }
        if (password.match(/[A-Z]+/)) {
            strength += 1;
        }
        if (password.match(/[0-9]+/)) {
            strength += 1;
        }
        if (password.match(/[$&+,:;=?@#|'<>.^*()%!-]+/)) {
            strength += 1;
        }

        if (password.length >= 8 && strength >= 3) {
            $('#password-strength').html('Password strength: Strong');
        } else if (password.length >= 8 && strength >= 2) {
            $('#password-strength').html('Password strength: Medium');
        } else {
            $('#password-strength').html('Password strength: Weak');
        }
    });
});


$(document).ready(function() {
    $.ajax({
        url: 'osoblje.json',
        dataType: 'json',
        success: function(data) {
            displayData(data); // Poziv funkcije za prikazivanje podataka
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error:', textStatus, errorThrown);
        }
    });

    function displayData(data) {
        var container = $('#data-container');

        // Iteriramo kroz podatke i prikazujemo ih na stranici
        $.each(data, function(index, item) {
            var itemHTML = '<div>';
            itemHTML += '<p>Name: ' + item.name + '</p>';
            itemHTML += '<p>Email: ' + item.email + '</p>';
            itemHTML += '</div>';
            container.append(itemHTML);
        });
    }
});

$(document).ready(function() {
    $('#forma').submit(function(event) {
        event.preventDefault(); // Spriječavamo podrazumijevano ponašanje forme

        var formData = $(this).serialize(); // Dohvaćamo podatke iz forme

        $.ajax({
            type: 'POST',
            url: 'submit.php', // URL adresa na koju šaljemo podatke
            data: formData,
            success: function(response) {
                $('#response-message').html('<div class="success">Form successfully submitted!</div>');
                $('#forma')[0].reset(); // Resetiramo formu nakon uspješnog slanja
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $('#response-message').html('<div class="error">An error occurred while submitting the form. Please try again.</div>');
            }
        });
    });
});


function expandText() {
    var text = document.getElementById('text');
    text.classList.toggle('expanded');
}
