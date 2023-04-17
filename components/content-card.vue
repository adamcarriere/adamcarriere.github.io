<template>
    <div class="content-card">
        <slot></slot>
    </div>
</template>

<style lang="scss">
@use '~/styles/vars';

.content-card {
    margin: auto;
    padding: vars.$gutter;
    border: vars.$gutter/4 solid black;
    background-color: white;
    filter: drop-shadow(vars.$gutter vars.$gutter);
    width: 80vw;
    max-width: 1280px;

    a {
        color: inherit;
    }
}
</style>