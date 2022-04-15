<template>
  <div class="parent">
    <div class="div1">
      <p>
  PLAN DU SITE <br /><br />
  TWEETS<br />
   <a href="/">Page d'accueil</a><br />
   <a href="/tweet">Page Tweet</a><br /><br />
  COMPTE<br />
   <a href="/account">Page Mon Compte</a><br />
   <a href="/account">Page Gestion de Mon Compte</a><br />
   <a href="/login">Page Login</a><br />
   <a href="/register">Page Register</a><br /><br />
  FOOTER<br />
   <a href="/mentions">Page Mentions Légales</a><br />
   <a href="/condition">Page Conditions Générales d'Utilisation</a><br />
   <a href="/cookie">Page Politique relative aux cookies</a><br />
   <a href="/contact">Page Contact</a><br />
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.parent {
  margin-top: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 0px;
  background-color: black;
  color: white;
}
.div1 {
  grid-area: 1 / 2 / 2 / 3;
}
p {
  text-align: justify;
}

</style>