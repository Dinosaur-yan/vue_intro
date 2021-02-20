<template>
  <div>
    <span :key="title">{{ title }}</span>
    <br />
    <input v-model="userInfo.username" @blur="onBlur" />
    <br />
    <input v-model="userInfo.password" />
    <br />
    <button @click="onSubmit">点击</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";

export default {
  name: "home",
  setup() {
    const title = ref("首页");

    const userInfo = reactive({
      username: "admin",
      password: "admin",
    });

    const person = {
      name: "administrator",
      age: 120,
    };

    console.log(person);
    console.log(reactive(person));
    console.log(ref(1));
    console.log(toRefs(reactive(person)));

    const onBlur = (e) => {
      console.log(e.target.value);
    };

    const onSubmit = () => {
      console.log(JSON.stringify(userInfo));
    };

    return {
      title,
      userInfo,
      onSubmit,
      onBlur,
    };
  },
};
</script>