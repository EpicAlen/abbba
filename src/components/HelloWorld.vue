<template>
  <div class="about">
    <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="30%"
    :before-close="handleClose"
  >
    <span>{{names}}</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
  </div>
</template>
<script>
export default {
  props:{
    names:String
  },
  data(){
    return{
      dialogVisible:true,
      value:'fuzi'
    }
  },
  mounted(){
    this.$emit('value',this.value)
  },
  methods:{
   
  }

}
</script>
