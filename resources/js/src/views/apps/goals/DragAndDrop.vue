<!-- =========================================================================================
    File Name: DragAndDropMultipleLists.vue
    Description: Drag and Drop to multiple lists
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <vx-card title="Multiple Lists" code-toggler>
    <p>
     Smart goals set you up for
      <code>success</code> by making goals specific, achievable, realistic and timely.
    </p>

    <!-- List 1 -->
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/3">
        <vs-list>
          <vs-list-header title="People Group 1" color="primary"></vs-list-header>
          <draggable :list="list1" group="people" class="p-2 cursor-move">
            <vs-list-item v-for="(listItem, index) in list1" :key="index">
              <h6>{{listItem.name}}</h6>
            </vs-list-item>
          </draggable>
        </vs-list>
      </div>
      <div class="vx-col w-full md:w-1/3">
        <vs-list>
          <vs-list-header title="People Group 2" color="primary"></vs-list-header>
          <draggable :list="list2" group="people" class="p-2 cursor-move">
            <vs-list-item v-for="(listItem, index) in list2" :key="index">
              <p>{{listItem.name}}</p>
            </vs-list-item>
          </draggable>
        </vs-list>
      </div>
      <div class="vx-col w-full md:w-1/3">
        <vs-list>
          <vs-list-header title="Done" color="primary"></vs-list-header>
          <draggable :list="list3" group="people" class="p-2 cursor-move">
            <vs-list-item v-for="(listItem, index) in list3" :key="index">
              <p>{{listItem.name}}</p>
            </vs-list-item>
          </draggable>
        </vs-list>
      </div>
    </div>

    </div>


  </vx-card>
</template>

<script>
import draggable from "vuedraggable";
import Prism from "vue-prism-component";

export default {
  data() {
    return {
      list1: [
        {
          name: "Skill up 'ENGLISH WRITING' from ELEMENTARY to PRE-INTERMEDIATE",
          email: "girliness@spotlike.co.uk",
        },
        {
          name: "Skill up 'ENGLISH lISTENING' from ELEMENTARY to PRE-INTERMEDIATE",
          email: "executrixship@equisized.edu",
        },
        {
          name: "Skill up 'ENGLISH sPEAKING' from ELEMENTARY to PRE-INTERMEDIATE",
          email: "bidding@demibob.or",
        }
      ],
      list2: [
        {
          name: "Practice Karate",
          email: "unmeasurableness@interlamellar.co.uk",
        }
      ],
      list3: [
        {
          name: "Go Shopping",
          email: "unmeasurableness@interlamellar.co.uk",
        },
        {
          name: "Meet Friends",
          email: "soaking@khubber.com",
        },
        {
          name: "Join Gym",
          email: "lecideine@turndown.org",
        },
      ],
    };
  },
  components: {
    draggable,
    Prism,
  },
};
</script>
