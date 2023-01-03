<template>
  <footer>
    <div class="list__footer">
        <div class="footer__contact">
            <h3>Contact Us</h3>
            <p>Drou Demo Store</p>
            <p>No. 69 Quảng Minh - Mỹ Hưng - Thanh Oai - Hà Nội - Việt Nam</p>
            <p>+84 - 395147957</p>
            <p>tavanhoi00@gmail.com</p>
        </div>
        <div class="footer__information">
            <h3>Information </h3>
            <ul>
                <li><router-link to="">Product Support</router-link></li>
                <li><router-link to="">Checkout</router-link></li>
                <li><router-link to="">License Policy</router-link></li>
                <li><router-link to="">Affiliate</router-link></li>
            </ul>
        </div>
        <div class="footer__customer">
            <h3>Customer Service</h3>
            <ul>
                <li><router-link to="" >Help Center</router-link></li>
                <li><router-link to="" >Redeem Voucher</router-link></li>
                <li><router-link to="" >Contact Us</router-link></li>
                <li><router-link to="" >Policies & Rules</router-link></li>
            </ul>
        </div>
        <div class="footer__download">
            <div class="download__Installation">
                <h3>Download Our App</h3>
                <p>Download our App and get extra 15% Discount on your first Order..!</p>
            </div>
            <div class="download__img">
                <img @click="linkToContact" src="/public/images/app-store.jpg" alt="">
                <img @click="linkToContact" src="/public/images/google-play.jpg" alt="">
            </div>
        </div>
    </div>

    <div class="footer__coppy-right">
        <p>Copyright © Team90Degree | Built with Drou by Team90Degree.</p>
        <img src="/public/images/payment-method.png" alt="">
    </div>
  </footer>
</template>

<script>

import "./footer.scss"
import { useRouter } from "vue-router" 
export default {
    setup() {
        const router = useRouter()

        function linkToContact() {
            router.push('/contact')
        }

        return { linkToContact }
    }
}
</script>
