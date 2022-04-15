<template>
  <div class="parent">
    <div class="div1">
      <p>
        MENTIONS LÉGALES<br /><br />
        En vigueur au 01/04/2022 Conformément aux dispositions des Articles
        6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans
        l’économie numérique, dite L.C.E.N., il est porté à la connaissance des
        utilisateurs et visiteurs, ci-après l"Utilisateur", du site
        https://www.yowl.fr, ci-après le "Site", les présentes mentions légales.
        La connexion et la navigation sur le Site par l’Utilisateur implique
        acceptation intégrale et sans réservedes présentes mentions légales. Ces
        dernières sont accessibles sur le Site à la rubrique « Mentions légales
        ».
        <br />
        <br />

        ARTICLE 1 - L'EDITEUR
        <br />
        L'édition du Site est assurée par EPITECH SARL au capital de 1 euros,
        immatriculée au Registre du Commerce et des Sociétés de Nice sous le
        numéro 812460491 dont le siège social est situé au 13 RUE ST FRANCOIS DE
        PAULE, 06300 Nice Numéro de téléphone 0890109319, Adresse e-mail :
        intra@epitech.eu. N° de TVA intracommunautaire : FR17812460491 Le
        Directeur de la publication est Coding Academy Nice ci-après
        l'"Editeur".
        <br />
        <br />

        ARTICLE 2 - L'HEBERGEUR
        <br />
        L'hébergeur du Site est la société OVH ou HEROKU, dont le siège social
        est situé au 23 chemin sorgentino 06200 Nice, avec le numéro de
        téléphone : 0607080910 + adresse mail de contact
        <br />
        <br />

        ARTICLE 3 - ACCES AU SITE
        <br />
        Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force
        majeure, interruption programmée ou non et pouvant découlant d’une
        nécessité de maintenance. En cas de modification, interruption ou
        suspension du Site, l'Editeur ne saurait être tenu responsable.
        <br />
        <br />

        ARTICLE 4 - COLLECTE DES DONNEES
        <br />
        Le Site assure à l'Utilisateur une collecte et un traitement
        d'informations personnelles dans le respect de la vie privée
        conformément à la loi n°78-17 du 6 janvier 1978 relative à
        l'informatique, aux fichiers et aux libertés. En vertu de la loi
        Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur
        dispose d'un droit d'accès, de rectification, de suppression et
        d'opposition de ses données personnelles. L'Utilisateur exerce ce droit
        : Toute utilisation, reproduction, diffusion, commercialisation,
        modification de toute ou partie du Site, sans autorisation de l’Editeur
        est prohibée et pourra entraînée des actions et poursuites judiciaires
        telles que notamment prévues par le Code de la propriété intellectuelle
        et le Code civil. Rédigé sur http://legalplace.fr
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