/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

    // Build onClick arrow function that fetches form values https://www.w3schools.com/jsref/event_onclick.asp & https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript
    // TODO: Change className of input fields to is-valid or is-invalid https://stackoverflow.com/questions/14361517/mark-error-in-form-using-bootstrap & https://stackoverflow.com/questions/3937513/javascript-validation-for-empty-input-field
    onClick = () => {
        let firstNameValue = document.getElementById("fistNameApplicantId").value;
        let lastNameValue = document.getElementById("lastNameApplicantId").value;
        let positionNameValue = document.getElementById("positionNameId").value;
        let companyNameValue = document.getElementById("companyNameId").value;
        let hiringManagerNameValue = document.getElementById("hiringManagerNameId").value;
        let personalMotivationValue = document.getElementById("personalMotivationId").value;
        let companyMotivationValue = document.getElementById("companyMotivationId").value;
        let skilsValue = document.getElementById("skillsId").value;
        let uniquenessValue = document.getElementById("uniquenessId").value;
        let attributesValue = document.getElementById("attributesId").value;

        document.getElementById("letter").innerHTML = `First name: ${firstNameValue}, last name: ${lastNameValue}, 
        position: ${positionNameValue}, company: ${companyNameValue}, hiring manager: ${hiringManagerNameValue}, 
        personal motivation: ${personalMotivationValue}, company motivation: ${companyMotivationValue}, 
        skills: ${skilsValue}, why you?: ${uniquenessValue}, attributes to highlight: ${attributesValue}
        `;
    };

});
