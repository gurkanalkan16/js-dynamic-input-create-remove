$(document).ready(function() {

    $("#edit-abroad").on('change', function() {
        const edit_current = $('#abroad').css("display");
        const edit_current2 = $('#abroad2').css("display");
        if (edit_current == 'none' & edit_current2 == 'none') {

            $('#edit-current_language1').prop("checked", false);
            $('#edit-current_language2').prop("checked", false);

            $('#input1').val("");
            $('#input2').val("");

            $('#abroad').show(500);
            $('#abroad2').show(500);
        } else {
            $('#abroad').hide(500);
            $('#abroad2').hide(500);

            $('#free_shipping').hide(500);
            $('#pay_door').hide(500);

            var x = document.querySelector("#free_shipping");
            var el = document.querySelector("#free");
            x.removeChild(el);

            var x2 = document.querySelector("#pay_door");
            var el2 = document.querySelector("#pay");
            x2.removeChild(el2);
        }
    });
    $("#edit-current_language1").on('change', function() {
        const edit_current = $('#free_shipping').css("display");
        if (edit_current == 'none') {
            var nesne = document.createElement("input");
            nesne.setAttribute("type", "text");
            nesne.setAttribute("name", "mesaj");
            nesne.setAttribute("id", "free");
            nesne.setAttribute("class", "form-control");
            nesne.setAttribute("placeholder", "Ücretsiz kargo limiti");
            var panelDiv = document.getElementById("free_shipping");
            panelDiv.appendChild(nesne);
            $('#free_shipping').show(300);
        } else {
            var x = document.querySelector("#free_shipping");

            var el = document.querySelector("#free");

            x.removeChild(el);
            $('#free_shipping').hide(00);
        }
    });
    $("#edit-current_language2").on('change', function() {
        const edit_current2 = $('#pay_door').css("display");
        if (edit_current2 == 'none') {
            var nesne = document.createElement("input");
            nesne.setAttribute("type", "text");
            nesne.setAttribute("name", "mesaj2");
            nesne.setAttribute("id", "pay");
            nesne.setAttribute("class", "form-control");
            nesne.setAttribute("placeholder", "Kapıda Ödeme ücreti");
            var panelDiv = document.getElementById("pay_door");
            panelDiv.appendChild(nesne);
            $('#pay_door').show(300);
        } else {
            var x = document.querySelector("#pay_door");

            var el = document.querySelector("#pay");

            x.removeChild(el);
            $('#pay_door').hide(00);
        }
    });
});