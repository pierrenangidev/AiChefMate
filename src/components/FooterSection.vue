<script setup>
import { Images } from "../scripts/images.js";
</script>

<template>
  <footer>
    <div class="footer-content">
      <div class="footer-nav-copyright">
        <nav class="footer-navbar">
          <img
            :src="Images.footer.altLogo"
            :srcset="`${Images.footer.altLogo} 1x, ${Images.footer.altLogo2x} 2x`"
            alt="AiChefMate Logo Light green"
          />

          <div class="footer-nav-links">
            <a href="#">Recipes</a>
            <a href="#">Blog</a>
          </div>

          <div class="footer-nav-links">
            <a href="#">Customer Support</a>
            <a href="#">Your Profile</a>
          </div>
        </nav>

        <p class="footer-copyright">
          © 2064 AIChefMate. All rights reserved. |
          <a href="#">Privacy Policy</a> |
          <a href="#">Terms of Use</a>
        </p>
      </div>

      <p class="footer-description">
        Join us on our journey to make meal planning simple and <br />joyful.
        Connect with us on social media, explore our FAQs for <br />quick
        answers, or drop us a line anytime.
      </p>

      <div class="socials">
        <a
          href="https://www.facebook.com/AiChefMate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            :src="Images.footer.socials.facebook.default"
            :srcset="`${Images.footer.socials.facebook.default} 1x, ${Images.footer.socials.facebook.default2x} 2x`"
            alt="Facebook white light logo"
          />
        </a>
        <a
          href="https://www.twitter.com/AiChefMate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            :src="Images.footer.socials.twitter.default"
            :srcset="`${Images.footer.socials.twitter.default} 1x, ${Images.footer.socials.twitter.default2x} 2x`"
            alt="Twitter white light logo"
          />
        </a>
        <a
          href="https://www.tiktok.com/@AiChefMate"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>

        <img
          :src="Images.footer.socials.tiktok.default"
          :srcset="`${Images.footer.socials.tiktok.default} 1x, ${Images.footer.socials.tiktok.default2x} 2x`"
          alt="TikTok white light logo"
        />
      </div>
    </div>
  </footer>
</template>

<style lang="stylus" scoped>
@import "../stylesheets/variables.styl"

footer
    background-color primaryGreen
    color secondaryGreen
    height 413px
    display flex
    justify-content center
    align-items center
    padding 110px 140px

    .footer-content
        height 193px
        display flex
        justify-content space-between
        align-items start

    .footer-nav-copyright
        display flex
        flex-direction column
        align-items start
        gap 73px

    .footer-navbar
        display: flex;
        gap: 90px;
        align-items: start;

    .footer-nav-links
        display: flex;
        gap: 40px;
        flex-direction: column;
        justify-content: center;
        align-items: start;

    a
        text-decoration underline

        &:hover
            text-decoration underline

    .footer-copyright
        color backgroundLight !important

    .footer-description
        margin 0 80px 0 99px
        color secondaryGreen

        a
            color backgroundLight

            &:hover
                color backgroundLight

    .socials
        display flex
        flex-direction column
        justify-content start
        gap 15px
</style>
