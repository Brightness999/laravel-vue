<template>
  <vx-card title="With Animation" code-toggler>
    <p>
      Add animation to changes using
      <code>transition-group</code>.
    </p>

    <div class="mt-5">
      <vs-list>
        <vs-list-header title="People Group" color="primary"></vs-list-header>
        <draggable :list="list" class="cursor-move">
          <transition-group>
            <vs-list-item
              class="list-item"
              v-for="listItem in list"
              :key="listItem.email"
              :title="listItem.name"
              :subtitle="listItem.email"
            >
              <vs-avatar slot="avatar" :text="listItem.name" />
            </vs-list-item>
          </transition-group>
        </draggable>
      </vs-list>
    </div>

    <prism language="js" class="rounded-lg">{{ list }}</prism>
  </vx-card>
</template>

<script>
import draggable from "vuedraggable";
import Prism from "vue-prism-component";

export default {
  data() {
    return {};
  },
  components: {
    draggable,
    Prism,
  },
};
</script>

<style></style>
