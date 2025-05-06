document.querySelectorAll('.payment-method').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('paymentForm').classList.remove('d-none');
    });
});
document.getElementById('cardNumber').addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');
    if (this.value.length > 16) this.value = this.value.slice(0, 16);
});
document.getElementById('cardHolder').addEventListener('input', function(e) {
    this.value = this.value.replace(/[^A-Za-z\s]/g, '');
});
document.getElementById('cvv').addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');
    if (this.value.length > 3) this.value = this.value.slice(0, 3);
});

document.getElementById('securityCode').addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');
    if (this.value.length > 4) this.value = this.value.slice(0, 4);
});

function validatePayment() {
    const securityCode = document.getElementById('securityCode').value;
    if (/^[0-9]{4}$/.test(securityCode)) {
        document.getElementById('modalBody').innerHTML = `
            <div class="text-center">
                <h4>Ödeme Başarılı!</h4>
                <p>Rezervasyonunuz tamamlandı. Teşekkür ederiz!</p>
                <button type="button" class="btn btn-success" data-bs-dismiss="modal">Kapat</button>
            </div>
        `;
    } else {
        document.getElementById('securityCode').classList.add('is-invalid');
    }
}
//bs
window.addEventListener('DOMContentLoaded', event => {
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

    navbarShrink();
    document.addEventListener('scroll', navbarShrink);
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };
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
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });
});
