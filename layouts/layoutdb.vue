<template>
  <div
    class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]"
  >
    <SidebarDashboard />
    <div class="flex flex-col">
      <HeaderDashboard />
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup></script>
