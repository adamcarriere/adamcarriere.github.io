<template>
    <div class="content-card">
        <slot></slot>
    </div>
</template>

<style lang="scss">
@use '~/styles/vars';

.content-card {
    margin: auto;
    background-color: white;
    max-width: 1280px;
    padding: vars.$gutter;
    border: vars.$gutter/4 solid black;

    a {
        color: inherit;
    }

    @media screen and (min-width: 801px) {
        width: 80vw;
        filter: drop-shadow(vars.$gutter vars.$gutter);
    }
}
</style>