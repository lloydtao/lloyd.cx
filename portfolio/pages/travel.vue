<template>
  <div class="container mx-auto px-3 py-5">
    <div>
      <h1 class="text-2xl font-semibold text-slate-50">Trips</h1>
    </div>
    <div id="travel-grid-card">
      <TravelCardGrid :cards="travelCardGrid" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: travelCardGrid } = await useAsyncData("trips", () => {
  return queryCollection("trips").order("startDate", "DESC").all();
});
</script>
