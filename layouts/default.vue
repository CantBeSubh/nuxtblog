<template>
    <AppNavbar />
    <slot />
    <footer class="flex justify-center bottom-4">
        &copy; Fake Company {{ new Date().getFullYear() }}
    </footer>
</template>
