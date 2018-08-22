<template>
    <div class="tree-layout tree">
        <el-tree :data="treeData" :props="defaultProps"  @node-click="getNodes"></el-tree>
    </div>
</template>
<script> 
export default {
  name: 'brainsTree',
	data() {
		return{
			defaultProps: {
				children: 'children',
				label: 'name'
			},
		}
  },
  props:{
		treeData:{
			type:Array,
			//有的还没弄好，最后添加required:true
		}
  },
  methods: {
    getNodes(data,node){  
      console.log(node)
       this.$emit('change',data,node);
     },
  },
}
</script>
<style rel="stylesheet/scss" lang="scss">
.tree .el-tree-node__loading-icon {
  display: none;
}
.el-icon-refresh{
    font-weight: 500;
}

.tree .el-icon-caret-right::before {
  content: '';
  background: url('../../assets/tree-show.png') no-repeat;
  width: 15px;
  height: 15px;
  display: inline-block;
}
.file-tree-items .el-icon-caret-right::before {
     font-family: "iconfont" !important;
 color: #ffc822;
 font-size: 18px;
 margin-right: 4px;

  content: '\e616';
  width: 15px;
  height: 15px;
  display: inline-block;
}
.tree .el-tree-node__expand-icon.expanded{
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);

}
.file-tree-items .el-tree-node__expand-icon.expanded{
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}
.tree .el-tree-node__expand-icon.expanded::before{
   content: '';
   background: url('../../assets/tree-hide.png') no-repeat ;
   width: 15px;
   height: 15px;
   display: inline-block;

}
.file-tree-items .el-tree-node__expand-icon.expanded::before{
   font-family: "iconfont" !important;
   content: '\e61a';
   width: 15px;
   height: 15px;
   display: inline-block;
    color: #ffc822;
    font-size: 16px;
   margin-right: 4px

}


.tree .el-tree-node__expand-icon.is-leaf::before{
  content: '';
  background: url('../../assets/tree-file2.png') no-repeat;
  width: 15px;
  height: 15px;
  display: inline-block;
}

.file-tree-items .el-tree-node__expand-icon.is-leaf::before{
  content: '';
  background: url('../../assets/tree-file.png') no-repeat;
  width: 13px;
  height: 15px;
  display: inline-block;
}


.el-tree-node__content>.el-tree-node__expand-icon{
  padding: 6px 6px 6px 27px;
}

 .file-tree-items .el-tree-node__content>.el-tree-node__expand-icon{
  padding: 6px 6px 6px 27px;
}

 .tree .el-tree-node__content{
   height: 32px;
 }

 .file-tree-items .el-tree-node__content{
   height: 40px;
 }
.tree .el-tree-node__label{
  color: #353535;
}

 .file-tree-items .el-tree-node__label{
  color: #353535;
}
</style>

