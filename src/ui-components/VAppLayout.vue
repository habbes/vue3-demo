<template>
  <div class="mx-auto w-[500px]">
    <header class="h-16 flex items-center mb-10">
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
</template>